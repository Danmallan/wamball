import React from 'react';
import { CheckIcon, CalendarIcon } from '@heroicons/react/20/solid';

const YearlyContentPlan = () => {
    const overviewItems = [
        "Content planning: 1 month in advance",
        "Content creation: 2-3 weeks before publication",
        "Review and approval: 1 week before publication",
        "Scheduling: At least 3 days before publication date",
        "Performance review: Weekly for social media, monthly for larger campaigns"
    ];

    const metrics = [
        "Engagement rate (likes, comments, shares)",
        "Reach and impressions",
        "Website traffic from content",
        "Conversion rate",
        "Sales attributed to specific campaigns",
        "Follower growth rate",
        "Video view duration",
        "Click-through rate on calls-to-action"
    ];

    const abTestingIdeas = [
        "Headline variations for blog posts",
        "Different visual styles for Instagram posts",
        "Video length on TikTok (short vs. longer form)",
        "Call-to-action placement and wording",
        "Best times to post on different platforms"
    ];

    const brandConsistencyStrategies = [
        "Develop a comprehensive brand style guide",
        "Create templates for different content types",
        "Conduct regular team training on brand voice and values",
        "Implement a content review process to ensure consistency",
        "Use a content calendar tool to maintain oversight of all content"
    ];

    const monthlyPlans = [
        {
            month: "January",
            theme: "New Year, Timeless Elegance",
            keyDates: "New Year's Day, Nigerian Armed Forces Remembrance Day (January 15)",
            contentTypes: [
                "Blog Posts: '5 Wamball Styles to Start Your Year with Elegance', 'The History of Agbada: From Traditional to Contemporary'",
                "Instagram Posts: New Year's resolution outfit inspiration, Behind-the-scenes of creating a bespoke agbada",
                "TikTok Videos: '3 Ways to Style Your Kaftan for Different Occasions', 'The Making of a Wamball Cap: Craftsmanship Spotlight'"
            ],
            targetAudience: "Affluent Nigerian men aged 25-65, fashion-conscious professionals",
            marketingGoals: "Brand awareness, sales of new collection",
            ugcOpportunity: "#MyWamballNewYear photo contest"
        },
        {
            month: "February",
            theme: "Love and Luxury",
            keyDates: "Valentine's Day",
            contentTypes: [
                "Blog Posts: 'Dressing to Impress: Valentine's Day Edition', 'The Language of Colors in Nigerian Fashion'",
                "Instagram Posts: Couple's photoshoot featuring matching Wamball outfits, Valentine's Day gift guide carousel",
                "TikTok Videos: 'Get Ready with Me: Valentine's Date Night', 'Surprise Your Love: Wamball Edition' (gift unboxing)"
            ],
            targetAudience: "Couples, gift-givers (including women shopping for men)",
            marketingGoals: "Increase sales, particularly of gift items and couple's collections",
            ugcOpportunity: "#WamballLoveStory where couples share their stories wearing Wamball"
        },
        {
            month: "March",
            theme: "Embracing Tradition, Defining the Future",
            keyDates: "International Women's Day (March 8)",
            contentTypes: [
                "Blog Posts: 'The Influence of Women in Nigerian Fashion', 'Modernizing Traditional Attire: Wamball's Approach'",
                "Instagram Posts: Showcasing women in Wamball's design and production teams, 'Traditional Tuesday' series",
                "TikTok Videos: 'A Day in the Life of a Wamball Designer', 'Then vs Now: The Evolution of Nigerian Fashion'"
            ],
            targetAudience: "Fashion industry professionals, environmentally conscious consumers",
            marketingGoals: "Brand positioning, highlighting company values",
            ugcOpportunity: "#MyWamballStyle challenge for customers to show how they personalize their Wamball pieces"
        },
        {
            month: "April",
            theme: "The Art of Craftsmanship",
            keyDates: "Easter holidays",
            contentTypes: [
                "Blog Posts: 'The Master Craftsmen Behind Wamball: Meet Our Artisans', 'From Sketch to Stitch: The Journey of a Wamball Design'",
                "Instagram Posts: Detailed close-ups of embroidery and beadwork, Time-lapse videos of garment construction",
                "TikTok Videos: 'Wamball Craftsmanship Challenge', 'The Tools of the Trade: What Our Artisans Use'"
            ],
            targetAudience: "Quality-conscious consumers, fashion enthusiasts",
            marketingGoals: "Highlight product quality, justify premium pricing",
            ugcOpportunity: "#WamballCraftsman where customers showcase their own crafts inspired by Wamball"
        },
        {
            month: "May",
            theme: "Dressing for Success",
            keyDates: "Workers' Day (May 1), Africa Day (May 25)",
            contentTypes: [
                "Blog Posts: 'Power Dressing: Traditional Attire in the Modern Workplace', 'From Boardroom to Gala: Versatile Wamball Pieces'",
                "Instagram Posts: Office-appropriate styling tips, 'Transformation Tuesday' featuring day-to-night looks",
                "TikTok Videos: '60-Second Style: Quick Tips for a Polished Look', 'Dress for the Job You Want' styling challenge"
            ],
            targetAudience: "Career-focused professionals, business leaders",
            marketingGoals: "Position Wamball as a brand for successful professionals",
            ugcOpportunity: "#WamballAtWork showcasing how customers wear Wamball in their professional lives"
        },
        {
            month: "June",
            theme: "Celebrating Culture",
            keyDates: "World Culture Day (June 30)",
            contentTypes: [
                "Blog Posts: 'The Cultural Significance of Traditional Nigerian Attire', 'Wamball's Inspiration: A Journey Through Nigeria's Diverse Cultures'",
                "Instagram Posts: Showcasing attire from different Nigerian cultures, Behind-the-scenes of cultural research for new designs",
                "TikTok Videos: 'Learn the Lingo: Fashion Terms in Nigerian Languages', 'Wamball World Tour' showcasing international inspirations"
            ],
            targetAudience: "Cultural enthusiasts, Nigerians in diaspora",
            marketingGoals: "Strengthen emotional connection to brand, appeal to international market",
            ugcOpportunity: "#MyWamballHeritage encouraging customers to share their cultural stories"
        },
        {
            month: "July",
            theme: "Summer Sophistication",
            keyDates: "Summer wedding season",
            contentTypes: [
                "Blog Posts: 'Stay Cool, Look Hot: Summer Styling with Wamball', 'The Ultimate Guide to Wedding Guest Attire'",
                "Instagram Posts: Summer color palette inspiration, Wedding guest outfit ideas",
                "TikTok Videos: '3 Ways to Tie a Gele' tutorial, 'Pack with Me: Wamball Edition' for summer trips"
            ],
            targetAudience: "Wedding attendees, summer travelers",
            marketingGoals: "Boost sales of summer-appropriate attire",
            ugcOpportunity: "#WamballWeddingStyle featuring customers at summer weddings"
        },
        {
            month: "August",
            theme: "Back to Roots",
            keyDates: "International Youth Day (August 12)",
            contentTypes: [
                "Blog Posts: 'Passing Down Tradition: Wamball for Every Generation', 'Young Trailblazers: Nigerian Youth Redefining Traditional Fashion'",
                "Instagram Posts: Father-son and mother-daughter styling ideas, Throwback photos of traditional attire through the decades",
                "TikTok Videos: 'Teach Your Parents TikTok' challenge in Wamball attire, 'Evolution of Nigerian Fashion' decade challenge"
            ],
            targetAudience: "Younger customers (25-40), family-oriented customers",
            marketingGoals: "Attract younger demographic, emphasize brand legacy",
            ugcOpportunity: "#WamballNextGen showcasing family photos in Wamball across generations"
        },
        {
            month: "September",
            theme: "Fashion Forward",
            keyDates: "Lagos Fashion Week",
            contentTypes: [
                "Blog Posts: 'Wamball on the Runway: Our Lagos Fashion Week Journey', 'Trend Forecast: The Future of Luxury Traditional Wear'",
                "Instagram Posts: Live updates from Lagos Fashion Week, Behind-the-scenes of fashion show preparation",
                "TikTok Videos: 'Get Ready with Me: Fashion Week Edition', 'Wamball Runway Recap' highlight reel"
            ],
            targetAudience: "Fashion industry insiders, trend-conscious consumers",
            marketingGoals: "Establish fashion authority, generate buzz around new collections",
            ugcOpportunity: "#SpottedInWamball for Fashion Week attendees"
        },
        {
            month: "October",
            theme: "Luxe Layers",
            keyDates: "Nigeria Independence Day (October 1)",
            contentTypes: [
                "Blog Posts: 'Layering Like a Pro: Wamball's Guide to Fall Fashion', 'The Art of Accessorizing Your Traditional Attire'",
                "Instagram Posts: Fall color palette inspiration, Styling tips for transitional weather",
                "TikTok Videos: 'Layer Challenge: Summer to Fall with Wamball', 'Independence Day GRWM' (Get Ready With Me)"
            ],
            targetAudience: "Fashion-forward customers, patriotic Nigerians",
            marketingGoals: "Promote fall collection, boost accessory sales",
            ugcOpportunity: "#WamballPatriot showcasing Independence Day outfits"
        },
        {
            month: "November",
            theme: "Gifting Grace",
            keyDates: "Black Friday, Cyber Monday",
            contentTypes: [
                "Blog Posts: 'The Wamball Gift Guide: Perfect Presents for Every Personality', 'The Art of Gifting Traditional Attire: Etiquette and Tips'",
                "Instagram Posts: Daily gift ideas leading up to Black Friday, Exclusive sneak peeks of Black Friday deals",
                "TikTok Videos: 'Guess the Gift' challenge with Wamball items, 'React to My Wamball Gift' compilation"
            ],
            targetAudience: "Gift givers, deal seekers",
            marketingGoals: "Maximize holiday sales, increase gift card purchases",
            ugcOpportunity: "#WamballUnboxing encouraging customers to share their Wamball gift reactions"
        },
        {
            month: "December",
            theme: "Festive Finery",
            keyDates: "Christmas, New Year's Eve",
            contentTypes: [
                "Blog Posts: 'Dressing for the Festive Season: Wamball's Holiday Style Guide', 'Year in Review: Wamball's Biggest Moments'",
                "Instagram Posts: 12 Days of Wamball countdown to Christmas, New Year's Eve outfit inspiration",
                "TikTok Videos: 'Holiday Party GRWM with Wamball', 'New Year's Resolutions: Wamball Style Edition'"
            ],
            targetAudience: "Holiday shoppers, party-goers",
            marketingGoals: "End-of-year sales push, build excitement for next year's collection",
            ugcOpportunity: "#WamballCelebrates showcasing customers' holiday looks"
        }
    ];

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-gold-600">Wamball Clothing</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        12-Month Content Calendar
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A year-long strategy showcasing Wamball's quality craftsmanship, elegant designs, and unique blend of tradition and modernity.
                    </p>
                </div>

                <div className="mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <CheckIcon className="h-5 w-5 flex-none text-gold-600" aria-hidden="true" />
                                Content Creation Workflow
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <ul className="list-disc pl-5 space-y-2">
                                    {overviewItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <CheckIcon className="h-5 w-5 flex-none text-gold-600" aria-hidden="true" />
                                Performance Metrics
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <ul className="list-disc pl-5 space-y-2">
                                    {metrics.map((metric, index) => (
                                        <li key={index}>{metric}</li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <CheckIcon className="h-5 w-5 flex-none text-gold-600" aria-hidden="true" />
                                A/B Testing Ideas
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <ul className="list-disc pl-5 space-y-2">
                                    {abTestingIdeas.map((idea, index) => (
                                        <li key={index}>{idea}</li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className="mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Brand Consistency Strategies</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {brandConsistencyStrategies.map((strategy, index) => (
                            <li key={index}>{strategy}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Monthly Content Plans</h3>
                    {monthlyPlans.map((plan, index) => (
                        <div key={index} className="mb-12 bg-gray-50 rounded-lg p-6">
                            <h4 className="text-xl font-semibold text-gold-600 flex items-center">
                                <CalendarIcon className="h-6 w-6 mr-2" />
                                {plan.month}: {plan.theme}
                            </h4>
                            <p className="mt-2 text-sm text-gray-500">Key Dates: {plan.keyDates}</p>
                            <div className="mt-4">
                                <h5 className="font-semibold">Content Types:</h5>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                                    {plan.contentTypes.map((content, idx) => (
                                        <li key={idx}>{content}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="mt-4"><span className="font-semibold">Target Audience:</span> {plan.targetAudience}</p>
                            <p className="mt-2"><span className="font-semibold">Marketing Goals:</span> {plan.marketingGoals}</p>
                            <p className="mt-2"><span className="font-semibold">UGC Opportunity:</span> {plan.ugcOpportunity}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default YearlyContentPlan;