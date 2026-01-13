import { useState } from "react";
export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a tour?",
      answer:
        "You can browse our packages, select your preferred destination, customize your tour, and confirm your booking securely online.",
    },
    {
      question: "Can I customize my travel package?",
      answer:
        "Yes. All our packages are customizable. You can choose accommodations, activities, and travel dates based on your preference.",
    },
    {
      question: "Is it safe to book through Xplore Xperience?",
      answer:
        "Absolutely. We use secure payment gateways and work only with trusted local partners to ensure a safe and reliable experience.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes. Our support team is available to assist you before, during, and after your trip.",
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
