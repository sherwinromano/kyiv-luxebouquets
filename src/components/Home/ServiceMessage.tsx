import { Link } from "react-router-dom";
import Button from "../Button";

type ServiceMessageProps = {
  wrapperStyle: string;
  title: string;
  subtitle: string;
  textWrapperStyle?: string;
  buttonStyle: string;
  buttonLabel: string;
  link: string;
};

const ServiceMessage = ({
  wrapperStyle,
  title,
  subtitle,
  textWrapperStyle,
  buttonStyle,
  buttonLabel,
  link,
}: ServiceMessageProps) => {
  return (
    <div className={wrapperStyle}>
      <div className="flex flex-col items-center gap-4">
        <h4 className="font-[medium] uppercase text-base">Service</h4>
        <div className={textWrapperStyle}>
          <h2 className="font-[semibold] text-[3rem] text-center">{title}</h2>
          <p className="text-center font-[medium] text-[1.1rem]">{subtitle}</p>
        </div>
      </div>
      <Link to={link} className="self-center w-[30%]">
        <Button buttonStyle={buttonStyle} buttonLabel={buttonLabel} />
      </Link>
    </div>
  );
};

export default ServiceMessage;
