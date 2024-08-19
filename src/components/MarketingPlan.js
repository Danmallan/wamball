import React from 'react';
import {
    UserGroupIcon,
    CurrencyDollarIcon,
    MegaphoneIcon,
    ChartBarIcon,
    BuildingStorefrontIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    SparklesIcon,
    TagIcon,
    TruckIcon,
    CalendarIcon,
    CogIcon,
    DocumentChartBarIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

const MarketingPlan = () => {
    const sections = [
        {
            title: "Situation Analysis",
            icon: DocumentChartBarIcon,
            content: [
                {
                    subtitle: "Product",
                    description: "Wamball Clothing is a premium Nigerian fashion brand specializing in luxury traditional attire such as kaftans, agbadas, caps, and shoes. Known for quality craftsmanship, elegant designs, and blending tradition with modernity.",
                    icon: TagIcon
                },
                {
                    subtitle: "Target Market",
                    description: "Affluent Nigerian men, aged 25-65, and women purchasing gifts. Value luxury, cultural heritage, and exclusive designs. Active on social media, particularly Instagram.",
                    icon: UserGroupIcon
                },
                {
                    subtitle: "Company Strengths",
                    description: "Premium quality craftsmanship, strong brand identity, diverse product range with customization options, strategic locations in Kano and Abuja, plus online store, growing social media presence.",
                    icon: SparklesIcon
                }
            ]
        },
        {
            title: "Marketing Strategy: 'Wamball: Tradition Redefined'",
            icon: LightBulbIcon,
            content: [
                {
                    subtitle: "Messaging and Positioning",
                    description: "Unique Value Proposition: 'Where Nigerian heritage meets modern luxury'. Key Messages: Exquisite craftsmanship that honors tradition, modern designs for the discerning gentleman, exclusive, customizable pieces for every occasion.",
                    icon: MegaphoneIcon
                },
                {
                    subtitle: "Pricing Strategy",
                    description: "Maintain premium pricing, introduce tiered loyalty program, limited-time offers on new collection launches.",
                    icon: CurrencyDollarIcon
                },
                {
                    subtitle: "Channel and Distribution Strategy",
                    description: "Primary: E-commerce website and physical stores (Kano and Abuja). Secondary: Partnerships with select high-end department stores. Explore pop-up shops in luxury hotels.",
                    icon: BuildingStorefrontIcon
                },
                {
                    subtitle: "Promotional Mix",
                    description: "Luxury influencer collaborations, content marketing, social media strategy, email marketing, PR, and paid advertising.",
                    icon: MegaphoneIcon
                }
            ]
        },
        {
            title: "Budget and Resource Requirements",
            icon: CogIcon,
            content: [
                {
                    subtitle: "Budget Allocation",
                    description: "Influencer partnerships: 30%, Content creation: 25%, Paid advertising: 20%, PR and events: 15%, Email marketing and website updates: 10%",
                    icon: CurrencyDollarIcon
                },
                {
                    subtitle: "Human Resources",
                    description: "Digital Marketing Manager, Content Creator, PR Specialist, Customer Service Representatives",
                    icon: UserGroupIcon
                }
            ]
        },
        {
            title: "Key Metrics and Success Criteria",
            icon: ChartBarIcon,
            content: [
                {
                    subtitle: "Targets",
                    description: "30% increase in social media followers, 25% increase in website traffic, 20% increase in online sales, 15% increase in average order value, 10% increase in customer retention rate within 6 months.",
                    icon: ChartBarIcon
                }
            ]
        },
        {
            title: "Launch Timeline and Key Milestones",
            icon: CalendarIcon,
            content: [
                {
                    subtitle: "Months 1-2: Preparation",
                    description: "Finalize influencer partnerships, develop content strategy, update website",
                    icon: ClockIcon
                },
                {
                    subtitle: "Month 3: Campaign Launch",
                    description: "Launch influencer campaign, implement paid advertising, begin email marketing",
                    icon: ClockIcon
                },
                {
                    subtitle: "Months 4-5: Expansion",
                    description: "Host PR events, continue content rollout and influencer collaborations, analyze initial results",
                    icon: ClockIcon
                },
                {
                    subtitle: "Month 6: Evaluation and Next Steps",
                    description: "Launch user-generated content campaign, evaluate performance, plan next phase",
                    icon: ClockIcon
                }
            ]
        },
        {
            title: "Innovation Initiatives",
            icon: LightBulbIcon,
            content: [
                {
                    subtitle: "Digital Innovations",
                    description: "Develop a virtual showroom with 3D customization tool, create a 'Cultural Heritage Collection' with educational content, produce an interactive digital lookbook and styling guide",
                    icon: LightBulbIcon
                }
            ]
        },
        {
            title: "Risk Assessment and Mitigation",
            icon: ShieldCheckIcon,
            content: [
                {
                    subtitle: "Key Risks",
                    description: "Overreliance on influencers, luxury market volatility, cultural appropriation concerns. Mitigation strategies include diversifying marketing mix, maintaining flexible strategies, and ensuring authentic representation.",
                    icon: ShieldCheckIcon
                }
            ]
        }
    ];

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-gold-600">Comprehensive Marketing Plan</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Wamball: Tradition Redefined
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A multi-faceted approach centered around the Luxury Influencer Collaboration Campaign, aiming to significantly increase brand visibility, desirability, and sales among the affluent, social media-savvy target audience.
                    </p>
                </div>
                {sections.map((section, index) => (
                    <div key={index} className="mt-16 sm:mt-20 lg:mt-24">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center">
                            <section.icon className="h-8 w-8 text-gold-600 mr-2" />
                            {section.title}
                        </h3>
                        <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
                            {section.content.map((item, itemIndex) => (
                                <div key={itemIndex} className="border-t border-gray-200 pt-4">
                                    <dt className="font-medium text-gray-900 flex items-center">
                                        <item.icon className="h-6 w-6 text-gold-600 mr-2" />
                                        {item.subtitle}
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">{item.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketingPlan;