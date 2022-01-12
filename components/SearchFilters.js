import {
  Container,
  Row,
  Col,
  Form,
  Group,
  Label,
  Control,
  Spinner,
  Button,
  Text,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import Layout from './Layout';
import { useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '@/utils/filterData';
import { baseUrl, fetchApi } from '@/utils/fetchApi';

export default function SearchFilters() {
  const [filters, setFilters] = useState(filterData);

  const [searchTerm, setSearchTerm] = useState('');
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      // add only combined search params in the URL
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  useEffect(() => {
    if (searchTerm !== '') {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(
          `${baseUrl}/auto-complete?query=${searchTerm}`
        );
        setLoading(false);
        setLocationData(data?.hits);
      };

      fetchData();
    }
  }, [searchTerm]);

  return (
    <Form className='bg-white rounded px-5'>
      <Form.Group>
        {filters.map((filter) => (
          <div key={filter.queryName}>
            <Form.Label className='mt-2 mb-2'>{filter.placeholder}</Form.Label>

            <Form.Select
              // placeholder={filter.placeholder}
              onChange={(e) =>
                // fetch all filter properties on d UI
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter.items.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </div>
        ))}
      </Form.Group>

      {/* <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
        <FormControl
          placeholder='Username'
          aria-label='Username'
          aria-describedby='basic-addon1'
        />
      </InputGroup> */}

      <div>
        <Button onClick={() => setShowLocations(!showLocations)}>
          Search Location
        </Button>
        {showLocations && (
          <div>
            <InputGroup className='mb-3'>
              <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
              <FormControl
                placeholder='Type Here'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>

            {searchTerm !== '' && (
              <MdCancel onClick={() => setSearchTerm('')} />
            )}
            {loading && <Spinner />}
            {showLocations && (
              <div>
                {locationData?.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}
                  >
                    <p>{location.name}</p>
                  </div>
                ))}
                {!loading && !locationData?.length && (
                  <div>
                    <p>Waiting to search!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </Form>
  );
}
