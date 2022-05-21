import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Requests";
const Home = () => {
    return (
        <>
            <Main />
            <Row
                rowID="1"
                title="Upcoming"
                fetchUrl={requests.requestUpcoming}
            />
            <Row
                rowID="2"
                title="Trending"
                fetchUrl={requests.requestTrending}
            />
            <Row rowID="3" title="Popular" fetchUrl={requests.requestPopular} />
            <Row
                rowID="4"
                title="Top Rated"
                fetchUrl={requests.requestTopRated}
            />
            <Row rowID="5" title="Horror" fetchUrl={requests.requestHorror} />
        </>
    );
};

export default Home;
