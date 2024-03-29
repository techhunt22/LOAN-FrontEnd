import { EditableContentRecordInvidual } from "./editable.content.record.invidual";

interface EditableContentRecordProps {
  records: {
    title: string;
    method: string;
    invidualRecords: {
      image?: any;
      title: string;
      subTitle?: string;
      icon: string;
      contents: {
        recordName: string;
        iconName: string; //edit, arrow, date
      }[];
    }[];
  };
  handleOnChange?: any;
  value?: number | string | undefined | any;
  name?: string | any;
  buildBusinessPhone?: any;
  options?: any;
  handleChange?: any;
  selectedValue?: any;
  buildBusinessEntry?: any;
  handleDateChange?: any;
  selectedDate?: any;
}

export const EditableContentRecord: React.FC<EditableContentRecordProps> = (
  props
) => {
  return (
    <>
      <div className="flex flex-col w-full justify-center my-6 content-center items-center">
        {/* title */}
        {props.records.title !== "" && (
          <div className="flex flex-row w-full">
            <div className="flex w-[50%] justify-start  text-base font-semibold">
              {props.records.title}
            </div>
            <div className="flex  justify-end font-medium text-base  business-page-edit-btn ">
              {props.records.method}
            </div>
          </div>
        )}
        {props.records.invidualRecords.map((invidualRecord, index) => {
          return (
            <EditableContentRecordInvidual
              invidualRecord={invidualRecord}
              handleOnChange={props.handleOnChange}
              value={props.value}
              name={props.name}
              buildBusinessPhone={props.buildBusinessPhone}
              buildBusinessEntry={props.buildBusinessEntry}
              selectedValue={
                props.buildBusinessEntry
                  ? props.selectedValue[index]?.contents
                  : props.selectedValue
              }
              options={props.options}
              handleChange={
                props.buildBusinessEntry
                  ? (event: any) => props.handleChange(event, index)
                  : props.handleChange
              }
              handleDateChange={props.handleDateChange}
              selectedDate={props.selectedDate}
            />
          );
        })}
        {/* content */}
      </div>
    </>
  );
};
