import { Container, Row, Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '@/styles/SingleProperty.module.css';
import Address from './address';
import About from './about';
import Features from './features';
import AgentInfo from './agent';
import { baseUrl, fetchApi } from '@/utils/fetchApi';
// import DefaultImage from '@/assets/images/';

export default function SingleProperty({
  property: {
    area,
    rooms,
    baths,
    price,
    purpose,
    rentFrequency,
    description,
    amenities,
  },
}) {
  return (
    <Layout title='Single Property'>
      <section className={styles.singleProperty}>
        <Container fluid>{/* image: use carousel slider */}</Container>

        {/* <Image
          src={image_150_113_url}
          width={400}
          height={260}
          objectFit='cover'
        /> */}

        <Container>
          <Row>
            <Col lg={7}>
              <Address
                baths={baths}
                rooms={rooms}
                baths={baths}
                area={area}
                price={price}
                purpose={purpose}
                rentFrequency={rentFrequency}
              />

              <h2 className='fs-6 fw-bold mt-5 mb-3'>Features of Property</h2>
              <Row>
                {amenities.map((item) =>
                  item.amenities.map((amenity) => (
                    <Features key={amenity.text} amenity={amenity.text} />
                  ))
                )}
              </Row>

              <About description={description} />
            </Col>

            <Col lg={5} className='ps-lg-5'>
              <AgentInfo />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      property: data,
    },
  };
}
