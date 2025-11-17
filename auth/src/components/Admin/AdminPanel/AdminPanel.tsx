import type { ICurrentUser } from "@/shared/interfaces";
import "./AdminPanel.scss";

/**
 * Интерфейс, описывающий свойства компонента `AdminPanel`
 */
export interface IAdminPanelProps {
  currentUser: ICurrentUser;
}

/**
 * Админ-панель
 */
const AdminPanel: React.FC<IAdminPanelProps> = ({ currentUser }) => {
  return (
    <div className="admin-panel">
      <header className="admin-panel__header">
        <h2>Admin Panel</h2>
        <div className="admin-panel__user-block">
          <p>Welcome, {currentUser.name}</p>
          <img 
            src="images/user-sergei-auth.jpeg" 
            alt="User photo" 
            className="admin-panel__user-photo"
            title="Ваше фото"
          />
        </div>
      </header>
      <div className="admin-panel__content">
        <p>Добро пожаловать в админ-панель</p>
      </div>
    </div>
  );
};

export default AdminPanel;
