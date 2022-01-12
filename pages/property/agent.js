import Image from 'next/image';
import { FaFax } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import styles from '@/styles/Agent.module.css';

export default function AgentInfo() {
  return (
    <div className='bg-white p-4 mt-4 mt-lg-3 shadow-sm'>
      <h2 className='fs-4 fw-bold text-center'>Contact Agent</h2>

      <div className={styles.agent}>
        <Image src={`/images/agent.png`} width={80} height={80} />
      </div>

      <div className='text-center'>
        <h4>5689 Resot Relly, Canada</h4>
        <p>5689 Resot Relly, Canada</p>

        <div className='d-grid gap-2'>
          <Button variant='primary'>
            <FaFax className='me-2' />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}
