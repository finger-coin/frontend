import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Shop from "./pages/Shop/Shop";
import Invite from "./pages/Invite/Invite";
import ChooseFavorite from "./pages/ChooseFavorite/ChooseFavorite";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="home" element={<Home />}/>
                    <Route path="shop" element={<Shop />} />
                    <Route path="choose-favorite/:battleId" element={<ChooseFavorite />} />

                    <Route path="invite" element={<Invite />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
