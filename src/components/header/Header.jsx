import { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import { navLinks } from '../../Data';
import ScrollLink from '../link/ScrollLink';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { CgMenuLeft } from 'react-icons/cg';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

import './header.css';

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  });

  return (
    <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
      <nav className='nav container'>
        <Link to='/' onClick={scrollTop} className='nav-logo'>
          <h2 className="home-subtitle nav-link" style={{ fontSize: '3.2rem' }}>Mboa-Foods</h2>
          {/* <img src={Logo} alt='' className='nav-logo-img' /> */}
        </Link>

        <div className={`${showMenu ? 'show-menu' : ''} nav-menu`}>
          <ul className='nav-list'>
            {navLinks.map((navLink, index) => {
              return (
                <li className='nav-item' key={index}>
                  <ScrollLink
                    to={navLink.section}
                    name={navLink.label}
                    extraProps={{ spy: true }}
                    className='nav-link'
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className='nav-buttons'>
          <ScrollLink
            to='reservation'
            name='Réservez'
            extraProps={{ offset: -150 }}
            className='button'
            icon={<FaCircleArrowRight className='button-icon' />}
          />

          <CgMenuLeft
            onClick={() => setShowMenu(!showMenu)}
            className='nav-toggler'
          />
        </div>
      </nav>
    </header>
  );
};
export default Header;
