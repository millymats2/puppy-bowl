import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {TextField} from '@mui/material';
import {navBar} from './NavBar';

import { createPuppy} from '../ajaxHelpers/puppies';

export default function NewPlayerForm() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');

    return (
        <div className='container'>
            <form 
            onSubmit={async(e) => {
                e.preventDefault();
                const result = await createPuppy (name, breed);
                navigate("/");
            }}
            >
                <h2>Create Puppy</h2>
                <label>Name:</label>
                <TextField
                value={name}
                type="text"
                onChange={(e) => {
                    setName(e.target.value);
                }}
                />
                <label>Breed:</label>
                <TextField
                value={breed}
                type="text"
                onChange={(e) => {
                    setBreed(e.target.value);
                }}
                />
                <button type= "submit">Submit Form</button>
            </form>
        </div>
    )
}