/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import fetchGetEndpoint from "@/lib/candidates";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import user from "@/public/assets/tcs61nk83dig738gik8qtkcx6ue7sgek.png";
interface Props {
  className?: string;
}

export const AdminItems: React.FC<Props> = ({ className }) => {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    (async () => {
      const endpointToCall = "/api/admin/supervisors/";
      setCandidates((await fetchGetEndpoint(endpointToCall)).data);
    })();
  }, []);
  return (
    <div className={cn("", className)}>
      <div className="pt-8 pl-[-23px] flex gap-4">
        <Input
          className="rounded-none w-[696px]"
          placeholder="Найти руководителя"
        />
        <Button className="bg-white w-[160px] text-black border-[#960047] border-solid border-[1px] rounded-none hover:bg-[#960047]">
          Поиск
        </Button>
        <Button className="bg-[#960047] w-[160px] rounded-none hover:bg-[#960046a9]">
          Добавить руководителя
        </Button>
      </div>
      <Table className="border-solid border-[#CACBCD] border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-center">ФИО</TableHead>
            <TableHead className="font-bold">Город</TableHead>
            <TableHead className="font-bold">Телефон</TableHead>
            <TableHead className="font-bold ">Email</TableHead>
            <TableHead className="font-bold">Офис</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((objectData) => (
            <TableRow key={objectData.index}>
              <TableCell className="flex items-center gap-3 justify-center">
                {objectData.photo ? (
                  <img
                    src={objectData.photo}
                    width={39}
                    height={39}
                    className="rounded-3xl"
                    alt="avatar"
                  />
                ) : (
                  <Image
                    className="max-w-[90px] max-h-[90px]"
                    src={user}
                    width={39}
                    height={39}
                    alt="photo"
                  />
                )}

                <p>{objectData.user.username}</p>
              </TableCell>
              <TableCell>{objectData.city}</TableCell>
              <TableCell>{objectData.age} года</TableCell>
              <TableCell className="flex items-center gap-3">
                <div
                  className={`h-[39px] w-1 bg-[${
                    statusColor[statusColor.indexOf(objectData.status) + 1]
                  }]`}
                />
                {statusPosition[statusPosition.indexOf(objectData.status) + 1]}
              </TableCell>
              <TableCell>{objectData.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
