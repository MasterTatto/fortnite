import React from 'react';
import {Route,Routes} from "react-router-dom";
import Statistic from "../pages/statistic";
import News from "../pages/news";
import Things from "../pages/things";
import Market from "../pages/market";

const Routers = () => {
    return (
        <>
<Routes>
    <Route path={'/'} element={<Statistic/>}/>
    <Route path={'/news'} element={<News/>}/>
    <Route path={'/things'} element={<Things/>}/>
    <Route path={'/market'} element={<Market/>}/>
</Routes>
        </>
    );
};

export default Routers;