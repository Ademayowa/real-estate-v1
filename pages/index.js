import { Container, Row, Col } from 'react-bootstrap';
import { baseUrl, fetchApi } from '@/utils/fetchApi';
import Layout from '@/components/Layout';
import Property from '@/components/Property';
import Hero from '@/components/Hero';
import RecentProperty from '@/components/RecentProperty';
import styles from '@/styles/Home.module.css';

export default function HomePage({ propertyForRent, propertyForSale }) {
  return (
    <Layout title='Real Estate | Home'>
      <div className={styles.wrapper}>
        <Hero
          title='Find Your Dream House'
          info='Buy or rent properties where ever you want in the US'
        />

        {/* <Search /> */}
        <Container>
          <h2 className='fw-bold text-center mt-5'>Recent Listed Property</h2>
          <p className='text-center fs-5 mb-5'>
            We have recent properties for rent
          </p>
          <Row>
            {propertyForRent.map((property) => (
              <RecentProperty key={property.id} property={property} />
            ))}
          </Row>

          <p className='text-center fs-5 mb-5'>
            We have recent properties for sale
          </p>
          <Row>
            {propertyForSale.map((property) => (
              <RecentProperty key={property.id} property={property} />
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );

  return {
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale: propertyForSale?.hits,
    },
  };
}
