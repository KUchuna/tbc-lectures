"use client"

import React, { useState } from 'react';
import FaqContact from './FaqContact';
import { useScopedI18n } from '@/locales/client';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleQuestionClick = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    
    const scopedT = useScopedI18n('faq')

    const faqs = [
        {
            question: scopedT('question1'),
            answer: scopedT('answer1')
        },
        {
            question: scopedT('question2'),
            answer: scopedT('answer2')
        },
        {
            question: scopedT('question3'),
            answer: scopedT('answer3')
        },
        {
            question: scopedT('question4'),
            answer: scopedT('answer4')
        },
        {
            question: scopedT('question5'),
            answer: scopedT('answer5')
        },
        {
            question: scopedT('question6'),
            answer: scopedT('answer6')
        },
        
    ];

    return (
        <section className="px-[16px] py-[64px] md:py-[96px] xl:px-[112px] md:px-[40px] flex items-center justify-center flex-col" id="faq">
            <h1 className="uppercase font-bold md:text-4xl md:mb-5 text-3xl mb-3 text-center md:text-left dark:text-slate-200">{scopedT('title')}</h1>
            <p className="text-slate-600 dark:text-slate-200">{scopedT('subtitle')}</p>
            <ul className="md:my-[64px] my-[32px] flex max-w-[768px] w-full flex-col select-none">
                {faqs.map((faq, index) => (
                    <li key={index} className="border-b border-b-slate-300">
                        <p
                            className="font-bold text-slate-600 cursor-pointer dark:text-slate-400 py-5"
                            onClick={() => handleQuestionClick(index)}
                        >
                            {faq.question}
                        </p>
                        <p
                            className={`transition-all duration-300 ${
                                index === openIndex ? 'max-h-[80px] pb-6 mb-6 opacity-100' :'max-h-0 pb-0 mb-0 overflow-hidden opacity-0' }`}
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
