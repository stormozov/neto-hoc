import { useState } from "react";
import "./FocusTracker.scss";
import { Input, InputWithFocusTracker } from "@components";

/**
 * Компонент страницы для демонстрации фокус-трекинга с использованием HOC
 */
const FocusTracker = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [focused, setFocused] = useState(false);

  const onChangeHandlerFor2Value = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue2(event.target.value);
  };
  
  return (
    <div className="focus-tracker">
      <div className="container">
        <h1>FocusTracker</h1>
        <main className="focus-tracker__content">
          <div className="focus-tracker__inputs">
            <div className="focus-tracker__input-wrapper">
              <h3 className="focus-tracker__input-title">
                Стандартный Input (без фокус-трекинга)
              </h3>
              <Input
                className="input"
                id="focused-input-1"
                name="focused-input-1"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="Обычный инпут"
              />
            </div>

            <div className="focus-tracker__input-wrapper">
              <h3 className="focus-tracker__input-title">
                Input с трекингом фокуса
              </h3>

              <p className="focus-tracker__focus-checker">
                Фокус: {focused ? "✅" : "❌"}
              </p>

              <InputWithFocusTracker
                className="input"
                id="focused-input-2"
                name="focused-input-2"
                value={value2}
                onChange={onChangeHandlerFor2Value}
                onFocusChange={setFocused}
                placeholder="Инпут с фокусом"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FocusTracker;
