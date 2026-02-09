'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { MetaPixel, useMetaPixel } from './MetaPixel';
import { GoogleConversionTag, useGoogleConversion } from './GoogleConversionTag';

/**
 * TRACKING CONFIGURATION
 * 
 * Replace these placeholder IDs with your actual tracking IDs:
 * 
 * META_PIXEL_ID: 
 *   - Find in Meta Events Manager: https://business.facebook.com/events_manager
 *   - Format: 15-16 digit number (e.g., "1234567890123456")
 * 
 * GOOGLE_ADS_ID:
 *   - Find in Google Ads: Tools & Settings > Measurement > Conversions
 *   - Format: "AW-XXXXXXXXXX" (e.g., "AW-1234567890")
 * 
 * GOOGLE_CONVERSION_LABELS:
 *   - Created in Google Ads when you set up each conversion action
 *   - Format: "AW-XXXXXXXXXX/AbCdEfGhIjKlMnOp"
 */
export const TRACKING_CONFIG = {
    // Meta (Facebook) Pixel
    META_PIXEL_ID: '1561827895559678',

    // Google Ads
    GOOGLE_ADS_ID: '', // e.g., 'AW-1234567890'

    // Google Ads Conversion Labels (add as needed)
    GOOGLE_CONVERSION_LABELS: {
        LEAD: '', // e.g., 'AW-1234567890/AbCdEfGhIjKlMnOp'
        SIGN_UP: '',
        DEMO_REQUEST: '',
        CONTACT_FORM: '',
    },

    // Feature flags
    ENABLED: {
        META_PIXEL: true, // ✅ Meta Pixel is now active
        GOOGLE_ADS: false, // Set to true when you add your Google Ads ID
    },
} as const;

interface TrackingContextType {
    metaPixel: ReturnType<typeof useMetaPixel>;
    googleAds: ReturnType<typeof useGoogleConversion>;
    config: typeof TRACKING_CONFIG;
}

const TrackingContext = createContext<TrackingContextType | null>(null);

interface TrackingProviderProps {
    children: ReactNode;
}

/**
 * Tracking Provider Component
 * 
 * Wraps your app with all tracking pixels and provides a unified context
 * for firing events from anywhere in your application.
 * 
 * Usage in layout.tsx:
 * ```tsx
 * import { TrackingProvider } from '@/components/tracking';
 * 
 * export default function RootLayout({ children }) {
 *     return (
 *         <html>
 *             <body>
 *                 <TrackingProvider>
 *                     {children}
 *                 </TrackingProvider>
 *             </body>
 *         </html>
 *     );
 * }
 * ```
 */
export function TrackingProvider({ children }: TrackingProviderProps) {
    const metaPixel = useMetaPixel();
    const googleAds = useGoogleConversion();

    return (
        <TrackingContext.Provider value={{ metaPixel, googleAds, config: TRACKING_CONFIG }}>
            {/* Meta Pixel */}
            {TRACKING_CONFIG.ENABLED.META_PIXEL && TRACKING_CONFIG.META_PIXEL_ID && (
                <MetaPixel pixelId={TRACKING_CONFIG.META_PIXEL_ID} />
            )}

            {/* Google Ads Conversion Tag */}
            {TRACKING_CONFIG.ENABLED.GOOGLE_ADS && TRACKING_CONFIG.GOOGLE_ADS_ID && (
                <GoogleConversionTag googleAdsId={TRACKING_CONFIG.GOOGLE_ADS_ID} />
            )}

            {children}
        </TrackingContext.Provider>
    );
}

/**
 * Hook to access tracking functions from any component
 * 
 * Usage:
 * ```tsx
 * function ContactForm() {
 *     const { metaPixel, googleAds, config } = useTracking();
 *     
 *     const handleSubmit = () => {
 *         // Track on Meta
 *         metaPixel.trackLead({ content_name: 'Contact Form' });
 *         
 *         // Track on Google Ads
 *         if (config.GOOGLE_CONVERSION_LABELS.CONTACT_FORM) {
 *             googleAds.trackConversion({ 
 *                 sendTo: config.GOOGLE_CONVERSION_LABELS.CONTACT_FORM 
 *             });
 *         }
 *     };
 * }
 * ```
 */
export function useTracking() {
    const context = useContext(TrackingContext);

    if (!context) {
        // Return no-op functions if used outside provider (for SSR safety)
        return {
            metaPixel: {
                trackEvent: () => { },
                trackCustomEvent: () => { },
                trackLead: () => { },
                trackContact: () => { },
                trackSchedule: () => { },
                trackCompleteRegistration: () => { },
                trackViewContent: () => { },
            },
            googleAds: {
                trackConversion: () => { },
                trackEvent: () => { },
                trackLead: () => { },
                trackSignUp: () => { },
                trackPurchase: () => { },
            },
            config: TRACKING_CONFIG,
        };
    }

    return context;
}

export default TrackingProvider;
