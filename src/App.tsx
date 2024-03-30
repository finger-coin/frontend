import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Shop from "./pages/Shop/Shop";
import Invite from "./pages/Invite/Invite";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/invite" element={<Invite />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
