"use client"

import React, { useState } from 'react';
import FaqContact from './FaqContact';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleQuestionClick = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const faqs = [
        {
            question: 'Is there a free trial available?',
            answer:
                'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
        },
        {
            question: 'What are the payment options?',
            answer:
                'We accept all major credit and debit cards. You can also pay via PayPal or bank transfer.',
        },
        {
            question: 'Do you offer refunds?',
            answer:
                'Yes, we offer a 100% money-back guarantee within the first 30 days of your subscription.',
        },
        {
            question: 'Can I cancel my subscription at any time?',
            answer:
                'Yes, you can cancel your subscription at any time. Your service will continue until the end of the billing period, and you will not be charged further.',
        },
        {
            question: 'Do you provide customer support?',
            answer:
                'Yes, we have a dedicated customer support team available 24/7 to assist you with any queries or issues you may have.',
        },
        {
            question: 'Are there any setup fees?',
            answer:
                'No, there are no setup fees. You only pay for the subscription plan you choose.',
        },
    ];

    return (
        <section className="py-[96px] px-[112px] flex items-center justify-center flex-col" id="faq">
            <h1 className="uppercase font-bold text-4xl mb-5 dark:text-slate-200">Frequently asked questions</h1>
            <p className="text-slate-600 dark:text-slate-200">Everything you need to know about the product and billing.</p>
            <ul className="my-[64px] flex max-w-[768px] w-full flex-col select-none">
                {faqs.map((faq, index) => (
                    <li key={index} className="border-b border-b-slate-300">
                        <p
                            className="font-bold text-slate-600 cursor-pointer dark:text-slate-400 py-8"
                            onClick={() => handleQuestionClick(index)}
                        >
                            {faq.question}
                        </p>
                        <p
                            className={`transition-all duration-300 ${
                                index === openIndex ? 'max-h-[70px] pb-6 mb-6 opacity-100' :'max-h-0 pb-0 mb-0 overflow-hidden opacity-0' }`}
                        >
                            {faq.answer}
                        </p>
                    </li>
                ))}
            </ul>
            <FaqContact />
        </section>
    );
}
