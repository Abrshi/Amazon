import React, { useContext, useState } from 'react';
import authcss from './auth.module.css';
import { MoonLoader} from "react-spinners";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../utility/firebase';
import { DataContext } from '../../Components/DataProvider/DataProvider'; // Corrected import
import { Type } from './../../utility/action.type'; // Importing Type

function Auth() {
  const [chake, setChake] = useState(true);

  const handleClick = () => {
    setChake(!chake);
  };

  // Login
  const [loginemail, setLoginemail] = useState('');
  const [loginpassword, setLoginpassword] = useState('');
  const [loginerr, setLoginerr] = useState('');
  const [loadinglogin, setLoadinglogin] =useState(false);

  // Correct useContext call
  const [{ user }, dispatch] = useContext(DataContext); // Corrected context

  console.log(user);

  const login = async (e) => {
    e.preventDefault();
   setLoadinglogin(true);
    console.log("Login started, loading:", true);  
  
    try {
      const userInfo = await signInWithEmailAndPassword(auth, loginemail, loginpassword);
      
      // Dispatch user info to context
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
  
      console.log("Login successful");
    } catch (err) {
      console.error("Login error:", err);
      setLoginerr(err.message);
    } finally {
      setLoadinglogin(false);
      console.log("Login finished, loading:", loadinglogin);  
    }
  };
  
  

  // Signup
  const [signupname, setSignupname] = useState('');
  const [signupemail, setSignupemail] = useState('');
  const [signuppassword, setSignuppassword] = useState('');
  const [signuperr, setSignuperr] = useState('');
  const [loadingsignup, setLoadingsignup] =useState(false);

  const creatAccount = async (e) => {
    e.preventDefault();
    setLoadingsignup(true);
    console.log("Login started, loading:", true);  
    try {
      const userInfo = await createUserWithEmailAndPassword(auth, signupemail, signuppassword);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user
      });
    } catch (err) {
      console.log(err);
      setSignuperr(err.message);
    }finally {
      setLoadingsignup(false);
      console.log("Login finished, loading:", loadingsignup); 
      // handleClick()
    }
  };

  return (
    <div className={authcss.div}>
      {/* Login Form */}
      <form action="" className={chake ? authcss.active : authcss.notActive}>
        <p className={authcss.signin}>Sign-in</p>
        <div className={authcss.inerdiv}>
          <label htmlFor="email">E-mail</label><br />
          <input value={loginemail} onChange={(e) => setLoginemail(e.target.value)} type="text" /><br />
          <label htmlFor="password">Password</label><br />
          <input value={loginpassword} onChange={(e) => setLoginpassword(e.target.value)} type="password" /><br />
          <button className={authcss.sigenin} type="submit" onClick={login}>Sign in</button><br />
          {loadinglogin && <div className={authcss.Spinners}><MoonLoader size={30}  color="#1a1414" /></div>}
          {loginerr && <small className={authcss.error}>{loginerr}</small>}
          <p className={authcss.p}>
            By signing, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please review our Privacy Notice and Cookie Policy.
          </p>
          <label className={authcss.creat} onClick={handleClick}>Create your Amazon Account</label><br />
        </div>
      </form>

      
      <form action="" className={chake ? authcss.notActive : authcss.active}>
        <p className={authcss.signin}>Sign-up</p>
        <div className={authcss.inerdiv}>
          <label htmlFor="name">Name</label><br />
          <input value={signupname} onChange={(e) => setSignupname(e.target.value)} type="text" /><br />
          <label htmlFor="email">E-mail</label><br />
          <input value={signupemail} onChange={(e) => setSignupemail(e.target.value)} type="email" /><br />
          <label htmlFor="password">Password</label><br />
          <input value={signuppassword} onChange={(e) => setSignuppassword(e.target.value)} type="password" /><br />
          <button className={authcss.sigenin} type="submit" onClick={creatAccount}>Sign up</button><br />
        
          {loadingsignup && <div className={authcss.Spinners}><MoonLoader size={30}  color="#1a1414" /></div>}
          {signuperr && <small className={authcss.error}>{signuperr}</small>}
          <p className={authcss.p}>
            By signing, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please review our Privacy Notice and Cookie Policy.
          </p>
          <label className={authcss.creat} onClick={handleClick}>Have an Account?</label><br />
        </div>
      </form>
    </div>
  );
}

export default Auth;
