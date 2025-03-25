
import React from 'react';
import { StructuredData } from './StructuredData';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  questions: FAQItem[];
  url?: string;
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ questions, url }) => {
  // Get the current URL if not provided
  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://seayou.pt/');
  
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      },
      "url": `${pageUrl}#faq`
    }))
  };

  return <StructuredData data={faqData} />;
};
