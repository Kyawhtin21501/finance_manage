import type { AuthService, AuthToken } from "../services";

export async function login(
  authService: AuthService,
  email: string,
  password: string
): Promise<AuthToken> {
  return authService.login(email, password);
}

export async function logout(authService: AuthService): Promise<void> {
  return authService.logout();
}
