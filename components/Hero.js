import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Hero.module.css';

export default function HeroPage({ title, info }) {
  return (
    <div className={styles.hero}>
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  );
}
