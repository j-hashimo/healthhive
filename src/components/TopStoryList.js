import React from 'react';

import TopStoryListData from './TopStoryListData';
import TopStoryListCard from './TopStoryListCard';

//Note: I had a lot of difficulties styling this section because I had overflow issues (content from 1 div would overflow into the next div). The way I got to fix the overflow was to change the image dimensions using w-[30%] and h-full to make the image small enough to not cause overflow. If the text size is different, the vertical alignment is weird but it is a minor issue. If possible try reformatting it as a ul and li - didn't work. Can also look at this link: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content

function TopStoryList() {
  return (
    <div className='mt-4 mb-12 articles justify-center grid-cols-3 gap-8 flex flex-col md:flex-row w-full'>
      {TopStoryListData.map(card => (
        <TopStoryListCard card={card} key={card.link}/>
      ))}
    </div>
  );
}

export default TopStoryList;