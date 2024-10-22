
const ToastDisplay = () => {
    return (
        <>
            <div className="flex gap-2 flex-col">


                <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" aria-labelledby="hs-toast-normal-example-label">
                    <div className="flex p-4">
                        <div className="shrink-0">
                            <svg className="shrink-0 size-4 text-blue-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                            </svg>
                        </div>
                        <div className="ms-3">
                            <p id="hs-toast-normal-example-label" className="text-sm text-gray-700 dark:text-neutral-400">
                                This is a normal message for example.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" aria-labelledby="hs-toast-warning-example-label">
                    <div className="flex p-4">
                        <div className="shrink-0">
                            <svg className="shrink-0 size-4 text-yellow-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                            </svg>
                        </div>
                        <div className="ms-3">
                            <p id="hs-toast-warning-example-label" className="text-sm text-gray-700 dark:text-neutral-400">
                                This is a normal message for example.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToastDisplay;