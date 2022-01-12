import { Container, Row, Col } from 'react-bootstrap';
import { baseUrl, fetchApi } from '@/utils/fetchApi';
import Layout from '@/components/Layout';
import Property from '@/components/Property';
import Hero from '@/components/Hero';
import RecentProperty from '@/components/RecentProperty';
import styles from '@/styles/Home.module.css';
import Title from '@/components/Title';

export default function HomePage({ propertyForRent, propertyForSale }) {
  return (
    <Layout title='Real Estate | Home'>
      <div className={styles.wrapper}>
        <Hero
          title='Find Your Dream House'
          info='Buy or rent properties where ever you want in the US'
        />

        <Container>
          <Title
            title='Properties For Rent'
            info='We have recent properties for rent'
          />
          <Row>
            {propertyForRent.map((property) => (
              <RecentProperty key={property.id} property={property} />
            ))}
          </Row>

          <Title
            title='Properties For Sale'
            info='We have recent properties for sale'
          />
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
