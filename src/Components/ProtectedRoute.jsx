import React from "react";
import { UserAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth();
    console.log(user);
    if (!user) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
};

export default ProtectedRoute;
