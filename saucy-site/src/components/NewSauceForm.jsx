import React, { useState } from 'react';

function NewSauceForm(props) {

    //store the sauce name in state
    const [nameState, setNameState]= useState("")

    //update name state when an input changes
    const handleChange = (e) => {
        console.log(nameState)
        setNameState(e.target.value)
    }

    //handle form submission
    const handleSubmit = (e) => {
        //prevent the page from refreshing on submit
        e.preventDefault()
        console.log("Submitted")
        setNameState("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Hot Sauce Name:</label>
            <input type="text" id="name" name="name" value={nameState} required onChange={handleChange}/><br/>
            <label htmlFor="image">Image URL:</label>
            <input type="url" id="image" name="image" required/><br/>
            <button type="submit">Submit a new hot sauce</button>
        </form>
    );
}

export default NewSauceForm;