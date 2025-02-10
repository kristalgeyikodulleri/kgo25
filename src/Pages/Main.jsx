import largeLogo from '../images/logoLarge.png';
import Countdown from "react-countdown";
import Navbar from "../Components/Navbar";
import bgImage from "../images/background.png";
import bgVideo from "../images/backgroundvideo.webm";
import { useEffect, useState } from "react";
import BigHeader from "../Components/Headers/BigHeader";
import awardImage from "../images/award.png";

export default function App(props) {
    return (
        <>
            {/* Navbar'ı sabit ve şeffaf tut */}
            <Navbar className="fixed top-0 w-full z-50 bg-transparent transition-all duration-300 ease-in-out" />

            {/* Arka plan video katmanı */}
            <div className="fixed -z-10 flex items-center justify-center transition-all duration-500 ease-in-out h-screen w-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover h-full w-full opacity-50"
                    poster={bgImage}
                >
                    <source src={bgVideo} type="video/webm" />
                </video>
            </div>

            {/* Üst kısım */}
            <div className="overflow-hidden w-dvw h-dvh flex flex-col justify-center items-center gap-6" id={props.name}>
                <img
                    src={largeLogo}
                    alt=""
                    className="h-[12rem] md:h-[16rem] lg:h-[20rem]"
                />
                <div className="flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                    <div className={`${!props.isLoaded && 'smooth-appear'}`}>
                        <Countdown
                            date={new Date(2024, 4, 9)}
                            renderer={renderer}
                            precision={10}
                            props={props}
                        />
                    </div>
                </div>
                <p className="text-lg tracking-[.16rem] bg-black bg-opacity-50 px-4 py-2 rounded-md text-white">
                    #senin<b>secimin</b>
                </p>
            </div>

            {/* “Hikâyemiz” bölümü */}
            <div className="overflow-hidden w-dvw min-h-dvh flex flex-col items-center justify-center px-12 lg:px-24 py-24 text-white" id={props.name}>
                <BigHeader>HİKAYEMİZ</BigHeader>

                <div className="flex flex-row w-full items-center justify-center flex-wrap h-full">
                    <div className="overflow-hidden md:overflow-visible md:w-2/5">
                        <img src={awardImage} alt="" className="scale-150" />
                    </div>

                    <div className="mt-4 flex flex-col gap-6 md:w-3/5 items-center justify-center left-border relative px-4 p-6 rounded-lg bg-black bg-opacity-50">
                        <p>
                            Geyikler, doğanın sonsuz döngüsünün kudretli sembolüdür ve boynuzları sonsuzluğun, yenilenmenin, yeni başlangıçların ve umudun sembolü olarak kabul edilir.
                        </p>
                        <p>
                            Kristal Geyik Ödülleri, bu sembolizmi zarif bir şekilde yansıtarak insanları büyülü bir törene davet eder.
                        </p>
                        <p>
                            Bu ödüller, sanat ve başarının kutlanmasını sağlar, aynı zamanda izleyicilere ilham verip yaratıcılığın zirvesini yaşatır.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Completionist = ({ props }) => (
    <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold text-[#ffffff] opacity-90 ${!props.isLoaded && 'disappear'}`}>
        <a href="https://form.jotform.com/240972880319969" target="_blank" referrerPolicy="no-referrer">
            Oylamaya katıldığınız için teşekkür ederiz!
        </a>
    </h2>
);

// Geri sayım render’ı
const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
    if (completed) {
        return <Completionist props={props} />;
    } else {
        return (
            <span className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#ffffff] opacity-90 italic">
                {days} Gün {hours} Saat {minutes} Dakika {seconds} Saniye
            </span>
        );
    }
};
