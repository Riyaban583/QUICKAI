import React from "react";
import {
  useUser,
  SignInButton,
  PricingTable,
} from "@clerk/clerk-react";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const Plan = () => {
  const { isSignedIn } = useUser();

  const features = [
    "Unlimited AI-generated articles",
    "High-resolution image generation",
    "Advanced content optimization",
    "Priority support 24/7",
    "Export in multiple formats",
    "Collaboration tools",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-gray-700">Flexible Pricing</span>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Choose Your Plan
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Start for free and scale as you grow. Find the perfect plan for your content creation needs.
        </p>
      </div>

      {/* PRICING CONTENT */}
      {isSignedIn ? (
        <div className="relative z-10 w-full max-w-6xl">
          {/* Premium Badge Above Table */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
              <Crown className="w-5 h-5" />
              <span className="font-semibold">Premium Plans Available</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <PricingTable />
          </div>

          {/* Features Grid Below */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Unlock Premium Features
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Sign in to view our flexible pricing plans and start creating amazing content with AI
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <SignInButton mode="modal">
              <button className="group w-full py-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                Sign in to Continue
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </SignInButton>

            {/* Trust Badge */}
            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure payment • Cancel anytime</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      {isSignedIn && (
        <div className="relative z-10 mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom plan for your team?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all font-medium text-gray-700">
            Contact Sales
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Plan;