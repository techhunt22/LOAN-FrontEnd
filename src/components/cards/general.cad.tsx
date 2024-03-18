import Image from "next/image";

interface GeneralCardProps {
    icon: string,
    content: string,
}

export const GeneralCard: React.FC<GeneralCardProps> = (props) => {
    return(
        <>
            <div className="flex flex-col py-10 border-2 border-blue-400 rounded-2xl justify-center content-center items-center" style={{padding:'41px 22px',}}>
                <Image src={props.icon} objectFit="contain" alt="ssa" width={45} height={45} />
                <div className="flex w-full pt-4 justify-center content-center items-center font-10">{props.content}</div>
            </div>
        </>
    );
}

export const GeneralCardSmall: React.FC<GeneralCardProps> = (props) => {
    return(
        <>
            <div className="flex flex-col w-52 h-40 border-2 border-blue-400 rounded-2xl justify-center content-center items-center">
                <Image src={props.icon} objectFit="contain" alt="ssa" width={40} height={40} />
                <div className="flex w-full pt-6 justify-center content-center items-center text-center text-xs">{props.content}</div>
            </div>
        </>
    );
}