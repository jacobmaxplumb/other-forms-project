import { useEffect, useState } from "react";
import * as yup from "yup";

const intialFormValues = {
  fullName: "",
  description: "",
};

const initialErrors = {
  fullName: "",
};

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("this field is required")
    .min(3, "full name must be at least 3 characters")
    .max(20, "full name must be at most 20 charaters"),
});

function App() {
  const [formValues, setFormValues] = useState(intialFormValues);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setIsDisabled(!valid);
    });
  }, [formValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (name === "fullName") {
      yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
          setErrors({ ...errors, [name]: "" });
        })
        .catch((err) => {
          setErrors({...errors, [name]: err.errors[0]})
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        name="fullName"
        value={formValues.fullName}
      />
      {errors.fullName && <p>{errors.fullName}</p>}
      <input
        onChange={handleInputChange}
        name="description"
        value={formValues.description}
      />
      <button disabled={isDisabled}>Submit</button>
    </form>
  );
}

export default App;
