import { CSSProperties, FC, useEffect, useState } from "react";
import "./FormGroup.css";

interface IFormGroupProps {
  identifier: string;
  inputType?: string;
  label: string;
}

export const FormGroup: FC<IFormGroupProps> = ({
  identifier,
  inputType = "text",
  label,
}) => {
  const [style, setStyle] = useState<CSSProperties>();
  useEffect(() => {
    if (inputType === "checkbox") {
      setStyle({
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
        alignItems: "center",
      });
    }
  }, [inputType]);
  return (
    <div style={style} className="FormGroup">
      <label htmlFor={identifier}>{label}</label>
      <input
        checked={inputType === "checkbox"}
        id={identifier}
        type={inputType}
      />
    </div>
  );
};
