import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Catering from "./pages/Catering";
import Contact from "./pages/Contact";
import Branch from "./pages/Branch";
import Shop from "./pages/Shop";
import Loc  from "./pages/Loc";
import Detail  from "./pages/ProductDetail";
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
