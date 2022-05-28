import { Phonebook } from "./components/Phonebook/Phonebook";
import s from "./components/Phonebook/Phonebook.module.css";

export const App = () => {
  return (
    <div className={s.container}>
      <Phonebook />
    </div>
  );
};
