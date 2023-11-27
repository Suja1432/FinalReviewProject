import React from 'react'
import Rating from '@mui/material/Rating';
import './Details.css'
import { useParams } from 'react-router-dom';
import { Datas } from './SharedItem';
const MainDetails = () => {
  const {id} =useParams();
  return (
    <>
<div className='header'>

        <h1> {Datas[id-1].name}</h1>
    <div className="abc">
          <div className="image">
              <img src={Datas[id-1].img} alt=''/>
          </div>
           <div className="content">
            <p>“I'm almost finished with it. There aren't very many more entries. 
                   I pick up the journal and place it on the pillow beside me.<br/>
            </p>     
           </div>
    </div>
        <div className="txt">          
                <h4>Author:{Datas[id-1].author}</h4>
                <h4>Genre: {Datas[id-1].genre}</h4>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly  />
                <p>First published August 2,2016</p>           
         </div>

           {/* <div>
            
           <h5>Your Ratings:</h5>
           <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
           </div>
           <textarea name="postContent" rows={4} cols={40}/>
           <h5>User Reviews:</h5> */}
          
          
</div>
 
    </>
  )
}

export default MainDetails