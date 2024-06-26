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
  const rows = [];

  for (let i = 0; i < cardNumber; i += 3) {
    rows.push(
      <div key={`row-${i}`} className="flex flex-row w-full gap-4 justify-center monitorCard">
        {props.paymentContents[i] && <MonitorCard key={`card-${i}`} paymentContents1={props.paymentContents[i]} />}
        {props.paymentContents[i + 1] && <MonitorCard key={`card-${i + 1}`} paymentContents1={props.paymentContents[i + 1]} />}
        {props.paymentContents[i + 2] && <MonitorCard key={`card-${i + 2}`} paymentContents1={props.paymentContents[i + 2]} />}
      </div>
    );
  }

  return <>{rows}</>;
};
