import { Button, Input } from "@/components/ui";
import { cn } from "@/lib/utils";
import { adminData } from "../../consts/data";
import { OfficeItem } from "./officeItem";

interface Props {
  className?: string;
}

export const FilterCategories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-[81vw] pt-8 pl-[23px] flex flex-col justify-between",
        className
      )}
    >
      <div className="flex gap-[32px]">
        <p className="font-medium text-3xl border-b-2 border-solid border-orange-500">
          Офисы
        </p>
        <p className="font-medium text-3xl opacity-50 hover:border-b-2 hover:border-solid hover:border-orange-500 cursor-pointer">
          Руководители
        </p>
      </div>
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
