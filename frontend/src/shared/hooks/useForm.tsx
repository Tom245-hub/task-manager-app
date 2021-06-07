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

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      handleSubmitAction();
    }
  }, [errors]);

  const handleSubmit = (event: React.FormEvent) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values: values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
