export default function AboutPropertyPage({ description }) {
  return (
    <div className='bg-white p-4 mt-4 shadow-sm'>
      <h2 className='fs-6 fw-bold pt-3 pb-3'>About Property</h2>
      <p className='text-secondary'>{description}</p>
    </div>
  );
}
