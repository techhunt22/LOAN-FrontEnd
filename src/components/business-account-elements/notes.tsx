interface NotesProps {
  content: string;
}

export const Notes: React.FC<NotesProps> = (props) => {
  return (
    <>
      <div
        className="flex flex-row w-[80%]  mx-auto"
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 15px 0px #7373730F",
          height: "72px",
        }}
      >
        <div className="flex w-3 h-[auto] bg-blue-100 rounded-3xl mr-2"></div>
        <div className="flex w-full justify-center content-center h-full items-center">
          {props.content}
        </div>
      </div>
    </>
  );
};
