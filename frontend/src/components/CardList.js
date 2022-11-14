import React from 'react';
import Card from './Card';

function CardList(props) {
    const data = props.data
    const nameOfThelist = props.nameOfThelist
    let cardListClass = 'cardList'
    if (nameOfThelist === 'Developers') {
        cardListClass += ' --dev';
    }
    return (
        <div className={cardListClass}>
            <h4>{nameOfThelist}:</h4>
            {data.map((person, i) => <Card
                key={i}
                id={person.id}
                name={person.name}
                nameOfThelist={nameOfThelist}
                bootcamp={props.bootcamp}
                handleFetch={props.handleFetch} ></Card>)}
        </div>

    )
}

export default CardList