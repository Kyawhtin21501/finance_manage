export type AuthToken = {
  accessToken: string;
  refreshToken?: string;
};

export interface AuthService {
  login(email: string, password: string): Promise<AuthToken>;
  logout(): Promise<void>;
}
