// Define specific types for Facebook Pixel
type FacebookPixelEvent = 'track' | 'init';
type FacebookPixelParams = {
  content_name?: string;
  content_category?: string;
  user_data?: {
    name: string;
    phone: string;
  };
};

interface FacebookPixelFunction {
  (event: FacebookPixelEvent, eventName: string): void;
  (event: FacebookPixelEvent, eventName: string, params: FacebookPixelParams): void;
}

interface FacebookPixel extends FacebookPixelFunction {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
  push: (args: unknown[]) => number;
}

declare global {
  interface Window {
    fbq?: FacebookPixel;
    _fbq?: FacebookPixel;
  }
}

export const FB_PIXEL_ID = '902536777459948'

export const pageview = (): void => {
  window.fbq?.('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const lead = (name: string, phone: string): void => {
  window.fbq?.('track', 'Lead', {
    content_name: 'Quiz de Análise de Times Comerciais',
    content_category: 'Quiz',
    user_data: {
      name,
      phone
    }
  })
}

// Inicializa o Facebook Pixel
export const initFacebookPixel = (): void => {
  if (typeof window === 'undefined') {
    return
  }

  if (typeof window.fbq === 'function') {
    return
  }

  const pixelFunction = function(...args: [FacebookPixelEvent, string, FacebookPixelParams?]): void {
    const fbq = window.fbq as FacebookPixel;
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(args);
    }
  } as FacebookPixel;

  pixelFunction.queue = [];
  pixelFunction.loaded = true;
  pixelFunction.version = '2.0';
  pixelFunction.push = function(args: unknown[]): number {
    return this.queue.push(args);
  };

  window.fbq = pixelFunction;
  window._fbq = pixelFunction;

  window.fbq('init', FB_PIXEL_ID);
  pageview();
}
