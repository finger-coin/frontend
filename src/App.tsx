import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Shop from "./pages/Shop/Shop";
import Invite from "./pages/Invite/Invite";
import ChooseFavorite from "./pages/ChooseFavorite/ChooseFavorite";
import Battle from "./pages/Battle/Battle";
import WinPage from "./pages/Win/Win";
import Rank from "./pages/Rank/Rank";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="home" element={<Home />}/>
                    <Route path="shop" element={<Shop />} />
                    <Route path="battle/:battleId/choose" element={<ChooseFavorite />} />
                    <Route path="battle/:battleId/click" element={<Battle />} />
                    <Route path="battle/:battleId/win" element={<WinPage />} />
                    <Route path="rank" element={<Rank />} />
                    {/* won page*/}
                    {/* rating page*/}
                    {/* shop page*/}
                    <Route path="invite" element={<Invite />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
