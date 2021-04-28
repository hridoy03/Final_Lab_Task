import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {users} from './userData';
import User from './components/User';
import AddUserFrom from './components/AddUserForm';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function Userlist(){
 
const [ list, setUsers] = useState(users);

const addUser= (newUser)=>{
    setUsers([...list, newUser]);
     
}

const deleteUser= (id)=>{
    setUsers(list.filter((user)=>user.id !=id));
}

    return(


        <Router>
			<Navbar/>

			<Switch>

			<Route path='/add'>
					<AddUserFrom addUser={addUser}/> 
			</Route>

			<Route path='/userlist'>
				<>
						{
							  list.map((user, index)=>{
								return <User key={index} {...user} deleteUser={deleteUser}/>;
							})
						}
				</>		
			</Route>

			</Switch>
		</Router>



        
        
    );
}

ReactDOM.render( <Userlist/>,document.getElementById('root')) // rendeer userlist which has more user