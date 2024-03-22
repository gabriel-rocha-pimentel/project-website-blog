import { Link } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <h2>
            <Link to={'/'}>DevBlog</Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/new'} className="new-btn" >New Post</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;