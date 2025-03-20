/* <div class="note">
  <div class="note__body">My first note</div>
  <div class="note__footer" style="justify-content: flex-end">
    <button class="note__delete">Remove</button>
  </div>
</div>; */
function buildNoteHtml(text) {
  const note = document.createElement("div");
  note.className = "note";

  const noteBody = document.createElement("div");
  noteBody.className = "note__body";
  noteBody.textContent = text;

  const noteFooter = document.createElement("div");
  noteFooter.className = "note__footer";
  noteFooter.style.justifyContent = "flex-end";

  const copyBtn = document.createElement("button");
  copyBtn.className = "note__copy";
  copyBtn.textContent = "Copy";

  const removeBtn = document.createElement("button");
  removeBtn.className = "note__delete";
  removeBtn.textContent = "Remove";

  noteFooter.append(copyBtn, removeBtn);
  note.append(noteBody, noteFooter);
  return note;
}

const saveBtn = document.querySelector("#save-note-btn");
const noteForm = document.querySelector("#note-form");
const notesContainer = document.querySelector(".notes");
const noteTextInput = noteForm.querySelector("textarea");
const progressBar = noteForm.querySelector(".inner-bar");
const textCounter = noteForm.querySelector("#text-counter");

const notesList = JSON.parse(localStorage.getItem("notes") || "[]");

for (const note of notesList) {
  const newNote = buildNoteHtml(note);
  notesContainer.insertBefore(newNote, noteForm);
}

saveBtn.onclick = () => {
  const noteText = noteTextInput.value.trim();

  // falsy: false, "", 0, null, undefined
  if (!noteText) return;

  const newNote = buildNoteHtml(noteText);
  // notesContainer.append(newNote); add to end
  notesContainer.insertBefore(newNote, noteForm);
  notesList.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notesList));

  noteTextInput.value = "";
  noteTextInput.focus();
  progressBar.style.transform = "translateX(0%)";
  textCounter.textContent = "100 left";
};

noteTextInput.oninput = () => {
  const text = noteTextInput.value;
  // template strings
  progressBar.style.transform = `translateX(-${text.length}%)`;

  textCounter.textContent = `${100 - text.length} left`;
};

// JSON - Java Script Object Notation

notesContainer.onclick = (event) => {
  if (event.target.classList.contains("note__delete")) {

    const confirm = swal({
      title: "Do you really want to remove?",
      icon: "error"
    })

    if(!confirm) return;

    const removedNote = event.target.parentNode.parentNode;
    const removedNoteBody = removedNote.querySelector(".note__body");
    const removedNoteText = removedNoteBody.textContent;
    const removedIndex = notesList.findIndex((x) => x === removedNoteText);

    if (removedIndex >= 0) {
      removedNote.remove();
      notesList.splice(removedIndex, 1);
      localStorage.setItem("notes", JSON.stringify(notesList));
    }
  }

  if (event.target.classList.contains("note__copy")) {
    const originalNote = event.target.parentNode.parentNode;
    const originalNoteBody = originalNote.querySelector(".note__body");
    const originalNoteText = originalNoteBody.textContent;

    navigator.clipboard.writeText(originalNoteText);
    swal({
      title: "Successfully copied!",
      icon: "success",
    });

    const copiedNoteText = "(Copy) " + originalNoteText;
    const copiedNote = buildNoteHtml(copiedNoteText);

    notesContainer.insertBefore(copiedNote, noteForm);
    notesList.push(copiedNoteText);
    localStorage.setItem("notes", JSON.stringify(notesList));
  }
};
