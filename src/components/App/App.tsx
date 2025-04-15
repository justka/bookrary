import { Shelf } from "components/Shelf/Shelf";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Shelf />}
          path="/"
        />
      </Routes>
    </BrowserRouter>
  );
}
