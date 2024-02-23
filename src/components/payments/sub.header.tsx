import Link from "next/link"

interface PaymentsSubHeaderProps {
    contents: {
        name: string,
        url: string,
    }
}

export const PaymentsSubHeader: React.FC<PaymentsSubHeaderProps> = (props) => {
    return(
        <>
            <div className="flow-root w-full">
                <p className=" float-left text-gray-300">Your details {">"} <span className="text-gray-600">{props.contents.name}</span></p>
                <p className=" float-right text-gray-600 underline"><Link href={props.contents.url} >Back</Link></p>
            </div>
        </>
    )
}