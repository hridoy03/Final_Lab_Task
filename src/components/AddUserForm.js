import {useState} from 'react';
import './AddUserForm.css';

const AddUserForm = ({addUser})=> {


        const [newUser, setNewUser] = useState({
            id: '',
            en: '',
            ed: '',
            importance: '',
            date: '',
        });


        const changeUser = (e)=>{
            const attar = e.target.name;
            const value = e.target.value;
            const user = {...newUser, [attar] : value}; 
            setNewUser(user);
        }


    const formSubmit=(e)=>{
        e.preventDefault();
        addUser(newUser);

        setNewUser({
            id: '',
            en: '',
            ed: '',
            importance: '',
            date: '',
        })
        
    }

    return (
        <div className="form">

            <form onSubmit={formSubmit}>
         
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td>Id</td>
                            <td>
                                <input type="id" name="id" value={newUser.id} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Event Name</td>
                            <td>
                                <input type="text" name="en" value={newUser.en} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Event Description</td>
                            <td>
                                <input type="text" name="ed" value={newUser.ed} onChange={changeUser} /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Importance</td>
                            <td>
                                <select name="importance">
                                    <option>High</option>
                                    <option>Moderate</option>
                                    <option>Low</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Date</td>
                            <td>
                                <input type="date" name="date" value={newUser.date} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Add</button>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </form>
                </div>
            
    );
}

export default AddUserForm; 