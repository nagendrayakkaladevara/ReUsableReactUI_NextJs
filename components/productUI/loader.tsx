import React from "react";

export const LoaderOne: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="loader2 w-4 h-4 rounded-full block mx-auto my-4 relative bg-white shadow-[24px_0_0_#FFF,-24px_0_0_#FFF] box-border animate-shadow-pulse"></div>
        </div>
    );
};

export const LoaderTwo: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="loader4 w-24 h-4 inline-block bg-white border border-white rounded-[4px] bg-[linear-gradient(45deg,rgba(0,0,0,0.25)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.25)_50%,rgba(0,0,0,0.25)_75%,transparent_75%,transparent)] text-[30px] bg-[size:1em_1em] box-border animate-bar-stripe"></div>
        </div>
    );
};