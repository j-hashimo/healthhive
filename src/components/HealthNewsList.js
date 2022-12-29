import React from 'react';
import HealthNewsCard from './HealthNewsCard';
import HealthNewsData from './HealthNewsData';
function HealthNewsList() {
  return (
    <div className='articles flex flex-col lg:flex-row mt-12 mb-12 justify-between'>
      {HealthNewsData.map(card => (
        <HealthNewsCard card={card} key={card.link}/>
      ))}
    </div>
  );
}

export default HealthNewsList;