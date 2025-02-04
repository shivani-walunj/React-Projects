import { useState } from "react";
import data from "./data.js";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
