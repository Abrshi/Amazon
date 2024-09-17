import './App.css';
import LayOut from './Components/LayOut/LayOut'; // Ensure this is used somewhere in your app
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import { useContext, useEffect } from 'react';
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./utility/action.type.js";
import { auth } from "./utility/firebase.js";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("Logged in user:", authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
       
      </BrowserRouter>
    </div>
  );
}

export default App;
