import React, { useState } from 'react'
import Categoris from './Categoris'
import Menu from './Menu'
import Items from "./Data"

function App() {
  const [menuItem, setmenuItem] = useState(Items)
  const allCategories=["all",... new Set( Items.map((item)=>item.category))]
  const [categories, setcategories] = useState(allCategories)
  console.log(allCategories)
  const filterItems=(category)=>{
    if(category=="all"){
      setmenuItem(Items)
      return;
    }
    const newitem=Items.filter((item)=>item.category===category)
    setmenuItem(newitem)
  }
  return (
    <main>
      <section className="menu section" >
        <div className="title">
          <h2>
            Our menu
          </h2>
          <div className="underline"></div>
        </div>
        <Categoris categories={categories} filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  )
}

export default App
