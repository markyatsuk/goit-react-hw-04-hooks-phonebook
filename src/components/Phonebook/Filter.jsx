import s from "./Phonebook.module.css";

const Filter = ({ filterValue, onChangeFilter }) => {
  return (
    <label htmlFor="" className={s.filter__label}>
      Find contacts by name{" "}
      <input type="text" value={filterValue} onChange={onChangeFilter} />
    </label>
  );
};

export { Filter };
