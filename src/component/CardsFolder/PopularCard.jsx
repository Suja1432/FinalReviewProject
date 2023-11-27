import React,{useEffect, useState} from 'react'
import { getCards } from '../../Service/Userapi';
import { Link, useParams } from 'react-router-dom';
import '../../assert/Allcard.css';

const PopularCard = () => {
  const {type}=useParams();
 const [popCard,setpopCard]=useState([]);
  useEffect(()=>
  {
    const fetchData =async()=>
    {
      try{
      const res=await getCards (type);
      setpopCard(res.data); 
      }
      catch(err)
      {
        console.log(err);
      }
       
    }
    fetchData();
  },[]);
  return (
   <div>
    
{popCard.map((item,index)=>
{
  return(
    <div className="AllCard">
      <div className='hoverStyle'>
  <div key={index} className="card" style={{width: "16rem"}}>
    <img src={item.img} alt="" />
    <div className="card-body">
      
    <h3 className="card-title">{item.title}</h3>
    <h5 className="author">AUTHOR :{item.author} </h5>
    <p className="card-text"> "{item.description}"</p>
    <div className="dis">

    <Link to={`/rev/${type}/${item.id}`}>
      < div className="btn btn-primary">Learn more</div>
    </Link>
    </div>
  </div>
  </div>
</div>
</div>)
})}
</div>
  )
}

export default PopularCard;