"use client";
import { BuildBusinessCredit } from "@/components/form-controller/modules/business-account/build.business.credit";
import { useAuth } from "@/context/guard/guard.context";
export default function Page() {
  //
  // const { isAdmin } = useAuth();
  // if (!isAdmin) {
  //   return <div>You are not authorized to view this page.</div>;
  // }
  return <BuildBusinessCredit />;
}
