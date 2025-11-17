import type { UserRoles } from "@/shared/types";

/**
 * Утилита для проверки наличия необходимых ролей у пользователя
 */
export const hasRequiredRole = (
  userRoles: UserRoles[], 
  allowedRoles: UserRoles[]
): boolean => allowedRoles.some((role) => userRoles.includes(role));
