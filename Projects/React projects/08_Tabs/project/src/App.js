import { useState, useEffect } from 'react/cjs/react.development'
import { FaAngleDoubleRight } from 'react-icons/fa'
import React from 'react'
function App() {
  const url = "https://course-api.com/react-tabs-project"
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setJobs(data)

      setLoading(false)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return <section className="section loading" >
      <h1>Loading...</h1>
    </section>
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <section className="section">
      <div className="title">
        <h2>Expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        {/* btn container */}

        <div className="btn-container">

          {jobs.map((item, index) => {
            return <button className={`job-btn ${value===index && 'active-btn'}`} key={index} onClick={()=>{
              setValue(index) 
            }} >{item.company}</button>

          })
          }
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((dt, index) => {
              return <div key={index} className="job-desc">

                <FaAngleDoubleRight className="job-icon" >
                </FaAngleDoubleRight>
                <p>{dt}</p>
              </div>
            })
          }
        </article>
      </div>
    </section>
  )
}

export default App
