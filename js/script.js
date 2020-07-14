 var writeUsLink = document.querySelector(".write-us-button");
 var writeUsPopUp = document.querySelector(".modal-write-us");
 var writeUsClose = writeUsPopUp.querySelector(".modal-close");
 var fullNameInput = writeUsPopUp.querySelector(".full-name-input");
 var emailInput =  writeUsPopUp.querySelector(".email-input");
 var messageInput =  writeUsPopUp.querySelector(".message-input");
 var writeUsForm = writeUsPopUp.querySelector(".write-us-form");

var isStorageSupport = true;
var storageFullName = "";
var storageEmail = "";

try {
  storageFullName = localStorage.getItem("FullName");
  storageEmail = localStorage.getItem("Email");
} catch (err) {
  isStorageSupport = false;
}


 writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopUp.classList.add("modal-show");

  if (storageFullName) {
    fullNameInput.value = storageFullName;
    messageInput.focus();
  } else {
    fullNameInput.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopUp.classList.remove("modal-show");
  writeUsPopUp.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!fullNameInput.value || !emailInput.value || !messageInput.value) {
    evt.preventDefault();
    writeUsPopUp.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("FullName", fullNameInput.value);
      localStorage.setItem("Email", emailInput.value);
    }
  }
});

