import aboutImg1 from '../../assets/about-1.jpg';
import aboutImg2 from '../../assets/about-2.jpg';
import dataImg1 from '../../assets/quality.svg';
import dataImg2 from '../../assets/delicious.svg';
import ScrollLink from '../link/ScrollLink';
import { FaCircleArrowRight } from 'react-icons/fa6';
import SectionTitle from '../title/SectionTitle';

import "./about.css"

const About = () => {
  return (
    <section className='about section'>
      <div className='about-container container grid'>
        <div className='about-shape grid'>
          <img src={aboutImg1} alt='' className='about-img' />

          <div className='about-experience'>
            <h3 className='about-no'>30+</h3>
            <span className='about-details'>Années d'expérience</span>
          </div>

          <img src={aboutImg2} alt='' className='about-img' />
        </div>

        <div className='about-content'>
          <SectionTitle
            subtitle='À propos de nous'
            title={
              <>
                Là, pour vous servir <span>une cuisine authentique</span>
              </>
            }
          />

          <p className='about-description'>
            Chez Mboa-Foods, nous vous proposons le meilleur de la cuisine camerounaise faite maison, avec des ingrédients frais et des recettes transmises de génération en génération. Notre mission : vous faire voyager à chaque bouchée, dans une ambiance chaleureuse et conviviale au cœur de Montpellier.
          </p>

          <div className='about-data grid'>
            <div className='about-item'>
              <div className='about-data-shape'>
                <img src={dataImg1} alt='Plat de qualité' className='about-data-img' />
              </div>

              <div>
                <h3 className='about-title'>Cuisine de qualité</h3>
                <p className='about-data-description'>
                  Nous privilégions des produits frais, locaux et soigneusement sélectionnés pour garantir une qualité irréprochable.
                </p>
              </div>
            </div>

            <div className='about-item'>
              <div className='about-data-shape'>
                <img src={dataImg2} alt='Plat délicieux' className='about-data-img' />
              </div>

              <div>
                <h3 className='about-title'>Plats savoureux</h3>
                <p className='about-data-description'>
                  Du ndolé au poisson braisé, chaque plat est préparé avec amour et passion pour vous offrir des saveurs inoubliables.
                </p>
              </div>
            </div>
          </div>

          <ScrollLink
            to='menu'
            name='Voir le menu'
            className='button'
            icon={<FaCircleArrowRight className='button-icon' />}
          />
        </div>

      </div>
    </section>
  );
};
export default About;
