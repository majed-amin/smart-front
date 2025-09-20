import React from "react";

const HorizontalLine = ({ className = "" }) => {
    return (
        <div className={`w-full flex justify-center ${className}`}>
            <div
                className="h-[1px] w-11/12"
                style={{
                    background: "linear-gradient(to right, transparent, #9ca3af 20%, #9ca3af 80%, transparent)"
                }}
            />
        </div>
    );
};

export default HorizontalLine;
