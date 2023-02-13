import { useState } from "react";
import { useTranslation } from 'react-i18next';
import React from "react";
import vector from "./images/vector.svg"

export default function Dropdown({selected, setSelected}) {
    const options = ["EN","TR"]
    const [isActive , setIsActive] = useState(false)
    const { t , i18n } = useTranslation();
    const handleChangeLng = (lng) => {
     i18n.changeLanguage(lng)
     localStorage.setItem("lng", lng);
    } 
    return (
        <div className="header">
            <p className="header-text">{t("header")} </p>
            <div className="dropdown">
                <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
                    {selected}
                    <span className="down"></span>
                    <div className="vector">
                        <img src={vector} alt="vector" />
                    </div>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {options.map((option) =>(
                            <div onClick={() => {
                                setSelected(option) 
                                setIsActive(false)
                                handleChangeLng(option)
                                }} 
                                className="dropdown-item">
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

