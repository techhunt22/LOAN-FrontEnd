"use client";
import { FormEventHandler, useEffect, useState, useContext } from "react";
// @ts-ignore
import useForm from "new-react-use-form";
import axios from "axios";
// import { useMutation, useQuery } from "@tanstack/react-query"
// import { ApiCalls } from "@/api/calls/calls"
// import { Calls } from "@/api/calls/type"
import { useRouter } from "next/navigation";
import { PaymentContext } from "@/context/payment/context";

interface ModuleOneCheckOut {
  id: string;
}

export const ModuleOneCheckOut: React.FC<ModuleOneCheckOut> = (props) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const { dispatch } = useContext(PaymentContext);

  const router = useRouter();
  // const [fullData, setFullData] = useState<{
  // 	paytype: string
  // 	name: string
  // 	oty: number
  // 	total: number | null
  // 	emi: []
  // }>()
  const [selectedOption, setSelectedOption] = useState<"full" | "emi">("full");
  const [packageDetails, setPackageDetails] = useState<any>();
  // console.log(selectedOption, "selectedOption")

  const form = useForm({
    packageId: props.id,
    paymentType: "",
  });

  // const useData = useQuery({
  // 	queryKey: ["CheckOutBilling"],
  // 	queryFn: () =>
  // 		ApiCalls.CheckOutBilling({
  // 			_id: props.id,
  // 			type: "module1",
  // 			paytype: selectedOption
  // 		}),
  // 	refetchOnWindowFocus: false,
  // 	retryOnMount: false,
  // 	refetchIntervalInBackground: false
  // })

  // const numericValue = parseFloat(useData?.data?.total.$numberDecimal)

  // const { mutateAsync } = useMutation<
  // 	Calls.IResponse.Checkout,
  // 	Error,
  // 	Calls.IRequest.Checkout
  // >({
  // 	mutationFn: (variables) => ApiCalls.Checkout(variables),
  // 	onSuccess: (r) => {
  // 		router.replace(r.url)
  // 	}
  // })
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = form?.data();
    dispatch({
      type: "SET_PACKAGE_ID",
      payload: props?.id,
    });
    dispatch({
      type: "SET_PAYMENT_TYPE",
      payload: selectedOption,
    });
    // await mutateAsync(form.data());
    router?.replace(`/payments/details?id=${props?.id}`);
  };
  useEffect(() => {
    // if (selectedOption === "full") {
    // 	onFullPaymentDetails()
    // } else if (selectedOption === "emi") {
    // 	onEmiPaymentDetails()
    // }
    (async () => {
      await axios
        .get(`${API_BASE_URL}/package/${props?.id}`)
        ?.then((res) => {
          console.log(res);
          setPackageDetails(res?.data?.data);
        })
        ?.catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  // const onFullPaymentDetails = () => {
  // 	setSelectedOption("full")
  // 	useData.refetch()
  // 	form.set("paymentType", "full")
  // }
  // const onEmiPaymentDetails = () => {
  // 	setSelectedOption("emi")
  // 	form.set("paymentType", "emi")
  // 	useData.refetch()
  // }

  // console.log(selectedOption)

  return (
    <form
      onSubmit={onSubmit}
      className={
        "py-9 md:px-[35%] px-[16px]  w-full flex flex-col items-center md:justify-start justify-center gap-6"
      }
    >
      <h2 className={"text-[20px] font-bold"}>Billing Details</h2>
      <div className={"w-full"}>
        <div
          className={
            "space-y-2 p-3 rounded-tremor-default bg-tremor-background-emphasis/5 w-full h-auto"
          }
        >
          <h4 className={"text-[16px] font-medium"}>Payment Recap </h4>
          <div className={"flex flex-row w-full justify-between items-center"}>
            <p>Amount</p>
            <p>
              $
              {selectedOption === "full"
                ? packageDetails?.price
                : packageDetails?.monthlyPayment}
            </p>
          </div>
          <div className={"flex flex-row w-full justify-between items-center"}>
            <p>Grand Total</p>
            <p>
              $
              {selectedOption === "full"
                ? packageDetails?.price
                : packageDetails?.monthlyPayment}
            </p>
          </div>
        </div>
      </div>
      <div className={" w-full"}>
        <PaymentMode
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>

      <button
        type={"submit"}
        className={
          "text-white font-semibold rounded-full w-full h-[40px] p-1 bg-blue-500 "
        }
      >
        Pay{" "}
      </button>
    </form>
  );
};

interface PaymentProps {
  selectedOption?: string;
  setSelectedOption: (option: any) => void;
}

export const PaymentMode: React.FC<PaymentProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="flex w-full h-fit md:flex-col flex-row items-center justify-center gap-4">
      <div
        className={`${
          selectedOption === "full"
            ? "ring-2 ring-offset-tremor-brand-emphasis/50 bg-dark-tremor-brand-emphasis/10"
            : "ring-1 ring-gray-400"
        } cursor-pointer rounded-tremor-default shadow-tremor-card flex flex-row items-center justify-center w-full h-[60px] bg-white`}
        onClick={() => setSelectedOption("full")}
      >
        <p className="text-gray-800 font-semibold">Full Payment</p>
      </div>
      <div
        className={`${
          selectedOption === "emi"
            ? "ring-2 ring-offset-tremor-brand-emphasis/50 bg-dark-tremor-brand-emphasis/10"
            : "ring-1 ring-gray-400"
        } cursor-pointer rounded-tremor-default shadow-tremor-card flex flex-row items-center justify-center w-full h-[60px] bg-white`}
        onClick={() => setSelectedOption("emi")}
      >
        <p className="text-gray-800 font-semibold">Emi Payment</p>
      </div>
    </div>
  );
};
