import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Property from '@/components/Property';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <Layout title='Real Estate | Home'>
      <Hero
        title='Search Your Next Home.'
        info='Find, buy or sell property located in your local city.'
      />
      {/* Search Form */}
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
