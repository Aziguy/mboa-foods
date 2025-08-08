import { ImWhatsapp } from "react-icons/im";
import Stars from '../stars/Stars';

const MenuItem = ({ menuItems }) => {
  const formatNumber = (num) =>
    new Intl.NumberFormat('en', {
      notation: 'compact',
      compactDisplay: 'short',
    }).format(num);

  const phoneNumber = "33769174710";

  return (
    <>
      {menuItems.map(
        ({ id, img, title, description, price, stars, reviews }) => {
          const message = `*${title}*
          Prix: ${price}€
          Image: ${window.location.origin}${img}

          Bonjour, je souhaiterais commander ce plat.`;

          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          return (
            <article className='menu-item' key={id}>
              <div className='menu-data'>
                <img src={img} alt='' className='menu-img' />
                <span className='menu-price'>{price}€</span>
              </div>

              <h3 className='menu-title'>{title}</h3>
              <p className='menu-description'>{description}</p>

              <div className='menu-rate'>
                <Stars stars={stars} />
                <span>
                  {stars} ({formatNumber(reviews)})
                </span>
                <a href={whatsappUrl} target="_blank" title="Commander ce plat" rel="noopener noreferrer">
                  <ImWhatsapp style={{color: '#075e54', fontSize: '1.2rem'}}/>
                </a>
              </div>
            </article>
          );
        }
      )}
    </>
  );
};
export default MenuItem;
