import GraphicProgressionSVG from "../../assets/graphic-progression.svg";

const Card = ({
  icon,
  title,
  subtitle,
  subtitle1
}) => {
  return (
    <div className="h-[88px] rounded-lg bg-white border border-gray-300 flex justify-between items-center px-2 sm:px-4">
      <div className="flex gap-3 items-center">
        <div className="shadow-icon p-2">
          {icon && <img src={icon} width={24} alt="" />}
        </div>
        <div>
          <div className="flex items-center"> {/* New div for icon and paragraph */}
            <p className="text-md font-semibold opacity-90 ml-2">{title}</p> {/* Title */}
            {icon && <img src={GraphicProgressionSVG} width={15} alt="" className="ml-3 mb-2"/>} {/* Icon */}
            <p className="text-[13px] font-light text-gray-700 ml-1 mb-2">{subtitle1}</p> {/* Subtitle */}
          </div>
          <p className="text-xs font-light text-gray-700">{subtitle}</p> {/* Subtitle */}
        </div>
      </div>
    </div>
  );
};

export default Card;
