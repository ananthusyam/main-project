import React, { useState } from "react";
import leftArrow from "./images/left-arrow.svg"
import rightArrow from "./images/right-arrow.svg"
import companyLogo from "./images/company-logo.svg"
import { t } from "i18next";
import profileTag from "./images/profile.svg"
import searchTag from "./images/search-tag.svg"
import cartTag from "./images/cart-tag.svg"


const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slideStyles.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    return (
        <div className="slider-image">
            <div className="arrow">
                <div className="left-arrow">
                    <img src={leftArrow} alt="left arrow" onClick={goToPrevious}/>
                </div>
                <div className="right-arrow">
                    <img src={rightArrow} alt="right arrow" onClick={goToNext}/>
                </div>
            </div>
            <div style={slideStyles}>
                <nav className="nav-list">
                    <div className="logo"><img src={companyLogo} alt="company logo" /></div>
                    <ul className="nav-list-left">
                        <li>{t("navbar-content.new")}</li>
                        <li>{t("navbar-content.wallets")}</li>
                        <li>{t("navbar-content.t-series")}</li>
                        <li>{t("navbar-content.card-holder")}</li>
                        <li>{t("navbar-content.Travel-wallet")}</li>
                        <li>{t("navbar-content.organizer")}</li>
                    </ul>
                    <ul className="nav-list-right">
                        <li><img src={profileTag} alt="profile tag" /></li>
                        <li><img src={searchTag} alt="" /></li>
                        <li><img src={cartTag} alt="" /></li>
                    </ul>
                </nav>
                <div className="scroll-tag">
                    <p className="scroll-text">SCROLL</p>
                    <div className="line-tag"></div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider