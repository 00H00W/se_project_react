import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Developed by Sam Branham</p>
      <p className="footer__text">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
