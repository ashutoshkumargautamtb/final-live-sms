import React from 'react';
import { Suspense, lazy, memo } from 'react';
import ThankYou from './components/ThankYou';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import RefundPolicy from './components/RefundPolicy';
import SendOtp from './components/SendOtp';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FixedBottomBar from './components/FixedBottomBar';

// Lazy load components for better performance
const Features = lazy(() => import('./components/Features').then(module => ({ default: memo(module.default) })));
const About = lazy(() => import('./components/About').then(module => ({ default: memo(module.default) })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: memo(module.default) })));
const Stats = lazy(() => import('./components/Stats').then(module => ({ default: memo(module.default) })));
const ImageTextSection = lazy(() => import('./components/ImageTextSection').then(module => ({ default: memo(module.default) })));
const NewSection = lazy(() => import('./components/NewSection').then(module => ({ default: memo(module.default) })));
const NewComponent = lazy(() => import('./components/NewComponent').then(module => ({ default: memo(module.default) })));
const TrustedSection = lazy(() => import('./components/TrustedSection').then(module => ({ default: memo(module.default) })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: memo(module.default) })));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center py-20 bg-black">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

function App() {
  // Simple routing based on pathname
  const currentPath = window.location.pathname;
  
  if (currentPath === '/thank-you') {
    return <ThankYou />;
  }
  
  if (currentPath === '/privacy-policy') {
    return <PrivacyPolicy />;
  }
  
  if (currentPath === '/contact-us') {
    return <ContactUs />;
  }
  
  if (currentPath === '/refund-policy') {
    return <RefundPolicy />;
  }
  
  if (currentPath === '/send-otp') {
    return <SendOtp />;
  }

  return (
    <div className="min-h-screen bg-black space-y-0 overflow-x-hidden">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Features />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ImageTextSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <NewSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <NewComponent />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TrustedSection />
      </Suspense>
      <Footer />
      <FixedBottomBar />
    </div>
  );
}

export default App;