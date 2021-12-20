import { Container, Row, Col } from 'react-bootstrap';
import Layout from '@/components/Layout';
import Property from '@/components/Property';
import Hero from '@/components/Hero';
import styles from '@/styles/Home.module.css';
import Search from './search';

export default function HomePage() {
  return (
    <Layout title='Real Estate | Home'>
      <div className={styles.wrapper}>
        <Hero
          title='Search Your Next Home.'
          info='Find, buy or sell property located in your local city.'
        />
        <Search />
      </div>
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
