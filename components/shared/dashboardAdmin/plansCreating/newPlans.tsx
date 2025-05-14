"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import "../../dataPicker/DatePicker.css";
import "../../dataPicker/Calendar.css";
import { Button, Checkbox } from "@/components/ui";
import { Ellipsis, Pen, Trash2 } from "lucide-react";
import fetchGetEndpoint, {
  fetchDelete,
  fetchPatchEndpoint,
  fetchPostEndpoint,
} from "@/lib/candidates";
import css from "./main.module.css";
import toast, { Toaster } from "react-hot-toast";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Tasks {
  created_at: string;
  due_date: string;
  id: number;
  is_complete: boolean;
  is_deleted: boolean;
  task: string;
  user: string;
}

interface NewTasks {
  total_created: number;
  total_completed: number;
  total_deleted: number;
  max_created_day: string;
  max_completed_day: string;
}

export const NewPlans = () => {
  const [newTasks, setNewTasks] = useState<NewTasks>({
    total_created: 0,
    total_completed: 0,
    total_deleted: 0,
    max_created_day: "",
    max_completed_day: "",
  });
  const token = localStorage.getItem("token") || "";
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [value, onChange] = useState<Value>(null);

  const [isCreating, setIsCreating] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    (async () => {
      const endpointToCall = "/api/todos/";
      const response = await fetchGetEndpoint(
        endpointToCall,
        token,
        undefined,
        undefined,
        value
      );
      if ("data" in response && Array.isArray(response.data)) {
        setTasks(response.data);
      } else {
        console.error("Error fetching tasks:", response);
      }
    })();
  }, [token, value]);

  useEffect(() => {
    (async () => {
      const endpointToCall = "/api/todo-stats/";
      const response = await fetchGetEndpoint(endpointToCall, token);
      if ("data" in response && response.data) {
        setNewTasks({
          total_created: response.data.total_created || 0,
          total_completed: response.data.total_completed || 0,
          total_deleted: response.data.total_deleted || 0,
          max_created_day: response.data.max_created_day || "",
          max_completed_day: response.data.max_completed_day || "",
        });
      } else {
        console.error("Error fetching stats:", response);
      }
    })();
  }, [token]);

  const saveTask = async (taskId: number) => {
    try {
      const result = await fetchPatchEndpoint(
        `/api/todos/${taskId}/`,
        { task: editingText },
        token
      );
      if ("error" in result) throw new Error(result.error);

      toast.success("Задача обновлена");
      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, task: editingText } : t))
      );
      setEditingTaskId(null);
      setEditingText("");
    } catch (error) {
      console.error(error);
      toast.error("Изменения не сохранены");
    }
  };

  return (
    <div className={cn("m-[52px] overflow-x-visible")}>
      <p>Выберите дату или период</p>
      <div>
        <DatePicker
          className={"mt-4 h-10 w-52 text-sm"}
          onChange={onChange}
          value={value}
        />
        <Button
          onClick={() => {
            (async () => {
              const endpointToCall = "/api/todos/";
              const response = await fetchGetEndpoint(
                endpointToCall,
                token,
                undefined,
                undefined,
                value
              );
              if ("data" in response && Array.isArray(response.data)) {
                setTasks(response.data);
              } else {
                console.error("Error fetching tasks:", response);
              }
            })();
          }}
          className="ml-4 w-40 h-10 rounded-xl"
        >
          Выбрать
        </Button>
      </div>
      <p
        className="text-[#960047] mt-[19px] mb-[33px] ml-[19px] cursor-pointer"
        onClick={() => setIsCreating(true)}
      >
        + Создать задачу
      </p>
      <div className="flex gap-20">
        <div className="border-[#CACBCD] border-solid border-[1px] p-5 w-[566px]">
          <div className="w-full flex justify-between text-center mb-5">
            {tasks.filter((task) => !task.is_complete && !task.is_deleted)
              .length !== 0 && (
              <p className="text-[#960047]">Активные задачи</p>
            )}
          </div>
          <div className="flex flex-col gap-[10px]">
            {isCreating && (
              <div className="w-full bg-[#f0f0f0] flex p-[15px] justify-between border border-[#CACBCD]">
                <input
                  type="text"
                  placeholder="Название задачи"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  onKeyDown={async (e) => {
                    if (e.key === "Enter" && newTaskText.trim()) {
                      try {
                        const response = await fetchPostEndpoint(
                          "/api/todos/",
                          {
                            task: newTaskText,
                            is_complete: false,
                            is_deleted: false,
                          },
                          token
                        );
                        if (response.error) throw new Error(response.error);
                        toast.success("Задача добавлена!");
                        setTasks((prev) => [response.data, ...prev]);
                        setNewTaskText("");
                        setIsCreating(false);
                      } catch (err) {
                        console.error(err);
                        toast.error("Ошибка при добавлении задачи");
                      }
                    }
                  }}
                  className="flex-grow px-2 py-1 border rounded"
                />
                <button
                  className="text-green-600 font-bold ml-3"
                  onClick={async () => {
                    if (!newTaskText.trim()) return;
                    try {
                      const response = await fetchPostEndpoint(
                        "/api/todos/",
                        {
                          task: newTaskText,
                          is_complete: false,
                          is_deleted: false,
                        },
                        token
                      );
                      if (response.error) throw new Error(response.error);
                      toast.success("Задача добавлена!");
                      setTasks((prev) => [response.data, ...prev]);
                      setNewTaskText("");
                      setIsCreating(false);
                    } catch (err) {
                      console.error(err);
                      toast.error("Ошибка при добавлении задачи");
                    }
                  }}
                >
                  ✓
                </button>
              </div>
            )}
            {tasks
              .filter((task) => !task.is_complete && !task.is_deleted)
              .map((task, index) => (
                <div
                  key={index}
                  className="w-full bg-[#d9f0f0] flex p-[15px] justify-between border border-[#CACBCD]"
                >
                  <div className="flex items-center gap-[10px]">
                    <Checkbox className="w-6 h-6" />
                    {editingTaskId === task.id ? (
                      <input
                        className="border px-1 rounded"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={async (e) => {
                          if (e.key === "Enter") saveTask(task.id);
                          if (e.key === "Escape") {
                            setEditingTaskId(null);
                            setEditingText("");
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <p>{task.task}</p>
                    )}
                  </div>
                  <div className="flex gap-[10px] items-center">
                    {editingTaskId === task.id ? (
                      <button
                        onClick={() => saveTask(task.id)}
                        className="text-green-600 font-bold"
                      >
                        ✓
                      </button>
                    ) : (
                      <Pen
                        className="opacity-50 cursor-pointer"
                        onClick={() => {
                          setEditingTaskId(task.id);
                          setEditingText(task.task);
                        }}
                      />
                    )}
                    <Trash2
                      className="opacity-50 cursor-pointer"
                      onClick={async () => {
                        const endpoint = `/api/todos/${task.id}`; // Укажите свой endpoint

                        const result = await fetchDelete(endpoint, token);

                        if (result && "error" in result) {
                          console.log(result.error); // Если есть ошибка, выводим ее
                        } else {
                          console.log(result); // Если успех, выводим данные
                          setTasks(
                            tasks.filter((zadanie) => zadanie.id != task.id)
                          );
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
          <div>
            {tasks.filter((task) => task.is_complete && !task.is_deleted)
              .length !== 0 && (
              <p className="text-[#960047] mt-5">Завершенные задачи</p>
            )}
            {tasks
              .filter((task) => task.is_complete && !task.is_deleted)
              .map((task, index) => (
                <div
                  key={index}
                  className="mt-3 mb-3 w-full bg-[#d9f0f0] flex p-[15px] justify-between border border-[#CACBCD]"
                >
                  <div className="flex items-center gap-[10px]">
                    <Checkbox className="w-6 h-6" />
                    {editingTaskId === task.id ? (
                      <input
                        className="border px-1 rounded"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={async (e) => {
                          if (e.key === "Enter") saveTask(task.id);
                          if (e.key === "Escape") {
                            setEditingTaskId(null);
                            setEditingText("");
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <p>{task.task}</p>
                    )}
                  </div>
                  <div className="flex gap-[10px] items-center">
                    {editingTaskId === task.id ? (
                      <button
                        onClick={() => saveTask(task.id)}
                        className="text-green-600 font-bold"
                      >
                        ✓
                      </button>
                    ) : (
                      <Pen
                        className="opacity-50 cursor-pointer"
                        onClick={() => {
                          setEditingTaskId(task.id);
                          setEditingText(task.task);
                        }}
                      />
                    )}
                    <Trash2
                      className="opacity-50 cursor-pointer"
                      onClick={async () => {
                        const endpoint = `/api/todos/${task.id}`; // Укажите свой endpoint

                        const result = await fetchDelete(endpoint, token);

                        if (result && "error" in result) {
                          console.log(result.error); // Если есть ошибка, выводим ее
                        } else {
                          console.log(result); // Если успех, выводим данные
                          setTasks(
                            tasks.filter((zadanie) => zadanie.id != task.id)
                          );
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
          <div>
            {tasks.filter((task) => !task.is_complete && task.is_deleted)
              .length !== 0 && (
              <p className="text-[#960047] mt-5">Отмененные задачи</p>
            )}
            {tasks
              .filter((task) => !task.is_complete && task.is_deleted)
              .map((task, index) => (
                <div
                  key={index}
                  className="mt-3 mb-3 w-full bg-[#d9f0f0] flex p-[15px] justify-between border border-[#CACBCD]"
                >
                  <div className="flex items-center gap-[10px]">
                    <Checkbox className="w-6 h-6" />
                    {editingTaskId === task.id ? (
                      <input
                        className="border px-1 rounded"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={async (e) => {
                          if (e.key === "Enter") saveTask(task.id);
                          if (e.key === "Escape") {
                            setEditingTaskId(null);
                            setEditingText("");
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <p>{task.task}</p>
                    )}
                  </div>
                  <div className="flex gap-[10px] items-center">
                    {editingTaskId === task.id ? (
                      <button
                        onClick={() => saveTask(task.id)}
                        className="text-green-600 font-bold"
                      >
                        ✓
                      </button>
                    ) : (
                      <Pen
                        className="opacity-50 cursor-pointer"
                        onClick={() => {
                          setEditingTaskId(task.id);
                          setEditingText(task.task);
                        }}
                      />
                    )}
                    <Trash2
                      className="opacity-50 cursor-pointer"
                      onClick={async () => {
                        const endpoint = `/api/todos/${task.id}`; // Укажите свой endpoint

                        const result = await fetchDelete(endpoint, token);

                        if (result && "error" in result) {
                          console.log(result.error); // Если есть ошибка, выводим ее
                        } else {
                          console.log(result); // Если успех, выводим данные
                          setTasks(
                            tasks.filter((zadanie) => zadanie.id != task.id)
                          );
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-[148px]">
          <div
            className={`border-solid border-[1px] border-[#CACBCD] h-[208px] p-5 ${css.mainCircleDiv}`}
          >
            <div className="w-full flex justify-between text-center">
              <p className="text-[#960047]">Успехи за неделю</p>
              <Ellipsis className="text-[#798087]" />
            </div>
            <div className={`flex mt-5 gap-[6px] ${css.circleDiv}`}>
              <div className="text-center">
                <p className="text-sm font-bold mb-[10px]">Создано</p>
                <div className="border-[#960047] border-solid border-[1px] h-[100px] w-[100px] rounded-full flex flex-col items-center justify-center">
                  <p className="text-[#960047] text-4xl">
                    {newTasks.total_completed}
                  </p>
                  <p className="text-xs font-bold">задач</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold mb-[10px]">Завершено</p>
                <div className="border-[#960047] border-solid border-[1px] h-[100px] w-[100px] rounded-full flex flex-col items-center justify-center">
                  <p className="text-[#960047] text-4xl">
                    {newTasks.total_created}
                  </p>
                  <p className="text-xs font-bold">задач</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold mb-[10px]">Удалено</p>
                <div className="border-[#960047] border-solid border-[1px] h-[100px] w-[100px] rounded-full flex flex-col items-center justify-center">
                  <p className="text-[#960047] text-4xl">
                    {newTasks.total_deleted}
                  </p>
                  <p className="text-xs font-bold">задач</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-solid border-[1px] border-[#CACBCD] p-5">
            <p className="text-xl text-[#01BEC2]">Наблюдение</p>
            <p className="mt-5">
              Больше всего задач вы{" "}
              <span className="text-[#01BEC2]">создаете</span> в{" "}
              {newTasks.max_created_day}
            </p>
            <p>
              Больше всего задач вы завершаете во {newTasks.max_completed_day}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
