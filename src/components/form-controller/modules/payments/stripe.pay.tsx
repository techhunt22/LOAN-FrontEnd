export const PaymentsStripePay = () => {
    return (
        <>
            <div className="flex flex-col w-full px-6">
                <p className="flex pl-6 text-purple-500 mb-2"> Connect To Stripe & Pay</p>
                <div className="flex w-full rounded-full border-2 py-4 border-purple-200 text-center justify-center text-purple-500 text-5xl">
                    <p className=" font-extrabold">stripe</p>
                </div>

                <div className="relative flex py-5 px-10 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">or Pay with different method</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>


            </div>
            
        </>
    )
}