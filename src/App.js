import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState('');
  const [description, setDescription] = useState('');
  return (
    <form>
      <input value={fullName} />
      <input value={description} />
    </form>
  );
}

export default App;
