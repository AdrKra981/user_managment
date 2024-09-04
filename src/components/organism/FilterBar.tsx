import React from "react";
import { setFilters } from "../../app/userSlice";
import { useDispatch } from "react-redux";

type Props = {
  filters: any;
};

const FilterBar = ({ filters }: Props) => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchFilters(filters.key, event.target.value);
  };

  const handleSearchByChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // setSearchBy(event.target.value);
    dispatchFilters(event.target.value, filters.value);
  };

  const dispatchFilters = (key: string, value: string) => {
    dispatch(setFilters({ key, value }));
  };

  return (
    <div className="flex md:flex-row flex-col gap-4 justify-center items-center md:w-[80vw] w-screen mt-8">
      <label
        className="flex justify-center items-center p-4"
        htmlFor="filter-by"
      >
        Search by
      </label>
      <select
        value={filters?.key || "name"}
        onChange={handleSearchByChange}
        className="p-4 rounded-md"
        id="filter-by"
      >
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>
      <input
        type="search"
        className="p-4 rounded-md"
        placeholder="Search"
        value={filters?.value || ""}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default FilterBar;
