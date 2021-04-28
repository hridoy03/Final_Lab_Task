import React from 'react';

export default function User({id,en, ed, importance,date,deleteUser}){

 
     return(
         <div className='usermain'>
 
        <h3>ID: {id}</h3>
			<p>
                Event Name: {en} <br/>
				Event Description: {ed} <br/>
				Importance: {importance} <br/>
                Date: {date} <br/>
			</p>	

          <button onClick={()=>deleteUser(id)}>Delete</button>
         </div>  
     )
 };