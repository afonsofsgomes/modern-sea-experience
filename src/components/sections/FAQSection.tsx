
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema } from "@/components/SEO/FAQSchema";
import { useIsMobile } from "@/hooks/use-mobile";
import { HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  questions: FAQItem[];
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about this experience.",
  questions,
  className,
}) => {
  const isMobile = useIsMobile();
  
  return (
    <section className={`py-16 bg-gray-50 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 py-1 px-3 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-4">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-blue-900">
              {title}
            </h2>
            <p className="text-muted-foreground">
              {description}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {questions.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline font-medium text-blue-900 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        {/* Add structured data for SEO */}
        <FAQSchema questions={questions} />
      </div>
    </section>
  );
};
