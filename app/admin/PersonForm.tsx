"use client";
import { useState } from "react";

export function PersonForm() {
  const [active, setActive] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File>();
  const handleClick = () => {
    setActive(!active);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.append("name", name);
      data.append("description", description);
      data.append("file", file);

      const res = await fetch("/api/person", {
        method: "POST",
       body: data
      });
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div>
      <button className="bg-[#FFA500] text-white p-2" onClick={handleClick}>
        Add Person
      </button>

      {active && (
        <form
          onSubmit={handleSubmit}
          className="flex border  mt-10 flex-col p-5  gap-5 items-center">
          <h2 className="font-bold">add a person</h2>
          <div>
            <label htmlFor="name">name </label>
            <div>
              <input
                onChange={(e) => setName(e.target.value)}
                className="border mt-2 p-1 rounded-md"
                type="text"
                id="name"
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="description">description</label>
            </div>
            <div>
              <input
                onChange={(e) => setDescription(e.target.value)}
                className="border mt-2 p-1 rounded-md"
                id="description"
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center">
              <label htmlFor="img" className="mt-10">
                upload Image
              </label>
            </div>
            <div>
              <input
                onChange={(e) => setFile(e.target.files?.[0])}
                className="mt-5 p-0 self-center ml-20"
                type="file"
                required
              />
            </div>
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
