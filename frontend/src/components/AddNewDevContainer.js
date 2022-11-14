import React from 'react';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

function AddNewDevContainer(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleFetch = props.handleFetch;
    const [selectedBootcamp, setSelectedBootcamp] = useState('JavaScript');
    const [errorMessage, setErrorMessage] = useState(false)

    const handleFirstNameChange = event => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = event => {
        setLastName(event.target.value);
    };
    const handleClick = event => {
        event.preventDefault();
        if (firstName && lastName) {
            const dataToPost = { name: firstName + ' ' + lastName }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToPost)
            };
            fetch(`/bootcamps/${selectedBootcamp}/`, requestOptions)
                .then(response => response.json())
                .then(handleFetch())
        }
        else {
            setErrorMessage(true)
            setTimeout(() => setErrorMessage(false), 1000)
        }
        setFirstName('')
        setLastName('')
    };
    function handleSelectChange(event) {
        setSelectedBootcamp(event.target.value);
    }
    return (
        <form className='selectBootcamp' id='addDeveloperForm'>
            {errorMessage && <ErrorMessage />}

            <h2>👩‍💻 Add new developer</h2>
            <label>
                First name:
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleFirstNameChange}
                    value={firstName}
                    autoComplete="off"
                    className='addDeveloperFirstNameInput'

                />
            </label>
            <label>
                Last name:
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleLastNameChange}
                    value={lastName}
                    autoComplete="off"
                    className='addDeveloperLastNameInput'
                />
            </label>
            <select value={selectedBootcamp} onChange={handleSelectChange}>
                <option value="JavaScript">JavaScript</option>
                <option value=".NET">.NET</option>
                <option value="Java">Java</option>
            </select>
            <button onKeyPress={handleClick} onClick={handleClick} className='btnAddDeveloper' id='addDeveloperBtn'> Add developer 👆</button>
        </form>
    )
}

export default AddNewDevContainer