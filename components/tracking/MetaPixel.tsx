'use client';

import Script from 'next/script';

interface MetaPixelProps {
    pixelId: string;
}

/**
 * Meta Pixel (Facebook Pixel) Component
 * 
 * Usage:
 * 1. Add your Pixel ID in the layout.tsx or page where you want to track
 * 2. Use fbq('track', 'EventName') for custom events
 * 
 * Common Events:
 * - fbq('track', 'PageView') - Automatically tracked
 * - fbq('track', 'Lead') - When someone signs up
 * - fbq('track', 'CompleteRegistration') - Registration complete
 * - fbq('track', 'Contact') - Contact form submission
 * - fbq('track', 'Schedule') - Scheduling a demo/call
 * 
 * @see https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking
 */
export function MetaPixel({ pixelId }: MetaPixelProps) {
    if (!pixelId) {
        console.warn('Meta Pixel: No pixel ID provided');
        return null;
    }

    return (
        <>
            <Script
                id="meta-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '${pixelId}');
                        fbq('track', 'PageView');
                    `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                    alt=""
                />
            </noscript>
        </>
    );
}

// Helper hook for firing Meta Pixel events
export function useMetaPixel() {
    const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', eventName, params);
        }
    };

    const trackCustomEvent = (eventName: string, params?: Record<string, unknown>) => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('trackCustom', eventName, params);
        }
    };

    return {
        trackEvent,
        trackCustomEvent,
        // Pre-defined common events
        trackLead: (params?: Record<string, unknown>) => trackEvent('Lead', params),
        trackContact: (params?: Record<string, unknown>) => trackEvent('Contact', params),
        trackSchedule: (params?: Record<string, unknown>) => trackEvent('Schedule', params),
        trackCompleteRegistration: (params?: Record<string, unknown>) => trackEvent('CompleteRegistration', params),
        trackViewContent: (params?: Record<string, unknown>) => trackEvent('ViewContent', params),
    };
}

export default MetaPixel;
