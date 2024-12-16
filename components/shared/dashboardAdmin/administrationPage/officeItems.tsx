import { Button, Input } from "@/components/ui";
import { cn } from "@/lib/utils";
import { OfficeItem } from ".";
import { adminData } from "../../consts/data";

interface Props {
  className?: string;
}

export const OfficeItems: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="pt-8 pl-[-23px] flex gap-4">
        <Input className="rounded-none w-[696px]" placeholder="Найти офис" />
        <Button className="bg-white w-[160px] text-black border-[#960047] border-solid border-[1px] rounded-none hover:bg-[#960047]">
          Поиск
        </Button>
        <Button className="bg-[#960047] w-[160px] rounded-none hover:bg-[#960046a9]">
          Добавить офис
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 mt-7 overflow-y-scroll w-[70vw] h-[720px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100">
        {adminData.map((candidatObject, index) => (
          <OfficeItem
            key={index}
            candidatObject={candidatObject}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
