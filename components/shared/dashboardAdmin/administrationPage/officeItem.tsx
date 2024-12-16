import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface Props {
  className?: string;
  candidatObject: {
    whereabout: string;
    place: string;
    kvoti: number;
    kvotiSaved: number;
    phone: string;
    name: string;
    mail: string;
  };
  index: number;
}

export const OfficeItem: React.FC<Props> = ({
  className,
  index,
  candidatObject,
}) => {
  const colors: string[] = [
    "border-b-[#FF5E01]",
    "border-b-[#9CC700]",
    "border-b-[#01BEC2]",
    "border-b-[#FFCB05]",
  ];
  return (
    <div className={cn("", className)}>
      <div
        key={index}
        className={`border-solid border-[1px] border-gray-300 w-[416px] h-[290px] p-5 border-b-4 ${
          colors[index % 4]
        }`}
      >
        <div className="">
          <p className="opacity-50 text-base">{candidatObject.whereabout}</p>
          <p className="text-xl font-semibold">{candidatObject.place}</p>
        </div>
        <div className="mt-[36px] flex justify-between">
          <div>
            <p>Количество квот всего</p>
            <p>Количество квот свободно</p>
          </div>
          <div className="flex flex-col items-end">
            <p>{candidatObject.kvoti}</p>
            <p>{candidatObject.kvotiSaved}</p>
          </div>
        </div>
        <div className="h-[2px] w-[376px] bg-gray-300 mt-[36px]"></div>
        <div className="flex mt-[18px] w-[376px] justify-between">
          <div>
            <p>Руководитель</p>
            <p>{candidatObject.phone}</p>
          </div>
          <div>
            <div className="flex gap-[8px]">
              <p>{candidatObject.name}</p>
              <MessageCircle className="opacity-50" />
            </div>
            <p>{candidatObject.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
