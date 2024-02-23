interface NotesProps {
    content:string,
}

export const Notes:React.FC<NotesProps> = (props) => {
    return(
        <>
            <div className="flex flex-row w-full h-32 py-6 px-20">
                <div className="flex w-3 h-full bg-blue-100 rounded-3xl"></div>
                <div className="flex w-full justify-center content-center h-full items-center">{props.content}</div>
            </div>
        </>
    )
}