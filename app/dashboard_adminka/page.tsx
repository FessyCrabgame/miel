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
  MessageCircle,
  MessageSquareText,
  Settings,
  UsersRound,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface Props {
  className?: string;
}

interface candidatObject {
  whereabout: string;
  place: string;
  kvoti: number;
  kvotiSaved: number;
  phone: string;
  name: string;
  mail: string;
}

const Dashboard_adminka: React.FC<Props> = ({ className }) => {
  const colors: string[] = ["[#FF5E01]", "[#9CC700]", "[#01BEC2]", "[#FFCB05]"];

  const objectData: candidatObject[] = [
    {
      whereabout: "На Николоямской",
      place: "Николоямская улица, 40 с1",
      kvoti: 10,
      kvotiSaved: 5,
      phone: "+7 (495) 777-88-83",
      name: "Марина Толстик",
      mail: "info@miel.ru",
    },
    {
      whereabout: "На Николоямской",
      place: "Николоямская улица, 40 с1",
      kvoti: 10,
      kvotiSaved: 5,
      phone: "+7 (495) 777-88-83",
      name: "Марина Толстик",
      mail: "info@miel.ru",
    },
    {
      whereabout: "На Николоямской",
      place: "Николоямская улица, 40 с1",
      kvoti: 10,
      kvotiSaved: 5,
      phone: "+7 (495) 777-88-83",
      name: "Марина Толстик",
      mail: "info@miel.ru",
    },
    {
      whereabout: "На Николоямской",
      place: "Николоямская улица, 40 с1",
      kvoti: 10,
      kvotiSaved: 5,
      phone: "+7 (495) 777-88-83",
      name: "Марина Толстик",
      mail: "info@miel.ru",
    },
    {
      whereabout: "На Николоямской",
      place: "Николоямская улица, 40 с1",
      kvoti: 10,
      kvotiSaved: 5,
      phone: "+7 (495) 777-88-83",
      name: "Марина Толстик",
      mail: "info@miel.ru",
    },
    {
      whereabout: "На Николоямской",
      place: "Николоямская улица, 40 с1",
      kvoti: 10,
      kvotiSaved: 5,
      phone: "+7 (495) 777-88-83",
      name: "Марина Толстик",
      mail: "info@miel.ru",
    },
    {
      whereabout: "На Николоямской",
      place: "Николоямская улица, 40 с1",
      kvoti: 10,
      kvotiSaved: 5,
      phone: "+7 (495) 777-88-83",
      name: "Марина Толстик",
      mail: "info@miel.ru",
    },
    {
      whereabout: "На Николоямской",
      place: "Николоямская улица, 40 с1",
      kvoti: 10,
      kvotiSaved: 5,
      phone: "+7 (495) 777-88-83",
      name: "Марина Толстик",
      mail: "info@miel.ru",
    },
    {
      whereabout: "На Николоямской",
      place: "Николоямская улица, 40 с1",
      kvoti: 10,
      kvotiSaved: 5,
      phone: "+7 (495) 777-88-83",
      name: "Марина Толстик",
      mail: "info@miel.ru",
    },
    {
      whereabout: "На Николоямской",
      place: "Николоямская улица, 40 с1",
      kvoti: 10,
      kvotiSaved: 5,
      phone: "+7 (495) 777-88-83",
      name: "Марина Толстик",
      mail: "info@miel.ru",
    },
  ];
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
          <div className="flex justify-center flex-col gap-0 mt-12">
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
        <div className="w-[81vw] pt-8 pl-[23px] flex flex-col justify-between">
          <div className="flex gap-[32px]">
            <p className="font-medium text-3xl border-b-2 border-solid border-orange-500">
              Офисы
            </p>
            <p className="font-medium text-3xl opacity-50 hover:border-b-2 hover:border-solid hover:border-orange-500 cursor-pointer">
              Руководители
            </p>
          </div>
          <div className="pt-8 pl-[-23px] flex gap-4">
            <Input
              className="rounded-none w-[696px]"
              placeholder="Найти офис"
            />
            <Button className="bg-white w-[160px] text-black border-[#960047] border-solid border-[1px] rounded-none hover:bg-[#960047]">
              Поиск
            </Button>
            <Button className="bg-[#960047] w-[160px] rounded-none hover:bg-[#960046a9]">
              Добавить офис
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-7 overflow-y-scroll w-[60vw] h-[720px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100">
            {objectData.map((candidatObject, index) => (
              <div
                key={index}
                className={`border-solid border-[1px] border-gray-300 w-[516px] h-[290px] p-5 border-b-4 border-b-${colors[index]}`}
              >
                <div className="">
                  <p className="opacity-50 text-base">
                    {candidatObject.whereabout}
                  </p>
                  <p className="text-xl font-semibold">
                    {candidatObject.place}
                  </p>
                </div>
                <div className="mt-[36px] flex justify-between">
                  <div>
                    <p>Количество квот всего</p>
                    <p>Количество квот свободно</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p>{candidatObject.kvoti}</p>
                    <p>{candidatObject.kvotiSaved}</p>
                  </div>
                </div>
                <div className="h-[2px] w-[476px] bg-gray-300 mt-[36px]"></div>
                <div className="flex mt-[18px] w-[476px] justify-between">
                  <div>
                    <p>Руководитель</p>
                    <p>{candidatObject.phone}</p>
                  </div>
                  <div>
                    <div className="flex gap-[8px]">
                      <p>{candidatObject.name}</p>
                      <MessageCircle className="opacity-50" />
                    </div>
                    <p>{candidatObject.mail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard_adminka;
