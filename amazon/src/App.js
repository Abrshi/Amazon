import './App.css';
import Carde from'./Components/Cards/Cards.jsx'
import Header from './Components/Header/Header';
import Carouseleffect from './Components/Carousel/Carouseleffect';
import Products from './Components/Products/Products.jsx';
function App() {
  return (
    <div className="App">
    <Header />
     <Carouseleffect />
     <Carde/>  
     <Products />  
    </div>
  );
}

export default App;
