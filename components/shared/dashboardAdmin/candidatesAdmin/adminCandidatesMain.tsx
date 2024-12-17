'use client'
import { Button, Input } from "@/components/ui";
import fetchGetEndpoint from "@/lib/candidates";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

export const AdminCandidates: React.FC<Props> = ({ className }) => {
    const [candidates, setCandidates] = useState([])
    useEffect(() => {
        (async () => {
          const endpointToCall = "/api/admin/candidates/";
          setCandidates((await fetchGetEndpoint(endpointToCall)));
        })();
      }, []);
  return (
    <div
      className={cn(
        "",
        className
      )}
    ><div className="pt-8 pl-[-23px] flex gap-4">
    <Input className="rounded-none w-[696px]" placeholder="Найти кандидата" />
    <Button onClick={()=>console.log(candidates)} className="bg-white w-[160px] text-black border-[#960047] border-solid border-[1px] rounded-none hover:bg-[#960047]">
      Поиск
    </Button>
    <Button className="bg-[#960047] w-[160px] rounded-none hover:bg-[#960046a9]">
      Добавить кандидата
    </Button></div></div>)}
