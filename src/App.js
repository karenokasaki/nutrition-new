import foods from './foods.json'
import { useState } from 'react'

import { Row, Divider, Button, Result } from 'antd';
import './App.css';

import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import FoodBox from './components/FoodBox';

function App() {

  const [allFoods, setAllFoods] = useState(foods)
  const [showForm, setShowForm] = useState(true)
  const [search, setSearch] = useState('')

  function deleteFood(select) {
    setAllFoods(allFoods.filter(food => {
      return food.name !== select
    }))
  }

  return (
    <div className="App">

      {showForm &&
        <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
      }

      <Button onClick={() => { setShowForm(!showForm) }}> Hide Form / Add New Food </Button>

      <Search search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>

        {allFoods
          .filter((food) => (food.name).toLowerCase().includes(search.toLowerCase()))
          .map((food) => {
            return (
              <div key={food.name}>
                <FoodBox food={food} deleteFood={deleteFood} />
              </div>
            )
          }).reverse()}

        {allFoods.length === 0 &&
          <Result
            title="Ops. There's no more content to show!"
          >
          </Result>
        }

      </Row>

    </div>
  );
}

export default App;
