interface SubHeaderProps {
    content: {
        step: string,
        title: string,
        subTitle: string,
    }
}

export const SubHeader: React.FC<SubHeaderProps> = (props) => {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex ml-[-1.5rem] p-4 bg-blue-100 rounded-r-3xl text-blue-700 text-3xl h-max w-32">{props.content.step}</div>
                <div className="flex w-full justify-center  mt-[-1.5rem]"><h1 className="text-2xl">{props.content.title}</h1></div>
                <div className="flex w-full ml-4 text-2xl text-gray-300 mt-4"><span className="mt-[-0.5rem] mr-">.........</span>&gt;<h4 className="text-lg ml-5">{props.content.subTitle}</h4></div>
            </div>
        </>
    )
}