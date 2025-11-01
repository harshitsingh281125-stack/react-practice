import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";

const list = [
  {
    id: "1",
    title: "abc",
    status: "Completed",
    dateAdded: "dateTime",
  },
];

const TodoList = () => {
  const [listValue, setListValue] = useState("");
  const lists = localStorage.getItem("stored-list");
  const [myLists, setMyLists] = useState(JSON.parse(lists) || []);
  const [activeFilters, setActiveFilters] = useState(["All"]);
  console.log("myLists", myLists, lists);
  const handleAdd = useCallback(() => {
    const listToAdd = {
      id: Math.random(),
      title: listValue,
      status: "Active",
      dateAdded: Date.now(),
    };
    setMyLists((prev) => {
      const updated = [...prev, listToAdd];
      localStorage.setItem("stored-list", JSON.stringify(updated));
      return updated;
    });
    setListValue("");
  }, [listValue]);

  const handleFilterSelect = (filter) => {
    //reveist filter logic :  THIS IS FOR WHEN WE WANT TO HAVE FILTER AS TOGGLE CHIPS AND MULTIPLE FILTERS CAN BE SELECTED
    setActiveFilters((prev) => {
      const isActive = prev.includes(filter);
      if (isActive) {
        return prev.filter((f) => f !== filter);
      } else {
        if (filter === "All") return ["All"];
        return filter !== "All"
          ? [...prev.filter((f) => f !== "All"), filter]
          : [...prev, filter];
      }
    });
    // THIS IS FOR WHEN ONLY ONE FILTER AT A TIME AND CAN'T BE TOGGLED
    //  setActiveFilters(filter);
  };

  useEffect(() => {
    if (activeFilters?.length === 0) {
      setActiveFilters(["All"]); // had put setActiveFilters("All"); which messed it up
    }
  }, [activeFilters]);

  const handleSelectClick = (el) => {
    // revisit toggle checkbox mechanism
    const updated = myLists.map((li) => {
      if (li.id === el.id) {
        return {
          ...li,
          status: li.status === "Completed" ? "Active" : "Completed",
        };
      }
      return li;
    });
    setMyLists(updated);
    localStorage.setItem("stored-list", JSON.stringify(updated));
  };

  const filteredList = activeFilters.includes("All")
    ? myLists
    : myLists.filter((li) => activeFilters.includes(li.status));

  const handleDelete = (li) => {
    const newList = myLists.filter((el) => el.id !== li.id);
    setMyLists(newList);
    localStorage.setItem("stored-list", JSON.stringify(newList));
  };

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === "Enter") handleAdd();
    };

    document.addEventListener("keydown", handleEnter);
    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [handleAdd]);

  return (
    <div className="container">
      <h1>Todo List 📝</h1>
      <div className="list-input-container">
        <input
          value={listValue}
          onChange={(e) => setListValue(e.target.value)}
          placeholder="Enter List Name..."
        />
        <button onClick={handleAdd} className="add-button">
          Add
        </button>
      </div>
      {myLists.length > 0 && (
        <div className="filter-container">
          <h5>Filters : </h5>
          <button
            onClick={() => handleFilterSelect("All")}
            className={`${
              activeFilters?.includes("All")
                ? "active-filter"
                : "nonActive-filter"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterSelect("Active")}
            className={`${
              activeFilters?.includes("Active")
                ? "active-filter"
                : "nonActive-filter"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => handleFilterSelect("Completed")}
            className={`${
              activeFilters?.includes("Completed")
                ? "active-filter"
                : "nonActive-filter"
            }`}
          >
            Completed
          </button>
        </div>
      )}
      <div className="lists">
        {filteredList.length > 0 ? (
          filteredList?.map((el) => {
            return (
              <div className="list-item">
                <i
                  onClick={() => handleSelectClick(el)}
                  style={{ cursor: "pointer" }}
                >
                  {el.status === "Completed" ? (
                    <BiCheckboxChecked />
                  ) : (
                    <BiCheckbox />
                  )}
                </i>
                <span>{el.title}</span>
                <i onClick={() => handleDelete(el)}>
                  <BsTrash3 color="red" />
                </i>
              </div>
            );
          })
        ) : (
          <div>
            <text>No Results Found</text>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
