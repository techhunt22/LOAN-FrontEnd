import { MonitorCard } from "./monitor.card";

interface MonitorCardGroupProps {
  paymentContents: {
    price: string;
    recommeded: boolean;
    icon: string;
    contents: {
      record: string;
    }[];
  }[];
}

export const MonitorCardGroup: React.FC<MonitorCardGroupProps> = (props) => {
  const cardNumber = props.paymentContents.length;

  const arr = [];
  for (let i = 0; i < cardNumber / 3; i++) {
    arr.push(
      <div className="flex flex-row w-full gap-4 justify-center monitorCard">
        <MonitorCard paymentContents1={props.paymentContents[3 * i]} />
        <MonitorCard paymentContents1={props.paymentContents[3 * i + 1]} />
        <MonitorCard paymentContents1={props.paymentContents[3 * i + 2]} />
      </div>
    );
  }
  return arr;
};
