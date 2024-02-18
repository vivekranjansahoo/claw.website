import React from 'react';
import Styles from "./FeatureCard.module.css";

export default function FeatureCard({ imageSrc, heading, subHeading }) {
    return (
        <div className={Styles.cardContainer} >
            <div style={{ textAlign: "center", backgroundColor: "#171E26" }}>
                <div style={{ backgroundColor: "#171E26" }}>
                    <img alt="Feature icon" style={{ backgroundColor: "#171E26" }} src={imageSrc} />
                </div>
                <h3 style={{ fontSize: 30, fontWeight: 600, backgroundColor: "#171E26" }}>
                    {heading}
                </h3>
                <h5 style={{ color: "#777", backgroundColor: "#171E26", fontSize: 20 }}>
                    {subHeading}
                </h5>
            </div>
        </div>
    )
}
