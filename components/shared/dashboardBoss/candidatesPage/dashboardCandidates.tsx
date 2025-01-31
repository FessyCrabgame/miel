"use client";
import { cn } from "@/lib/utils";
import { BossFilters } from ".";
import { candidatObject } from "../../consts/data";
import { Candidate } from "../../candidate";
import fetchGetEndpoint from "../../../../lib/candidates";
import { useEffect, useState } from "react";

export const DashboardBossCandidates = () => {
  const [candidates, setCandidates] = useState<candidatObject[]>([]);
  const token = localStorage.getItem("token") || "";
  useEffect(() => {
    (async () => {
      const endpointToCall = "/api/supervisor/candidates/";
      setCandidates((await fetchGetEndpoint(endpointToCall, token)).data);
    })();
  }, []);
  return (
    <div
      onClick={() => console.log(candidates)}
      className={cn("w-[81vw] pt-8 pl-[23px] flex flex-col justify-between")}
    >
      <BossFilters />
      <p className="mt-4 font-semibold text-xl">
        По вашему запросу найдено {candidates ? candidates.length : ""}{" "}
        кандидатов
      </p>
      <div className="flex  flex-wrap ml-[-10px] gap-0 w-[84vw] justify-between mt-[10px] pl-[10px] overflow-y-scroll h-[720px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100">
        {candidates.length &&
          candidates.map((candidatObject) => (
            <Candidate candidate={candidatObject} key={candidatObject.id} />
          ))}
      </div>
    </div>
  );
};
