import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './pages/AllRoutes';
import { Box } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
// style={{ backgroundImage: `url(https://img.freepik.com/free-vector/rainbow-dreamy-cloud-fantasy-background_1017-32300.jpg?w=996&t=st=1691128263~exp=1691128863~hmac=26ada8df6b3bccba7ecc7e33918978a02e23ffb213d2c6793b315048b2599b28)` }}
function App() {
  return (
    <Box bg={"orange"} h={'100vh'} >
      <Navbar/>
    <AllRoutes/>
    </Box>
  );
}

export default App;
