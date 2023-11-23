// src/router/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { User } from '../pages/user';
import { Login } from '../pages/login';
import Registration from '../pages/registration';
import ForgetPassword from '../pages/forgetPassword';

import Home from '../pages/home';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/registration" exact element={<Registration />} />
                <Route path="/forgetpassword" exact element={<ForgetPassword />} />

                <Route path="/home" exact element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
