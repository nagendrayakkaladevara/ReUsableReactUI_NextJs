
const RouteCardDisplay = () => {
    return (
        <>
            {/* <div className="h-60 w-60 m-1 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden text-black sm:block " style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
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
            </div> */}

            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                <div className="p-4">
                    <h5 className="mb-2 text-slate-800 sm:text-xl font-semibold text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h5>
                    <p className="text-slate-600 leading-normal font-light text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <button className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Read more
                    </button>
                </div>
            </div>

        </>
    )
}

export default RouteCardDisplay;