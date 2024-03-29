interface IImportantInformationProps {
  information: {
    title: string;
    content: string;
    color: string;
  };
  informationResourceProps?: string;
}

export const ImportantInformation: React.FC<IImportantInformationProps> = (
  props
) => {
  return (
    <>
      <div className={"w-full flex justify-center"}>
        <div className="business-page-info">
          <div
            className={`business-page-half-circle ${
              !props.informationResourceProps
                ? "business-page-green-info"
                : "business-page-blue-info"
            }`}
          ></div>
          {!props.informationResourceProps ? (
            <img
              src="/vector.png"
              alt=""
              className="ml-2 mr-4 business-page-infoicon-mobileview"
            />
          ) : (
            <img
              src="/resources-info.png"
              alt=""
              className="ml-2 mr-4 business-page-infoicon-mobileview"
            />
          )}
          {/* <div
            className={`business-page-info-icon bg-${props.information.color}-500 rounded-full text-center ml-2 mr-4`}
          ></div> */}
          <div className="business-page-heading-info">
            <p className="business-page-info-heading-mobileview">
              {props.information.title}
            </p>
            <span className="text-sm text-gray-700 mt-[14px]">
              {props.information.content}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
