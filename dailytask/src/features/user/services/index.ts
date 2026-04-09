export type User = {
  id: string;
  name: string;
  email: string;
};

export interface UserService {
  getById(id: string): Promise<User | null>;
}
