// src/router/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { User } from '../pages/user';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<User />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
