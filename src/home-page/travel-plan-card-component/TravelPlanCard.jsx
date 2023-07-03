import './TravelPlanCard.css';

function TravelPlanCard(props) {

  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

  const hashtags = props.travelPlanData.hashtags.split(' ')
                                          .map(hashtag => {
                                            hashtag = hashtag !== '' ? hashtag + ' ' : '';
                                            return hashtag;
                                          });

  return (
    <div className='travel-plan-card' onClick={() => handleCardClick(props.travelPlanData.link)}>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{props.travelPlanData.title}</h5>
          <p className='card-text'>{props.travelPlanData.description}</p>
          <div className='card-footer text-muted'>
            {hashtags.map(hashtag => 
              <i className='hashtag' key={hashtag} onClick={() => props.handleHashtagClick(hashtag)}>{ hashtag }</i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;