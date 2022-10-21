import { FunctionComponent, ChangeEventHandler } from "react";
export interface SearchBarProps {
  onSearchTermChange: (searchTerm: string) => void;
  searchTerm: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  onSearchTermChange,
  searchTerm,
  onSubmit,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onSearchTermChange(e.target.value);
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          placeholder="Enter TV Show"
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default SearchBar;
