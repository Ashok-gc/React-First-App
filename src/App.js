import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    {/* <Navbar title="HelloTX" aboutText="About Us" Contact="Contact Us"/> */}
    <Navbar title="HelloTX"/>
    <div className="container my-5">
    <TextForm heading="Enter the text to analyze below"/>
    </div>
    </>
  );
}

export default App;
