import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Requests";
const Main = () => {
    const [movies, setMovies] = useState([]);
    const selectedMovie = movies[Math.floor(Math.random() * movies.length)];
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
    const truncateString = (str, length) => {
        if (str?.length > length) {
            return str.slice(0, length) + "...";
        } else {
            return str;
        }
    };
    return (
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${selectedMovie?.backdrop_path}`}
                    alt={selectedMovie?.title}
                />
                <div className="absolute w-full top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        {selectedMovie?.title}
                    </h1>
                    <div className="my-4">
                        <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                            Play
                        </button>
                        <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                            Watch Later
                        </button>
                    </div>
                    <p className="text-gray-300 text-sm">
                        Released: {selectedMovie?.release_date}
                    </p>
                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:min-w-[35%] text-gray-200 py-2">
                        {truncateString(selectedMovie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
