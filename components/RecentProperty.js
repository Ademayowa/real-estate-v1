import { Container, Row, Col, Card, Text } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { FaBed, FaBath } from 'react-icons/fa';
import { TiArrowMove } from 'react-icons/ti';
import styles from '@/styles/RecentProperty.module.css';

export default function RecentProperty() {
  return (
    <Container>
      <Row>
        <Col lg={12} className='text-center mt-5 mb-3'>
          <h2 className='fw-bold'>Recent Listed Property</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos perspiciatis.
          </p>
        </Col>

        <Col md={6} lg={4}>
          <Card className='mb-4'>
            <Image
              src={`/images/property.jpg`}
              width={200}
              height={200}
              objectFit='cover'
              className={styles.rounded}
            />
            <Card.Body>
              <div className='d-flex'>
                <p className='bg-warning p-2 rounded me-2'>6 Network</p>
                <p className='bg-success p-2 rounded'>Family</p>
              </div>
              <Card.Title className='fw-bold fs-6'>
                7012 Shine Sehu Street, Liverpool London, LC345AC
              </Card.Title>
              <Card.Text className={styles.textPro}>
                <FaBed className='me-1' /> 3 beds
                <FaBath className='ms-4 ms-lg-5 me-1' /> 1 Bath
                <TiArrowMove className='ms-4 ms-lg-5 me-1' /> 800sqft
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className={styles.cFooter}>
                <h6 className='mt-1'>$98,000</h6>
                <Link href='#'>
                  <a className='btn btn-primary btn-sm'>View Details</a>
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className='mb-4'>
            <Image
              src={`/images/property.jpg`}
              width={200}
              height={200}
              objectFit='cover'
              className={styles.rounded}
            />
            <Card.Body>
              <div className='d-flex'>
                <p className='bg-warning p-2 rounded me-2'>6 Network</p>
                <p className='bg-success p-2 rounded'>Family</p>
              </div>
              <Card.Title className='fw-bold fs-6'>
                7012 Shine Sehu Street, Liverpool London, LC345AC
              </Card.Title>
              <Card.Text className={styles.textPro}>
                <FaBed className='me-1' /> 3 beds
                <FaBath className='ms-4 ms-lg-5 me-1' /> 1 Bath
                <TiArrowMove className='ms-4 ms-lg-5 me-1' /> 800sqft
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className={styles.cFooter}>
                <h6 className='mt-1'>$12,000</h6>
                <Link href='#'>
                  <a className='btn btn-primary btn-sm'>View Details</a>
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className='mb-4'>
            <Image
              src={`/images/property.jpg`}
              width={200}
              height={200}
              objectFit='cover'
              className={styles.rounded}
            />
            <Card.Body>
              <div className='d-flex'>
                <p className='bg-warning p-2 rounded me-2'>6 Network</p>
                <p className='bg-success p-2 rounded'>Family</p>
              </div>
              <Card.Title className='fw-bold fs-6'>
                7012 Shine Sehu Street, Liverpool London, LC345AC
              </Card.Title>
              <Card.Text className={styles.textPro}>
                <FaBed className='me-1' /> 3 beds
                <FaBath className='ms-4 ms-lg-5 me-1' /> 1 Bath
                <TiArrowMove className='ms-4 ms-lg-5 me-1' /> 800sqft
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className={styles.cFooter}>
                <h6 className='mt-1'>$7,000</h6>
                <Link href='#'>
                  <a className='btn btn-primary btn-sm'>View Details</a>
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
