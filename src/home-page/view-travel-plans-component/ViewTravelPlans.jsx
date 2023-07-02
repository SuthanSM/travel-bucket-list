import { useState, useEffect } from 'react';
import TravelPlanCard from '../travel-plan-card-component/TravelPlanCard';
import travelPlansDataJson from '../../data/travel-bucket-list.json';
import './ViewTravelPlans.css';

function ViewTravelPlans() {

  const [filter, setFilter] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [travelPlansData, setTravelPlansData] = useState(travelPlansDataJson);
  const [filteredTravelPlansData, setFilteredTravelPlansData] = useState(travelPlansDataJson);

  useEffect(() => {
    applyFilter();
  }, [filter]);

  useEffect(() => {
    search();
  }, [searchKey]);

  const applyFilter = () => {
    const trimmedFilter = filter.trim();
    const hashtagFilteredTravelPlansData = trimmedFilter === '' ?  travelPlansData : 
                                    travelPlansData.filter(travelPlan => {
                                      let hashtags = travelPlan.hashtags.split(' ');
                                      return hashtags.filter(hashtag => hashtag === trimmedFilter).length > 0;
                                    });
    setFilteredTravelPlansData(hashtagFilteredTravelPlansData);
  };

  const search = () => {
    const lowerCaseSearchKey = searchKey.toLowerCase();
    const searchFilteredTravelPlansData = lowerCaseSearchKey === '' ?  travelPlansData : 
                                    travelPlansData.filter(travelPlan => {
                                      const jsonString = JSON.stringify(travelPlan).toLowerCase();
                                      return jsonString.includes(lowerCaseSearchKey);
                                    });
    setFilteredTravelPlansData(searchFilteredTravelPlansData);
  };

  return (
    <div>
      <div className='search-box'>
        <input
          type="text"
          id="search"
          value={searchKey}
          placeholder="Search"
          onChange={e => setSearchKey(e.target.value)}
          className='form-control form-control-lg'
        />
      </div>

      <div className='row'>
      {filteredTravelPlansData.map(c => 
          <div className='col mb-5' key={c.title}>
            <TravelPlanCard travelPlanData={c} handleHashtagClick={hashtag => setFilter(hashtag)} />
          </div>
      )}
      </div>
    </div>
  );
}

export default ViewTravelPlans;
