import { cn } from "@/lib/utils";
import { BossFilters, Candidate } from ".";
import { objectData } from "../../consts/data";

interface Props {
  className?: string;
}

export const DashboardBossCandidates: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-[81vw] pt-8 pl-[23px] flex flex-col justify-between",
        className
      )}
    >
      <BossFilters />
      <div className="flex  flex-wrap ml-[-10px] gap-0 w-[84vw] justify-between mt-[10px] pl-[10px] overflow-y-scroll h-[720px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100">
        {objectData.map((candidatObject) => (
          <Candidate candidate={candidatObject} key={candidatObject.index} />
        ))}
      </div>
    </div>
  );
};
