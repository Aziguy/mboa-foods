import Logo from '../../assets/logo.png';
import { PiPaperPlaneRightBold } from 'react-icons/pi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6';
import { footerLinks } from '../../Data';
import ScrollLink from '../link/ScrollLink';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

import './footer.css';

const Footer = () => {
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <footer className='footer section'>
      <div className='footer-container container grid'>
        <div>
          <Link to='/' onClick={scrollTop} className='footer-logo'>
            <h2 className="home-subtitle nav-link" style={{ fontSize: '2.5rem' }}>Mboa-Foods</h2>
            {/* <img src={Logo} alt='' className='footer-logo-img' /> */}
          </Link>

          <p className='footer-description'>
            Découvrez la richesse de la cuisine camerounaise à Montpellier. Beignets, haricots, poisson braisé, ndolé et autres plats traditionnels vous attendent chez Mboa-Foods.
          </p>

          <p className='footer-newsletter'>Souscrire à notre Newsletter</p>

          <form action='' className='footer-form'>
            <FaEnvelope className='footer-form-icon' />

            <input
              type='email'
              placeholder='Email'
              className='footer-input'
            />

            <button className='footer-button button'>
              Souscrire <PiPaperPlaneRightBold className='button-icon' />
            </button>
          </form>
        </div>

        <div className='footer-group grid'>
          <div>
            <h3 className='footer-title'>Accès rapide</h3>

            <ul className='footer-links grid'>
              {footerLinks.map((footerLink, index) => {
                return (
                  <li className='footer-item' key={index}>
                    <ScrollLink
                      to={footerLink.section}
                      name={footerLink.label}
                      className='footer-link'
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className='footer-title'>Heure d'ouverture</h3>

            <ul className='footer-opening grid'>
              <li className='opening-item'>
                <span>Semaine</span>
                <span>09:00 - 20:00</span>
              </li>

              <li className='opening-item'>
                <span>Dim.</span>
                <span>09:30 - 21:00</span>
              </li>

              <li className='opening-item'>
                <span>Lun.</span>
                <span>10:00 - 22:00</span>
              </li>

              <li className='opening-item'>
                <span>Mar.</span>
                <span>10:30 - 21:00</span>
              </li>

              <li className='opening-item'>
                <span>Sam.</span>
                <span className='closed'>09:00 - 20:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='footer-title'>Contacts</h3>

            <div className='footer-contact grid'>
              <div className='footer-item'>
                <span className='footer-icon'>
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <h3 className='footer-subtitle'>Adresse</h3>
                  <p className='footer-info'>
                    320 rue Fra Angelico 34000 Montpellier
                  </p>
                </div>
              </div>

              <div className='footer-item'>
                <span className='footer-icon'>
                  <FaPhoneAlt />
                </span>

                <div>
                  <h3 className='footer-subtitle'>Téléphone</h3>
                  <p className='footer-info'>+33 (0) 7 69 17 47 10</p>
                </div>
              </div>

              <div className='footer-item'>
                <span className='footer-icon'>
                  <FaEnvelope />
                </span>

                <div>
                  <h3 className='footer-subtitle'>Email</h3>
                  <p className='footer-info'>contact@mboafood.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-bottom container'>
        <span className='footer-copy'>
          &#169; Copyright {new Date().getFullYear()} <span className='closed'>Mboa-Food</span> Tout droit réservé.
        </span>

        <div className='footer-socials'>
          <a href='/' target='_blank' className='footer-social-link'>
            <FaFacebookF />
          </a>

          <a href='/' target='_blank' className='footer-social-link'>
            <FaXTwitter />
          </a>

          <a href='/' target='_blank' className='footer-social-link'>
            <FaLinkedinIn />
          </a>

          <a href='/' target='_blank' className='footer-social-link'>
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
