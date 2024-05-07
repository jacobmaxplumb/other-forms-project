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

  return (
    <form>
      <input onChange={handleInputChange} name="fullName" value={formValues.fullName} />
      <input onChange={handleInputChange} name="description" value={formValues.description} />
    </form>
  );
}

export default App;
