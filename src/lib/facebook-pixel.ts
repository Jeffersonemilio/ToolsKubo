declare global {
  interface Window {
    fbq: any;
  }
}

export const FB_PIXEL_ID = '902536777459948'

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const lead = (name: string, phone: string) => {
  window.fbq('track', 'Lead', {
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

  if (window.fbq) return
  
  window.fbq = function() {
    // @ts-ignore
    window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments)
  }
  
  if (!window.fbq.queue) {
    window.fbq.queue = []
  }
  
  window.fbq('init', FB_PIXEL_ID)
  
  pageview()
}
