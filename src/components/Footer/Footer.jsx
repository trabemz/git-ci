import {React} from 'react';
import Link from '../Link/Link';
import Copyright from '../Copyright/Copyright';

import './Footer.css'

export default function Footer() {
  const links = [
    { title: 'Support', url: '/'},
    { title: 'Learning', url: '/'},
    { title: 'Русская версия', url: '/'}
  ];
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <ul className='footer__links'>
          {links.map((link) =>{
            return <Link to={link.url} key={link.title} className='footer__link'>{link.title}</Link>
          })}
        </ul>
        <Copyright className='footer__copyright'>Anastasia Zamkovskaya</Copyright>
      </div>
    </footer>
  );
}