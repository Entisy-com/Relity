/* eslint-disable @typescript-eslint/no-empty-function */
import Modal from "../components/modal/Modal";
import ModalButton from "../components/modal/ModalButton";
import ModalText from "../components/modal/ModalText";
import ModalTitle from "../components/modal/ModalTitle";

export default function Error500() {
  return (
    <>
      <Modal open={true} setOpen={() => {}}>
        <ModalTitle value="Error 500" />
        <ModalText value="Internal Server Error" />
        <ModalButton
          onClick={() => {
            window.location.href = document.referrer;
          }}
          value="Bring Me Back"
        />
      </Modal>
    </>
  );
}
