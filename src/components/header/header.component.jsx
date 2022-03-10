import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';

// it lets us modify component for redux access
import { connect } from 'react-redux';

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

// state he said is the top level root reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
