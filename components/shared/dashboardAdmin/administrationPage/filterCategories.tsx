"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { OfficeItems } from "./officeItems";
import { AdminItems } from "./adminItems";

interface Props {
  className?: string;
}

export const FilterCategories: React.FC<Props> = ({ className }) => {
  const [page, setPage] = useState(true);
  return (
    <div
      className={cn(
        "w-[81vw] pt-8 pl-[23px] flex flex-col justify-between",
        className
      )}
    >
      <div className="flex gap-[32px]">
        <p
          onClick={() => setPage(true)}
          className="font-medium text-3xl border-b-2 border-solid border-orange-500"
        >
          Офисы
        </p>
        <p
          onClick={() => setPage(false)}
          className="font-medium text-3xl opacity-50 hover:border-b-2 hover:border-solid hover:border-orange-500 cursor-pointer"
        >
          Руководители
        </p>
      </div>
      {page ? <OfficeItems /> : <AdminItems />}
    </div>
  );
};
