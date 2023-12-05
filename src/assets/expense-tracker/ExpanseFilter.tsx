import { categories } from "../../App";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpanseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => {
        onSelectCategory(event.target.value);
      }}
    >
      <option value="All Categories">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpanseFilter;