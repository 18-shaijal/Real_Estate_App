import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import About from './pages/About';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Header from './components/Header';

export default function App() {
    return (
        <>
            <BrowserRouter>
                {/* Uncomment Header if needed */}
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/sign-in" element={<Signin />} />
                    <Route path="/sign-out" element={<Signout />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
