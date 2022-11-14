import React from 'react'
import CardList from './CardList'

function Bootcamp(props) {
    const data = props.data
    const DEV_KEY = 'Developers'
    const INSTR_KEY = 'Instructors'
    return (
        <div className='bootcamp'>
            <h3>{data.bootcamp}</h3>
            <CardList key={1} data={data[INSTR_KEY.toLocaleLowerCase()]} nameOfThelist={INSTR_KEY} bootcamp={data.bootcamp} handleFetch={props.handleFetch}> </CardList>
            <CardList key={2} data={data[DEV_KEY.toLocaleLowerCase()]} nameOfThelist={DEV_KEY} handleFetch={props.handleFetch} bootcamp={data.bootcamp}> </CardList>
        </div>
    )
}

export default Bootcamp