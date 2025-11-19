/**
 * Утилита для получения имени компонента
 */
export const getDisplayName = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
): string => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};
