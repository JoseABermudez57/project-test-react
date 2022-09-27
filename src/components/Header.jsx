import "../assets/styles/header.css";
import LogoHeader from  '/img/mexico.svg'

function Header() {
  return (
    <center>
      <header>
          <img src={LogoHeader} alt="Logo oficial" />          
          <h1>MEXUM</h1>
      </header>
    </center>
  );
}

export default Header;
