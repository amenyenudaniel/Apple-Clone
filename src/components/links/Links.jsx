import React from 'react';
import './links.css';
import { FaGreaterThan } from 'react-icons/fa';
const Links = ({ paragraph1, paragraph2}) => {
  return (
    <div className='app__links'>
      <a href='/'>{paragraph1} <FaGreaterThan  fontSize={14} className='greater--than'/></a>
      <a href='/'>{paragraph2} <FaGreaterThan  fontSize={14} className='greater--than'/></a>
    </div>
  )
}

export default Links;