import React, { useState } from 'react';
import './FAQSection.css';
import { MessageCircle, HelpCircle, Sparkles, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

const faqData = {
  "General Information": [
    {
      question: "What services do you offer?",
      answer: "We are a full-service travel agency. We handle flight bookings, hotel reservations, cruise packages, custom itinerary planning, and guided tours. We act as your personal concierge from the moment you start planning until you return home."
    },
    {
      question: "How do I start planning a trip?",
      answer: "Simply reach out via our contact form or phone. We'll schedule a brief consultation to understand your preferences, budget, and dates, then build a custom proposal for you."
    },
    {
      question: "Do you charge a planning fee?",
      answer: "We charge a small initial deposit to begin the research and booking process, which is applied to your final trip cost. For simple flight-only bookings, a service fee may apply."
    }
  ],
  "Purchasing and Payment": [
    {
      question: "Can I pay in installments?",
      answer: "Yes! For most vacation packages, you can pay a deposit upfront and pay the remainder in installments up to 45 days before departure."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and reliable travel financing partners."
    }
  ],
  "Cancellations": [
    {
      question: "What is your cancellation policy?",
      answer: "Cancellation policies vary by airline and hotel. We will clearly outline the terms for your specific trip before you book. We highly recommend travel insurance to protect your investment."
    }
  ],
  "Travel Documents": [
    {
      question: "Do you help with Visas?",
      answer: "Yes, we provide guidance on visa requirements for your destination and can connect you with expedited visa processing services."
    }
  ]
};
const handleContactClick = () => {
  // REPLACE THIS with your actual phone number (e.g., 15550001234)
  const phoneNumber = "8811992494";

  // The pre-filled message
  const message = "What can I help you?";

  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Open in a new tab
  window.open(whatsappUrl, '_blank');
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("General Information");
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-header">
        <span className="badge">Travel with Confidence</span>
        <h1>Frequently Asked Questions</h1>
        <p className="subtitle">Find answers to common questions about your trip and how we help you explore the world.</p>

        {/* Decorative Icons matching the screenshot */}
        <div className="icon-float icon-top-left"><MessageCircle size={32} /></div>
        <div className="icon-float icon-top-right"><HelpCircle size={32} /></div>
      </div>

      <div className="faq-container">
        {/* Sidebar Categories */}
        <div className="faq-sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {Object.keys(faqData).map((category) => (
              <li
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenQuestionIndex(null); // Reset open question on category change
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="faq-content">
          <div className="questions-list">
            {faqData[activeCategory].map((item, index) => (
              <div
                key={index}
                className={`question-item ${openQuestionIndex === index ? 'open' : ''}`}
              >
                <button
                  className="question-header"
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{item.question}</span>
                  {openQuestionIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div className="answer-body">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>


          {/* Footer Call to Action */}
          {/* Footer Call to Action */}
          <div className="faq-footer">
            <div className="footer-text">
              <h4><Sparkles size={16} className="inline-icon" /> Still have a question?</h4>
              <p>If you didn't find your answer, feel free to reach out.</p>
            </div>

            {/* UPDATED BUTTON */}
            <button className="contact-btn" onClick={handleContactClick}>
              Contact us
            </button>

            <div className="footer-deco"><Phone size={40} strokeWidth={1} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;