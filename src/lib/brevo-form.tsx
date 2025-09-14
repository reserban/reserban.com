"use client";

import { useEffect, useState } from "react";

// Extend Window interface for Brevo
declare global {
  interface Window {
    sibforms?: {
      init: () => void;
    };
  }
}

export const BrevoForm = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Ensure Brevo form is properly initialized
    const initBrevoForm = () => {
      if (typeof window !== 'undefined' && window.sibforms) {
        window.sibforms.init();
      }
    };

    // Try to initialize after a short delay to ensure scripts are loaded
    const timer = setTimeout(initBrevoForm, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    // Return null during SSR to avoid flash
    return null;
  }

  return (
    <div className="w-full">
      {/* Error Message */}
      <div 
        id="error-message" 
        className="sib-form-message-panel hidden text-sm text-center text-destructive bg-destructive/10 rounded-md p-3 mb-4 max-w-lg mx-auto"
      >
        <div className="sib-form-message-panel__text sib-form-message-panel__text--center flex items-center justify-center gap-2">
          <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon w-4 h-4 flex-shrink-0">
            <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" fill="currentColor" />
          </svg>
          <span className="sib-form-message-panel__inner-text">
            Your subscription could not be saved. Please try again.
          </span>
        </div>
      </div>

      {/* Success Message */}
      <div 
        id="success-message" 
        className="sib-form-message-panel hidden text-sm text-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-md p-3 mb-4 max-w-lg mx-auto"
      >
        <div className="sib-form-message-panel__text sib-form-message-panel__text--center flex items-center justify-center gap-2">
          <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon w-4 h-4 flex-shrink-0">
            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" fill="currentColor" />
          </svg>
          <span className="sib-form-message-panel__inner-text">
            Your subscription has been successful.
          </span>
        </div>
      </div>

      {/* Form */}
      <div id="sib-form-container" className="sib-form-container md:-ml-7">
        <div id="sib-container" className="sib-container--large sib-container--vertical">
          <form 
            id="sib-form" 
            method="POST" 
            action="https://47dd79c0.sibforms.com/serve/MUIFAEK6UwwTanu2EBA4-VUrOVHMBz6SjmNwfkrSqoslRXgIeGWX6fBi_eJQsvK0R48cOixORfP_1f5OqtYY1DTAzcoHIx0g6tREzfArXxFxnL_DtdBDGfuJpkq-qnQ_AoHSALd6m8icGnuIrM1lsqsAnYr5g3B81gbk9leQs-SwrEyh_kcTe-LrsdSYvyvSrQfU8rzixyAh57lw" 
            data-type="subscription"
            className="flex ml-1.5 flex-col items-center w-full sm:flex-row sm:justify-center gap-3 sm:gap-0"
          >
            <div className="sib-input sib-form-block w-full sm:max-w-xs">
              <div className="form__entry entry_block">
                <div className="form__label-row">
                  <div className="entry__field">
                    <input 
                      className="input flex h-10 w-full rounded-xs border-0 bg-card text-foreground px-3 py-2 text-md ring-1 ring-white/50 ring-offset-background placeholder:text-muted-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      type="email" 
                      id="EMAIL" 
                      name="EMAIL" 
                      autoComplete="off" 
                      placeholder="Enter your email" 
                      data-required="true" 
                      required 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="sm:-ml-3 inline-flex items-center justify-center gap-2 rounded-xs text-sm font-medium ring-offset-background transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none !bg-accent !text-black hover:!bg-transparent hover:!text-accent hover:!border hover:!border-accent h-10  py-2 w-65 md:w-28 mt-1 md:mt-0 -ml-4 md:-ml-4.5" 
              form="sib-form" 
              type="submit"
            >
              Subscribe
            </button>
            
            <input type="text" name="email_address_check" defaultValue="" className="hidden" />
            <input type="hidden" name="locale" value="en" />
          </form>
        </div>
      </div>
    </div>
  );
};
