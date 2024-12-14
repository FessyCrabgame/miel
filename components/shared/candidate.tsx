/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { courseProgresss } from "./consts/data";
import { Button } from "@/components/ui";

interface Props {
  className?: string;
  candidate: {
    name: string;
    birthData: string;
    education: string;
    link: string;
    image: string;
    curses: number[];
    achievements: number[];
    town: string;
    index: number;
  };
}

export const Candidate: React.FC<Props> = ({ className, candidate }) => {
  return (
    <div className={cn("", className)}>
      <div className={`w-[476px] h-[596px] shadow-xl mr-12`}>
        <div className="flex pt-[35px] pl-[17px] gap-6">
          <img
            className="max-w-[90px] max-h-[90px]"
            src={candidate.image}
            width={90}
            height={90}
            alt="photo"
          />
          <div className="flex flex-col">
            <p className="text-2xl">{candidate.name}</p>
            <div className="flex mt-5 justify-between">
              <div className="flex flex-col text-base">
                <p>Дата рождения</p>
                <p>Город проживания</p>
                <p>Образование</p>
                <p>Резюме</p>
              </div>
              <div className="flex flex-col text-base">
                <p>{candidate.birthData}</p>
                <p>{candidate.town}</p>
                <p>{candidate.education}</p>
                <a className="text-rose-500" href={`${candidate.link}`}>
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
              <p className={`${candidate.curses[0] == 0 ? "opacity-50" : ""}`}>
                Введение в профессию риелтор{" "}
                {courseProgresss[candidate.curses[3]]}
              </p>
            </div>
            <div className="flex gap-2 items-center text-xl">
              <div className={`bg-yellow-600 w-3 h-3`} />
              <p className={`${candidate.curses[1] == 0 ? "opacity-50" : ""}`}>
                Базовый юридический курс {courseProgresss[candidate.curses[2]]}
              </p>
            </div>
            <div className="flex gap-2 items-center text-xl">
              <div className={`bg-purple-500 w-3 h-3`} />
              <p className={`${candidate.curses[2] == 0 ? "opacity-50" : ""}`}>
                Курс «Ипотека» {courseProgresss[candidate.curses[1]]}
              </p>
            </div>
            <div className="flex gap-2 items-center text-xl">
              <div className={`bg-green-600 w-3 h-3`} />
              <p className={`${candidate.curses[3] == 0 ? "opacity-50" : ""}`}>
                Курс «Налогообложение» {courseProgresss[candidate.curses[0]]}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 pl-[17px]">
          <p className="text-2xl">Достижения</p>
          {candidate.achievements[0] ? (
            <div className="flex gap-2 items-center text-xl ">
              <div className={`bg-green-600 w-3 h-3`} />
              <p>Клиенты {candidate.achievements[0]}</p>
            </div>
          ) : (
            ""
          )}
          {candidate.achievements[1] ? (
            <div className="flex gap-2 items-center text-xl ">
              <div className={`bg-orange-600 w-3 h-3`} />
              <p>Клиенты {candidate.achievements[1]}</p>
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
    </div>
  );
};
