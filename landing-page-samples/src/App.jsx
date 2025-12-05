import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Sample1 from './components/Sample1';
import Sample2 from './components/Sample2';

import './App.css'

function App() {
    return (
        <Router>
            {/* <nav className='flex justify-center items-center'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav> */}

            <Routes>
                <Route path="/sample1" element={<Sample1 />} />
                <Route path="/sample2" element={<Sample2 />} />
            </Routes>
        </Router>
        )
}

export default App
