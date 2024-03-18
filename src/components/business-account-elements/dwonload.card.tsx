export const DownloadCard = ({
  handleFileChange,
  handleImage,
  fileUploaded,
}: {
  handleFileChange?: any;
  handleImage?: any;
  fileUploaded?: any;
}) => {
  return (
    <>
      <div className="flex w-96 h-80 business-page-fileupload-mobileview">
        <div className="flex flex-col w-full m-4 h-full rounded-xl border-gray-500 justify-center content-center items-center relative  style={{border:'3px dashed #88A8D3',}}">
          <img
            src="/business-account/squreplus.svg"
            alt=""
            className="flex w-36 h-36"
          />
          <p className="text-gray-500 text-3xl">Drop file upload or</p>
          <a
            className="mb-6 text-blue-600 underline text-2xl"
            onClick={handleImage}
          >
            {fileUploaded ? "Uploaded" : "Browse"}
          </a>{" "}
          <input
            type="file"
            id="myFile"
            name="filename"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <div className="flex flex-row text-gray-400">
            <span>You can upload</span>
            <span className="text-md text-gray-600 ml-1">PDF, CVF, XLXS</span>
          </div>
        </div>
        <img
          src="/business-account/fileicon.svg"
          className="flex w-12 h-12 absolute"
        />
      </div>
    </>
  );
};
