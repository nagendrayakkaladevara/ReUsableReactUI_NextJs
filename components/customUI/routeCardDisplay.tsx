
const RouteCardDisplay = () => {
    return (
        <>
            <div className="h-60 w-60 m-1 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden text-black sm:block " style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                <div className="h-full flex justify-center items-center">
                    <p className="text-sm">This is card wrapper</p>
                </div>
            </div>

            <div className="h-60 w-60 m-1 bg-black border border-gray-200 rounded-lg shadow-md overflow-hidden text-white hidden md:block" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                <div className="h-full flex justify-center items-center">
                    <p className="text-sm">This is card wrapper</p>
                </div>
            </div>

            <div className="h-60 w-60 m-1 bg-none border border-gray-200 rounded-lg shadow-md overflow-hidden text-white hidden sm:block" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                <div className="h-full flex justify-center items-center">
                    <p className="text-sm">This is card wrapper</p>
                </div>
            </div>

            <div className="h-60 w-60 m-1 bg-black border border-gray-200 rounded-lg shadow-md overflow-hidden text-white custom-gradient-1 hidden sm:block" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
                <div className="h-full flex justify-center items-center">
                    <p className="text-sm">This is card wrapper</p>
                </div>
            </div>

        </>
    )
}

export default RouteCardDisplay;