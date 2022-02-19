import { Container, Row, Col, Button } from 'react-bootstrap';
import { baseUrl, fetchApi } from '@/utils/fetchApi';
import Layout from '@/components/Layout';
import Property from '@/components/Property';
import Hero from '@/components/Hero';
import RecentProperty from '@/components/RecentProperty';
import Title from '@/components/Title';
import styles from '@/styles/Home.module.css';

export default function HomePage({ propertyForRent, propertyForSale }) {
  return (
    <Layout title='Real Estate | Home'>
      <div className={styles.wrapper}>
        <Hero
          title='Find Your Dream House'
          info='Buy or rent properties of any type in the UAE.'
        />
        <Container className={styles.properties}>
          <Title
            title='Recent Properties'
            info='We have properties for rent and sale anywhere in the UAE'
          />
          <Row>
            {propertyForRent.map((property) => (
              <RecentProperty key={property.id} property={property} />
            ))}

            {propertyForSale.map((property) => (
              <RecentProperty key={property.id} property={property} />
            ))}
          </Row>

          <div className='text-center mt-4 mb-4'>
            <Button size='lg'>More Properties</Button>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=3`
  );

  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=3`
  );

  return {
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale: propertyForSale?.hits,
    },
  };
}
