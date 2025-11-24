import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";

const SearchFilter = () => {
  const [searchValue, setSearchvalue] = useState("");
  const [debouncedSearchvalue, setDebouncedSearchValue] = useState("");
  const [userData, setUserData] = useState([]);
  const [dropdownValue, setDropDownValue] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    // fetch users from jsonplaceholder
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((users) => setUserData(users));
  }, []);

  const filteredData = useMemo(() => {
    let filtered = userData;

    if (dropdownValue) {
      filtered = filtered.filter((it) =>
        it.name.toLowerCase().startsWith(dropdownValue.toLowerCase())
      );
    }

    if (debouncedSearchvalue) {
      filtered = filtered.filter((it) =>
        it.name.toLowerCase().includes(debouncedSearchvalue.toLowerCase())
      );
    }

    return filtered;
  }, [userData, dropdownValue, debouncedSearchvalue]);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchValue(searchValue), 400);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const highlightMatch = (name) => {
    if (!debouncedSearchvalue) return name;

    const regex = new RegExp(`(${debouncedSearchvalue})`, "gi");
    const parts = name.split(regex);

    return parts.map((part, idx) =>
      regex.test(part) ? (
        <mark key={idx} style={{ backgroundColor: "yellow" }}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const handleOnChange = (e) => {
    setSearchvalue(e.target.value);
  };

  return (
    <div className="container">
      <div>SearchFilter 🔍</div>
      <select
        value={dropdownValue}
        onChange={(e) => setDropDownValue(e.target.value)}
      >
        <option value="">-- Select letter --</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select>
      <div className="searchField">
        <span>Search:</span>
        <input
          placeholder="Search here..."
          value={searchValue}
          onChange={handleOnChange}
          ref={inputRef}
        />
        <button
          onClick={() => {
            setSearchvalue("");
            inputRef.current.focus();
          }}
        >
          Clear
        </button>
      </div>
      <div className="names">
        {filteredData.length === 0 ? (
          <span>No result Found</span>
        ) : (
          filteredData?.map((item) => <span>{highlightMatch(item.name)}</span>)
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
