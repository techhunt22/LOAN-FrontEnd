import { ArrowForward } from "@mui/icons-material"
import { Button } from "@mui/material"

interface PaymentCardProps {
    title: string,
    paymentContents1: {
        title: string,
        price: string,
        recommeded: boolean,
        contents: {
            record: string,
        }[],
    }
    paymentContents2: {
        title: string,
        price: string,
        recommeded: boolean,
        contents: {
            record: string,
        }[],
    }
}

export const PaymentCard: React.FC<PaymentCardProps> = (props) => {
    return (
        <>
            <div className="flex w-full text-gray-700 text-xl justify-center text-center">
                {props.title}
            </div>
            <div className="flex w-full text-gray-700 text-sm justify-center">
                Choose Your Plan
            </div>
            <div className="flex flex-row w-full gap-8 justify-center">
                <div className="flex flex-col w-72 h-max justify-center content-center items-center mt-12 border border-gray-50 rounded-[3rem] relative">
                    <div className="flex flex-col w-full h-32 bg-gradient-to-r from-blue-700 to-blue-200 rounded-t-[3rem] relative">
                        {props.paymentContents1.recommeded &&
                            <img src="/report/reports/recomm.svg" alt="" className="flex w-28 h-28 mt-[-2.5rem] ml-[-2.5rem] absolute" />
                        }
                        <div className="flex w-full h-full justify-center content-center items-center text-white text-2xl text-center absolute">{props.paymentContents1.title}</div>
                    </div>

                    <div className="flex w-full py-8 justify-center">
                        <p><span className=" text-4xl">${props.paymentContents1.price}</span> Per Month</p>
                    </div>

                    <div className="flex flex-col w-full pl-6 justify-start mt-2">
                        {props.paymentContents1.contents.map((content) => (
                            <div className="flex py-2 text-gray-400 text-xs h-12">
                                <ArrowForward />
                                <p className="pl-2">{content.record}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex w-full mt-12 mb-10 justify-center">
                        {props.paymentContents1.recommeded &&
                            <button className="flex w-40 py-2 bg-gradient-to-r from-light-green-500 to-light-green-200 rounded-3xl text-center justify-center">UPGRADE NOW</button>
                        }
                        {!props.paymentContents1.recommeded &&
                            <button className="flex w-40 py-2 bg-gray-50 rounded-3xl text-center justify-center">UPGRADE NOW</button>
                        }

                    </div>
                </div>

                <div className="flex flex-col w-72 h-max justify-center content-center items-center mt-12 border border-gray-50 rounded-[3rem] relative">
                    <div className="flex flex-col w-full h-32 bg-gradient-to-r from-blue-700 to-blue-200 rounded-t-[3rem] relative">
                        {props.paymentContents2.recommeded &&
                            <img src="/report/reports/recomm.svg" alt="" className="flex w-28 h-28 mt-[-2.5rem] ml-[-2.5rem] absolute" />
                        }
                        <div className="flex w-full h-full justify-center content-center items-center text-white text-2xl text-center absolute">{props.paymentContents2.title}</div>
                    </div>

                    <div className="flex w-full py-8 justify-center">
                        <p><span className=" text-4xl">${props.paymentContents2.price}</span> Per Month</p>
                    </div>

                    <div className="flex flex-col w-full pl-6 justify-start mt-2">
                        {props.paymentContents2.contents.map((content) => (
                            <div className="flex py-2 text-gray-400 text-xs h-12">
                                <ArrowForward />
                                <p className="pl-2">{content.record}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex w-full mt-12 mb-10 justify-center">
                        {props.paymentContents2.recommeded &&
                            <button className="flex w-40 py-2 bg-gradient-to-r from-light-green-500 to-light-green-200 rounded-3xl text-center justify-center">UPGRADE NOW</button>
                        }
                        {!props.paymentContents2.recommeded &&
                            <button className="flex w-40 py-2 bg-gray-50 rounded-3xl text-center justify-center">UPGRADE NOW</button>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}