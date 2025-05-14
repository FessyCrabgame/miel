"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import user from "@/public/assets/Скриншот-12-03-2025 05_13_05.jpg";
import css from "./main.module.css";
import tg from "@/public/assets/icons8-телеграм-50.png";
import ws from "@/public/assets/icons8-whatsapp-50.png";
import { Checkbox } from "@/components/ui";
import toast, { Toaster } from "react-hot-toast";
import { fetchPostEndpoint } from "@/lib/candidates";

export const Settings = () => {
  const [isTelegramChecked, setTelegramChecked] = useState(false);
  const [isWhatsAppChecked, setWhatsAppChecked] = useState(false);
  const [telegramLink, setTelegramLink] = useState("");
  const [whatsappLink, setWhatsAppLink] = useState("");

  const token = localStorage.getItem("token") || "";

  const sendLink = async (platform: "telegram" | "whatsapp", link: string) => {
    if (!link.startsWith("https")) {
      toast.error("Ссылка должна начинаться с https");
      return;
    }

    console.log("Sending data:", { link: link, platform: platform });

    try {
      const response = await fetchPostEndpoint(
        "/api/link/",
        { link: link, platform: platform },
        token
      );
      console.log("Response:", response);

      if (response.error) {
        throw new Error(response.error);
      } else {
        toast.success("Ссылка успешно отправлена!");
      }
    } catch (error) {
      console.error("Request failed:", error);
      toast.error("Произошла ошибка при отправке ссылки");
    }
  };

  return (
    <div className={cn("w-[77.5vw] h-[875px]")}>
      <Image
        className={`ml-[10%] mr-auto absolute pb-[-20px] ${css.image}`}
        src={user}
        alt="baloons"
      />
      <div
        className={`absolute left-[590px] ml-[10%] mt-[250px] flex flex-col gap-10 ${css.bigDiv}`}
      >
        {/* Telegram */}
        <div
          className={`flex flex-col border border-[#CACBCD] rounded-3xl py-3 px-4 ${css.divWords}`}
        >
          <div className="flex items-center">
            <Image src={tg} alt="Telegram icon" width={16} height={16} />
            <p className={`ml-3 ${css.words}`}>Использовать Telegram</p>
            <Checkbox
              className="ml-[39px]"
              checked={isTelegramChecked}
              onCheckedChange={(val) => setTelegramChecked(!!val)}
            />
          </div>
          {isTelegramChecked && (
            <input
              className="mt-3 border border-gray-300 rounded px-2 py-1"
              placeholder="Ссылка на Telegram менеджера"
              value={telegramLink}
              onChange={(e) => setTelegramLink(e.target.value)}
              onBlur={() => sendLink("telegram", telegramLink)}
            />
          )}
        </div>

        {/* WhatsApp */}
        <div
          className={`flex flex-col border border-[#CACBCD] rounded-3xl py-3 px-4 ${css.divWords}`}
        >
          <div className="flex items-center">
            <Image src={ws} alt="WhatsApp icon" width={16} height={16} />
            <p className={`ml-3 ${css.words}`}>Использовать WhatsApp</p>
            <Checkbox
              className="ml-[33px]"
              checked={isWhatsAppChecked}
              onCheckedChange={(val) => setWhatsAppChecked(!!val)}
            />
          </div>
          {isWhatsAppChecked && (
            <input
              className="mt-3 border border-gray-300 rounded px-2 py-1"
              placeholder="Ссылка на WhatsApp менеджера"
              value={whatsappLink}
              onChange={(e) => setWhatsAppLink(e.target.value)}
              onBlur={() => sendLink("whatsapp", whatsappLink)}
            />
          )}
        </div>
        <Toaster />
      </div>
    </div>
  );
};
