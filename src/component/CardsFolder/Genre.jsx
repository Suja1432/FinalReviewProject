import React from 'react'
import '../../assert/Genre.css'
import { Link } from 'react-router-dom'
const Genre = (UserContext) => {
  const value = React.useContext(UserContext);  
  const array=['Romance','Thriller','Comedy','Horror','Fiction']
  return (
    <div className='head'>
    <div className='title'>
      <h1>Book Genres</h1>
    <div className='main'>
      {array.map((item,index)=>{
        return (
          <div  key={index} className='box'>
            
          <Link style={{textDecoration:'none',color:'white'}} to={`/${item}`}><h2 id='htag'>{item}</h2></Link>
          
      </div>
        )
      })}
        
        </div>
        </div>
    </div>   
        
     
  )
}

export default Genre;