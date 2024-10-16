import React from "react";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Message } from "ui/Message/Message";
import { useSelector } from "react-redux";

export function ListContent() {
  const { booksList } = useSelector(
    (state: {
      books: {
        booksList: {
          author: string;
          title: string;
          publishYear: string;
          pagesQuantity: string;
        }[];
      };
    }) => state.books
  );

  if (booksList.length === 0) {
    return <Message text="List is empty" />;
  }
  return booksList.map((item, index, baseArray) => {
    return (
      <React.Fragment key={`${index}-${item.title}`}>
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
      </React.Fragment>
    );
  });
}
