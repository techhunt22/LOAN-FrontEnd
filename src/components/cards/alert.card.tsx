import { ArrowForward } from "@mui/icons-material"
import { Button } from "@mui/material"

interface AlertCardProps {
    alertContents: {
        title: string,
        icon: string,
        content: string,
        subtitle: string,
    }
}

export const AlertCard: React.FC<AlertCardProps> = (props) => {
    return (
        <>
            <div className="flex flex-col w-60 h-max justify-center content-center items-center mt-12 border border-gray-100 rounded-[2rem] ">
                <div className="flex flex-col w-full h-6 bg-gradient-to-b from-light-blue-200 to-light-blue-50 rounded-t-[3rem] relative">
                </div>

                <div className="flex w-full h-max just-start">
                    <img src={props.alertContents.icon} alt="" className=" w-16 h-16" />
                </div>

                <div className="flex w-full h-16 justify-center text-[1.3rem] mt-[-1rem] text-gray-400 " style={{color:'#333333', fontSize:'15px',paddingLeft:'1.5rem', paddingRight:'4.5rem', }}>
                    <p>{props.alertContents.content}</p>
                </div>

                <div className="flex justify-center mt-6 mb-2 text-3xl text-gray-500" style={{fontSize:' 20px',fontWeight: '500',color: '#333333',padding: '8px 32px',backgroundColor: '#FFFFFF',border: '1px solid #E9E9E9',borderRadius: '24px',}}>{props.alertContents.subtitle}</div>
            </div>
        </>
    )
}