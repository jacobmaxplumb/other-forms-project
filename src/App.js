import { useState } from "react";
import * as yup from "yup";

const intialFormValues = {
  fullName: "",
  description: "",
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

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      console.log(valid);
    })
  }, [formValues])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); // {description: '', fullName: 'a'}
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
      <input
        onChange={handleInputChange}
        name="description"
        value={formValues.description}
      />
      <button>Submit</button>
    </form>
  );
}

export default App;
