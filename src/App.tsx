import { type FC, useState } from "react";
import { FuzzyCompleteTextInput } from "./FuzzyCompleteTextInput.tsx";

const App: FC = () => {
  const [text, setText] = useState("");

  const autoCompleteWords = [
    "サーバ",
    "コンピュータ",
    "たけのこの里",
    "きのこの山",
    "Google",
    "JavaScript",
  ];

  return (
    <div>
      <div>
        <h2>datalist</h2>
        <div>
          <input list="browsers" id="myBrowser" name="myBrowser" />
          <datalist id="browsers">
            <option value="Chrome">Developed by Google</option>
            <option value="Firefox">Developed by Mozilla</option>
            <option value="Safari">Developed by Apple</option>
            <option value="Microsoft Edge">Developed by Microsoft</option>
          </datalist>
        </div>
      </div>
      <hr />
      <div>
        <h2>Fuzzy Completion</h2>
        <div>
          <FuzzyCompleteTextInput
            value={text}
            onChange={setText}
            limitDistance={2}
            autoCompleteWords={autoCompleteWords}
          />
        </div>
        <div>
          <p>補完単語リスト</p>
          <ul>
            {autoCompleteWords.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
