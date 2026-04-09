import type { Todo } from "@/src/features/todo/types/todo";
import { prisma } from "@/src/infrastructure/db/client";

export async function createTodo(content: string): Promise<Todo> {
  return prisma.todo.create({
    data: { content },
  });
}
