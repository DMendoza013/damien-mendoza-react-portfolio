import './App.css';
import Portfolio from './pages/Portfolio';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Header/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div>
                <Outlet />
            </div>
            
        </div>
    );
}

export default App;