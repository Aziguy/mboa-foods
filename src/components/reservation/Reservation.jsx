import { useState } from 'react';
import {
  FaRegUser,
  FaRegEnvelope,
  FaPhone,
  FaUserGroup,
  FaCalendarDays,
  FaClock,
  FaCircleArrowRight,
} from 'react-icons/fa6';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './reservation.css';
import { ValueContainer } from 'react-select/animated';

const optionsGuest = [
  { value: '', label: 'Nombre d\'invité' },
  { value: '1', label: '01' },
  { value: '2', label: '02' },
  { value: '3', label: '03' },
  { value: '4', label: '04' },
  { value: '5', label: '05' },
];

const optionsTiming = [
  { value: '', label: 'L\'heure' },
  { value: '1', label: '08:00 - 10:00' },
  { value: '2', label: '09:30 - 11:30' },
  { value: '3', label: '10:00 - 12:00' },
  { value: '4', label: '11:30 - 13:30' },
  { value: '5', label: '12:00 - 14:00' },
  { value: '6', label: '13:30 - 15:30' },
  { value: '7', label: '15:30 - 17:30' },
  { value: '8', label: '16:00 - 18:00' },
  { value: '9', label: '17:30 - 19:30' },
];

const customStyles = {
  valueContainer: (provided) => ({
    ...provided,
    padding: '0.75rem 0 0.75rem 3rem',
  }),

  control: () => ({
    display: 'flex',
  }),

  input: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0,
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'var(--first-color)' : 'var(--title-color)',
    backgroundColor: state.isFocused ? 'var(--container-color)' : 'transparent',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'var(--text-color)',
    transform: state.isFocused ? 'rotate(-180deg)' : 'rotate(0)',
    transition: 'transform 0.5s',
  }),

  menuList: (provided) => ({
    ...provided,
    maxHeight: '210px',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--first-color) var(--container-color)',
  }),
};

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className='reservation reservation-container container'>
      <form action='' className='reservation-form grid'>
        <div className='reservation-group grid'>
          <h3 className='reservation-title'>Réserver votre table</h3>
          <div className='reservation-div'>
            <FaRegUser className='reservation-icon' />
            <input type='text' placeholder='Nom complet' className='reservation-input' />
          </div>
          <div className='reservation-div'>
            <FaRegEnvelope className='reservation-icon' />
            <input type='email' placeholder='Email' className='reservation-input' />
          </div>
          <div className='reservation-div'>
            <FaPhone className='reservation-icon' />
            <input type='tel' placeholder='Téléphone' className='reservation-input' />
          </div>
        </div>
        <div className='reservation-group grid'>
          <div className='reservation-div'>
            <FaUserGroup className='reservation-icon' />
            <Select options={optionsGuest} styles={customStyles} defaultValue={optionsGuest[0]} />
          </div>
          <div className='reservation-div'>
            <FaCalendarDays className='reservation-icon' />
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='reservation-input' />
          </div>
          <div className='reservation-div'>
            <FaClock className='reservation-icon' />
            <Select options={optionsTiming} styles={customStyles} defaultValue={optionsTiming[0]} />
          </div>
          <button className='button reservation-button'>
            Envoyer <FaCircleArrowRight className='button-icon' />
          </button>
        </div>
      </form>
    </section>
  );
};
export default Reservation;
