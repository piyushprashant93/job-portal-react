// FAQItem.tsx
import React from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="bg-[#F8F8F8]">
            <div className="cursor-pointer" onClick={onClick}>
                <div className={`flex justify-between items-center text-lg font-medium px-6 py-3 ${isOpen ? 'bg-[#0368FF] text-white' : 'text-gray-800'}`}>
                    {question}
                    <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </div>
                {isOpen && <p className="text-gray-600 px-6 py-3">{answer}</p>}
            </div>
        </div>
    );
};

const FAQs = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="container mx-auto p-4 py-20 max-w-4xl">
            <h1 className="text-2xl font-bold mb-2 text-center">
                Frequently asked questions
            </h1>
            <p className='text-center text-gray-500 mb-8 text-sm'>
                A list of common questions
            </p>
            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <FAQItem 
                        key={index} 
                        question={faq.question} 
                        answer={faq.answer} 
                        isOpen={openIndex === index}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default FAQs;

const faqs = [
    {
        question: "How do I create an employer account with Jito Jobs?",
        answer: "Praesent fringilla massa libero, ac fringilla lectus finibus quis. Duis lacus quam, aliquet sed nisi vitae, interdum lobortis massa. Nam mattis magna neque, et malesuada lectus tristique quis. Donec a neque dolor. Nam ut est ligula. Quisque pharetra arcu sed purus efficitur viverra id vel ligula. Proin at cursus leo, nec pharetra justo. Sed accumsan nec lectus eget feugiat."
    },
    {
        question: "How do I start hiring from Jito Jobs?",
        answer: "To start hiring, simply create an employer account, post your job listing, and wait for candidate applications to come in."
    },
    {
        question: "How does Jito Jobs ensure that only Candidates matching the job criteria contact me?",
        answer: "We use a smart matching system that filters candidates based on your job description, ensuring only relevant candidates reach out."
    },
    {
        question: "When will I start receiving Candidate responses?",
        answer: "You can start receiving responses as soon as your job post goes live and candidates begin to engage."
    },
    {
        question: "What types of payment do you accept?",
        answer: "We accept all major credit cards, debit cards, and UPI payments."
    }
];
