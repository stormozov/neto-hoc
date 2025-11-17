import { AccessDenied } from "@/components/plugs";
import type { ICurrentUser } from "@/shared/interfaces";
import type { UserRoles } from "@/shared/types";
import { getDisplayName, hasRequiredRole } from "@/utils";

/**
 * Интерфейс, описывающий свойства HOC `withAuthorization`
 */
export interface IWithAuthorizationProps {
  currentUser: ICurrentUser;
  allowedRoles: UserRoles[];
  plugForDenied?: React.ReactNode;
}

/**
 * HOC для ограничения доступа к компоненту
 * 
 * @description
 * Если пользователь не имеет необходимых ролей, то возвращается заглушка
 * об отсутствии доступа. Заглушка может быть передана через `plugForDenied`,
 * либо будет выведена по умолчанию.
 */
const withAuthorization = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & IWithAuthorizationProps> => {
  const WithAuthorization: React.FC<P & IWithAuthorizationProps> = (props) => {
    const { 
      allowedRoles, 
      plugForDenied = <AccessDenied />, 
      ...restProps 
    } = props;
    
    if (!hasRequiredRole(props.currentUser.roles, allowedRoles)) {
      return <>{plugForDenied}</>;
    }

    return (
      <WrappedComponent {...(restProps as P & { currentUser: ICurrentUser })} />
    )
  };

  WithAuthorization.displayName = 
    `withAuthorization(${getDisplayName(WrappedComponent)})`;

  return WithAuthorization;
};

export default withAuthorization;
