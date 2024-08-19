import React from 'react';

const SeptemberCalendar = () => {
    const calendarData = [
        { date: 'Sep 1', content: 'Blog Post', title: 'Countdown to Lagos Fashion Week: What to Expect from Wamball', platform: 'Website, Email', target: 'Fashion enthusiasts', goal: 'Build anticipation', cta: 'Sign up for our Fashion Week updates', hashtags: '#LagosFashionWeek #WamballStyle' },
        { date: 'Sep 2', content: 'Instagram Post', title: 'Behind-the-scenes: Sketch of new design', platform: 'Instagram', target: 'Trend-conscious consumers', goal: 'Tease new collection', cta: 'Comment your guess for the inspiration', hashtags: '#BehindTheSeams #WamballDesign' },
        { date: 'Sep 3', content: 'TikTok Video', title: 'Pack with Me: Fashion Week Essentials', platform: 'TikTok', target: 'Fashion week attendees', goal: 'Practical engagement', cta: 'Show us your packing hacks!', hashtags: '#FashionWeekPrep #WamballEssentials' },
        { date: 'Sep 5', content: 'Instagram Story', title: 'Poll: "Which fabric should we use?"', platform: 'Instagram', target: 'Engaged followers', goal: 'Community involvement', cta: 'Vote in poll', hashtags: '#DesignerChoice #WamballCommunity' },
        { date: 'Sep 6', content: 'Blog Post', title: 'The Evolution of Nigerian Fashion: From Traditional to Runway', platform: 'Website, LinkedIn', target: 'Fashion industry professionals', goal: 'Establish authority', cta: 'Read our full fashion week preview', hashtags: '#NigerianFashion #FashionEvolution' },
        { date: 'Sep 8', content: 'Instagram Post', title: 'Throwback: Last year\'s runway highlights', platform: 'Instagram', target: 'Returning customers', goal: 'Nostalgia, anticipation', cta: 'Share your favorite look from last year', hashtags: '#WamballRunway #FashionMemories' },
        { date: 'Sep 9', content: 'TikTok Video', title: '3 Ways to Style a Wamball Agbada', platform: 'TikTok', target: 'Style-conscious men', goal: 'Showcase versatility', cta: 'Show us your Wamball style', hashtags: '#AgbadaStyle #WamballVersatility' },
        { date: 'Sep 11', content: 'Instagram Reel', title: 'Time-lapse: Creating a beaded cap', platform: 'Instagram', target: 'Craft appreciators', goal: 'Highlight craftsmanship', cta: 'Book a studio tour to see more', hashtags: '#WamballCraftsmanship #LuxuryDetails' },
        { date: 'Sep 12', content: 'Blog Post', title: 'Sustainable Fashion: Wamball\'s Commitment to Ethical Luxury', platform: 'Website, Email', target: 'Eco-conscious consumers', goal: 'Brand positioning', cta: 'Learn more about our sustainable practices', hashtags: '#SustainableLuxury #EthicalFashion' },
        { date: 'Sep 14', content: 'Instagram Post', title: 'Sneak peek: New collection color palette', platform: 'Instagram', target: 'Fashion forward customers', goal: 'Generate buzz', cta: 'Guess the inspiration behind our new palette', hashtags: '#WamballColors #NewCollection' },
        { date: 'Sep 15', content: 'TikTok Video', title: 'Get Ready With Me: Styling for Fashion Week', platform: 'TikTok', target: 'Young fashion enthusiasts', goal: 'Practical styling tips', cta: 'Show us your Fashion Week GRWM', hashtags: '#FashionWeekGRWM #WamballStyle' },
        { date: 'Sep 17', content: 'Instagram Story', title: 'Live Q&A with Wamball\'s lead designer', platform: 'Instagram', target: 'Engaged followers, aspiring designers', goal: 'Brand connection', cta: 'Submit questions for the Q&A', hashtags: '#AskWamball #DesignerInsights' },
        { date: 'Sep 18', content: 'Blog Post', title: 'From Sketch to Runway: The Journey of a Wamball Design', platform: 'Website, LinkedIn', target: 'Fashion industry insiders', goal: 'Showcase process', cta: 'Book a consultation for custom designs', hashtags: '#DesignJourney #WamballProcess' },
        { date: 'Sep 20', content: 'Instagram Post', title: 'Collaboration teaser with international designer', platform: 'Instagram', target: 'Global fashion community', goal: 'Create anticipation', cta: 'Guess who we\'re collaborating with', hashtags: '#WamballCollabs #GlobalFashion' },
        { date: 'Sep 21', content: 'TikTok Video', title: 'Fashion Week Looks for Every Body Type', platform: 'TikTok', target: 'Body-positive community', goal: 'Inclusivity', cta: 'Share your body-positive style', hashtags: '#FashionForAll #WamballInclusive' },
        { date: 'Sep 22', content: 'Instagram Reel', title: 'A Day in the Life: Wamball Model Casting', platform: 'Instagram', target: 'Aspiring models, fashion curious', goal: 'Behind-the-scenes', cta: 'Apply to be a Wamball model', hashtags: '#ModelLife #WamballCasting' },
        { date: 'Sep 23', content: 'Blog Post', title: 'Trend Forecast: The Future of Luxury Traditional Wear', platform: 'Website, Email', target: 'Trend-setters, fashion predictors', goal: 'Thought leadership', cta: 'Subscribe for more trend insights', hashtags: '#FashionForecast #LuxuryTrends' },
        { date: 'Sep 25', content: 'Instagram Post', title: 'First day of Lagos Fashion Week - Runway shot', platform: 'Instagram', target: 'Fashion week followers', goal: 'Real-time engagement', cta: 'Share your favorite look from today', hashtags: '#LagosFashionWeek #WamballRunway' },
        { date: 'Sep 26', content: 'TikTok Live', title: 'Live from Lagos Fashion Week', platform: 'TikTok', target: 'Unable to attend in person', goal: 'Virtual inclusion', cta: 'Comment with questions for real-time response', hashtags: '#LiveFromLFW #WamballLive' },
        { date: 'Sep 27', content: 'Instagram Story', title: 'Backstage interviews with models and designers', platform: 'Instagram', target: 'Fashion insiders', goal: 'Exclusive content', cta: 'Swipe up to see full interviews on website', hashtags: '#BackstagePasses #WamballExclusive' },
        { date: 'Sep 28', content: 'Blog Post', title: 'Wamball Steals the Show: Lagos Fashion Week Recap', platform: 'Website, Email', target: 'Fashion enthusiasts, customers', goal: 'Showcase success', cta: 'Shop the runway looks', hashtags: '#LFWRecap #WamballTriumph' },
        { date: 'Sep 29', content: 'Instagram Post', title: 'Best dressed celebrities in Wamball at LFW', platform: 'Instagram', target: 'Celebrity fashion followers', goal: 'Aspiration', cta: 'Vote for your favorite celeb look', hashtags: '#CelebStyle #WamballSpotted' },
        { date: 'Sep 30', content: 'TikTok Video', title: '"Recreate the Runway Look" challenge', platform: 'TikTok', target: 'DIY fashion community', goal: 'Engagement', cta: 'Show us your recreation with #WamballRunwayChallenge', hashtags: '#RunwayToRealway #WamballChallenge' },
    ];

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Theme: "Fashion Forward"</h1>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Key Event: Lagos Fashion Week
                    </p>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-gray-800">
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6 lg:pl-8">Date</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">Content Type</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">Title/Description</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">Platform</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">Target Audience</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">Goal</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">CTA</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">Hashtags</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                                {calendarData.map((item, index) => (
                                    <tr key={item.date} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6 lg:pl-8">{item.date}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{item.content}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{item.title}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{item.platform}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{item.target}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{item.goal}</td>
                                        <td className="px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{item.cta}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{item.hashtags}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeptemberCalendar;