import { Menu } from "components/Menu/Menu";
import { Shelf } from "components/Shelf/Shelf";
import { Statistics } from "components/Statistics/Statistics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

export function App() {
  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            element={<Shelf />}
            path="/"
          />
          <Route
            element={<Statistics />}
            path="/stats"
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
