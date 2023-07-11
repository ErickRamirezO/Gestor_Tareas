// Arreglo para almacenar las notas
var notes = [];

// Función para renderizar las notas en el contenedor
function renderNotes() {
    var notesContainer = document.getElementById("notes");
    notesContainer.innerHTML = "";

    // Recorrer todas las notas y agregarlas al contenedor
    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];

        // Crear el elemento de la nota
        var noteElement = document.createElement("div");
        noteElement.classList.add("note");

        // Agregar el título y el contenido de la nota
        var titleElement = document.createElement("h2");
        titleElement.textContent = note.title;
        noteElement.appendChild(titleElement);

        var contentElement = document.createElement("p");
        contentElement.textContent = note.content;
        noteElement.appendChild(contentElement);

        // Agregar la nota al contenedor
        notesContainer.appendChild(noteElement);
    }
}

// Función para manejar el envío del formulario para agregar una nueva nota
function handleAddNoteFormSubmit(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var title = document.getElementById("note-title").value;
    var content = document.getElementById("note-content").value;

    // Crear un objeto de nota y agregarlo al arreglo de notas
    var newNote = {
        title: title,
        content: content,
    };
    notes.push(newNote);

    // Limpiar los campos del formulario
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";

    // Renderizar las notas actualizadas
    renderNotes();
}

// Agregar el evento para manejar el envío del formulario
var addNoteForm = document.getElementById("add-note-form");
addNoteForm.addEventListener("submit", handleAddNoteFormSubmit);


//ACTION BUTTON
$(document).ready(function () {
    var elems = $(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {
        direction: "top",
    });
});

//TOOLTIPS PARA ACTIONS BUTTON
$(document).ready(function () {
    var elems = $(".tooltipped");
    var instances = M.Tooltip.init(elems, {
        position: "left",
    });
});

function añadirTarea(){

}

//MODAL AÑADIR TAREA
$(document).ready(function () {
    var elems = $(".modal");
    var instances = M.Modal.init(elems, {
        opacity: 0.7,
    });
});
