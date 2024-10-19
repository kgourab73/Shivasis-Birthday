import Content from "./components/Content";
import Equipment from "./components/Equipment";
import EquipmentForm from "./components/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Whatsapp from "./components/Whatsapp";

const App = () => {
  return (
    <div className=" bg-blue">
      <Navbar />
      <Home />
      <Content />
      <Equipment />
      <EquipmentForm />
      <Whatsapp />
    </div>
  );
};

export default App;
