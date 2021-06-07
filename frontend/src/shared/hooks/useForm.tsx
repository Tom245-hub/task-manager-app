import { useState, useEffect } from "react";
import { values } from "../models/valuesModel";
import { errors } from "../models/errorsModel";

const useForm = (
  validate: (values: values) => errors,
  handleSubmitAction: () => void
) => {
  const [values, setValues] = useState<values>({});
  const [errors, setErrors] = useState<errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  console.log(errors);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      handleSubmitAction();
    }
  }, [errors]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleBlur = (e: any) => {
    setErrors((prevState: any) => ({
      ...prevState,
      [e.target.name]: "Wpisz " + e.target.name + ".",
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
