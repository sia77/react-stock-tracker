import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from './../pages/Home';
import TopNews from '../pages/TopNews';
import SearchResults from '../pages/SearchResults';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Service />} /> */}
            <Route path="/news" element={<TopNews />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/search" element={<SearchResults />} />
        </Routes>

    )
}

export default AppRoutes;