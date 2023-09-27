// import React from 'react';
import PropTypes from 'prop-types';
// import {jsx} from 'react/jsx-runtime';

function Cards(props) {
// Check if props.cards is defined before mapping
  if (!props.cards) {
    return <div>No cards available.</div>;
  }
  return <div>
       <h1>Cards from the API</h1>
       {props.cards.map((card) => {
        return <div key={card.id}>
            <h2>{card.title}</h2>
            <h2>{card.target}</h2>
            <p>{card.user_story}</p>
        </div>
    })}
    </div>
}

// Prop type validation for the 'cards' prop
Cards.propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
        user_story: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default Cards



