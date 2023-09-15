

import { useState } from 'react';
import './Form.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';




const Form = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const changeInputHandler = (e) => {
        setError(false);
        setInputValue(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const trimInputValue = inputValue.trim();

        if (trimInputValue === '') {
            setError('task cant be empty');
            return;
        }

        const task = {
            id: uuidv4(),
            text: trimInputValue,
            done: false,
        }
        addTask(task);
        setInputValue('');
    }

    return (

        <form className="form" onSubmit={(e) => submitHandler(e)}>
            <input type="text"
                className="form-input"
                placeholder="What is the task for today?"
                value={inputValue}
                onChange={(e) => (changeInputHandler(e))} />
            <button className='input-btn' type="submit">Add task</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>

    )
}

Form.propTypes = {
    addTask: PropTypes.func.isRequired,
};



export default Form;
