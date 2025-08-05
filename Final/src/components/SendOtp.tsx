import React, { useState } from 'react'
import { ArrowLeft, Phone, Send, CheckCircle, Loader2 } from 'lucide-react'
import axios from 'axios'

const API_KEY     = 'A7d7dfbdeba5e88a9d025e2be383619a7'
const SID         = 'HXIN1732700271IN'
const BASE_URL    = `https://api.in.kaleyra.io/v1/HXIN1732700271IN/sms`
const SENDER      = 'CLSPLS'
const TEMPLATE_ID = '1707175403711536852'

async function sendOtp(toNumber: string, otpCode: string) {
  // Build your message exactly as Kaleyra expects
  const bodyMessage = `${otpCode} is your one-time password (OTP) for phone verification to login. ~CLSPLS`

  // URLSearchParams automatically URL-encodes keys & values
  const params = new URLSearchParams({
    to:           `+91${toNumber}`,  // <-- note the +91 prefix
    type:         'OTP',
    sender:       SENDER,
    body:         bodyMessage,
    template_id:  TEMPLATE_ID,
  })

  console.log('→ Kaleyra POST to:', BASE_URL)
  console.log('→ Request headers:', {
    'api-key':     API_KEY,
    'Content-Type':'application/x-www-form-urlencoded',
  })
  console.log('→ Request body:', params.toString())

  const resp = await axios.post(BASE_URL, params.toString(), {
    headers: {
      'api-key':       API_KEY,
      'Content-Type':  'application/x-www-form-urlencoded',
    }
  })

  console.log('← Kaleyra response status:', resp.status)
  console.log('← Kaleyra response data:', resp.data)

  return resp.data
}

const SendOtp: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [isLoading, setIsLoading]     = useState(false)
  const [message, setMessage]         = useState('')
  const [messageType, setMessageType] = useState<'success'|'error'|''>('')
  const [lastOtpCode, setLastOtpCode] = useState('')

  const goBack = () => window.location.href = '/'

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // only digits, max 10
    const val = e.target.value.replace(/\D/g, '').slice(0, 10)
    setMobileNumber(val)
  }

  const sendOTP = async () => {
    // basic front-end validation
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      setMessage('Enter a valid 10-digit mobile number')
      setMessageType('error')
      return
    }

    setIsLoading(true)
    setMessage('')
    setMessageType('')

    // generate OTP
    const otpCode = Math.floor(100_000 + Math.random()*900_000).toString()
    setLastOtpCode(otpCode)

    try {
      const data = await sendOtp(mobileNumber, otpCode)

      // Kaleyra might return .success or some status code
      if (data.success || data.data) {
        setMessage(`OTP sent to +91${mobileNumber}`)
        setMessageType('success')
      } else {
        throw new Error(JSON.stringify(data))
      }
    } catch (err: any) {
      console.error('❌ sendOtp error:', err)
      const errMsg = err.response?.data?.error || err.message || 'Unknown error'
      setMessage(`Failed to send OTP: ${errMsg}`)
      setMessageType('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button onClick={goBack} className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-4">
            <ArrowLeft size={20}/>
            <span>Back to Home</span>
          </button>
          <h1 className="text-3xl font-bold">Send OTP</h1>
          <p className="text-gray-300 mt-1">Enter your mobile number to receive an OTP via Kaleyra</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-md mx-auto px-6 py-12">
        <div className="mb-6 text-center">
          <Phone size={48} className="mx-auto text-blue-500" />
          <h2 className="text-2xl font-bold mt-4">Mobile Verification</h2>
          <p className="text-gray-400 mt-2">We’ll send a 6-digit code right to your phone.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Mobile Number</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">+91</span>
              <input
                type="tel"
                value={mobileNumber}
                onChange={handleMobileChange}
                className="w-full py-3 pl-12 pr-4 bg-slate-700 rounded-xl text-white focus:outline-none"
                placeholder="Enter 10 digits"
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            onClick={sendOTP}
            disabled={isLoading || mobileNumber.length !== 10}
            className={`w-full py-3 rounded-xl font-semibold transition ${
              isLoading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading
              ? <><Loader2 className="inline-block animate-spin mr-2"/> Sending…</>
              : <><Send className="inline-block mr-2"/> Send OTP</>
            }
          </button>

          {message && (
            <div className={`p-4 rounded-lg border ${
              messageType === 'success'
                ? 'bg-green-900/30 border-green-500 text-green-200'
                : 'bg-red-900/30 border-red-500 text-red-200'
            }`}>
              <div className="flex items-center space-x-2">
                {messageType === 'success'
                  ? <CheckCircle className="w-5 h-5 text-green-400"/>
                  : <span className="text-red-400">⚠️</span>
                }
                <p>{message}</p>
              </div>
              {messageType === 'success' && lastOtpCode && (
                <p className="mt-2 text-sm text-gray-400">
                  (For testing: OTP was <span className="font-mono">{lastOtpCode}</span>)
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SendOtp
