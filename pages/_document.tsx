import { Html, Head, Main, NextScript } from 'next/document'
import { NextStrictCSP } from 'next-strict-csp'
const HeadCSP = Head
export default function Document() {
  return (
    <Html lang="en">
      <HeadCSP>
          
    <meta httpEquiv="Content-Security-Policy" />
          
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />

    <meta name="theme-color" content="#000000" />
    <meta name="keywords" content="HTML, CSS, JavaScript, Anish, Anish Nayak, AnishNayak"/>
    <meta name="author" content="Digicopt Visibuddy"/>
    <meta name="application-name" content="VisiBuddy" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="VisiBuddy" />
<meta name="description" content="Digicopt Visibuddy" />
<meta name="format-detection" content="telephone=no" />
<meta name="mobile-web-app-capable" content="yes" />




<link rel="shortcut icon" href="/favicon.ico" />


<meta name="twitter:card" content="VisiBuddy" />
<meta name="twitter:url" content="https://visibuddy.digicopt.com" />
<meta name="twitter:title" content="VisiBuddy" />
<meta name="twitter:description" content="Digicopt Visibuddy" />
<meta name="twitter:image" content="logo192.png" />
<meta name="twitter:creator" content="@AnishNayak1" />
<meta property="og:type" content="website" />
<meta property="og:title" content="VisiBuddy" />
<meta property="og:description" content="Digicopt Visibuddy" />
<meta property="og:site_name" content="VisiBuddy" />
<meta property="og:url" content="https://visibuddy.digicopt.com" />


    <meta
      name="description"
      content="Web site created by Anish Nayak"
    />
    <link rel="apple-touch-icon" href="/logo192.png" />
    
    <link rel="manifest" href="/manifest.json" />
      </ HeadCSP>
      <body>



        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
