import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./styles.css";
import { FcDeleteRow } from "react-icons/fc";
import { PiPencilBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RiCheckboxFill } from "react-icons/ri";

const dummyData = [
  {
    id: 1,
    title: "ABC",
    status: "Active",
  },
];

const ToDoList2 = () => {
  const [value, setValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [list, setList] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [deletedItem, setDeletedItem] = useState(null);

  const inputRef = useRef(null);
  const editRef = useRef(null);
  const idRef = useRef(0);

  useEffect(() => {
    if (inputRef?.current) inputRef.current.focus();
  }, []);

  const handleAdd = useCallback(() => {
    const dataToAdd = {
      id: (idRef.current += 1),
      title: value,
      status: "Active",
    };
    const newList = [...list, dataToAdd];
    setList(newList);
    localStorage.setItem("savedList", JSON.stringify(newList));
    setValue("");
  }, [list, value]);

  useEffect(() => {
    const handleEnterPress = (e) => {
      if (e.key === "Enter") handleAdd();
    };

    document.addEventListener("keydown", handleEnterPress);
    return () => document.removeEventListener("keydown", handleEnterPress);
  }, [handleAdd]);

  useEffect(() => {
    const savedData = localStorage.getItem("savedList");
    setList(JSON.parse(savedData) || []);
  }, []);

  const filteredList = useMemo(() => {
    if (activeFilter === "All") return list;
    const fl = list?.filter((it) => it.status === activeFilter);
    return fl;
  }, [activeFilter, list]);

  const activeTasks = useMemo(
    () => list?.filter((it) => it.status === "Active"),
    [list]
  );
  const handleDelete = (item) => {
    const index = list.findIndex((it)=>it.id===item.id);
    const newList = list.filter((li) => li.id !== item.id);
    setList(newList);
    localStorage.setItem("savedList", JSON.stringify(newList));
    setDeletedItem({ index, item });
  };
  const handleEdit = (item) => {
    const isEditing = editId === item.id;
    if (isEditing) {
      const newList = list.map((it) =>
        it.id === item.id ? { ...it, title: editValue } : it
      );
      setList(newList);
      localStorage.setItem("savedList", JSON.stringify(newList));
      setEditId(null);
    } else {
      setEditId(item.id);
      setEditValue(item.title);
      setTimeout(() => editRef.current?.focus(), 0);
    }
  };

  const markAllActive = () => {
    const newList = list.map((it) => ({ ...it, status: "Active" }));
    setList(newList);
    localStorage.setItem("savedList", JSON.stringify(newList));
  };
  const markAllCompleted = () => {
    const newList = list.map((it) => ({ ...it, status: "Completed" }));
    setList(newList);
    localStorage.setItem("savedList", JSON.stringify(newList));
  };
  console.log("lastDeleted", deletedItem);

  return (
    <div className="container">
      <h2>Todos</h2>
      <div className="inputRow">
        <input
          placeholder="Type Here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="filterSection">
        <span>Filters:</span>
        <button
          onClick={() => setActiveFilter("All")}
          style={{
            backgroundColor:
              activeFilter === "All" ? "lightblue" : "transparent",
          }}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("Active")}
          style={{
            backgroundColor:
              activeFilter === "Active" ? "lightblue" : "transparent",
          }}
        >
          Active
        </button>
        <button
          onClick={() => setActiveFilter("Completed")}
          style={{
            backgroundColor:
              activeFilter === "Completed" ? "lightblue" : "transparent",
          }}
        >
          Completed
        </button>
      </div>
      <div className="list-container">
        {filteredList?.map((it, index) => (
          <div className="listRow">
            <i
              onClick={() => {
                const newList = list.map((item) =>
                  item.id === it.id
                    ? it.status === "Active"
                      ? { ...item, status: "Completed" }
                      : { ...item, status: "Active" }
                    : item
                );
                setList(newList);
                localStorage.setItem("savedList", JSON.stringify(newList));
              }}
            >
              {it.status === "Active" ? (
                <MdCheckBoxOutlineBlank />
              ) : (
                <RiCheckboxFill />
              )}
            </i>
            {editId === it.id ? (
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                ref={editRef}
              />
            ) : (
              <span
                onDoubleClick={() => handleEdit(it)}
                style={{ cursor: "pointer" }}
              >
                {it.title}
              </span>
            )}
            <i
              onClick={() => handleDelete(it)}
              style={{ cursor: "pointer" }}
            >
              <FcDeleteRow />
            </i>
            <i onClick={() => handleEdit(it)} style={{ cursor: "pointer" }}>
              {editId === it.id ? <TiTick /> : <PiPencilBold />}
            </i>
          </div>
        ))}
      </div>
      {activeTasks?.length > 0 && <span>{activeTasks?.length} items left</span>}
      <button
        onClick={() => {
          const newList = list.filter((li) => li.status !== "Completed");
          setList(newList);
          localStorage.setItem("savedList", JSON.stringify(newList));
        }}
      >
        Clear Completed
      </button>
      <button
        style={{ marginTop: 8 }}
        onClick={() => {
          const isAnyCompleted = list.findIndex(
            (li) => li.status === "Completed"
          );
          if (isAnyCompleted !== -1) markAllActive();
          else {
            markAllCompleted();
          }
        }}
      >
        Toggle All
      </button>
      <button
        style={{ marginTop: 8 }}
        onClick={() => {
          const { index, item } = deletedItem;
          const newList = [...list];
          newList.splice(index, 0, item);
          setList(newList);
          localStorage.setItem("savedList", JSON.stringify(newList));
        }}
      >
        Undo Last Deleted
      </button>
    </div>
  );
};

export default ToDoList2;
