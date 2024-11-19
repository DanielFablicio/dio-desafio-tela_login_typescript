import { InputProps } from "./types";
import styles from "./Input.module.css";

export default function Input({
  label,
  type,
  placeholder,
  autocomplete,
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor="email">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={label}
        autoComplete={autocomplete}
      />
    </div>
  );
}
