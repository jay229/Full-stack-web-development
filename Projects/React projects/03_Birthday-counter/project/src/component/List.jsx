import React from 'react'

function List({people}) {
    // const {id,name,age,image}=people
    return (
        <>
          {
              people.map((value)=>{
                 return(
                     <div className="data">
                         <img src={value.image} alt="" />
                         <h4>{value.name}</h4>
                         <p> {value.age} </p>
                     </div>
                 )
              })
          }
        </>
    )
}

export default List
