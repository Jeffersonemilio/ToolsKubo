type FacebookPixelFunction = (action: string, event: string, params?: object) => void;

interface FacebookPixel extends FacebookPixelFunction {
  callMethod?: (...args: any[]) => void;
  queue?: any[];
  loaded?: boolean;
  version?: string;
  push?: Function;
}

declare global {
  interface Window {
    fbq?: FacebookPixel;
    _fbq?: FacebookPixel;
  }
}

export const FB_PIXEL_ID = '902536777459948'

export const pageview = () => {
  window.fbq?.('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const lead = (name: string, phone: string) => {
  window.fbq?.('track', 'Lead', {
    content_name: 'Quiz de Análise de Times Comerciais',
    content_category: 'Quiz',
    user_data: {
      name: name,
      phone: phone
    }
  })
}

// Inicializa o Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window === 'undefined') {
    return
  }

  if (typeof window.fbq === 'function') return
  
  const pixelFunction = function(...args: [string, string, object?]) {
    const fbq = window.fbq as FacebookPixel;
    return fbq.callMethod ? fbq.callMethod(...args) : fbq.queue?.push(args);
  } as FacebookPixel;
  
  window.fbq = pixelFunction;
  
  if (!window.fbq.queue) {
    window.fbq.queue = []
  }
  
  window.fbq('init', FB_PIXEL_ID)
  
  pageview()
}
