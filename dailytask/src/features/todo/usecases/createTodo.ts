import type { Todo } from "@/src/features/todo/types/todo";
import { createTodo } from "@/src/features/todo/repositories/todoRepository";

export async function createTodoUsecase(rawContent: string): Promise<Todo> {
  const content = rawContent.trim();

  if (!content) {
    throw new Error("Todo content is required.");
  }

  return createTodo(content);
}
