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

  const removeBtn = document.createElement("button");
  removeBtn.className = "note__delete";
  removeBtn.textContent = "Remove";

  noteFooter.append(removeBtn);
  note.append(noteBody, noteFooter);
  return note;
}

const saveBtn = document.querySelector("#save-note-btn");
const noteForm = document.querySelector("#note-form");
const notesContainer = document.querySelector(".notes");
const noteTextInput = noteForm.querySelector("textarea");

const notesList = JSON.parse(localStorage.getItem("notes") || "[]");

for (const note of notesList) {
  const newNote = buildNoteHtml(note);
  notesContainer.insertBefore(newNote, noteForm);
}

saveBtn.onclick = () => {
  const noteText = noteTextInput.value;
  const newNote = buildNoteHtml(noteText);
  // notesContainer.append(newNote); add to end
  notesContainer.insertBefore(newNote, noteForm);
  notesList.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notesList));

  noteTextInput.value = "";
  noteTextInput.focus();
};

// JSON - Java Script Object Notation
