import React from "react";
import type { ThemeType } from "@/components/ui/ThemeToggle";

/**
 * Утилита для получения имени компонента
 */
const getDisplayName = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): string => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

/**
 * Интерфейс, описывающий пропсы компонента WithTheme
 */
export interface WithThemeProps {
  theme: ThemeType;
}

/**
 * Функция HOC, добавляющая пропсы theme
 */
const withTheme = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithThemeProps>
): React.FC<P & WithThemeProps> => {
  const WithThemeComponent: React.FC<P & WithThemeProps> = (props) => {
    return <WrappedComponent {...props} />;
  };

  const displayName = getDisplayName(WrappedComponent);
  WithThemeComponent.displayName = `WithTheme(${displayName})`;
  
  return WithThemeComponent;
};

export default withTheme;
