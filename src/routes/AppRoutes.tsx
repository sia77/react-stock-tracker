import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from './../pages/Home';
import TopNews from '../pages/TopNews';
import SearchResults from '../pages/SearchResults';
import { AssetDetail } from '@/pages/AssetDetail';
import PageNotFound from '@/components/PageNotFound';
import UserDashboard from '@/components/UserDashboard';
import ProtectedRoute from '@/components/ProtectedRoute';


const AppRoutes = () => {

    console.log("App route");
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Service />} /> */}
            <Route path="/news" element={<TopNews />} />
            <Route path="/userDashboard" element={
                <ProtectedRoute>
                    <UserDashboard />
                </ProtectedRoute>
            } />
            {/* <Route path="/userDashboard" element={} /> */}
            <Route path="/search" element={<SearchResults />} />
            <Route path="/:type/:ticker" element={<AssetDetail />} />
            <Route path="/:type" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>

    )
}

export default AppRoutes;