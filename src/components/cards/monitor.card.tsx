import { ArrowForward, Check } from "@mui/icons-material"
import { Button } from "@mui/material"

interface MonitorCardProps {
    paymentContents1: {
        price: string,
        recommeded: boolean,
        icon: string,
        contents: {
            record: string,
        }[],
    }
}

export const MonitorCard: React.FC<MonitorCardProps> = (props) => {
    return (
        <>
            <div className="flex flex-col w-72 px-3 my-6 border-2 border-blue-200 rounded-lg relative">
                <div className="flex w-full relative items-end justify-end">
                    {props.paymentContents1.recommeded &&
                        <img src="/monitor/i-check.svg" alt="" className="flex w-10 h-10 mt-[-1rem] mr-[-1.5rem] " />
                    }
                </div>
                <div className="flex w-full text-green-500 text-md justify-center mt-3">
                    RECOMMENDED
                </div>


                <div className="flex w-full justify-center items-center">
                    <img src={props.paymentContents1.icon} alt="" className="flex w-max h-20" />
                </div>

                <div className="flex w-full text-blue-500 text-4xl items-center text-center justify-center mt-6">${props.paymentContents1.price}</div>
                <div className="flex w-full text-blue-500 mb-12 justify-center">One Time Payment</div>

                {props.paymentContents1.contents.map((content) => (
                    <div className="flex flex-row text-blue-500 text-xs">
                        <Check fontSize="small" />
                        <p className="inline-block ml-1 my-4 mt-[-0.1rem]">{content.record}</p>
                    </div>
                ))}

                <div className="flex w-full mt-6 mb-4 justify-center">
                    <button className="flex w-40 py-2 bg-gradient-to-r from-green-500 to-green-200 rounded-3xl text-center justify-center">LERAN MORE</button>
                </div>
            </div >
        </>
    )
}