import SectionTitle from '../title/SectionTitle';
import MenuList from './MenuList';
import MenuItem from './MenuItem';
import { menu } from '../../Data';
import { useState } from 'react';

import './menu.css';

const allMenuList = ['Tous', ...new Set(menu.map((menu) => menu.category))];

const Menu = () => {
  const [menuList, setMenuList] = useState(allMenuList);
  const [menuItems, setMenuItems] = useState(menu);

  const filterItems = (category) => {
    if (category === 'Tous') {
      setMenuItems(menu);
      return;
    }

    const newMneuItems = menu.filter((item) => item.category === category);
    setMenuItems(newMneuItems);
  };

  return (
    <section className='menu section'>
      <div className='container'>
        <div className='menu-header'>
          <SectionTitle
            subtitle='Nos menus'
            title={
              <>
                Nos différents <span>menus</span>
              </>
            }
          />

          <ul className='menu-list'>
            <MenuList menuList={menuList} filterItems={filterItems} />
          </ul>
        </div>

        <div className='menu-container grid'>
          <MenuItem menuItems={menuItems} />
        </div>
      </div>
    </section>
  );
};
export default Menu;
