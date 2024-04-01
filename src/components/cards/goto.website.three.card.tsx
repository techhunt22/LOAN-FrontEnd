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
      <div className="flex flex-col w-64     h-52 border-2 border-blue-400 rounded-2xl ">
        <div className="flex w-full justify-self-start justify-start  text-blue-600 text-md mt-3 p-1.5 ">
          <b>Cost:</b>
          {props.content}
        </div>
        <div className="flex justify-center content-center  w-full h-24">
          <div
            className="goto-website-image"
            style={{
              height: "50px !important",
              width: "180px !important",
            }}
          >
            <img
              src={props.icon}
              style={{
                objectFit: "contain",
                height: "50px !important",
                width: "180px !important",
              }}
              alt="ssa"
            />
          </div>
        </div>
        <div className="flex justify-center content-center items-center w-full mb-6">
          <Button
            href="#"
            endIcon={<OpenInNewIcon />}
            size="small"
            style={{
              width: "13rem",
              borderRadius: "19px",
              padding: "12px 17px",
              fontSize: "16px",
              fontWeight: "800",
              boxShadow: "0px 8px 11px 0px #085abb66",
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
