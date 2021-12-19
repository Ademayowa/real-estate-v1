import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { BiHome } from 'react-icons/bi';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand='md' className='shadow-sm bg-white'>
      <Container>
        <Link href='/'>
          <a className='me-4' className={styles.home}>
            <BiHome />
            {'  '}
            Real Estate
          </a>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>

          <Nav>
            <Link href='/'>
              <a className='me-4'>Home</a>
            </Link>
            <Link href='/properties'>
              <a className='me-4'>Properties</a>
            </Link>
            <Link href='/search'>
              <a>Search</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
