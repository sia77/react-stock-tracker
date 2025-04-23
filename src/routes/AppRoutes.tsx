import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from './../pages/Home';
import Service from '../pages/Service';
import TopNews from '../pages/TopNews';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/news" element={<TopNews />} />
            {/* <Route path="/login" element={<Login />} /> */}
        </Routes>

    )
}

export default AppRoutes;