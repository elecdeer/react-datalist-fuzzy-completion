import { type FC, useMemo } from "react";
import { editDistance } from "./editDistance.ts";

interface FuzzyCompleteTextInputProps {
  value: string;
  onChange: (value: string) => void;
  autoCompleteWords: readonly string[];
  limitDistance: number;
}

export const FuzzyCompleteTextInput: FC<FuzzyCompleteTextInputProps> = ({
  value,
  onChange,
  autoCompleteWords,
  limitDistance,
}) => {
  // const prefixLabel = "";
  const prefixLabel = "もしかして:";
  const hardToInputPrefixLabel = Array.from(prefixLabel).join("\u{200B}");

  const removePrefixLabel = (text: string): string => {
    if (text.startsWith(hardToInputPrefixLabel)) {
      return text.slice(hardToInputPrefixLabel.length);
    } else {
      return text;
    }
  };

  const displayCompletionWords = useMemo(
    () =>
      autoCompleteWords.filter((word) => {
        const distance = editDistance(value, word);
        return distance >= 1 && distance <= limitDistance;
      }),
    [value]
  );

  return (
    <>
      <input
        list={"auto-complete"}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(removePrefixLabel(e.target.value));
        }}
      />
      <datalist id={"auto-complete"}>
        {displayCompletionWords.map((word) => (
          <option key={word} value={`${hardToInputPrefixLabel}${word}`}>
            {`${value}?`}
          </option>
        ))}
      </datalist>
    </>
  );
};
