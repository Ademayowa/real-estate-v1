import { GoLocation } from 'react-icons/go';

export default function AddressPage() {
  return (
    <div className='bg-white p-4 mt-5 shadow-sm'>
      <div className='d-flex'>
        <p className='bg-warning rounded p-2 me-2'>3 Beds</p>
        <p className='bg-success rounded p-2 me-2'>2 Bath</p>
        <p className='bg-danger rounded p-2'>800sqft</p>
      </div>

      <div>
        <h2 className='fs-6 fw-bold'>
          5689 Resot Relly Market, Montreal Canada, HAQC445
        </h2>
        <p className='text-secondary'>
          <GoLocation /> 778 Country St. Panama City, FL
        </p>
      </div>
    </div>
  );
}
