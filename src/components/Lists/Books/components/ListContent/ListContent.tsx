import React from "react";
import { useSelector } from "react-redux";
import {
  Alert,
  AlertTitle,
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export function ListContent() {
  const { booksList } = useSelector(
    (state: {
      books: {
        booksList: {
          author: string;
          pagesQuantity: string;
          publishYear: string;
          title: string;
        }[];
      };
    }) => state.books
  );

  if (booksList.length === 0) {
    return (
      <Alert
        severity="info"
        variant="outlined"
      >
        <AlertTitle>Info</AlertTitle>
        <span>List is empty</span>
      </Alert>
    );
  }
  return booksList.map((item, index, baseArray) => {
    return (
      <React.Fragment key={`${index}-${item.title}`}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={item.title}
              src="/"
            />
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
          <Divider
            component="li"
            variant="inset"
          />
        ) : null}
      </React.Fragment>
    );
  });
}
