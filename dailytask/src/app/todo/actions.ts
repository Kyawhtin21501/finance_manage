"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createTodoUsecase } from "@/src/features/todo/usecases/createTodo";

export async function createTodoAction(formData: FormData): Promise<void> {
  const contentValue = formData.get("content");
  const content = typeof contentValue === "string" ? contentValue : "";

  await createTodoUsecase(content);
  await revalidatePath("/todo");
  redirect("/todo");
}
