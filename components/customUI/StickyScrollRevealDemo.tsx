"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Easily copy and paste the code into your project files.",
        description:
            "No need to hassle with complex setups or installations. Our components are designed to be as straightforward as possible .. just copy the code and you’re ready to go.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Effortless Integration
            </div>
        ),
    },
    {
        title: "No need to install any dependencies.",
        description:
            "Forget about managing additional packages or dealing with version conflicts. Our components are pure React and work seamlessly without requiring any extra libraries.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                No Dependencies Required
                {/* <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                /> */}
            </div>
        ),
    },
    {
        title: "Makes developers' lives easier.",
        description:
            "Unlike pre-packaged libraries, our components are easy to understand and modify. Tailor them to suit your exact requirements without digging through extensive documentation or source code.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Simplifying Developers Lives
            </div>
        ),
    },
    {
        title: "Easily modify compared to libraries.",
        description:
            "It's easier to modify compared to other libraries, providing developers with the flexibility to tailor it to their specific needs without being restricted by predefined structures. This adaptability makes it a more versatile choice for various projects.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Easy to Modify
            </div>
        ),
    },
    // {
    //     title: "Built considering all kinds of use cases.",
    //     description:
    //         "Whether you’re working on a small project or a large-scale application, our components are designed to fit a wide range of scenarios. They are versatile and can be adapted to meet your specific needs.",
    //     content: (
    //         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
    //             Versatile and Customizable
    //         </div>
    //     ),
    // }
];
export function StickyScrollRevealDemo() {
    return (
        <div className="p-10" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <StickyScroll content={content} />
        </div>
    );
}
