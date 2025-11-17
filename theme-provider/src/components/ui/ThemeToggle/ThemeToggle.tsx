import React from "react";
import "./ThemeToggle.scss";

/**
 * Тип темы
 */
export type ThemeType = 'light' | 'dark';

/**
 * Интерфейс, описывающий пропсы компонента ThemeToggle
 */
export interface ThemeToggleProps {
  theme: ThemeType;
  onToggle: () => void;
}

/**
 * Компонент, отвечающий за переключение темы
 */
const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const componentClassName = "theme-toggle";
  return (
    <label className={componentClassName}>
      <input
        type="checkbox"
        className={`${componentClassName}__input`}
        id="theme-toggle"
        name="theme-toggle"
        checked={theme === "dark"}
        onChange={onToggle}
        aria-label="Переключить тему"
      />
      <span className={`${componentClassName}__slider`} />
    </label>
  );
};

export default ThemeToggle;
