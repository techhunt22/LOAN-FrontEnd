"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Spinner } from "@material-tailwind/react";
import { getCookie } from "@/utils/getCookie";
const GuardContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextType {
  isAdmin: boolean;
  isSignIn: boolean;
  login: () => void;
  logout: () => void;
  onLogout: () => void;
  setIsSignIn: any;
  setIsAdmin: any;
}

export const GuardContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean>(false); // Assuming admin state
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const login = () => {
    // Perform your login logic here
    setIsAdmin(true); // Set to true if the user is an admin
  };

  const logout = () => {
    // Perform your logout logic here
    setIsAdmin(false);
  };

  useEffect(() => {
    const myCookieValue = getCookie("accessToken");
    if (myCookieValue !== null) {
      setIsSignIn(true);
      const loginRole = Cookies.get("role");
      if (loginRole == "PCR:Admin") {
        setIsAdmin(true);
      } else if (loginRole === undefined) {
        setIsAdmin(false);
        router.push("/");
      }
    } else {
      setIsSignIn(false);
    }
  }, [isSignIn, Cookies.get("role")]);

  const onLogout = async () => {
    Cookies.remove("accessToken", { path: "/" });
    Cookies.remove("refreshToken", { path: "/" });
    Cookies.remove("role", { path: "/" });
    router.push("/");
    setIsSignIn(false);
  };

  return (
    <GuardContext.Provider
      value={{
        isSignIn,
        isAdmin,
        login,
        logout,
        setIsAdmin,
        setIsSignIn,
        onLogout,
      }}
    >
      {isSignIn && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            right: "120px",
            top: "6px",
          }}
        >
          <Button
            className={
              "flex items-center justify-center rounded-full text-[#DFDDDD] bg-[transparent] h-[40px] w-[40px] bg-[#137FFF] shadow-none text-[16px]"
            }
            onClick={onLogout}
            size={"lg"}
            type={"button"}
            style={{ height: "40px", maxWidth: "40px", padding: "0" }}
          >
            <LogoutIcon height={20} width={20} />
          </Button>
        </div>
      )}

      {children}
    </GuardContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(GuardContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
