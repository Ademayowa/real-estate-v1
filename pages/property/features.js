import { Container, Row, Col } from 'react-bootstrap';
import { FaBed, FaHome, FaCar, FaCable } from 'react-icons/fa';
import { BsWifi } from 'react-icons/bs';

export default function FeaturesPage() {
  return (
    <div className='bg-white p-4 mt-4 shadow-sm'>
      <h2 className='fs-6 fw-bold'>Features of Property</h2>
      <div>
        <ul className='text-secondary'>
          <li>
            <FaBed className='me-1' /> 4 Bedrooms
          </li>
          <li>
            <FaHome className='me-1' /> 1 Living room
          </li>
          <li>
            <FaCar className='me-1' /> Car Parking
          </li>
          <li>
            <BsWifi className='me-1' /> Wifi
          </li>
        </ul>
      </div>
    </div>
  );
}
