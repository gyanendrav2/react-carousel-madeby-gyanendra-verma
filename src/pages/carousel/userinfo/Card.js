import React from 'react';
import PropTypes from 'prop-types';

const Card = ({src}) => {
    return (
        <div className="card">
            <img className="card_image" src={src} alt="" />
            <p className="card_tittle">
                I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.
            </p>
        </div>
    );
};

Card.propTypes = {
    src: PropTypes.string
};

export default Card;
