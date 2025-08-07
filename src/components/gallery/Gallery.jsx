import SectionTitle from '../title/SectionTitle';
import { gallery } from '../../Data';
import { RiAddLargeLine } from 'react-icons/ri';

import './gallery.css';

const Gallery = () => {
  return (
    <section className='gallery section'>
      <SectionTitle
        subtitle='Notre gallerie photos'
        title={
          <>
            Quelques <span>Photos</span> de notre <span>Gallerie</span>
          </>
        }
      />

      <div className='gallery-container container'>
        {gallery.map((gallery, index) => {
          return (
            <div className='gallery-item' key={index}>
              <img src={gallery} alt='' className='gallery-img' />
              <a href={gallery} className='gallery-link' target="_blank" rel="noopener noreferrer">
                <RiAddLargeLine />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Gallery;
