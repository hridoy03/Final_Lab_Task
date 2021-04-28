import {Link} from  'react-router-dom';

const Navbar = ()=>{
    return (
        <div> 
            <Link to='/add'>New Event</Link> | 
            <Link to='/userlist'>All Event list</Link>
        </div>
    );  
}
export default Navbar;