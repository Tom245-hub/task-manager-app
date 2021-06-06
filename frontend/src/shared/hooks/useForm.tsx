import { useState, useEffect } from "react";

const useForm = (validate: any, handleSubmitAction: any) => {
  const [values, setValues] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      handleSubmitAction();
    }
  }, [errors]);

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event: any) => {
    event.persist();
    setValues((values: any) => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
