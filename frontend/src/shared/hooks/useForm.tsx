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
    console.log("handleSubmit");
  };

  const handleBlur = (e: any) => {
    if (!e.target.value) {
      setErrors((errors: errors) => ({
        ...errors,
        [e.target.name]: "Uzupełnij pole",
      }));
    } else if (e.target.value) {
      setErrors(validate(values));
    }
    console.log("handleBlur");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));

    if (e.target.value) {
      setErrors((errors: errors) => ({
        ...errors,
        [e.target.name]: "",
      }));
    }

    console.log("handleChange");
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
