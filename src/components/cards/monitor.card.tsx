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
            <div className="flex flex-col w-72 px-6 my-6 b relative" style={{border:'1px solid #1380FF', borderRadius:'8px',}}>
                <div className="flex w-full relative items-end justify-end">
                    {props?.paymentContents1?.recommeded &&
                        <img src="/monitor/i-check.svg" alt="" className="flex w-10 h-10 mt-[-1rem] mr-[-2.5rem] " />
                    }
                </div>
                <div className="flex w-full  justify-center mt-3" style={{fontSize:'18px', color:'#38B000', fontWeight:'600',}} >
                    RECOMMENDED
                </div>


                <div className="flex w-full justify-center items-center">
                    <img src={props.paymentContents1?.icon} alt="" className="flex w-max h-20" />
                </div>

                <div className="flex w-full  text-3xl items-center text-center justify-center mt-6 font-semibold" style={{color:'#0A7CB7',}}>${props.paymentContents1?.price}</div>
                <div className="flex w-full text-blue-500 mb-12 justify-center" style={{color:'#0A7CB7',}}>One Time Payment</div>

                {props.paymentContents1?.contents?.map((content) => (
                    <div className="flex flex-row text-blue-500 text-xs">
                        <img src="/right mark.png" alt=""  style={{width:'18px', height:'18px', marginTop:'-2px',}}/>
                        <p className="inline-block ml-1 my-4 mt-[-0.1rem]" style={{color:'#1380FF',}}>{content?.record}</p>
                    </div>
                ))}

                <div className="flex w-full mt-6 mb-6 justify-center bg-[#38B000] text-white rounded-full">
                    <button className="flex w-40 py-2  text-center justify-center business-page-learn-more-btn">LEARN MORE</button>
                </div>
            </div >
        </>
    )
}