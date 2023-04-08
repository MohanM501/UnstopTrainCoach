
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  
  return (
    <div>
        {/* Navbar presents in each page at the top to navigate randomly*/}
        <Navbar/>
        {/* To Navigate to different pages based on route, AllRoutes Component is used */}
        <AllRoutes/>
    </div>
  );
}

export default App;
