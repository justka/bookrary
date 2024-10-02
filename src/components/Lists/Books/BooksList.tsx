import { List as ListFromMaterialUi } from "@mui/material";
import { ListContent } from "./components/ListContent/ListContent";

export function BooksList() {
  return (
    <ListFromMaterialUi
      sx={{ bgcolor: "background.paper", maxWidth: 360, width: "100%" }}
    >
      <ListContent />
    </ListFromMaterialUi>
  );
}
