import { cn } from "@/lib/utils";
import { BossFilters } from "./bossFilters";

interface Props {
  className?: string;
}

export const DashboardBossInvitingHistory: React.FC<Props> = ({
  className,
}) => {
  return (
    <div className={cn(" flex flex-col justify-between", className)}>
      <BossFilters />
    </div>
  );
};
