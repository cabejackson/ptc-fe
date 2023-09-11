import React from 'react'

function Cards(props) {
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

export default Cards



