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
        <div className="flex ml-[-1.5rem] p-3 bg-blue-100 rounded-r-full text-blue-700 text-2xl h-max w-[100px]">
          {props.content.step}
        </div>
        <div className="flex w-full justify-center  mt-[-2.5rem]">
          <h1 className="text-2xl font-bold">{props.content.title}</h1>
        </div>
        <div className="flex w-full mt-5 text-2xl text-gray-300 mt-4 items-center">
          <span className="mt-[-0.9rem] mr-">.........</span>&gt;
          <h4 className="font-11 ml-5">{props.content.subTitle}</h4>
        </div>
      </div>
    </>
  );
};
