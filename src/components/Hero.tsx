import React, { useState, useEffect } from 'react';
import { Star, Check, Loader2 } from 'lucide-react';
import { insertCoachesTeachersClub, capturePhoneNumber, updateCapturedRecord } from '../lib/supabase';
import { supabase } from '../lib/supabase';

const Hero: React.FC = () => {
  // Kaleyra credentials
  const KALEYRA_API_KEY  = "A7d7dfbdeba5e88a9d025e2be383619a7";
  const KALEYRA_SID      = "HXIN1732700271IN";
  const KALEYRA_SENDER   = "CLSPLS";
  const KALEYRA_TEMPLATE = "1707175403711536852";
  const KALEYRA_URL      = `https://api.in.kaleyra.io/v1/${KALEYRA_SID}/sms`;

  // Form & control state
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', stage: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [capturedRecordId, setCapturedRecordId] = useState<string|null>(null);

  // OTP state
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [serverOtp, setServerOtp] = useState('');         // actual code
  const [expiresAt, setExpiresAt] = useState<Date|null>(null);
  const [otpInput, setOtpInput] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');
  const [resendTimer, setResendTimer] = useState(0);

  // UTM helper
  const getUTMParams = () => {
    const url = new URL(window.location.href);
    return {
      utm_source: url.searchParams.get('utm_source') || '',
      utm_medium: url.searchParams.get('utm_medium') || '',
    };
  };

  // capture phone in Supabase as before
  useEffect(() => {
    if (/^[6-9]\d{9}$/.test(formData.mobile) && !capturedRecordId) {
      capturePhoneNumber(formData.mobile)
        .then(rec => rec && setCapturedRecordId(rec.id))
        .catch(console.error);
    }
  }, [formData.mobile, capturedRecordId]);

  // countdown
  useEffect(() => {
    if (resendTimer <= 0) return;
    const id = setTimeout(() => setResendTimer(resendTimer-1), 1000);
    return () => clearTimeout(id);
  }, [resendTimer]);

  // send OTP via Kaleyra
  const sendOtp = async (): Promise<boolean> => {
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setOtpMessage('Enter a valid 10-digit mobile number');
      return false;
    }

    setIsSendingOtp(true);
    setOtpMessage('');

    // generate & store expiry
    const code = String(Math.floor(100000 + Math.random()*900000));
    const expiry = new Date(Date.now() + 5*60*1000); // 5 min
    setServerOtp(code);
    setExpiresAt(expiry);

    // prepare form-data
    const form = new FormData();
    form.append('to', `+91${formData.mobile}`);
    form.append('type','OTP');
    form.append('sender', KALEYRA_SENDER);
    form.append('body', `${code} is your one-time password (OTP) for phone verification to login. ~${KALEYRA_SENDER}`);
    form.append('template_id', KALEYRA_TEMPLATE);

    try {
      const resp = await fetch(KALEYRA_URL, {
        method:'POST',
        headers:{ 'api-key':KALEYRA_API_KEY },
        body: form
      });
      const json = await resp.json();
      if (!resp.ok) throw json;

      setShowOtpVerification(true);
      setResendTimer(60);
      setOtpMessage(`OTP sent to +91${formData.mobile}`);
      console.log('OTP (for debug):', code);
      return true;

    } catch (err:any) {
      console.error(err);
      setOtpMessage('Failed to send OTP. Try again.');
      return false;

    } finally {
      setIsSendingOtp(false);
    }
  };

  // verify client-side
  const verifyOtp = async (): Promise<boolean> => {
    if (otpInput.length !== 6) {
      setOtpMessage('Enter the 6-digit code');
      return false;
    }
    setIsVerifyingOtp(true);
    setOtpMessage('');

    // simulate network delay
    await new Promise(r => setTimeout(r,300));

    if (!serverOtp || !expiresAt) {
      setOtpMessage('No OTP sent yet');
      setIsVerifyingOtp(false);
      return false;
    }
    if (new Date() > expiresAt) {
      setOtpMessage('OTP has expired');
      setIsVerifyingOtp(false);
      return false;
    }
    if (otpInput !== serverOtp) {
      setOtpMessage('Invalid OTP');
      setIsVerifyingOtp(false);
      return false;
    }

    setOtpMessage('OTP verified!');
    setIsVerifyingOtp(false);
    return true;
  };

  // full form submit
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage('');

    // step 1: basic form validation
    if (!formData.name.trim())       return setSubmitMessage('Enter your name');
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) return setSubmitMessage('Enter a valid mobile');
    if (!formData.email.trim())      return setSubmitMessage('Enter your email');
    if (!/\S+@\S+\.\S+/.test(formData.email)) return setSubmitMessage('Enter a valid email');
    if (!formData.stage.trim())      return setSubmitMessage('Select your stage');

    // step 2: send OTP if not yet
    if (!showOtpVerification) {
      const ok = await sendOtp();
      return ok ? null : null;
    }

    // step 3: verify OTP
    const ok = await verifyOtp();
    if (!ok) return;

    // step 4: all good → insert/update then redirect
    setIsSubmitting(true);
    try {
      const utm = getUTMParams();
      const payload = {
        customer_name: formData.name.trim(),
        mobile_number: formData.mobile,
        email: formData.email.trim(),
        user_type: formData.stage,
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium
      };
      let res;
      if (capturedRecordId) {
        res = await updateCapturedRecord(capturedRecordId,payload);
      } else {
        res = await insertCoachesTeachersClub(payload);
      }
      console.log('Saved',res);
      window.location.href = '/thank-you';
    } catch(err) {
      console.error(err);
      setSubmitMessage('Registration failed. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    const {name,value} = e.target;
    setFormData(f=>({...f,[name]:value}));
    if (name==='mobile' && showOtpVerification) {
      setShowOtpVerification(false);
      setOtpInput('');
      setOtpMessage('');
      setResendTimer(0);
    }
  };

  return (
    <div>
      <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-[#1540e7]/30 via-[#1540e7]/20 to-transparent w-full"/>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#1540e7]/20 rounded-full blur-3xl"/>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1540e7]/15 rounded-full blur-3xl"/>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/50 to-transparent z-20 w-full"/>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center mb-24">
            <h1 className="text-5xl font-bold text-white leading-tight mb-5">
              Launchpad for <span className="indian-tricolor">India's</span> Ambitious Coaches & Educators
            </h1>
            <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-2">
              <span className="text-gray-300 text-sm">#1 Club in India for Creators and Coaches</span>
            </div>
          </div>

          <div className="max-w-md mx-auto px-4 z-50">
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 space-y-4">
              {/* Name */}
              <input
                name="name" placeholder="Full Name *"
                value={formData.name} onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                required
              />

              {/* Mobile */}
              <input
                name="mobile" placeholder="Mobile Number *"
                value={formData.mobile} onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                maxLength={10} required disabled={showOtpVerification}
              />

              {/* OTP */}
              {showOtpVerification && (
                <div className="space-y-4">
                  <input
                    placeholder="Enter 6-digit OTP *"
                    value={otpInput} onChange={e=>setOtpInput(e.target.value.replace(/\D/,'').slice(0,6))}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-center text-lg tracking-widest"
                    maxLength={6}
                  />
                  <div className="text-center">
                    {resendTimer>0
                      ? <p className="text-gray-400">Resend in {resendTimer}s</p>
                      : <button
                          type="button"
                          onClick={sendOtp}
                          disabled={isSendingOtp}
                          className="text-blue-400 underline"
                        >
                          {isSendingOtp ? 'Sending…' : 'Resend OTP'}
                        </button>
                    }
                  </div>
                </div>
              )}

              {/* Email */}
              <input
                type="email" name="email" placeholder="Email Address *"
                value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                required disabled={showOtpVerification}
              />

              {/* Stage */}
              <select
                name="stage" value={formData.stage} onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                required disabled={showOtpVerification}
              >
                <option value="">Which Stage Are You In? *</option>
                <option value="coach">Coach</option>
                <option value="educator">Educator</option>
                <option value="offline_coaching">Offline Coaching</option>
                <option value="student">Student</option>
                <option value="none_of_the_above">None of the above</option>
              </select>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || isSendingOtp || isVerifyingOtp}
                className="w-full py-3 rounded-lg font-semibold text-lg text-white flex items-center justify-center space-x-2"
                style={{backgroundColor:'#1540e7'}}
              >
                {(isSubmitting||isSendingOtp||isVerifyingOtp) && <Loader2 className="animate-spin"/>}
                <span>
                  {isSubmitting ? 'Registering…'
                    : isSendingOtp ? 'Sending OTP…'
                    : isVerifyingOtp ? 'Verifying…'
                    : showOtpVerification ? 'Verify OTP'
                    : 'Send OTP'
                  }
                </span>
              </button>

              {/* Messages */}
              {(submitMessage||otpMessage) && (
                <p className={`text-center text-sm ${otpMessage?'text-red-400':'text-green-400'}`}>
                  {otpMessage||submitMessage}
                </p>
              )}
            </form>
          </div>

          <div className="flex justify-center mb-8 px-4">
            <img
              src="https://cdn.testbook.com/1753947616206-Creators%20with%20name.png/1753947617.png"
              alt="" className="w-full max-w-2xl rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
