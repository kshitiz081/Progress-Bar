import React from 'react'

function ProgressBar({ progress, bgColor }) {
    const parent = {
        backgroundColor: "lightgrey",
        borderRadius: 20,
        margin: 50
    };
    const child = {
        backgroundColor: bgColor,
        width: `${progress}%`,
        borderRadius: 20,
        textAlign: "right"
    };
    const textElement = {
    };
    return (
        <div style={parent}>
            <div style={child}>
                <span style={textElement}>{progress} %</span>
            </div>
        </div>
    )
}

export default ProgressBar