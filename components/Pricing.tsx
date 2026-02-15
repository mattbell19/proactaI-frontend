'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

export default function Pricing() {
    const plans = [
        {
            name: 'Free Trial',
            price: '$0',
            description: 'Experience the power of Auxio risk-free.',
            features: [
                { text: '3-day duration', included: true },
                { text: 'Maximum 30 leads', included: true },
                { text: 'Maximum 2 custom fields', included: true },
                { text: 'Gmail/Workspace integration', included: false },
                { text: 'Google Docs/Sheets tools', included: false },
                { text: 'CSV import', included: false },
            ],
            highlight: false,
            buttonText: 'Start Free Trial',
            href: 'https://app.auxio.co/signup'
        },
        {
            name: 'Pro',
            price: '$79',
            description: 'Unlimited power for serious automation.',
            features: [
                { text: 'Unlimited duration', included: true },
                { text: 'Unlimited leads', included: true },
                { text: 'Unlimited custom fields', included: true },
                { text: 'Gmail/Workspace integration', included: true },
                { text: 'Google Docs/Sheets tools', included: true },
                { text: 'CSV bulk import', included: true },
            ],
            highlight: true,
            buttonText: 'Get Started',
            href: 'https://app.auxio.co/signup'
        }
    ];

    return (
        <section className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gradient">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-secondary max-w-2xl mx-auto font-medium text-lg mb-8">
                        Start with a free trial. Upgrade when you're ready to scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-[32px] p-8 md:p-12 flex flex-col h-full border ${plan.highlight
                                    ? 'bg-white/[0.03] border-accent/50 shadow-2xl shadow-accent/10'
                                    : 'bg-black border-white/10'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-5xl font-bold">{plan.price}</span>
                                    {plan.price !== '$0' && <span className="text-secondary text-xl">/mo</span>}
                                </div>
                                <p className="text-secondary text-sm">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={`flex items-start gap-3 text-sm font-medium ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${feature.included
                                                ? (plan.highlight ? 'bg-accent/20 text-accent' : 'bg-white/10 text-white')
                                                : 'bg-white/5 text-gray-600'
                                            }`}>
                                            {feature.included ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
                                        </div>
                                        <span className={feature.included ? '' : 'line-through decoration-gray-600'}>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={plan.href}
                                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${plan.highlight
                                        ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25'
                                        : 'bg-white text-black hover:bg-gray-200'
                                    }`}>
                                {plan.buttonText}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
