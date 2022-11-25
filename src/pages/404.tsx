import Modal from "../components/modal/Modal";
import ModalButton from "../components/modal/ModalButton";
import ModalCheckbox from "../components/modal/ModalCheckbox";
import ModalText from "../components/modal/ModalText";
import ModalTitle from "../components/modal/ModalTitle";

export default function Error404() {
  return (
    <>
      <Modal open={true} setOpen={() => {}}>
        <ModalTitle value="404 Not Found" />
        <ModalText value="An Error ocurred!" />
        <ModalButton
          onClick={() => {
            window.location.href = document.referrer;
          }}
          value="Bring me Back"
        />
      </Modal>
    </>
  );
}
