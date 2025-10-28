"use client"

export function FAQSection() {
  const faqs = [
    {
      question: "What is Hot51 Live?",
      answer:
        "It is a live bar streaming application where you can watch live streaming of different content creators and chat with them. The app also features games that you can play and earn real money.",
    },
    {
      question: "How do I register for a Hot51 Live account?",
      answer:
     "Open the app and click on the Me section. It will provide a login option; tap on it and enter some basic details to register, such as your phone number, email, and password. After that, you will receive an OTP, which you must enter into the OTP box and then select 'Register'." 
    },
    {
      question: "Does the app require a subscription fee?",
      answer: "No, it is completely free and requires no subscription. Just open the app and start watching right away.",
    },
     
  ]

  return (
    <section className="max-w-5xl mx-auto p x-4 mb-20 mt-7">
      <h2 className="text-center font-extrabold text-3xl md:text-4xl mb-10 text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item border-b border-gray-200 dark:border-gray-700 pb-3">
            <summary className="font-semibold cursor-pointer text-lg hover:text-pink-500 transition-colors text-gray-900 dark:text-white">
              {faq.question}
            </summary>
            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}