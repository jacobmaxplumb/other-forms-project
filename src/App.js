import { useState } from "react";

const intialFormValues = {
  fullName: '',
  description: ''
}

function App() {
  const [formValues, setFormValues] = useState(intialFormValues);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value}) // {description: '', fullName: 'a'}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} name="fullName" value={formValues.fullName} />
      <input onChange={handleInputChange} name="description" value={formValues.description} />
      <button>Submit</button>
    </form>
  );
}

export default App;
