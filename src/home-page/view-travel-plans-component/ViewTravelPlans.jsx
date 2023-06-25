import TravelPlanCard from '../travel-plan-card-component/TravelPlanCard'
import travelPlansData from '../../data/travel-bucket-list.json'
import './ViewTravelPlans.css';

function ViewTravelPlans() {

  return (
    <div>
      <div className='row'>
      {travelPlansData.map(c => {
        return (
          <div className='col mb-5' key={c.title}>
            <TravelPlanCard travelPlanData={c} />
          </div>
        )}
      )}
      </div>
    </div>
  );
}

export default ViewTravelPlans;
