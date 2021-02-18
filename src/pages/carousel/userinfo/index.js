import React from 'react';
import Card from './Card';
import './style.scss';

const Userinfo = () => {
    return (
        <div className="card_wrapper">
            <Card src="https://static.india.com/wp-content/uploads/2015/11/089.jpg" />
            <Card src="https://images.pexels.com/photos/516541/pexels-photo-516541.jpeg" />
            <Card src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg"  />
        </div>
    );
};

export default Userinfo;
