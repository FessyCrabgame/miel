import { Button, DropdownMenu, DropdownMenuTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface Props {
  className?: string;
}

export const BossFilters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="pt-8 pl-[-23px] flex justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger className="border-black border-solid border-opacity-40 w-[196px] border-[1px] h-[34px]">
            <div className="flex justify-between opacity-40">
              <p className="ml-3">Новые</p>
              <ChevronDown className="mr-[9px]" />
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="border-black border-solid border-opacity-40 w-[196px] border-[1px] h-[34px]">
            <div className="flex justify-between opacity-40">
              <p className="ml-3">Возраст</p>
              <ChevronDown className="mr-[9px]" />
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="border-black border-solid border-opacity-40 w-[196px] border-[1px] h-[34px]">
            <div className="flex justify-between opacity-40">
              <p className="ml-3">Обучение</p>
              <ChevronDown className="mr-[9px]" />
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="border-black border-solid border-opacity-40 w-[196px] border-[1px] h-[34px]">
            <div className="flex justify-between opacity-40">
              <p className="ml-3">Образование</p>
              <ChevronDown className="mr-[9px]" />
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <Button className="bg-[#960047] w-[94px] hover:bg-[#960046bb]">
          Искать
        </Button>
      </div>
      <p className="mt-4 font-semibold text-xl">
        По вашему запросу найдено 29 кандидатов
      </p>
    </div>
  );
};