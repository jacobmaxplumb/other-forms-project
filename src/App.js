import { useState } from "react";

const intialFormValues = {
  fullName: '',
  description: ''
}

function App() {
  const [formValues, setFormValues] = useState(intialFormValues);

  return (
    <form>
      <input value={formValues.fullName} />
      <input value={formValues.description} />
    </form>
  );
}

export default App;
