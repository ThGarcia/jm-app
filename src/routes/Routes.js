 import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
import Admin from '../pages/admin/Admin';
import Recibo from '../pages/recibo/Recibo';

const Routing = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/*" element={<Error/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/recibo" element={<Recibo />}></Route>
            </Routes>
        </Router>
    )
}

export default Routing;