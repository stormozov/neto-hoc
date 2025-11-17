import type { UserRoles } from "./types";

/**
 * Интерфейс, описывающий текущего пользователя
 */
export interface ICurrentUser {
  id: number;
  name: string;
  roles: UserRoles[];
}
