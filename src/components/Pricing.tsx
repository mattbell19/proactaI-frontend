'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: 'Starter',
            price: isAnnual ? '$29' : '$39',
            description: 'Perfect for individuals and small teams starting their journey.',
            features: [
                '5 AI Agents',
                'Basic Analytics',
                'Email Support',
                '48h Response Time',
                'Community Access'
            ],
            highlight: false,
            buttonText: 'Get Started'
        },
        {
            name: 'Pro',
            price: isAnnual ? '$79' : '$99',
            description: 'Ideal for growing businesses needing advanced capabilities.',
            features: [
                'Unlimited AI Agents',
                'Advanced Analytics',
                'Priority Support',
                '24h Response Time',
                'Custom Workflows',
                'API Access',
                'Team Collaboration'
            ],
            highlight: true,
            buttonText: 'Start Free Trial'
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'Tailored solutions for large-scale operations and specific needs.',
            features: [
                'Unlimited Everything',
                'Dedicated Success Manager',
                'SLA Guarantees',
                '1h Response Time',
                'Custom Integrations',
                'On-premise Deployment',
                'SSO & Advanced Security'
            ],
            highlight: false,
            buttonText: 'Contact Sales'
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
                        Choose the perfect plan for your needs. No hidden fees.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-secondary'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-14 h-8 bg-white/10 rounded-full p-1 relative transition-colors hover:bg-white/20"
                        >
                            <motion.div
                                animate={{ x: isAnnual ? 24 : 0 }}
                                className="w-6 h-6 bg-accent rounded-full shadow-lg"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-secondary'}`}>
                            Yearly <span className="text-accent text-xs ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-[32px] p-8 flex flex-col h-full border ${
                                plan.highlight 
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
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.price !== 'Custom' && <span className="text-secondary">/mo</span>}
                                </div>
                                <p className="text-secondary text-sm">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-300">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-accent/20 text-accent' : 'bg-white/10 text-white'}`}>
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${
                                plan.highlight 
                                    ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25' 
                                    : 'bg-white text-black hover:bg-gray-200'
                            }`}>
                                {plan.buttonText}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
