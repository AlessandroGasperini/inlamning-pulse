import React from "react";
import { useLocation } from "react-router-dom";

function Alarm() {

    const location = useLocation()
    const time: any = location.state



    return (
        <section>
            <h1>Analo</h1>



        </section>
    );
}

export default Alarm;