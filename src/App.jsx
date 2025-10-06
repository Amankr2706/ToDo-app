import React, { useEffect } from "react";
import { useState } from "react";
import { Delete } from "lucide-react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleOnclick = (e) => {
    e.preventDefault();
    const upperInput = input.toUpperCase().trim();
    setTodos([...todos, upperInput]);
    setInput("");
  };
  const deleteTodo = (i) => {
    let newTodos = todos.filter((todo, index) => index !== i);
    setTodos(newTodos);
  };
  const handleDeleteAll = () => {
    if (todos.length === 0) {
      alert("There is no todo to delete");
      return;
    }
    setTodos([]);
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-zinc-50">
      <div className="mt-8 md:w-2/5 w-[90%] shadow-2xl bg-white  px-8 py-8 rounded-2xl overflow-hidden">
        <h1 className="text-4xl font-semibold my-8 text-center">TO-DO APP</h1>
        <form onSubmit={handleOnclick}>
          <div className="my-4 w-full">
            <input
              className="border border-gray-400 p-2 rounded-2xl w-full text-2xl"
              type="text"
              value={input}
              placeholder="Enter your todo here"
              onChange={handleInput}
              required
            />
          </div>
          <div>
            <input type="submit"
              className="hover:scale-102 transition-all active:scale-97 w-full bg-zinc-400 py-2 rounded-2xl text-white text-2xl"
              value="Add Todo"
            />
          </div>
        </form>
        <div className="mt-12 overflow-y-scroll h-50">
          {todos[0] ? (
            todos.map((todo, i) => (
              <div className="flex justify-between font-semibold text-lg bg-zinc-700 my-4 text-white p-2 rounded-md">
                <p key={i}>{todo}</p> <Delete onClick={() => deleteTodo(i)} />{" "}
              </div>
            ))
          ) : (
            <p className="text-xl font-semibold text-center">
              There is no todo..
            </p>
          )}
        </div>
        <div>
          <button
            className="mt-8 p-2 w-full bg-red-600 rounded-lg text-white font-semibold hover:scale-102 transition-all active:scale-97"
            onClick={handleDeleteAll}
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
