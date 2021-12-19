import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Property from '@/components/Property';
import styles from '@/styles/Home.module.css';

export default function HomePage() {
  return (
    <Layout title='Real Estate | Home'>
      <Container>
        <Row>
          <Col lg={12}>
            <h2>Hero</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const propertyForRent = await fetchApi(
//     `${baseUrl}/properties/list?area=Oxford&category=residential&page_size=6`
//   );

//   return {
//     props: {
//       propertyForRent: propertyForRent.listing,
//     },
//   };
// }
