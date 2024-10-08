import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      &copy;&nbsp;<a href="https://">Space Jelly</a>, {new Date().getFullYear()}
    </footer>
  )
}

export default Footer;