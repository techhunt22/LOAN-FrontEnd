import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, Link } from "@mui/material";
import Image from "next/image";

interface GotoWebsiteCardProps {
  icon: string;
  content: string;
}

export const GotoWebsiteCard: React.FC<GotoWebsiteCardProps> = (props) => {
  return (
    <>
      <div className="flex flex-col px-7 border-2 border-blue-400 rounded-2xl  business-page-gotowebsite-mobileview">
        <div className="flex w-full justify-self-start justify-start  text-blue-600 text-md mt-3 ml-[-1rem] buiness-page-savebtn-mobileview">
          <b>Cost:</b>
          {props.content}
        </div>
        <div className="flex justify-center content-center  w-full h-24">
          <img
            src={props.icon}
            style={{
              objectFit: "contain",
              height: "50px !important",
              width: "200px!important",
            }}
            alt="ssa"
width={200}
            height={50}
          />
        </div>
        <div className="flex justify-center content-center items-center w-full">
          <Button
            href="#"
            endIcon={<OpenInNewIcon />}
            size="large"
            style={{
              width: "14rem",
              borderRadius: "19px",
              padding: "12px 12px",
              background:
                "linear-gradient(250.65deg, #085ABB -4.03%, #1380FF 73.66%, rgba(136, 191, 255, 0.92) 156.36%)",
              marginBottom: "20px",
              fontSize: "16px",
              fontWeight: "800",
            }}
          >
            Go to Website
          </Button>
        </div>
      </div>
    </>
  );
};
