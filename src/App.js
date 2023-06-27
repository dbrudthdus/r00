import logo from './logo.svg';
import './App.css';
import HelloWorld from './conponents/HelloWorld';
import HelloWorld2 from './conponents/HelloWorld2';
import LoopEx from './conponents/LoopEx';
import LoopEx2 from './conponents/LoopEx2';
import ProductList from './conponents/products/ProductList';

function App() {
  const products = [
		{pno:1, pname:'상품1', price: 3000},
		{pno:2, pname:'상품2', price: 5000},
		{pno:3, pname:'상품3', price: 7000},
  ]

  

  return (
    <div className="App">
      <ProductList/>
    </div>
  );
}

export default App;
