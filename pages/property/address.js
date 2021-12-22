import { GoLocation } from 'react-icons/go';
import millify from 'millify';

export default function AddressPage({
  baths,
  rooms,
  area,
  price,
  purpose,
  rentFrequency,
}) {
  return (
    <div className='bg-white p-4 mt-5 shadow-sm'>
      <div className='d-flex'>
        <p className='bg-warning rounded p-2 me-2'>
          {price} AED
          {rentFrequency && `/${rentFrequency}`}
        </p>
        <p className='bg-success rounded p-2 me-2'>{rooms} Bedroom</p>
        <p className='bg-danger rounded p-2'>{purpose}</p>
      </div>

      {/* <div>
        <h2 className='fs-6 fw-bold'>test</h2>
        <p className='text-secondary'>
          <GoLocation /> 778 Country St. Panama City, FL
        </p>
      </div> */}
    </div>
  );
}
