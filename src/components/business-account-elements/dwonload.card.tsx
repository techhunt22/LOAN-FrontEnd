export const DownloadCard = () => {
    return (
        <>
            <div className="flex w-96 h-80">
                <div className="flex flex-col w-full m-4 h-full border-2 border-dotted rounded-xl border-gray-500 justify-center content-center items-center relative">
                    <img src="/business-account/squreplus.svg" alt="" className="flex w-36 h-36" />
                    <p className="text-gray-500 text-3xl">Drop file upload or</p>
                    <a href="#" className="mb-6 text-blue-600 underline text-2xl">browse</a>
                    <div className="flex flex-row text-gray-400">
                        <span>You can upload</span><span className="text-md text-gray-600 ml-1">PDF, CVF, XLXS</span>
                    </div>
                </div>
                <img src="/business-account/fileicon.svg" className="flex w-12 h-12 absolute" />
            </div>
        </>
    )
}