import { Row, Col } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { BsWifi } from 'react-icons/bs';

export default function FeaturesPage({ amenity }) {
  return (
    <Col lg={4}>
      <h6 className='p-4 bg-white'>{amenity}</h6>
    </Col>
  );
}
