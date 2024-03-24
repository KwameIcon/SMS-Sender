import React, { useEffect, useState } from 'react';
import './home-header.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import {Link} from 'react-router-dom';

const HomeHeader = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }

    const formattedDate = `${day} / ${month} / ${year}`;
    setDate(formattedDate);
  }, []);

  return (
    <section className="home-container">
      <header className="header">
        <h1 className="header-title">Welcome to SMS-Sender</h1>
        <div>
          <span className="header-date">{date}</span>
          <Link to={'/dashboard/send-message'}>
            <FontAwesomeIcon icon={faPaperPlane} className="header-icon"/>
          </Link>
        </div>
      </header>
    </section>
  );
};

export default HomeHeader;