
import Script from 'next/script'
import './global.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: {
    default: "Dilip Kumar | Frontend Web Developer",
    template: "%s | Dilip Kumar Maurya"
  },
  icons: {
    icon: '/favicon.png',
  },
  description: "Hi my name is Dilip Kumar Maurya and I am a Front End Web developer based in New Delhi, India.",
  robots: "follow, index",
  applicationName: 'Dilip Kumar ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dilipmaurya', 'curiousdilip', 'mauryaji'],
  authors: [{ name: 'Dilip Kumar', url: 'https://www.dilipmaurya.in' }],
  colorScheme: 'system',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.dilipmaurya.in'),
  alternates: {
    canonical: 'https://www.dilipmaurya.in/',
    '/about': 'https://www.dilipmaurya.in/about',
    '/projects': 'https://www.dilipmaurya.in/projects',
    '/resume': 'https://www.dilipmaurya.in/resume',
    '/contact': 'https://www.dilipmaurya.in/contact',
  },
  openGraph: {
    images: '/profilecardimg.jpeg',
    description: "Hi my name is Dilip Kumar Maurya and I am a Front End Web developer based in New Delhi, India."
    ,
    title: 'Dilip Kumar | Frontend Web Developer',
    url: 'https://www.dilipmaurya.in',
    siteName: 'Dilip Kumar | Frontend Web Developer',
    images: [
      {
        url: '/profilecardimg.jpeg',
        width: 800,
        height: 600,
      },
      {
        url: '/profilecardimg.jpeg',
        width: 1800,
        height: 1600,
        alt: 'Dilip Kumar Website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-96YN1MPY3C"></Script>
      <Script dangerouslySetInnerHTML={{
        __html: `    window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-96YN1MPY3C');`
      }}>
      </Script>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": "https://www.dilipmaurya.in/",
            "name": "Dilip Kumar | Frontend Web Developer",
            "logo": "https://www.dilipmaurya.in/logo-black.svg",
            "description": "Hi my name is Dilip Kumar Maurya and I am a Front End Web developer based in New Delhi, India.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 98997 42615",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/curiousdilip",
              "https://twitter.com/curiousdilip",
              "https://www.github.com/curiousdilip",
              "https://www.linkedin.com/in/curiousdilip/",
            ]
          })
        }}
      />
      <body>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
