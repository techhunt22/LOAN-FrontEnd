"use client";
// @ts-ignore
import React from "react";

export const AdminCurrentUser = () => {
    return (
        <>
            {/* title section */}
            <div className="flex text-gray-700 pl-8 text-6xl mt-8">
                <h1>Current Users</h1>
            </div>

            {/* Search bar section */}
            <div className="flex flex-row text-sm">
                <div className="flex w-max">
                    <div className="flex w-6 h-6 bg-blue-400 rounded-full text-white"></div>
                </div>
            </div>
        </>
    );
};
