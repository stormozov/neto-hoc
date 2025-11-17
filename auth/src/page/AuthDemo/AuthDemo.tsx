import { AdminPanel } from "@/components/Admin";
import withAuthorization from "@/hoc/withAuthorization";
import type { ICurrentUser } from "@/shared/interfaces";
import "./AuthDemo.scss";

const AdminPanelWithAuth = withAuthorization(AdminPanel);

/**
 * Компонент демо-страницы с админ-панелью с доступом для разрешенных ролей
 */
const AuthDemo = () => {
  const currentUser: ICurrentUser = { id: 1, name: 'Sergei', roles: ['admin'] };
  // const currentUser: ICurrentUser = { id: 2, name: 'Ivan', roles: ['user'] };

  return (
    <div className="container">
      <div className="auth-demo">
        <header className="auth-demo__header">
          <h1>AuthDemo</h1>
        </header>
        <main className="auth-demo__main">
          <AdminPanelWithAuth 
            currentUser={currentUser}
            allowedRoles={['admin']}
            // plugForDenied={<p>Доступ запрещен</p>}
          />
        </main>
      </div>
    </div>
  );
}

export default AuthDemo;
