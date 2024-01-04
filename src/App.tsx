import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/@layout/Header";
import List from "./components/@lists/List";
import handleDownloadClick from "./utils/helpers/download";
import { IListItemProps } from "./components/@lists/ListItem";
import { saveAs } from "file-saver";

function App() {
     const [value, setValue] = useState("");

     const [list, setList] = useState<IListItemProps[]>([]);

     const handleDownload = () => {
          saveAs(value, "image");
     };

     return (
          <div className="App">
               <Header />

               <div className="container mx-auto">
                    <label
                         htmlFor="url"
                         className="block text-sm font-medium leading-6 text-gray-900"
                    >
                         Price
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm flex gap-3">
                         <input
                              type="text"
                              placeholder="https://image-url.png"
                              id="image-url"
                              name="image-url"
                              value={value}
                              onChange={(e) => setValue(e.target.value)}
                              className="block w-full rounded-md border-0 py-1 5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                         />
                         <button
                              onClick={handleDownload}
                              className="font-medium px-3 rounded-sm text-zinc-300 bg-indigo-600 hover:bg-indigo-500 "
                         >
                              Download
                         </button>
                    </div>
               </div>

               <div className="container mx-auto">
                    <List array={list} />
               </div>
          </div>
     );
}

export default App;
