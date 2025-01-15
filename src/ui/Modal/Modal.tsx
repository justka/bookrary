import { Button } from "ui/Button/Button";
import { useModal } from "@ebay/nice-modal-react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface ModalInterface {
  children: JSX.Element;
  title: string;
}

export function Modal({ children, title }: ModalInterface) {
  const currentModal = useModal();
  return (
    <Dialog
      onClose={currentModal.hide}
      open={currentModal.visible}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          onClick={currentModal.hide}
          text="Close"
        />
      </DialogActions>
    </Dialog>
  );
}
