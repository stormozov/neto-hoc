import { ThemeToggle, type ThemeType } from "@/components/ui";
import { useEffect, useState } from "react";
import "./ThemeProvider.scss";
import { ThemedDemoContent } from "@/components/demo/ThemedDemoContent";

/**
 * Компонент страницы ThemeProvider, для демонстрации переключателя темы
 */
const ThemeProvider = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <div className="container">
      <div className="theme-provider">
        <header className="theme-provider__header">
          <h2>Переключатель темы</h2>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </header>

        <main className="theme-provider__main h-m-t-24">
          <div className="global-theme-content">
            <h1>Добро пожаловать!</h1>
          </div>

          {/* Демонстрация HOC - только для этого компонента */}
          <div className="hoc-demo-section v-m-32">
            <h3 className="section-title">Демонстрация HOC withTheme</h3>
            <p className="section-description">
              Этот компонент получает тему ТОЛЬКО через пропсы через HOC. 
              Его стили не зависят от глобальной темы сайта.
            </p>
            
            {/* Вот здесь мы демонстрируем работу HOC */}
            <ThemedDemoContent 
              theme={theme}
              title="Демонстрация компонента с темой через HOC"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ThemeProvider;
