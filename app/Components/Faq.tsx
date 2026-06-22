"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What is LearnMate AI?",
    answer:
      "LearnMate AI is an AI-powered learning platform that helps users generate study materials and improve productivity.",
  },
  {
    question: "How does AI note generation work?",
    answer:
      "Users provide a topic, and the AI generates structured study notes based on the request.",
  },
  {
    question: "Can I create quizzes?",
    answer:
      "Yes. LearnMate AI can generate quizzes from selected learning topics.",
  },
  {
    question: "Will my learning progress be tracked?",
    answer:
      "Yes. The dashboard will provide learning insights and progress tracking.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-600">
            Answers to common questions about LearnMate AI.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border"
            >
              <button
                className="flex w-full items-center justify-between p-5 text-left"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
              >
                <span className="font-medium">
                  {item.question}
                </span>

                <span>
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-sm text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}