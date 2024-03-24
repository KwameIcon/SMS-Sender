import React from 'react';

import './phone-like.styles.scss'


const PhoneLikeComponent = ({className, children}) => (
  
        <div className= {`${className} phone-like-container`}>{children}</div>
  );

export default PhoneLikeComponent;