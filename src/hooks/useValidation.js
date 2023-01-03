import { useState } from "react";

export const useValidation = (validation) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = validation(value);
  const error = !isValid && touched;

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnBlur = () => {
    setTouched(true);
  };

  const reset = () => {
    setTouched(false);
    setValue("");
  };

  return { error, isValid, value, handleOnBlur, handleOnChange, reset };
};
