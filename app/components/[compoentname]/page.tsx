"use client";
import { TabsDemo } from "@/components/customUI/tabsdemo";
import { cn } from "@/utils/utils";
import RouteButtonDisplay from "@/components/customUI/routeButtonDisplay";
import RouteLoaderDisplay from "@/components/customUI/routeDisplayLoader";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import RouteBackgroundDisplay from "@/components/customUI/routebackgroundDisplay";
import RouteCardDisplay from "@/components/customUI/routeCardDisplay";
import Footer from "@/components/customUI/footer";
import ToastDisplay from "@/components/customUI/toast";
import BoxShadowDisplay from "@/components/customUI/boxshadowDisplay";

export default function ComponentScreen() {

    const pathname = usePathname();
    const [currentData, setCurrentData] = useState<any>(null);


    const Data = [{
        name: 'button',
        Component: <RouteButtonDisplay />,
        gistId: "93d9eda765f366b7f5a9286819f8461a",
        route: "components/button",
    }, {
        name: 'loader',
        Component: <RouteLoaderDisplay />,
        gistId: "eca4d6226f262162b58fbe25e5be84c0",
        route: "components/loader",
    }, {
        name: 'background',
        Component: <RouteBackgroundDisplay />,
        gistId: "f78f861c5d785e103065174114911fb6",
        route: "components/background",
    }, {
        name: 'card',
        Component: <RouteCardDisplay />,
        gistId: "a3bfcd44f29d593b0abd5b2b98abb058",
        route: "components/card",
    }, {
        name: 'toast',
        Component: <ToastDisplay />,
        gistId: "c5cfbb4a30c2afd99f0fa0162edca273",
        route: "components/toast",
    }, {
        name: 'boxshadow',
        Component: <BoxShadowDisplay />,
        gistId: "4b54a9951e805ecf68f5c6c165d12d4c",
        route: "components/boxshadow",
    }]

    useEffect(() => {
        const data = Data.find((item) => pathname.includes(item.route));
        setCurrentData(data);
    }, [pathname]);

    return (
        <>
            <div
                className={cn(
                    "rounded-md flex flex-col md:flex-col bg-gray-100 dark:bg-neutral-900 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-y-auto",
                    "h-screen"
                )}
            >
                {currentData && (
                    <TabsDemo
                        gistId={currentData.gistId}
                        route={currentData.route}
                        ComponentContent={currentData.Component}
                    />
                )}

                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}