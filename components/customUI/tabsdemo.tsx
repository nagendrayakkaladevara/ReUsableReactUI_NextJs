"use client";

import { Tabs } from "../ui/tabs";
import GistEmbed from "./gist";

export function TabsDemo({ gistId, ComponentContent,route }: {
    gistId: string,
    ComponentContent: any,
    route:string
}) {
    const tabs = [
        {
            title: "Preview",
            value: "preview",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Preview</p>
                    <div className="flex justify-center items-center h-60">
                        {ComponentContent}
                    </div>
                </div>
            ),
        },
        {
            title: "Code",
            value: "code",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Code</p>
                    <GistEmbed gistId={gistId} route={route}/>
                </div>
            ),
        },
        // {
        //     title: "Playground",
        //     value: "playground",
        //     content: (
        //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        //             <p>Playground tab</p>
        //             <DummyContent />
        //         </div>
        //     ),
        // },
        // {
        //     title: "Content",
        //     value: "content",
        //     content: (
        //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        //             <p>Content tab</p>
        //             <DummyContent />
        //         </div>
        //     ),
        // },
        // {
        //     title: "Random",
        //     value: "random",
        //     content: (
        //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        //             <p>Random tab</p>
        //             <DummyContent />
        //         </div>
        //     ),
        // },
    ];

    return (
        <div className="h-[22rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 px-2">
            <Tabs tabs={tabs} />
        </div>
    );
}