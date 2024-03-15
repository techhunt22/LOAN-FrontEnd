import {
  CheckCircle,
  CheckCircleOutlined,
  ClosedCaptionOffRounded,
  Dangerous,
  DangerousOutlined,
} from "@mui/icons-material";
import { CloseCircle } from "iconsax-react";
import Image from "next/image";

interface BlogCardProps {
  content: {
    picture: string;
    title: string;
    content: string;
    subContent?: string;
    content3?: any;
  };
}

export const BlogCardRight: React.FC<BlogCardProps> = (props) => {
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-row  rounded-lg overflow-hidden mb-4 h-60 relative">
          <div className="flex flex-col p-4 static">
            <strong className=" inline-block mb-2 text-blue-500">World</strong>
            <h3 className="mb-0">Featured post</h3>
            <div className="mb-1 text-gray-600">Nov 12</div>
            <p className=" mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="#" className="stretched-link">
              Continue reading
            </a>
          </div>
          <div className="flex col-auto divide-none divide-x">
            <Image
              src={
                "/business-account/image illustration for business address.png"
              }
              objectFit="contain"
              alt="ssa"
              width={300}
              height={250}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const BlogCardLeftTest: React.FC<BlogCardProps> = (props) => {
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-row rounded-lg overflow-hidden mb-4 h-60 relative">
          <div className="flex col-auto divide-none divide-x">
            <Image
              src={props.content.picture}
              objectFit="contain"
              alt="ssa"
              width={400}
              height={350}
            />
          </div>
          <div className="flex flex-col p-4 static justify-center content-center items-center">
            <strong className=" inline-block mb-2 text-blue-500">World</strong>
            <h3 className="mb-0">Featured post</h3>
            <div className="mb-1 text-gray-600">Nov 12</div>
            <p className=" mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="#" className="stretched-link">
              Continue reading
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export const BlogCardLeft: React.FC<BlogCardProps> = (props) => {
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-row  overflow-hidden mb-4  py-10 px-6 relative  business-page-banner-mobileview">
          <div className="flex w-[50%] justify-center content-center items-center business-page-banner-left-mobileview ">
            <Image
              src={props.content.picture}
              objectFit="contain"
              alt="ssa"
              width={600}
              height={450}
            />
          </div>
          <div className="flex flex-col p-4 w-[50%] justify-center content-center items-center business-page-banner-right-mobileview">
            <strong className="mb-2  business-page-text-color-black text-lg ">
              {props.content.title}
            </strong>
            <p className="text-xs text-justify business-page-text-color-gray2	 ">
              {props.content.content}
            </p>
            <p className="mb-1 business-address-banner-subcontect">
              {props.content.subContent}
            </p>
            <p className="mb-1 text-xs text-justify business-page-text-color-gray2 mt-7">
              {props.content.content3}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

interface BlogMultiCardProps {
  content: {
    picture: string;
    title: string;
    content1: string;
    content2: string;
    content3: string;
    content4: string;
  };
}

export const BlogMultiCardLeft: React.FC<BlogMultiCardProps> = (props) => {
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-row rounded-lg overflow-hidden mb-4 py-16 relative">
          <div className="flex w-[40%] justify-center content-center items-center">
            <Image
              src={props.content.picture}
              objectFit="contain"
              alt="ssa"
              width={600}
              height={450}
            />
          </div>
          <div className="flex flex-col p-4 w-[60%] justify-center content-center items-center">
            <strong className="mb-2 text-blue-500">
              {props.content.title}
            </strong>
            <p className="mb-1 text-gray-500 text-sm">
              {props.content.content1}
            </p>
            <p className="mb-1 text-gray-500 text-sm">
              {props.content.content2}
            </p>
            <p className="mb-1 text-gray-500 text-sm">
              {props.content.content3}
            </p>
            <p className="mb-1 text-gray-500 text-sm">
              {props.content.content4}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

interface BlogEmailCardProps {
  content: {
    picture: string;
    title: string;
    email: string;
    website: string;
    content1: string;
    content2: string;
  };
}
export const BlogEmailCardLeft: React.FC<BlogEmailCardProps> = (props) => {
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-row  rounded-lg overflow-hidden mb-4 py-16 relative">
          <div className="flex w-[40%] justify-center content-center items-center">
            <Image
              src={props.content.picture}
              objectFit="contain"
              alt="ssa"
              width={600}
              height={450}
            />
          </div>
          <div className="flex flex-col p-4 w-[60%] justify-start">
            <div className="flex justify-center content-center items-center">
              <strong className="mb-2 text-blue-500">
                {props.content.title}
              </strong>
            </div>
            <p className="mb-1 text-gray-500 text-sm">
              {props.content.content1}
            </p>
            <div className=" justify-start">
              <strong className="mb-2 inline-flex">FOR EXAMPLE:</strong>
              <span className="flex-row text-blue-500 inline mx-1">
                {props.content.email}
              </span>
              as a business email address doesn't look as professional as
              <span className="inline text-blue-500 mx-1">
                {props.content.website}
              </span>
            </div>
            <div className="flex flex-col justify-center content-center items-center">
              <div className="flex flex-col">
                <CheckCircleOutlined
                  color="success"
                  className="flex ml-10rem"
                />
                <p>{props.content.website}</p>
              </div>

              <div className="flex flex-col">
                <DangerousOutlined color="warning" />
                <p>{props.content.email}</p>
              </div>
            </div>

            <p className="mb-1 text-gray-500 text-sm">
              {props.content.content2}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

interface BlogCustomCardProps {
  content: {
    picture: string;
    title: string;
    contents: {
      dataString: string;
      dataColor: string;
      dataSize: string;
    }[];
  };
}

export const BlogCustomCardLeft: React.FC<BlogCustomCardProps> = (props) => {
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-row w-full  rounded-lg overflow-hidden mb-4 py-7 px-4 relative  business-page-banner-mobileview business-page-banner-bg-color ">
          <div className="flex w-[50%] justify-center content-center items-center business-page-banner-left-mobileview">
            {/* <Image src={props.content.picture} objectFit="fill" alt="ssa" /> */}
            <img src={props.content.picture} alt="" style={{}} />
          </div>
          <div className="flex flex-col p-4 w-[50%] justify-center content-center items-center business-page-banner-right-mobileview">
            <strong className="mb-2 text-blue-500 text-center business-page-text-color-black">
              {props.content.title}
            </strong>
            {props.content.contents.map((invidualContent) => (
              // <p className={`mb-1 text-sm ${invidualContent.dataColor} ${invidualContent.dataSize} my-2`}>{invidualContent.dataString}</p>
              <div
                className={`mb-1 text-sm ${invidualContent.dataColor} ${invidualContent.dataSize} my-2`}
                dangerouslySetInnerHTML={{ __html: invidualContent.dataString }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

interface BlogCustomCardBoldProps {
  content: {
    picture: string;
    title: string;
    contents: {
      dataString: string;
      dataColor: string;
      dataSize: string;
    }[];
  };
}

export const BlogCustomCardBoldLeft: React.FC<BlogCustomCardBoldProps> = (
  props
) => {
  const makeBold = (item: string, keyword: string) => {
    let re = new RegExp(keyword, "g");
    return item.replace(re, "<b>" + keyword + "</b>");
  };

  console.log(makeBold(props.content.contents[0].dataString, "Ti"));
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-row w-full rounded-lg overflow-hidden mb-4  py-7 px-4 relative business-page-banner-mobileview">
          <div className="flex w-[50%] justify-center content-center items-center  business-page-banner-left-mobileview">
            {/* <Image src={props.content.picture} objectFit="fill" alt="ssa" /> */}
            <img src={props.content.picture} alt="" style={{}} />
          </div>
          <div className="flex flex-col p-4 w-[50%] justify-center content-center items-center business-page-banner-right-mobileview">
            <strong className="mb-2 text-blue-500 text-center">
              {props.content.title}
            </strong>
            {props.content.contents.map((invidualContent) => (
              // <p className={`mb-1 text-sm ${invidualContent.dataColor} ${invidualContent.dataSize} my-2`}>{makeBold(invidualContent.dataString, 'Ti') }</p>
              <div
                className={`mb-1 text-sm ${invidualContent.dataColor} ${invidualContent.dataSize} my-2`}
                dangerouslySetInnerHTML={{
                  __html: makeBold(invidualContent.dataString, "Ti"),
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
