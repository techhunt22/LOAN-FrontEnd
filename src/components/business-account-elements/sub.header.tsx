interface SubHeaderProps {
  content: {
    step: string;
    title: string;
    subTitle: string;
  };
}

export const SubHeader: React.FC<SubHeaderProps> = (props) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div
          style={{ lineHeight: "normal" }}
          className="flex ml-[-1.5rem] p-4 bg-blue-100 rounded-r-3xl text-blue-700 text-[24px] font-semibold h-max w-[100px] business-page-step-btn-mobileview"
        >
          {props.content.step}
        </div>
        <div className="flex w-full justify-center  mt-[-2.5rem] business-page-margin-sm">
          <h1 className="text-2xl  font-bold business-page-text-color-black">
            {props.content.title}
          </h1>
        </div>
        <div className="flex w-full mt-5 text-2xl text-[#686666] mt-4 items-center">
          <span>
            <img src="/Arrow.png" alt="arrow" />
          </span>
          <h4 className="font-11 ml-5">{props.content.subTitle}</h4>
        </div>
      </div>
    </>
  );
};
