//estrutura de dados com Modal
export const modal = {
  btnClose: document.querySelector(".close"),
  modalWrapper: document.querySelector(".modal-wrapper"),
  Message: document.querySelector("span"),

  open() {
    modal.modalWrapper.classList.add("open");
  },
  close() {
    modal.modalWrapper.classList.remove("open");
  },
};

modal.btnClose.onclick = () => {
  modal.close();
};

window.addEventListener("keydown", handleKeydown);

function handleKeydown(e) {
  console.log(e.key);
  if (e.key === "Escape") {
    modal.close();
  }
}
