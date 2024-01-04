import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import { HouseDetail } from "./pages/house-detail/HouseDetail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/details/:id" element={<HouseDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
