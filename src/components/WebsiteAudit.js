import React from 'react';
import {
    ChartBarIcon,
    HomeIcon,
    ShoppingBagIcon,
    LightBulbIcon,
    ClockIcon,
    CheckCircleIcon,
    ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const WebsiteAudit = () => {
    const auditSections = [
        {
            title: "Executive Summary",
            icon: ChartBarIcon,
            content: [
                {
                    subtitle: "Key Findings",
                    points: [
                        "Strong visual appeal aligning with luxury brand identity",
                        "Clear navigation structure with room for enhancement",
                        "Opportunities to improve content depth and engagement",
                        "Need for stronger trust signals and conversion elements",
                        "Potential for technical optimizations to improve performance"
                    ]
                }
            ]
        },
        {
            title: "Home Page Analysis",
            icon: HomeIcon,
            content: [
                {
                    subtitle: "First Impressions & Aesthetics",
                    strengths: [
                        "Clean, modern design aligning with luxury brand identity",
                        "High-quality product images enhancing premium feel"
                    ],
                    improvements: [
                        "Further image optimization for faster load times"
                    ]
                },
                {
                    subtitle: "Navigation & User Experience",
                    strengths: [
                        "Straightforward menu structure with clear categories",
                        "Mobile-friendly design"
                    ],
                    improvements: [
                        "Lack of \"New Arrivals\" or \"Best Sellers\" sections",
                        "Need for more prominent Call-to-Action (CTA) buttons",
                        "Potential for enhanced mobile-specific layout"
                    ]
                },
                {
                    subtitle: "Content & Messaging",
                    strengths: [
                        "Clear messaging focused on luxury traditional wear"
                    ],
                    improvements: [
                        "Opportunity for more compelling and detailed product descriptions",
                        "CTAs could be more engaging and create urgency"
                    ]
                },
                {
                    subtitle: "Conversion Elements",
                    improvements: [
                        "Checkout process needs testing for ease of use",
                        "Lack of visible trust signals (reviews, testimonials, security badges)",
                        "No prominent promotional offers"
                    ]
                },
                {
                    subtitle: "Technical Aspects",
                    strengths: [
                        "Decent page speed and basic SEO in place"
                    ],
                    improvements: [
                        "Potential for further SEO optimization",
                        "Opportunity to improve page speed through image optimization"
                    ]
                }
            ]
        },
        {
            title: "Shop Page Analysis",
            icon: ShoppingBagIcon,
            content: [
                {
                    subtitle: "Product Display & Organization",
                    strengths: [
                        "Clean grid format for product display",
                        "High-quality product images"
                    ],
                    improvements: [
                        "Lack of sorting and filtering options"
                    ]
                },
                {
                    subtitle: "Content & Descriptions",
                    strengths: [
                        "Clear pricing display"
                    ],
                    improvements: [
                        "Brief product descriptions lacking detail",
                        "Opportunity to highlight sales and discounts more prominently"
                    ]
                },
                {
                    subtitle: "User Experience & Conversion",
                    strengths: [
                        "Easily accessible \"Add to Cart\" buttons"
                    ],
                    improvements: [
                        "Lack of quick-view option for products",
                        "Absence of customer reviews on the shop page"
                    ]
                },
                {
                    subtitle: "Technical Aspects",
                    strengths: [
                        "Good loading speed",
                        "Mobile-friendly design"
                    ],
                    improvements: [
                        "Potential for further image optimization"
                    ]
                }
            ]
        },
        {
            title: "Recommendations",
            icon: LightBulbIcon,
            content: [
                {
                    subtitle: "Enhance User Experience",
                    points: [
                        "Add \"New Arrivals\" and \"Best Sellers\" sections to the home page",
                        "Implement sorting and filtering options on the shop page",
                        "Create a mobile-specific layout for enhanced mobile experience",
                        "Add a quick-view option for products on the shop page"
                    ]
                },
                {
                    subtitle: "Improve Content and Messaging",
                    points: [
                        "Develop more detailed and engaging product descriptions",
                        "Create more compelling CTAs (e.g., \"Get Yours Now\", \"Limited Stock\")",
                        "Highlight unique selling points (e.g., handcrafted quality, limited editions)"
                    ]
                },
                {
                    subtitle: "Strengthen Conversion Elements",
                    points: [
                        "Simplify the checkout process and consider adding a guest checkout option",
                        "Incorporate trust signals (customer reviews, testimonials, security badges)",
                        "Introduce time-limited discounts or first-purchase offers",
                        "Make promotional pricing more visible on the shop page"
                    ]
                },
                {
                    subtitle: "Optimize Technical Aspects",
                    points: [
                        "Further optimize images for improved load times",
                        "Enhance SEO by optimizing meta descriptions, alt tags, and URLs",
                        "Implement lazy loading for images",
                        "Ensure thorough testing across all major browsers and mobile devices"
                    ]
                },
                {
                    subtitle: "Leverage Data and Testing",
                    points: [
                        "Implement A/B testing for key changes, especially on CTAs and checkout process",
                        "Set up heat mapping to understand user behavior on the site",
                        "Regularly analyze user flow to identify and address drop-off points"
                    ]
                }
            ]
        },
        {
            title: "Implementation Priority",
            icon: ClockIcon,
            content: [
                {
                    subtitle: "High Priority (Immediate Implementation)",
                    points: [
                        "Enhance product descriptions",
                        "Add trust signals (reviews, security badges)",
                        "Optimize images for faster load times",
                        "Implement sorting and filtering on the shop page"
                    ]
                },
                {
                    subtitle: "Medium Priority (Next 1-3 Months)",
                    points: [
                        "Develop more engaging CTAs",
                        "Create \"New Arrivals\" and \"Best Sellers\" sections",
                        "Simplify the checkout process",
                        "Introduce promotional offers"
                    ]
                },
                {
                    subtitle: "Lower Priority (3-6 Months)",
                    points: [
                        "Develop mobile-specific layout",
                        "Create quick-view option for products",
                        "Implement A/B testing and heat mapping"
                    ]
                }
            ]
        }
    ];
    const renderPoints = (points) => (
        <ul className="mt-2 space-y-1">
            {points.map((point, index) => (
                <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-gold-500">
                        <CheckCircleIcon />
                    </span>
                    <span className="ml-2 text-sm text-gray-700">{point}</span>
                </li>
            ))}
        </ul>
    );

    const renderStrengthsAndImprovements = (strengths, improvements) => (
        <div className="mt-2 space-y-4">
            {strengths && (
                <div>
                    <h5 className="font-medium text-green-600">Strengths:</h5>
                    <ul className="mt-1 space-y-1">
                        {strengths.map((strength, index) => (
                            <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 h-5 w-5 text-green-500">
                                    <CheckCircleIcon />
                                </span>
                                <span className="ml-2 text-sm text-gray-700">{strength}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {improvements && (
                <div>
                    <h5 className="font-medium text-amber-600">Areas for Improvement:</h5>
                    <ul className="mt-1 space-y-1">
                        {improvements.map((improvement, index) => (
                            <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 h-5 w-5 text-amber-500">
                                    <ExclamationTriangleIcon />
                                </span>
                                <span className="ml-2 text-sm text-gray-700">{improvement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-gold-600">Website Audit</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Comprehensive CRO Analysis and Recommendations
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A detailed evaluation of Wamball's e-commerce website, focusing on conversion rate optimization and user experience enhancements.
                    </p>
                </div>

                {auditSections.map((section, index) => (
                    <div key={index} className="mt-16 sm:mt-20 lg:mt-24">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center">
                            <section.icon className="h-8 w-8 text-gold-600 mr-2" />
                            {section.title}
                        </h3>
                        {section.content.map((item, itemIndex) => (
                            <div key={itemIndex} className="mt-6 border-t border-gray-200 pt-4">
                                <h4 className="text-lg font-semibold text-gray-900">{item.subtitle}</h4>
                                {item.points && renderPoints(item.points)}
                                {(item.strengths || item.improvements) && renderStrengthsAndImprovements(item.strengths, item.improvements)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebsiteAudit;