import { Helmet } from "react-helmet-async"

export default function SEO() {
  const title = "The Wedding Groove | Luxury Wedding Choreography in India"
  const description =
    "Premium wedding choreography services for sangeet, couple dance, bridal entry, and destination weddings. Available across Delhi NCR and Pan India."

  const keywords = [
    "wedding choreography india",
    "wedding choreographer delhi ncr", 
    "sangeet choreography services",
    "couple dance choreographer india",
    "luxury wedding choreography",
    "destination wedding choreographer",
    "bridal entry choreography",
    "professional wedding choreographer india",
    "wedding choreographer near me",
    "best wedding choreographer delhi"
  ].join(", ")

  const url = "https://theweddinggroove.com"

  // Structured Data for Local SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Wedding Groove",
    "description": description,
    "url": url,
    "telephone": "+91 98765 43210",
    "email": "hello@theweddinggroove.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi NCR",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "openingHours": "Mo-Su 09:00-21:00",
    "serviceType": [
      "Wedding Choreography",
      "Sangeet Choreography", 
      "Couple Dance Choreography",
      "Bridal Entry Choreography",
      "Destination Wedding Choreography"
    ],
    "areaServed": [
      "Delhi",
      "Gurgaon", 
      "Noida",
      "Mumbai",
      "Jaipur",
      "India"
    ]
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <html lang="en" />
    </Helmet>
  )
}
