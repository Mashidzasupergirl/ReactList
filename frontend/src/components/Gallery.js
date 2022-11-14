import React from 'react';
import Bootcamp from './Bootcamp';
import { useState, useEffect } from 'react';

function Gallery(props) {
    const data = props.data
    const [selectedFilter, setSelectedFilter] = useState('initialState');
    const [isAll, setIsAll] = useState(true);

    function handleSelectChange(event) {
        setSelectedFilter(event.target.value);
        setIsAll(event.target.value === 'all')
    }
    return (
        <>
            <select value={selectedFilter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="JavaScript">JavaScript</option>
                <option value=".NET">.NET</option>
                <option value="Java">Java</option>
            </select>
            <h2>Gallery</h2>
            <div className='gallery'>
                {data
                    .filter(arr => arr.bootcamp === selectedFilter || isAll)
                    .map((bootcamp, i) => <Bootcamp data={bootcamp} key={i} handleFetch={props.handleFetch}> </Bootcamp>)}
            </div>
        </>
    )
}
export default Gallery