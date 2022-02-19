import { Container, Row, Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '@/styles/SingleProperty.module.css';
import Address from './address';
import About from './about';
import Features from './features';
import AgentInfo from './agent';
import { baseUrl, fetchApi } from '@/utils/fetchApi';

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
    agency,
    contactName,
    verification,
    phoneNumber,
  },
}) {
  return (
    <Layout title={`${rooms}Bedroom | Real Estate`}>
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
            <Col lg={7} className='mt-4'>
              <Row className='mx-auto bg-white shadow-sm mt-4'>
                <h2 className='fs-6 fw-bold pt-4 pb-4 border-bottom px-4'>
                  Features of Property
                </h2>
                {amenities.map((item) =>
                  item.amenities.map((amenity) => (
                    <Features key={amenity.text} amenity={amenity.text} />
                  ))
                )}
              </Row>

              <About description={description} />
            </Col>

            <Col lg={5} className='ps-lg-5'>
              {/* <Address
                baths={baths}
                rooms={rooms}
                baths={baths}
                area={area}
                price={price}
                purpose={purpose}
                rentFrequency={rentFrequency}
              /> */}
              <AgentInfo
                agency={agency.name}
                contactName={contactName}
                verification={verification}
                phoneNumber={phoneNumber.mobile}
              />
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
