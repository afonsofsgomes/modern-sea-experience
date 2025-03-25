
import React from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema } from "@/components/SEO";

interface FAQQuestion {
  question: string;
  answer: string;
  linkText?: string;  // Optional link text
  linkUrl?: string;   // Optional link URL
}

interface FAQSectionProps {
  title: string;
  description: string;
  questions: FAQQuestion[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ title, description, questions }) => {
  const formatAnswer = (question: FAQQuestion) => {
    if (question.linkText && question.linkUrl) {
      const parts = question.answer.split(question.linkText);
      if (parts.length === 2) {
        return (
          <>
            {parts[0]}
            <Link to={question.linkUrl} className="font-semibold text-blue-600 underline underline-offset-2">
              {question.linkText}
            </Link>
            {parts[1]}
          </>
        );
      }
    }
    return question.answer;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-blue-900">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {formatAnswer(faq)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Add FAQ schema for SEO */}
        <FAQSchema questions={questions.map(q => ({ question: q.question, answer: q.answer }))} />
      </div>
    </section>
  );
};
