import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBookFromList } from "store/booksSlice";
import { Button } from "ui/Button/Button";
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
  const dispatch = useDispatch();

  const { booksList } = useSelector(
    (state: {
      books: {
        booksList: {
          author: string;
          id: number;
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
  return (
    <>
      {booksList.map((item, index, baseArray) => {
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
              <Button
                onClick={() => {
                  dispatch(removeBookFromList(item.id));
                }}
                text="usuń"
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
      })}
    </>
  );
}
