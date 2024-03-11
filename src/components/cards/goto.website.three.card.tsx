import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, Link } from "@mui/material";
import Image from "next/image";

interface GotoWebsiteThreeCardProps {
  icon: string;
  content: string;
}

export const GotoWebsiteThreeCard: React.FC<GotoWebsiteThreeCardProps> = (
  props
) => {
  return (
    <>
      <div className="flex flex-col w-52 h-40 border-2 border-blue-400 rounded-2xl ">
        <div className="flex w-full justify-self-start justify-start pl-6 text-blue-600 text-md mt-3">
          <b>Cost:</b>
          {props.content}
        </div>
        <div className="flex justify-center content-center items-center w-full h-16">
          <Image
            src={props.icon}
            objectFit="contain"
            alt="ssa"
            width={180}
            height={50}
          />
        </div>
        <div className="flex justify-center content-center items-center w-full">
          <Button
            href="#"
            endIcon={<OpenInNewIcon />}
            size="small"
            style={{
              width: "10rem",
              borderRadius: "19px",
              padding: "10px 12px",
            }}
          >
            {" "}
            Go to Website{" "}
          </Button>
        </div>
      </div>
    </>
  );
};
