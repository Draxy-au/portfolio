import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <p>© 2021 <Link href='https://www.linkedin.com/in/william-j-hamilton/'><a target='_blank'>William Hamilton</a></Link></p>
  </div>
)

export default Footer