import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../public/assets/Group.png";
import avatar from "../../public/assets/Ellipse 190@2x.png";
import officeWoman from "../../public/assets/Office woman.png";
import {
  ArchiveRestore,
  BellDot,
  BellIcon,
  ChartNoAxesColumnIncreasing,
  FileSliders,
  List,
  LogOut,
  MessageSquareText,
  Settings,
  UsersRound,
} from "lucide-react";

interface Props {
  className?: string;
}

const Dashboard_adminka: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <header
        className={cn(
          "flex justify-between border-b-[1px] h-[72px] border-gray-300 border-solid bg-[#960047] items-center",
          className
        )}
      >
        <Image
          width={201}
          height={52}
          src={logo}
          alt="logo"
          className="cursor-pointer pl-10"
        />
        <i className="text-white font-sans text-xl font-d">
          Маленькие детали имеют решающее значение. Это те мелочи, которые
          делают большую разницу.
        </i>
        <div>
          <div className="flex py-7 pr-[41px] gap-[20px]">
            <BellIcon height={24} width={24} className="text-white" />
            <MessageSquareText height={24} width={24} className="text-white" />
            <LogOut height={24} width={24} className="text-white" />
          </div>
        </div>
      </header>
      <main>
        <div className="float-left bg-gray-200 h-[calc(100vh-71px)] w-[277px]">
          <div className="flex items-center justify-center mt-5 gap-3 ">
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
            <p className="flex pl-[10px] p-[10px] gap-[9px] bg-gray-300 cursor-pointer">
              <FileSliders />
              Администрирование
            </p>
            <p className="flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300">
              <List />
              Планирование
            </p>
            <p className="flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300">
              <UsersRound /> Витрина кандидатов
            </p>
            <p className="flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300">
              <ChartNoAxesColumnIncreasing />
              Статистика
            </p>
            <p className="flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300">
              <ArchiveRestore />
              Архив
            </p>
          </div>
          <div className="flex justify-center mt-5 flex-col gap-0 mt-12">
            <p className="flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300">
              <BellDot />
              Уведомления
            </p>
            <p className="flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300">
              <Settings />
              Настройки
            </p>
          </div>
          <Image
            src={officeWoman}
            width={280}
            height={240}
            alt="graph"
            className="absolute bottom-0"
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard_adminka;
