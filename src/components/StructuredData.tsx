import React from 'react'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Soulvia",
    "description": "Anonymous communication platform with end-to-end encryption and privacy protection",
    "url": "https://soulvia.com",
    "applicationCategory": "CommunicationApplication",
    "operatingSystem": ["iOS", "Android", "Web"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "category": "Free"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "12500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Soulvia Inc.",
      "url": "https://soulvia.com/about"
    },
    "downloadUrl": [
      "https://apps.apple.com/app/soulvia",
      "https://play.google.com/store/apps/details?id=com.soulvia"
    ],
    "screenshot": [
      "https://soulvia.com/images/screenshot1.jpg",
      "https://soulvia.com/images/screenshot2.jpg"
    ],
    "featureList": [
      "End-to-end encryption",
      "Anonymous messaging",
      "Self-destructing messages",
      "Private group chats",
      "No personal data collection"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Soulvia",
    "url": "https://soulvia.com",
    "description": "Anonymous communication platform protecting your digital privacy",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://soulvia.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Soulvia really anonymous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Soulvia requires no phone number, email, or personal information. All communications are encrypted and automatically deleted."
        }
      },
      {
        "@type": "Question", 
        "name": "How secure is Soulvia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Soulvia uses military-grade AES-256 encryption with zero-knowledge architecture. We cannot read your messages even if we wanted to."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Soulvia different from other messaging apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike apps like WhatsApp, Telegram, or Signal, Soulvia requires zero personal information and is built specifically for anonymous communication."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}