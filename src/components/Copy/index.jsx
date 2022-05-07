import { useEffect } from 'react'

export default function Copy() {
    useEffect(() => {
        console.log(
            `%c                                                            
                                                            
  888888 Yb        dP 888888 88""Yb 888888  dP"Yb  88b 88   
  88__    Yb  db  dP  88__   88__dP   88   dP   Yb 88Yb88   
  88""     YbdPYbdP   88""   88"Yb    88   Yb   dP 88 Y88   
  888888    YP  YP    888888 88  Yb   88    YbodP  88  Y8   
                                                            
                                                            

  Send a hello :) https://t.me/ewertoncoutinho`,
            'background: #000; color: #fff'
        )
    }, [])
    return (
        <p className="copy color-gray">{`© ${new Date().getFullYear()} Ewerton Coutinho`}</p>
    )
}
