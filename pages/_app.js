import React from 'react'
import '/public/styles/globals.css'
import '/public/styles/styles.css'

function MyApp({ Component, pageProps }) {
  
  React.useEffect(()=>{
    console.log(`%c
.                                                                    .
.                                         ##                         .
.                                         ##                         .
.     #####   ##   ##   #####   ## ###  ######    #####   ## ###     .
.    ##   ##  ## # ##  ##   ##  ###       ##     ##   ##  ###  ##    .
.    #######  ## # ##  #######  ##        ##     ##   ##  ##   ##    .
.    ##       ## # ##  ##       ##        ##     ##   ##  ##   ##    .
.     #####    ## ##    #####   ##         ###    #####   ##   ##    .
.                                                                    .
.                                                                    .

 Send a hello :) https://t.me/ewertoncoutinho
`, 'background: #000; color: #fff'
)})

  return <Component {...pageProps} />
}

export default MyApp
