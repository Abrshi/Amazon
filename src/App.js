import './App.css';
import LayOut from './Components/LayOut/LayOut';

import { BrowserRouter} from 'react-router-dom';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routing />
     </BrowserRouter>
    </div>
  );
}

export default App;
