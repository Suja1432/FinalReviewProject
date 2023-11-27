import React from 'react'
import {useEffect, useState} from 'react'
import { getCards } from '../../Service/Userapi';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import '../../assert/Review.css'
const Review = () => {
   
  const { type, id}= useParams();
  const [rev,setrev]=useState([]);
  useEffect(()=>
  {
     const fetchData =async()=>
     {
       try{
         const res=await getCards(type);
         setrev(res.data); 
        }
        catch(err)
        {
          console.log(err);
        }
        
      }
      fetchData();
    },[type]);
    console.log(type);
    console.log(id);
    console.log(rev);
    let item = null;
    for(let i=0;i<rev.length;i++)
    {
      console.log(rev[i].id,id);
      if(rev[i].id===Number(id))
      {
        item = rev[i];
      }
    }
    if(item===null)
    {
      return(
        <div>Loading...</div>
      )
    }
  return (
    <div>
       <div  className='xyz'>

        <h1> {item.title} </h1>
     
        <div className="image">
            <img src={item.img} height='50%' width='20%' alt=''/>'
        </div>
        <div className="txt">
            <div>
                <h4> Author: {item.author}</h4>
               
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly  />
                <p>First published August 2,2016</p>
             </div>
           
      </div>
      <center>
           <div className="contented" style={{maxWidth:"30%"}}>
            <text >{item.review}</text>
           </div>
           </center>
           <img src='https://help.outofthesandbox.com/hc/article_attachments/360069303693/product-page-reviews-example.png' alt='nothing' height='80%' width='70%'/>
    </div>
   
    </div>
  )
}

export default Review