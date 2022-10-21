import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Catering from "./components/Catering";
import Contact from "./components/Contact";
import Branch from "./components/Branch";
import Shop from "./components/Shop";
import Loc  from "./components/Loc";
import Detail  from "./components/ProductDetail";
import { Route,Routes } from "react-router-dom"


function App() {
   
  return (
    <div className="w-full">
       <Navbar />
       <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/shop/:logo" exact element={<Shop />} />
           <Route path="/about" exact element={<About />} />
           <Route path="/catering" exact element={<Catering />} />
           <Route path="/contact" exact element={<Contact />} />
           <Route path="/cafes/:main/:local" exact element={<Branch />} />
           <Route path="/cafes/:cities" exact element={<Loc />} />
           <Route path="/product/:productId" exact element={<Detail />} />
       </Routes>  
       <Footer />     
    </div>
  );
}

export default App;
