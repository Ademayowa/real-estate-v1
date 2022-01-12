import { Row, Col } from 'react-bootstrap';

export default function FeaturesPage({ amenity }) {
  return (
    <Col lg={4} className='bg-white p-2 text-center shadow-sm'>
      <p className='text-secondary'>{amenity}</p>
    </Col>
  );
}
