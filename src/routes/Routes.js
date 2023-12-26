import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../pages/home/Home';
import Error from '../pages/error/Error';


const Routing = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/*" element={<Error/>}></Route>
            </Routes>
        </Router>
    )
}

export default Routing;