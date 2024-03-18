"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const GuardContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextType {
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
  setIsAdmin: any;
}

export const GuardContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const systemGroup = ["0", "1", "3"];
  const roles = ["pmfwmfwfwnwfwnwnfwfwf"];
  const contextValue = undefined;

  const [isAdmin, setIsAdmin] = useState<boolean>(false); // Assuming admin state

  const login = () => {
    // Perform your login logic here
    setIsAdmin(true); // Set to true if the user is an admin
  };

  const logout = () => {
    // Perform your logout logic here
    setIsAdmin(false);
  };

  useEffect(() => {
    const loginRole = Cookies.get("role");
    if (loginRole == "PCR:Admin") {
      setIsAdmin(true);
    } else if (loginRole === undefined) {
      setIsAdmin(false);
      router.push("/");
    }
  }, [Cookies.get("role")]);

  return (
    <GuardContext.Provider value={{ isAdmin, login, logout, setIsAdmin }}>
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
