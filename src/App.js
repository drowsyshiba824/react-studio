import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([]);

  function buttonFunction(item){
      return <button onClick = {() => setCart([...cart,item])}>
            {item.name}
      </button>
  }

  function makeCart(){
    return cart.map((item, index) => ( 
      <div key={index}> 
        <p>1 {item.name}</p>
      </div>
    ))
  }
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem key={index} item = {item} buttonFunction = {buttonFunction} /> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>{
          makeCart()
        }
      </div>
    </div>
  );
}

export default App;
