import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signUp, user } = UserAuth();
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            await signUp(email, password);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-full h-screen">
            <img
                className="hidden sm:block w-full h-full absolute object-cover"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                alt="/"
            ></img>
            <div className="w-full h-screen bg-black/60 top-0 left-0 fixed">
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <form
                                className="w-full flex flex-col py-4"
                                onSubmit={submitHandler}
                            >
                                <input
                                    className="p-3 my-2 bg-gray-700 rounded"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <input
                                    className="p-3 my-2 bg-gray-700 rounded"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                                    Sign Up
                                </button>
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p className="mr-2">
                                        <input type="checkbox" /> Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8">
                                    <span className="text-gray-600 mr-1">
                                        Already subscribed to Netflix?
                                    </span>
                                    <Link to="/login">Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
