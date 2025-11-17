import withTheme, { type WithThemeProps } from "@/hoc/withTheme";
import React from 'react';
import "./ThemedDemoContent.scss";

/**
 * Интерфейс, описывающий пропсы компонента ThemedDemoContent
 */
export interface ThemedDemoContentProps extends WithThemeProps {
  title: string;
}

/**
 * Демо компонент, демонстрирующий использование HOC withTheme
 */
const ThemedDemoContent: React.FC<ThemedDemoContentProps> = ({
  theme,
  title,
}) => {
  return (
    <div 
      className={`themed-demo-content themed-demo-content--${theme}`}
      data-theme={theme}
    >
      <h2>{title}</h2>
      
      <p className="themed-demo-content__text">
        Этот компонент получает тему через HOC withTheme: 
        <strong> {theme}</strong>
      </p>
      
      <div className="themed-demo-content__buttons">
        <button 
          type="button" 
          className="btn primary themed-demo-content__btn"
        >
          Primary Button
        </button>
        <button 
          type="button" 
          className="btn secondary themed-demo-content__btn"
        >
          Secondary Button
        </button>
      </div>
      
      <div className="themed-demo-content__info">
        <p>Все стили определяются только на основе пропа theme</p>
        <p className="themed-demo-content__hint">
          Никакого Context API, только пропсы через HOC
        </p>
      </div>
    </div>
  );
}

// Устанавливаем displayName ДО применения HOC
ThemedDemoContent.displayName = "ThemedDemoContent";

// Применяем HOC
const EnhancedThemedDemoContent = withTheme(ThemedDemoContent);

// Явно устанавливаем displayName для результирующего компонента
EnhancedThemedDemoContent.displayName = "ThemedDemoContentWithTheme";

export { EnhancedThemedDemoContent as ThemedDemoContent };
