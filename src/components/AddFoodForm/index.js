import { Divider, Input } from 'antd';
import { useState } from 'react'

// Iteration 4
function AddFoodForm({ allFoods, setAllFoods }) {

    const [form, setForm] = useState({
        name: '',
        calories: '',
        image: '',
        servings: ''
    })

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setAllFoods([...allFoods, form])
        setForm({
            name: '',
            calories: '',
            image: '',
            servings: ''
        })
    }

    return (
        <form>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={form.name} type="text" onChange={handleChange} name="name" />

            <label>Image</label>
            <Input value={form.image} type="text" onChange={handleChange} name="image" />


            <label>Calories</label>
            <Input value={form.calories} type="text" onChange={handleChange} name="calories" />


            <label>Servings</label>
            <Input value={form.servings} type="text" onChange={handleChange} name="servings" />


            <button type="submit" onClick={handleSubmit}>Create</button>
        </form>
    );
}

export default AddFoodForm;
