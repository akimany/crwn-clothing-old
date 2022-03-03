import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signup-signin.styles.scss';

const SignUpSignIn = () => {
  return (
    <div className="sign-in-and-sign-up">
      Sign in
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignUpSignIn;
