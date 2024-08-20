import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App min-100-vh">
            <Header />
            <div>
                <Outlet />
            </div>
           <Footer /> 
        </div>
    );
}

export default App;