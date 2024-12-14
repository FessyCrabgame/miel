/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { historyData } from "../../consts/data";
interface Props {
  className?: string;
}

export const HistoryTable: React.FC<Props> = ({ className }) => {
  const statusColor: string[] = ["#FF7B2F", "#00AAAD", "#991FA9"];
  const statusPosition: string[] = ["Приглашен(а)", "Трудоустроен(а)", "Отказ"];
  return (
    <div className={cn("m-[53px] flex flex-col justify-between", className)}>
      <div className="flex gap-[92px] mt-10 text-xl">
        <p className="whitespace-nowrap text-xl">
          Данные с 01.02.20024 - 30.10. 2024
        </p>
        <div className="flex gap-11">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#FF7B2F]" />
            <p>Приглашен(а)</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#00AAAD]" />
            <p>Трудоустроен(а)</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#991FA9]" />
            <p>Отказ</p>
          </div>
        </div>
      </div>
      <Table className="border-solid border-[#CACBCD] border-2">
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-center">ФИО</TableHead>
            <TableHead className="font-bold">Город</TableHead>
            <TableHead className="font-bold">Возраст</TableHead>
            <TableHead className="font-bold ">Статус</TableHead>
            <TableHead className="font-bold">Дата</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {historyData.map((objectData) => (
            <TableRow key={objectData.index}>
              <TableCell className="flex items-center gap-3">
                <img
                  src={objectData.image}
                  width={39}
                  height={39}
                  className="rounded-3xl"
                  alt="avatar"
                />
                {objectData.name}
              </TableCell>
              <TableCell>{objectData.town}</TableCell>
              <TableCell>{objectData.age} года</TableCell>
              <TableCell className="flex items-center gap-3">
                <div
                  className={`h-[39px] w-1 bg-[${
                    statusColor[objectData.status]
                  }]`}
                />
                {statusPosition[objectData.status]}
              </TableCell>
              <TableCell>{objectData.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
