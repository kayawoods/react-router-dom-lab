import { link } from "react-router"

const NavBar = () => {
    return (
      <nav>
       <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/mailboxes'>mailboxes</Link>
        </li>
        <li>
          <Link to="/mailboxes/new-mailbox">New Mailbox</Link>
        </li>
      </ul>
      </nav>
    );
  };
  


export default NavBar;