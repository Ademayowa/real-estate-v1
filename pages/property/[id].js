import { Container, Row, Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '@/styles/SingleProperty.module.css';
import Address from './address';
import About from './about';
import Features from './features';

export default function SingleProperty() {
  return (
    <Layout title='Single Property'>
      <section className={styles.singleProperty}>
        <Container fluid>
          {/* image: use carousel slider */}
          <Image
            src={`/images/property.jpg`}
            width={1500}
            height={500}
            objectFit='cover'
          />
        </Container>

        <Container>
          <Row>
            <Col lg={7}>
              <Address />
              <About />
              <Features />
              {/* amenities */}
            </Col>

            <Col lg={5}>{/*  Agent info here */}</Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
