import "./AccessDenied.scss";

/**
 * Компонент-заглушка, отображающий сообщение об отсутствии доступа
 */
const AccessDenied = () => {
  return (
    <div className="access-denied">
      <p>У вас нет прав для просмотра этой страницы</p>
    </div>
  )
}

export default AccessDenied;
