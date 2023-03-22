
import "./App.css";
import Login from './Components/Login/Login';
import Product from './Components/Product/Product';


function App() {

 
  return (
    <div className='App'>

      <Login/>
      {/* add product */}
      <Product/>

    </div>
  );
}

export default App;