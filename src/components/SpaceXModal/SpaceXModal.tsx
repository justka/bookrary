import { DisplayLocations } from "components/DisplayLocations/DisplayLocations";
import { Modal } from "ui/Modal/Modal";
import NiceModal from "@ebay/nice-modal-react";

export const SpaceXModal = NiceModal.create(() => {
  return (
    <Modal title="SpaceX Locations">
      <DisplayLocations />
    </Modal>
  );
});
