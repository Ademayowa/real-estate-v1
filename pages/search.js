import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SearchFilters from '@/components/SearchFilters';
// import Property from '@/components/Property';
import { baseUrl, fetchApi } from '@/utils/fetchApi';
import Layout from '@/components/Layout';
import styles from '@/styles/Search.module.css';
import RecentProperty from '@/components/RecentProperty';

export default function SearchPage({ properties }) {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Layout>
      <Container className='pt-5 bg-secondary px-5'>
        {/* fetch query in the url either: for-rent or for-sale */}
        <h2>{router.query.purpose}</h2>
        <SearchFilters />

        <div className='d-flex flex-wrap px-4 pt-5'>
          {properties.map((property) => (
            <RecentProperty property={property} key={property.id} />
          ))}
        </div>
        {/* if search result isn't found */}
        {properties.length === 0 && (
          <p className='text-center fs-2'>No result found</p>
        )}
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
