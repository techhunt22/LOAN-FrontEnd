import { EditableContentRecordInvidual } from "./editable.content.record.invidual"

interface EditableContentRecordProps {
    records?: {
        name?: string,
        value?: string,
        label?: string
    }[],
    method?: string,
    title?: string,
    onChangeInput: (e?: string, name?: string) => void
}



export const EditableContentRecord: React.FC<EditableContentRecordProps> = (props) => {
    return (
        <>
            <div className="flex flex-col w-full justify-center my-6 content-center items-center">
                {/* title */}
                <div className="flex flex-row w-full">
                    <div className="flex w-[50%] justify-start text-xl">{props.title}</div>
                    <div className="flex w-full justify-end text-lg text-green-500">{props.method}</div>
                </div>
                {[props?.records]?.map((invidualRecord: any) => {
                    return (
                        <EditableContentRecordInvidual onChangeInput={props.onChangeInput} key={invidualRecord?.name} invidualRecord={invidualRecord} />
                    )
                })}
                {/* content */}

            </div>
        </>
    )
}