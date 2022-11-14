import React, { useState } from 'react'

function Card(props) {
    const name = props.name
    const nameOfThelist = props.nameOfThelist
    const bootcamp = props.bootcamp
    const id = props.id
    const handleFetch = props.handleFetch
    let cardClass = 'card'
    if (nameOfThelist === 'Developers') {
        cardClass += ' toggled';
    }
    function hideUnhideButton() {
        if (nameOfThelist === 'Developers') {
            setIsVisible(!isVisible)
        }
    }
    const deleteDeveloper = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`/bootcamps/${bootcamp}/developers/${id}/`, requestOptions)
            .then(response => response.json())
            .then(handleFetch())
    }
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className={cardClass} onClick={hideUnhideButton}>
            <p>{name}</p>
            {isVisible && <span className='deleteBtn' onClick={deleteDeveloper}>Delete</span>}
        </div>
    )
}

export default Card