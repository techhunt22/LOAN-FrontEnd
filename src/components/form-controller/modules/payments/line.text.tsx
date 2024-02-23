interface PaymentsLineTextProps {
    contents: string,
}

export const PaymnetsLineText: React.FC<PaymentsLineTextProps> = (props) => {
    return(
        <>
            <div className="relative flex py-5 items-center">
                <span className="flex-shrink mx-4 text-gray-400">{props.contents}</span>
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="flex rounded-full bg-gray-400 w-2 h-2"></div>
            </div>
        </>
    )
}