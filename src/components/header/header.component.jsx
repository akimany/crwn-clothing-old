import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          shop
        </Link>
        <Link className="option" to="/contact">
          contact
        </Link>
        {console.log('currentUser: ', currentUser)}
        {currentUser ? (
          <div className="option" onClick={() => signOut(auth)}>
            Sign out
          </div>
        ) : (
          <Link className="options" to="/signin">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
