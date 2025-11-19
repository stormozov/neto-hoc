import type React from "react";
import { forwardRef, useCallback, useState } from "react";
import { getDisplayName } from "@/utils";

/**
 * Интерфейс для пропсов, которые попадут в компонент с фокус-трекингом
 */
export interface FocusTrackerInjectedProps {
  isFocused: boolean;
  onFocusChange?: (isFocused: boolean) => void;
}

/**
 * HOC, добавляющий отслеживание состояния фокуса к компоненту.
 *
 * @template P - Пропсы оборачиваемого компонента.
 * 
 * @param {React.ComponentType<P>} WrappedComponent - Компонент, который будет 
 * обернут и дополнен функциональностью отслеживания фокуса.
 * 
 * @returns Новый компонент с добавленной логикой отслеживания фокуса.
 */
export function withFocusTracker<P extends object>(
  WrappedComponent: React.ComponentType<P & FocusTrackerInjectedProps>,
) {
  type HOCProps = {
    onFocusChange?: (isFocused: boolean) => void;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
  };

  type OuterProps = Omit<P, keyof FocusTrackerInjectedProps> & HOCProps;

  const FocusTracker = forwardRef<HTMLElement, OuterProps>((props, ref) => {
    const { onFocusChange, onFocus, onBlur, ...restProps } =
      props as OuterProps;

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(
      (e: React.FocusEvent) => {
        setIsFocused(true);
        onFocusChange?.(true);
        onFocus?.(e);
      },
      [onFocusChange, onFocus],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent) => {
        setIsFocused(false);
        onFocusChange?.(false);
        onBlur?.(e);
      },
      [onFocusChange, onBlur],
    );

    const injectedProps: FocusTrackerInjectedProps = {
      isFocused,
      onFocusChange,
    };

    return (
      <WrappedComponent
        {...(restProps as P)}
        {...injectedProps}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
  });

  const displayName = `withFocusTracker(${getDisplayName(WrappedComponent)})`;
  FocusTracker.displayName = displayName;

  return FocusTracker;
}
