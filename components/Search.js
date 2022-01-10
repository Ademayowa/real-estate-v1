import {
  Container,
  Row,
  Col,
  Form,
  Group,
  Label,
  Control,
} from 'react-bootstrap';
import styles from '@/styles/Search.module.css';

export default function SearcPage() {
  return (
    <section className={styles.search}>
      <Form className='container pt-5 bg-white pb-5 mt-5'>
        <Row className='mb-2'>
          <Form.Group
            // as={Col}
            controlId='formGridState'
            className={styles.test}
          >
            <Form.Label>Furnished</Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId='formGridState'
            className={styles.test}
          >
            <Form.Label>Property Type</Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            // as={Col}
            controlId='formGridState'
            className={styles.test}
          >
            <Form.Label>Baths</Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className='mb-5'>
          <Form.Group
            as={Col}
            controlId='formGridState'
            className={styles.test}
          >
            <Form.Label>Purpose</Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            // as={Col}
            controlId='formGridState'
            className={styles.test}
          >
            <Form.Label>Daily</Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            // as={Col}
            controlId='formGridState'
            className={styles.test}
          >
            <Form.Label>Max Price</Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>
    </section>
  );
}
