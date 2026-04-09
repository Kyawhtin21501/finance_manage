import type { User, UserService } from "../services";

export async function getUserProfile(
  userService: UserService,
  userId: string
): Promise<User | null> {
  return userService.getById(userId);
}
