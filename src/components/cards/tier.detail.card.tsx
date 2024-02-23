interface TierDetailCardProps {
    contents: {
        title: string,
        description: string,
        details: {
            detail: string,
        }[],
    }
}

export const TierDetailCard: React.FC<TierDetailCardProps> = (props) =>
{
    return(
        <>
            <div className="flex flex-col w-full justify-center mt-6 px-4">
                <h1 className="flex w-full justify-center text-xl text-gray-600 my-4"><b>{props.contents.title}</b></h1>
                <p className="flex text-blue-400 text-md ml-4">{props.contents.description}</p>
                {props.contents.details.map((detail) => (
                    <div className="flex flex-row my-3">
                        <img src="/monitor/i-blue-star.svg" alt="" className="flex w-6 h-6"/>
                        <div className={`ml-2 mt-[-2] text-gray-400 `} dangerouslySetInnerHTML={{ __html: detail.detail}}></div>
                    </div>
                ))}
            </div>
        </>
    )
}