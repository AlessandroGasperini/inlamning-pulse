import React from "react";
import { useLocation } from "react-router-dom";
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { useEffect } from "react";
import ModalPause from "../Components/ModalPause";
import ModalStop from "../Components/ModalStop";
import play from "../assets/img/playw.png"
import stopBtn from "../assets/img/stopW.png"
import resetBtn from "../assets/img/resetW.png"
import "./HourGlass.module.css"

interface allTimes {
    hours?: number,
    minutes?: number,
    seconds?: number,
    countdown?: boolean
}

const HourGlass: React.FC<allTimes> = () => {

    const location: object | any = useLocation();

    const time: object | any = location.state;

    const [timer, isTargetAchieved] = useTimer({
        startValues: {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds
        }, countdown: true
    });

    function start() {
        timer.start();
        setGlass(timeToString)
        setAni("fillScreen linear infinite")
    };

    function stop() {
        timer.stop();
        setPaused("paused")
        setModalS(true)
    };


    function reset() {
        timer.reset();
        window.location.reload()
    };

    useEffect(() => {
        if (timer.getTimeValues().toString() === "00:00:00") {

        }
    }, [timer.getTimeValues().toString()])

    const [modalP, setModalP] = useState<boolean>(false)
    const [modalS, setModalS] = useState<boolean>(false)
    const [startGlass, setGlass] = useState<string>("")
    const [startAni, setAni] = useState<string>("")
    const [paused, setPaused] = useState<string>("")

    const theTimeSec: number = timer.getTimeValues().seconds
    const theTimeMin: number = timer.getTimeValues().minutes
    const theTimeHour: number = timer.getTimeValues().hours

    let mins: number = time.minutes * 60
    let hours: number = time.hours * 3600
    let hourGlassTime: number = mins + hours + time.seconds
    let timeToString: string = hourGlassTime.toString() + "s"

    let style: object | any = {
        height: "720px",
        position: "relative",
        top: "-720px",
        backgroundColor: "green",
        animation: startAni,
        transitionProperty: "all",
        animationDuration: startGlass,
        animationPlayState: paused
    }

    useEffect(() => {
        if (theTimeHour == 0 && theTimeMin == 0 && theTimeSec == 0) {
            setModalS(true)
            setGlass("")

        }
    }, [theTimeSec])

    return (
        <section className="containerHG" >
            <section style={style}></section>

            <section className="forShow">
                <img onClick={() => start()} src={play} alt="" />
                <img onClick={() => stop()} src={stopBtn} alt="" />
                <img onClick={() => reset()} src={resetBtn} alt="" />
            </section>

            {modalP && <ModalPause modalHide={setModalP} passFunction={() => start()} />}
            {modalS && <ModalStop />}
        </section>

    )
};

export default HourGlass