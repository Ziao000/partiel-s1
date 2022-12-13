import PostList from "./App/PostList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./App/CardDetails";
import { useState } from "react";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/card/:_id" element={<Card />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
