"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface ChapterActionsProps {
  courseId: string;
  chapterId: string;
  disabled: boolean;
  isPublished: boolean;
}

export const ChapterActions = ({
  courseId,
  disabled,
  chapterId,
  isPublished,
}: ChapterActionsProps) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const togglePublish = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(
          `/api/courses/${courseId}/chapters/${chapterId}/unpublish`
        );
      } else {
        await axios.patch(
          `/api/courses/${courseId}/chapters/${chapterId}/publish`
        );
      }

      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  const onClick = async () => {
    toast.promise(togglePublish(), {
      loading: "Обновление раздела...",
      error: "Что-то пошло не так",
      success: isPublished ? "Раздел неопубликован" : "Раздел опубликован",
    });
  };

  const removeChapter = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);

      router.refresh();
      router.push(`/teacher/courses/${courseId}`);
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    toast.promise(removeChapter(), {
      loading: "Удалени раздела...",
      success: "Раздел удален",
      error: "Что-то пошло не так",
    });
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        size="sm"
        variant="outline"
        onClick={onClick}
        disabled={disabled || isLoading}
      >
        {isPublished ? "Не опубликовывать" : "Опубликовать"}
      </Button>

      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="w-4 h-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
