/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { candidatObject } from "./consts/data";
import { Button } from "@/components/ui";
import user from "@/public/assets/tcs61nk83dig738gik8qtkcx6ue7sgek.png";
import Image from "next/image";

interface Props {
  className?: string;
  candidate: candidatObject;
}

export const Candidate: React.FC<Props> = ({ className, candidate }) => {
  const courseInfo: string[] = [
    "not_started",
    "не начат",
    "completed",
    "пройден",
    "in_process",
    "в процессе",
  ];
  return (
    <div className={cn("", className)}>
      <div
        className={`w-[476px] h-[596px] shadow-xl mr-12`}
        onClick={() => console.log(candidate)}
      >
        <div className="flex pt-[35px] pl-[17px] gap-6">
          {candidate.photo ? (
            <img
              className="max-w-[90px] max-h-[90px]"
              src={candidate.photo}
              width={90}
              height={90}
              alt="photo"
            />
          ) : (
            <Image
              className="max-w-[90px] max-h-[90px]"
              src={user}
              width={90}
              height={90}
              alt="photo"
            />
          )}

          <div className="flex flex-col">
            <p className="text-2xl">{candidate.name}</p>
            <div className="flex mt-5 justify-between">
              <div className="flex flex-col text-base">
                <p>Дата рождения</p>
                <p>Город проживания</p>
                <p>Образование</p>
                <p>Резюме</p>
              </div>
              <div className="flex flex-col text-base ml-[25px]">
                <p>{candidate.birth}</p>
                <p>{candidate.city}</p>
                <p>{candidate.education}</p>
                <a className="text-rose-500" href={`${candidate.resume}`}>
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
                  candidate.course_rieltor_join == "not_started"
                    ? "opacity-50"
                    : ""
                }`}
              >
                Введение в профессию риелтор{" "}
                {
                  courseInfo[
                    courseInfo.indexOf(candidate.course_rieltor_join) + 1
                  ]
                }
              </p>
            </div>
            <div className="flex gap-2 items-center text-xl">
              <div className={`bg-yellow-600 w-3 h-3`} />
              <p
                className={`${
                  candidate.basic_legal_course == "not_started"
                    ? "opacity-50"
                    : ""
                }`}
              >
                Базовый юридический курс{" "}
                {
                  courseInfo[
                    courseInfo.indexOf(candidate.basic_legal_course) + 1
                  ]
                }
              </p>
            </div>
            <div className="flex gap-2 items-center text-xl">
              <div className={`bg-purple-500 w-3 h-3`} />
              <p
                onClick={() =>
                  console.log(courseInfo.indexOf(candidate.course_mortgage))
                }
                className={`${
                  candidate.course_mortgage == "not_started" ? "opacity-50" : ""
                }`}
              >
                Курс «Ипотека»{" "}
                {courseInfo[courseInfo.indexOf(candidate.course_mortgage) + 1]}
              </p>
            </div>
            <div className="flex gap-2 items-center text-xl">
              <div className={`bg-green-600 w-3 h-3`} />
              <p
                className={`${
                  candidate.course_taxation == "not_started" ? "opacity-50" : ""
                }`}
              >
                Курс «Налогообложение»{" "}
                {courseInfo[courseInfo.indexOf(candidate.course_taxation) + 1]}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 pl-[17px]">
          <p className="text-2xl">Достижения</p>
          <div className="flex gap-[63px]">
            {candidate.clients ? (
              <div className="flex gap-2 items-center text-xl ">
                <div className={`bg-green-600 w-3 h-3`} />
                <p>Клиенты {candidate.clients}</p>
              </div>
            ) : (
              ""
            )}
            {candidate.completed_objects ? (
              <div className="flex gap-2 items-center text-xl ">
                <div className={`bg-orange-600 w-3 h-3`} />
                <p>Клиенты {candidate.completed_objects}</p>
              </div>
            ) : (
              ""
            )}
          </div>
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
