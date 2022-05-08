import Script from 'next/script'

export default function Analytics() {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
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
            <Script strategy="lazyOnload">
                {`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
            </Script>
        </>
    )
}
