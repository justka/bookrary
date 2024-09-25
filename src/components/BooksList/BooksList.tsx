import { generateRandomBooks } from "./BooksList.utils";
import {
  Avatar,
  Divider,
  List as ListFromMaterialUi,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export function BooksList() {
  const listItems = generateRandomBooks({ quantity: 10 });

  return (
    <ListFromMaterialUi
      sx={{ bgcolor: "background.paper", maxWidth: 360, width: "100%" }}
    >
      {listItems.map((item, index, baseArray) => {
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.title} src="/" />
              </ListItemAvatar>
              <ListItemText
                primary={`${item.title} (${item.publishYear})`}
                secondary={
                  <>
                    <Typography
                      component="span"
                      sx={{ color: "text.primary", display: "inline" }}
                      variant="body2"
                    >
                      {item.author}
                    </Typography>
                    {` ${item.pagesQuantity} stron`}
                  </>
                }
              />
            </ListItem>
            {index !== baseArray.length - 1 ? (
              <Divider component="li" variant="inset" />
            ) : null}
          </>
        );
      })}
    </ListFromMaterialUi>
  );
}
