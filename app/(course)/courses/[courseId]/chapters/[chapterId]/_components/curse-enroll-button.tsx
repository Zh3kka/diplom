"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";

interface CurseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CurseEnrollButton = ({
  price,
  courseId,
}: CurseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const enroll = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/api/courses/${courseId}/checkout`);
      window.location.assign(response.data.url);
    } catch (error) {
      toast.error("Что-то пошло не так");
    } finally {
      setIsLoading(false);
    }
  };

  const onClick = async () => {
    toast.promise(enroll(), {
      error: "Что-то пошло не так",
      success: "Проверка сессии",
      loading: "Создание проверки сессии...",
    });
  };

  return (
    <Button
      size="sm"
      onClick={onClick}
      disabled={isLoading}
      className="w-full md:w-auto"
    >
      Прошел
    </Button>
  );
};
