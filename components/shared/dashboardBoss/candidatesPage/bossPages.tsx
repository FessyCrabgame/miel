"use client";

import { cn } from "@/lib/utils";
import avatar from "../../../../public/assets/Ellipse 190@2x.png";
import Image from "next/image";
import graph from "../../../../public/assets/Frame 738001457.png";
import { Folder, Grid2X2, Heart, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  className?: string;
}

export const BossPages: React.FC<Props> = ({ className }) => {
  const location = useLocation();
  const [activeCategorie, setActiveCategorie] = useState(
    location.pathname == "/dashboardBossFavored"
      ? 1
      : location.pathname == "/dashboardBossQuotes"
      ? 2
      : location.pathname == "/dashboardBossInvitingHistory"
      ? 3
      : 0
  );

  return (
    <div className={cn("", className)}>
      <div className="float-left bg-gray-200 h-[calc(100vh-71px)] w-[277px]">
        <div className="flex items-center ml-6 mt-5 gap-3 ">
          <Image
            width={40}
            height={40}
            src={avatar}
            alt="avatar"
            className="mb-2"
          />
          <div>
            <p className="text-xs font-bold">Привет, Мария 👋</p>
            <p className="text-sm">Колесникова Мария</p>
          </div>
        </div>
        <div className="mt-12 gap-0 flex flex-col">
          <Link
            href={"./dashboardBossCandidates"}
            onClick={() => setActiveCategorie(0)}
            className={`${
              activeCategorie == 0 && "bg-gray-300"
            } flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300`}
          >
            <Grid2X2 />
            Витрина кандидатов
          </Link>
          <Link
            href={"./dashboardBossFavored"}
            onClick={() => setActiveCategorie(1)}
            className={`${
              activeCategorie == 1 && "bg-gray-300"
            } pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300 flex`}
          >
            <Heart />
            Избранное
          </Link>
          <Link
            href={"./dashboardBossInvitingHistory"}
            onClick={() => setActiveCategorie(2)}
            className={`${
              activeCategorie == 3 && "bg-gray-300"
            } pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300 flex`}
          >
            <Folder />
            История приглашений
          </Link>
          <p
            className={`${
              activeCategorie == 4 && "bg-gray-300"
            } pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300 flex`}
          >
            <Users />
            Календарь встреч
          </p>
        </div>
        <Image
          src={graph}
          width={198}
          height={243}
          alt="graph"
          className="mt-[96px] ml-[39px]"
        />
      </div>
    </div>
  );
};
