import React from "react";

import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ModalPause from "../Components/ModalPause";
import ModalStop from "../Components/ModalStop";
import Header from "../Components/Header";
import play from "../assets/img/play.png"
import pauseBtn from "../assets/img/pause.png"
import stopBtn from "../assets/img/stop.png"
import resetBtn from "../assets/img/reset.png"
import "./Text.module.css"
interface allTimes {
    hours?: number,
    minutes?: number,
    seconds?: number,
    countdown?: boolean
}

const Text: React.FC<allTimes> = () => {

    const location: object | any = useLocation();

    const time: object | any = location.state;

    const [timer, isTargetAchieved] = useTimer({
        startValues: {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds
        }, countdown: true,
    });

    function start() {
        timer.start();
    };

    function pause() {
        timer.pause();
        setModalP(true)
    };

    function stop() {
        timer.stop();
    };

    function reset() {
        window.location.reload()
    };

    let and: string = "och"
    let comma: string = ","
    let hoursText: string = "timmar"
    let hours: string = ""
    switch (timer.getTimeValues().hours) {
        case 10:
            hours = "Tio"
            break
        case 9:
            hours = "Nio"
            break
        case 8:
            hours = "Åtta"
            break
        case 7:
            hours = "Sju"
            break
        case 6:
            hours = "Sex"
            break
        case 5:
            hours = "Fem"
            break
        case 4:
            hours = "Fyra"
            break
        case 3:
            hours = "Tre"
            break
        case 2:
            hours = "Två"
            break
        case 1:
            hours = "En"
            hoursText = "timme"
            break
        case 0:
            hours = ""
            hoursText = ""
            comma = ""
            and = " och"
            break
        default:
            break;
    }

    let minutesText: string = "minuter"
    let minutes: string = ""
    switch (timer.getTimeValues().minutes) {
        case 59:
            minutes = "femtionio"
            break;
        case 58:
            minutes = "femtioåtta"
            break
        case 57:
            minutes = "femtiosju"
            break
        case 56:
            minutes = "femtiosex"
            break
        case 55:
            minutes = "femtiofem"
            break
        case 54:
            minutes = "femtiofyra"
            break
        case 53:
            minutes = "femtiotre"
            break
        case 52:
            minutes = "femtiotvå"
            break
        case 51:
            minutes = "femtioen"
            break
        case 50:
            minutes = "femtio"
            break
        case 49:
            minutes = "fyrtionio"
            break
        case 48:
            minutes = "fyrtioåtta"
            break
        case 47:
            minutes = "fyrtiosju"
            break
        case 46:
            minutes = "fyrtiosex"
            break
        case 45:
            minutes = "fyrtiofem"
            break
        case 44:
            minutes = "fyrtiofyra"
            break
        case 43:
            minutes = "fyrtiotre"
            break
        case 42:
            minutes = "fyrtiotvå"
            break
        case 41:
            minutes = "fyrtioen"
            break
        case 40:
            minutes = "fyrtio"
            break
        case 39:
            minutes = "trettionio"
            break
        case 38:
            minutes = "trettioåtta"
            break
        case 37:
            minutes = "trettiosju"
            break
        case 36:
            minutes = "trettiosex"
            break
        case 35:
            minutes = "trettiofem"
            break
        case 34:
            minutes = "trettiofyra"
            break
        case 33:
            minutes = "trettiotre"
            break
        case 32:
            minutes = "trettiotvå"
            break
        case 31:
            minutes = "trettioen"
            break
        case 30:
            minutes = "trettio"
            break
        case 29:
            minutes = "tjugonio"
            break
        case 28:
            minutes = "tjugoåtta"
            break
        case 27:
            minutes = "tjugosju"
            break
        case 26:
            minutes = "tjugosex"
            break
        case 25:
            minutes = "tjugofem"
            break
        case 24:
            minutes = "tjugofyra"
            break
        case 23:
            minutes = "tjugotre"
            break
        case 22:
            minutes = "tjugotvå"
            break
        case 21:
            minutes = "tjugoen"
            break
        case 20:
            minutes = "tjugo"
            break
        case 19:
            minutes = "nitton"
            break
        case 18:
            minutes = "arton"
            break
        case 17:
            minutes = "sjutton"
            break
        case 16:
            minutes = "sexton"
            break
        case 15:
            minutes = "femton"
            break
        case 14:
            minutes = "fjorton"
            break
        case 13:
            minutes = "tretton"
            break
        case 12:
            minutes = "tolv"
            break
        case 11:
            minutes = "elva"
            break
        case 10:
            minutes = "tio"
            break
        case 9:
            minutes = "nio"
            break
        case 8:
            minutes = "åtta"
            break
        case 7:
            minutes = "sju"
            break
        case 6:
            minutes = "sex"
            break
        case 5:
            minutes = "fem"
            break
        case 4:
            minutes = "fyra"
            break
        case 3:
            minutes = "tre"
            break
        case 2:
            minutes = "två"
            break
        case 1:
            minutes = "en"
            minutesText = "minut"
            break
        case 0:
            minutes = ""
            minutesText = ""
            comma = ""
            break
        default:
            break;
    }

    let secondsText: string = "sekunder"
    let seconds: string = ""
    switch (timer.getTimeValues().seconds) {
        case 59:
            seconds = "femtionio"
            break;
        case 58:
            seconds = "femtioåtta"
            break
        case 57:
            seconds = "femtiosju"
            break
        case 56:
            seconds = "femtiosex"
            break
        case 55:
            seconds = "femtiofem"
            break
        case 54:
            seconds = "femtiofyra"
            break
        case 53:
            seconds = "femtiotre"
            break
        case 52:
            seconds = "femtiotvå"
            break
        case 51:
            seconds = "femtioen"
            break
        case 50:
            seconds = "femtio"
            break
        case 49:
            seconds = "fyrtionio"
            break
        case 48:
            seconds = "fyrtioåtta"
            break
        case 47:
            seconds = "fyrtiosju"
            break
        case 46:
            seconds = "fyrtiosex"
            break
        case 45:
            seconds = "fyrtiofem"
            break
        case 44:
            seconds = "fyrtiofyra"
            break
        case 43:
            seconds = "fyrtiotre"
            break
        case 42:
            seconds = "fyrtiotvå"
            break
        case 41:
            seconds = "fyrtioen"
            break
        case 40:
            seconds = "fyrtio"
            break
        case 39:
            seconds = "trettionio"
            break
        case 38:
            seconds = "trettioåtta"
            break
        case 37:
            seconds = "trettiosju"
            break
        case 36:
            seconds = "trettiosex"
            break
        case 35:
            seconds = "trettiofem"
            break
        case 34:
            seconds = "trettiofyra"
            break
        case 33:
            seconds = "trettiotre"
            break
        case 32:
            seconds = "trettiotvå"
            break
        case 31:
            seconds = "trettioen"
            break
        case 30:
            seconds = "trettio"
            break
        case 29:
            seconds = "tjugonio"
            break
        case 28:
            seconds = "tjugoåtta"
            break
        case 27:
            seconds = "tjugosju"
            break
        case 26:
            seconds = "tjugosex"
            break
        case 25:
            seconds = "tjugofem"
            break
        case 24:
            seconds = "tjugofyra"
            break
        case 23:
            seconds = "tjugotre"
            break
        case 22:
            seconds = "tjugotvå"
            break
        case 21:
            seconds = "tjugoen"
            break
        case 20:
            seconds = "tjugo"
            break
        case 19:
            seconds = "nitton"
            break
        case 18:
            seconds = "arton"
            break
        case 17:
            seconds = "sjutton"
            break
        case 16:
            seconds = "sexton"
            break
        case 15:
            seconds = "femton"
            break
        case 14:
            seconds = "fjorton"
            break
        case 13:
            seconds = "tretton"
            break
        case 12:
            seconds = "tolv"
            break
        case 11:
            seconds = "elva"
            break
        case 10:
            seconds = "tio"
            break
        case 9:
            seconds = "nio"
            break
        case 8:
            seconds = "åtta"
            break
        case 7:
            seconds = "sju"
            break
        case 6:
            seconds = "sex"
            break
        case 5:
            seconds = "fem"
            break
        case 4:
            seconds = "fyra"
            break
        case 3:
            seconds = "tre"
            break
        case 2:
            seconds = "två"
            break
        case 1:
            seconds = "en"
            secondsText = "sekund"
            break
        case 0:
            seconds = ""
            secondsText = ""
            and = ""
            comma = ""
            break
        default:
            break;
    }

    if (timer.getTimeValues().hours >= 1 && timer.getTimeValues().seconds === 0) {
        comma = " och"
    }
    if (timer.getTimeValues().minutes === 0 && timer.getTimeValues().seconds === 0) {
        comma = ""
    }
    if (timer.getTimeValues().hours === 0 && timer.getTimeValues().minutes === 0) {
        and = ""
    }

    const [modalP, setModalP] = useState<boolean>(false)
    const [modalS, setModalS] = useState<boolean>(false)

    const theTimeSec: number = timer.getTimeValues().seconds
    const theTimeMin: number = timer.getTimeValues().minutes
    const theTimeHour: number = timer.getTimeValues().hours


    useEffect(() => {
        if (theTimeHour == 0 && theTimeMin == 0 && theTimeSec == 0) {
            setModalS(true)
        }
    }, [theTimeSec])

    return (
        <section className="containerTX">
            <Header header={"Timer Text"} />

            <h3 className="texta">{hours} {hoursText}{comma} {minutes} {minutesText} {and} {seconds} {secondsText}</h3>

            <section className="btnsText">
                <img onClick={() => start()} src={play} alt="" />
                <img onClick={() => pause()} src={pauseBtn} alt="" />
                <img onClick={() => stop()} src={stopBtn} alt="" />
                <img onClick={() => reset()} src={resetBtn} alt="" />
            </section>

            {modalP && <ModalPause currentTime={timer.getTimeValues().toString()} modalHide={setModalP} passFunction={() => start()} />}
            {modalS && <ModalStop />}

        </section>

    )
};

export default Text