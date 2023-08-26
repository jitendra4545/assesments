import logo from './logo.svg';
import './App.css';
// import SignupCard from './components/Register';
// import SimpleCard from './components/Login';
import { AllRoutes } from './Pages/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
    <AllRoutes/>
    </div>
  );
}




export default App;
