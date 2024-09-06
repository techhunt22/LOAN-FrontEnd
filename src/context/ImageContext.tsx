// contexts/DocsUploadContext.tsx
"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface DocsUploadContextType {
  files: {
    photo_ID: File | null;
    // identityCard2: File | null;
    proof_of_address: File | null;
    photo_of_SSID: File | null;
    // socialSecurityCard2: File | null;
  };
  setFile: (field: string, file: File | null) => void;
}

const DocsUploadContext = createContext<DocsUploadContextType | undefined>(
  undefined
);

export const DocsUploadProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [files, setFiles] = useState({
    photo_ID: null,
    // identityCard2: null,
    proof_of_address: null,
    photo_of_SSID: null,
    // socialSecurityCard2: null,
  });

  const setFile = (field: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [field]: file }));
  };

  return (
    <DocsUploadContext.Provider value={{ files, setFile }}>
      {children}
    </DocsUploadContext.Provider>
  );
};

export const useDocsUpload = () => {
  const context = useContext(DocsUploadContext);
  if (!context) {
    throw new Error("useDocsUpload must be used within a DocsUploadProvider");
  }
  return context;
};
