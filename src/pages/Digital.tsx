import React from "react";
import { useLocation } from "react-router-dom";

function Digital() {
    const location = useLocation()
    const time: any = location.state

    return (
        <section>
            <h1>Digital</h1>

        </section>
    );
}

export default Digital;