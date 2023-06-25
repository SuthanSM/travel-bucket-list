import Card from 'react-bootstrap/Card';

function TravelPlanCard({ travelPlanData }) {
  return (
    <div className='travel-plan-card'>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{travelPlanData.title}</Card.Title>
          <Card.Text>{travelPlanData.description}</Card.Text>
          <Card.Link href="#">{travelPlanData.link}</Card.Link>
          <Card.Footer>{travelPlanData.hashtags}</Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TravelPlanCard;