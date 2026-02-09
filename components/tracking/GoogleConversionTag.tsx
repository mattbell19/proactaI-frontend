'use client';

import Script from 'next/script';

interface GoogleConversionTagProps {
    googleAdsId: string; // Format: AW-XXXXXXXXXX
}

/**
 * Google Ads Conversion Tag (gtag.js) Component
 * 
 * Usage:
 * 1. Add your Google Ads ID (AW-XXXXXXXXXX) in the layout.tsx
 * 2. Use gtag('event', 'conversion', {...}) for conversion events
 * 
 * To track conversions, you'll need your conversion label from Google Ads:
 * gtag('event', 'conversion', {
 *     'send_to': 'AW-XXXXXXXXXX/CONVERSION_LABEL'
 * });
 * 
 * @see https://support.google.com/google-ads/answer/6331314
 */
export function GoogleConversionTag({ googleAdsId }: GoogleConversionTagProps) {
    if (!googleAdsId) {
        console.warn('Google Conversion Tag: No Google Ads ID provided');
        return null;
    }

    return (
        <>
            {/* Global site tag (gtag.js) - Google Ads */}
            <Script
                id="google-ads-gtag"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            />
            <Script
                id="google-ads-config"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${googleAdsId}');
                    `,
                }}
            />
        </>
    );
}

interface ConversionParams {
    sendTo: string; // Format: AW-XXXXXXXXXX/CONVERSION_LABEL
    value?: number;
    currency?: string;
    transactionId?: string;
}

// Helper hook for firing Google Ads conversion events
export function useGoogleConversion() {
    const trackConversion = ({ sendTo, value, currency, transactionId }: ConversionParams) => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
                'send_to': sendTo,
                ...(value !== undefined && { 'value': value }),
                ...(currency && { 'currency': currency }),
                ...(transactionId && { 'transaction_id': transactionId }),
            });
        }
    };

    const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', eventName, params);
        }
    };

    return {
        trackConversion,
        trackEvent,
        // Pre-defined common events
        trackLead: (sendTo: string, params?: { value?: number; currency?: string }) =>
            trackConversion({ sendTo, ...params }),
        trackSignUp: (sendTo: string, params?: { value?: number; currency?: string }) =>
            trackConversion({ sendTo, ...params }),
        trackPurchase: (sendTo: string, params: { value: number; currency: string; transactionId?: string }) =>
            trackConversion({ sendTo, ...params }),
    };
}

export default GoogleConversionTag;
