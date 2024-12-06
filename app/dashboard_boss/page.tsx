"use client";

import Image from "next/image";
import logo from "../../public/assets/Vector.png";
import avatar from "../../public/assets/Ellipse 190@2x.png";
import graph from "../../public/assets/Frame 738001457.png";
import { cn } from "@/lib/utils";
import {
  BellIcon,
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  Folder,
  Grid2X2,
  Heart,
  LogOut,
  MessageSquareText,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
}

interface candidatObject {
  name: string;
  birthData: string;
  education: string;
  link: string;
  image: string;
  curses: number[];
  achievements: number[];
  town: string;
  index: number;
}

const courseProgresss = ["пройден", "в процессе", "не начат", "не начат"];

const dashboardBoss: React.FC<Props> = ({ className }) => {
  const objectData: candidatObject[] = [
    {
      name: "Романова Мария Ивановна",
      birthData: "05.11.2000 (24 года)",
      education: "Высшее",
      link: "Ссылка на резюме",
      image: "https://loremflickr.com/200/200?random=1",
      curses: [2, 2, 1, 0],
      achievements: [0, 6],
      town: "Москва",
      index: 0,
    },
    {
      name: "Романова Мария Ивановна",
      birthData: "05.11.2000 (24 года)",
      education: "Высшее",
      link: "Ссылка на резюме",
      image: "https://loremflickr.com/200/200?random=1",
      curses: [2, 2, 1, 0],
      achievements: [0, 6],
      town: "Москва",
      index: 0,
    },
    {
      name: "Романова Мария Ивановна",
      birthData: "05.11.2000 (24 года)",
      education: "Высшее",
      link: "Ссылка на резюме",
      image: "https://loremflickr.com/200/200?random=1",
      curses: [2, 2, 1, 0],
      achievements: [5, 6],
      town: "Москва",
      index: 1,
    },
    {
      name: "Романова Мария Ивановна",
      birthData: "05.11.2000 (24 года)",
      education: "Высшее",
      link: "Ссылка на резюме",
      image: "https://loremflickr.com/200/200?random=1",
      curses: [2, 2, 1, 0],
      achievements: [5, 6],
      town: "Москва",
      index: 2,
    },
    {
      name: "Романова Мария Ивановна",
      birthData: "05.11.2000 (24 года)",
      education: "Высшее",
      link: "Ссылка на резюме",
      image: "https://loremflickr.com/200/200?random=1",
      curses: [2, 2, 1, 0],
      achievements: [5, 6],
      town: "Москва",
      index: 3,
    },
    {
      name: "Романова Мария Ивановна",
      birthData: "05.11.2000 (24 года)",
      education: "Высшее",
      link: "Ссылка на резюме",
      image: "https://loremflickr.com/200/200?random=1",
      curses: [2, 2, 1, 0],
      achievements: [5, 6],
      town: "Москва",
      index: 4,
    },
  ];

  return (
    <div>
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
              <Grid2X2 />
              Витрина кандидатов
            </p>
            <p className="flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300">
              <Heart />
              Избранное
            </p>
            <p className="flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300">
              <ChartNoAxesColumnIncreasing /> Статистика по квотам
            </p>
            <p className="flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300">
              <Folder />
              История приглашений
            </p>
            <p className="flex pl-[10px] p-[10px] gap-[9px] cursor-pointer hover:bg-gray-300">
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
        <div className="w-[81vw] pt-8 pl-[23px] flex flex-col justify-between">
          <p className="font-medium text-4xl">Витрина кандидатов </p>
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
          <div className="flex  flex-wrap ml-[-10px] gap-0 w-[84vw] justify-between p-[10px] overflow-y-scroll h-[720px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100">
            {objectData.map((candidatObject) => (
              <div
                className={`w-[476px] h-[596px] shadow-xl mr-12`}
                key={candidatObject.index}
              >
                <div className="flex pt-[35px] pl-[17px] gap-6">
                  <Image
                    className="max-w-[90px] max-h-[90px]"
                    src={avatar}
                    width={90}
                    height={90}
                    alt="photo"
                  />
                  <div className="flex flex-col">
                    <p className="text-2xl">{candidatObject.name}</p>
                    <div className="flex mt-5 justify-between">
                      <div className="flex flex-col text-base">
                        <p>Дата рождения</p>
                        <p>Город проживания</p>
                        <p>Образование</p>
                        <p>Резюме</p>
                      </div>
                      <div className="flex flex-col text-base">
                        <p>{candidatObject.birthData}</p>
                        <p>{candidatObject.town}</p>
                        <p>{candidatObject.education}</p>
                        <a
                          className="text-rose-500"
                          href={`${candidatObject.link}`}
                        >
                          Ссылка на резюме
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-9 ml-[17px]">
                  <p className="text-2xl">Обучение в Миэль</p>
                  <div className="mt-2">
                    <div className="flex gap-2 items-center text-xl">
                      <div className={`bg-blue-400 w-3 h-3 `} />
                      <p
                        className={`${
                          candidatObject.curses[0] == 0 ? "opacity-50" : ""
                        }`}
                      >
                        Введение в профессию риелтор{" "}
                        {courseProgresss[candidatObject.curses[3]]}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center text-xl">
                      <div className={`bg-yellow-600 w-3 h-3`} />
                      <p
                        className={`${
                          candidatObject.curses[1] == 0 ? "opacity-50" : ""
                        }`}
                      >
                        Базовый юридический курс{" "}
                        {courseProgresss[candidatObject.curses[2]]}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center text-xl">
                      <div className={`bg-purple-500 w-3 h-3`} />
                      <p
                        className={`${
                          candidatObject.curses[2] == 0 ? "opacity-50" : ""
                        }`}
                      >
                        Курс «Ипотека»{" "}
                        {courseProgresss[candidatObject.curses[1]]}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center text-xl">
                      <div className={`bg-green-600 w-3 h-3`} />
                      <p
                        className={`${
                          candidatObject.curses[3] == 0 ? "opacity-50" : ""
                        }`}
                      >
                        Курс «Налогообложение»{" "}
                        {courseProgresss[candidatObject.curses[0]]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-7 pl-[17px]">
                  <p className="text-2xl">Достижения</p>
                  {candidatObject.achievements[0] ? (
                    <div className="flex gap-2 items-center text-xl ">
                      <div className={`bg-green-600 w-3 h-3`} />
                      <p>Клиенты {candidatObject.achievements[0]}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {candidatObject.achievements[1] ? (
                    <div className="flex gap-2 items-center text-xl ">
                      <div className={`bg-orange-600 w-3 h-3`} />
                      <p>Клиенты {candidatObject.achievements[1]}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mt-11 pl-[94.5px] flex gap-4">
                  <Button className="bg-[#960047] rounded-none hover:bg-[#960046a9]">
                    Пригласить
                  </Button>
                  <Button className="bg-white text-black border-[#960047] border-solid border-[1px] rounded-none hover:bg-[#960047]">
                    В избранное
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default dashboardBoss;
