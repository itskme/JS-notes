
const form = document.getElementById('note-form');
const notesContainer = document.getElementById('notes-container');


let notes = [];


function renderNotes() {

    notesContainer.innerHTML = '';

 
    notes.forEach((note, index) => {
        const noteHTML = `
            <div class="note">
                <h2 class="note-title">${note.title}</h2>
                <p class="note-content">${note.content}</p>
                <button class="delete-note-btn" data-index="${index}">Delete</button>
            </div>
        `;
        notesContainer.insertAdjacentHTML('beforeend', noteHTML);
    });
}


function saveNote(title, content) {

    const note = { title, content };


    notes.push(note);


    renderNotes();
}


function deleteNote(index) {
   
    notes.splice(index, 1);

    renderNotes();
}


form.addEventListener('submit', (e) => {
    e.preventDefault();


    const title = document.getElementById('note-title').value.trim();
    const content = document.getElementById('note-content').value.trim();

    saveNote(title, content);


    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
});

notesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-note-btn')) {
        const index = e.target.dataset.index;
        deleteNote(index);
    }
});


renderNotes();