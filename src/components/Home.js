import React from 'react';
import Footer from './Footer';

import TopStory from './TopStory';
import TopStoryList from './TopStoryList';
import LivingHealthy from './LivingHealthy';
import HealthNews from './HealthNews';
import HealthNewsList from './HealthNewsList';
import ExpertInsights from './ExpertInsights';
import SpecialSection from './SpecialSection';
import TrendingTopics from './TrendingTopics';
import FeaturedStories from './FeaturedStories';
import Newsletter from './Newsletter';
import Blogs from './Blogs';
import Tools from './Tools';
import HealthAZ from './HealthAZ';
import Mission from './Mission';
import SocialMedia from './SocialMedia';
import More from './More';
/*In order for the content to show, need to fill in info for img, heading, and anchor tags (no yellow bar should show)*/

function Home() {

  return (
    <div>
      {/*To make sure it doesn't conflict with the navbar, have a large mt, then have an md: media query to move the content back up to a normal position */}
      {/*Today's Top Stories: */}
      <TopStory/>
      <TopStoryList/>
      {/*Today's Top Stories - other 3 stories */}
      {/*Living Healthy: */}
      <LivingHealthy/>
      <HealthNews/>
      <HealthNewsList/>
      <ExpertInsights/>
      <SpecialSection/>
      <TrendingTopics/>
      <FeaturedStories/>
      <Newsletter />
      <Blogs/>
      <Tools/>
      <HealthAZ/>
      <Mission/>
      <SocialMedia/>
      <More/>
      <Footer />
    </div>
  );
}

export default Home;