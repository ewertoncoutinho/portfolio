import Script from 'next/script'
import * as gtag from '/lib/gtag'

export default function Analytics() {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
				onLoad={() =>
					console.log(
						`%c                                                               
                                                               
    888888 Yb        dP 888888 88""Yb 888888  dP"Yb  88b 88    
    88__    Yb  db  dP  88__   88__dP   88   dP   Yb 88Yb88    
    88""     YbdPYbdP   88""   88"Yb    88   Yb   dP 88 Y88    
    888888    YP  YP    888888 88  Yb   88    YbodP  88  Y8    
                                                               
                                                               

    Send a hello :) https://t.me/ewertoncoutinho`,
						'background: #000; color: #fff'
					)
				}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
					  
                      gtag('config', '${gtag.GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                      });
                    `,
				}}
			/>
		</>
	)
}
