
var seleccionados = []; // Array para almacenar los elementos seleccionados

// Función para crear una nueva nota con la estructura deseada
function crearNuevaNota(notaTitle, notaContent, ambito) {
    var nuevaNota = $("<div>", {
        class: "ui-state-default ui-widget-content note hoverable",
    });

    var noteContentView = $("<div>", {
        class: "note-content-view",
    });

    var tituloNota = $("<p>", {
        class: "titulo_nota",
        text: notaTitle,
    });

    var contenidoNota = $("<p>", {
        class: "contenido_nota",
        text: notaContent,
    });

    var ambitos = $("<p>", {
        class: "ambito_nota",
        text: ambito,
    });

    noteContentView.append(tituloNota);
    noteContentView.append(contenidoNota);
    noteContentView.append(ambitos);

    var noteContentEdit = $("<div>", {
        class: "note-content-edit",
        style: "display: none",
    });

    var inputTitleEdit = $("<input>", {
        type: "text",
        class: "note-title-edit",
        placeholder: "Nuevo título",
        required: true,
    });

    var textareaContentEdit = $("<textarea>", {
        type: "text",
        class: "note-content-edit",
        placeholder: "Nuevo contenido",
        required: true,
    });

    var labelColor = $("<label>", {
        for: "color",
        text: "Seleccione un color:",
    });

    var inputColorEdit = $("<input>", {
        type: "color",
        class: "note-color-edit",
    });

    var inputAmbitoEdit = $("<input>", {
        type: "text",
        class: "note-ambito-edit",
        placeholder: "Nuevo ámbito",
        required: true,
    });

    noteContentEdit.append(inputTitleEdit);
    noteContentEdit.append(textareaContentEdit);
    noteContentEdit.append(labelColor);
    noteContentEdit.append(inputColorEdit);
    noteContentEdit.append(inputAmbitoEdit);

    var noteActions = $("<div>", {
        class: "note-actions",
    });

    var editarNotaBtn = $("<a>", {
        class: "blue lighten-2 editar-nota waves-effect waves-light btn tooltipped",
        "data-tooltip": "Modificar tarea",
        "data-position": "right",
        type: "submit",
    }).append($("<i>", {
        class: "material-icons",
        text: "edit",
    }));

    var guardarNotaBtn = $("<a>", {
        class: "cyan lighten-2 guardar-nota waves-effect waves-light btn tooltipped",
        style: "display: none",
        "data-tooltip": "Guardar",
        "data-position": "bottom",
    }).append($("<i>", {
        class: "material-icons",
        text: "save",
    }));

    var cancelarEditarNotaBtn = $("<a>", {
        class: "red lighten-2 cancelar-editar-nota waves-effect waves-light btn tooltipped",
        style: "display: none",
        "data-tooltip": "Cancelar",
        "data-position": "right",
    }).append($("<i>", {
        class: "material-icons",
        text: "cancel",
    }));

    noteActions.append(editarNotaBtn);
    noteActions.append(guardarNotaBtn);
    noteActions.append(cancelarEditarNotaBtn);

    nuevaNota.append(noteContentView);
    nuevaNota.append(noteContentEdit);
    nuevaNota.append(noteActions);

    return nuevaNota;
}

$(".agregar-nota").click(function () {
    var notaTitle = $("#note-title").val();
    var notaContent = $("#note-content").val();
    var ambito = $("#ambito").val();

    var ambitoDivPrincipal= $("<div>", {
        class: "ambitos col m3 l3 hide-on-med-and-down",
    });

    var nuevoAmbito = $("<div>", {
        class: "ambitos_item center hoverable",
    });

    // Crear la nueva nota usando la función creada
    var nuevaNota = crearNuevaNota(notaTitle, notaContent, ambito);

    // Agregar la nueva nota al contenedor "notes-container"
    $("#notes-container").append(nuevaNota);

    // Limpiar los campos del formulario
    $("#note-title").val("");
    $("#note-content").val("");
    $("#ambito").val("");

    // Asignar eventos para la nota recién creada
    nuevaNota.find(".editar-nota").click(function () {
        var note = $(this).closest(".note");
        note.find(".note-content-edit").show();
        note.find(".note-content-view").hide();
        note.find(".guardar-nota").show();
        note.find(".cancelar-editar-nota").show();
        note.find(".editar-nota").hide();
    });

    nuevaNota.find(".guardar-nota").click(function () {
        var note = $(this).closest(".note");
        var noteContent = note.find(".note-content-view").show();
        var noteEdit = note.find(".note-content-edit").hide();
        var noteActions = note.find(".note-actions");

        noteActions.show();

        var nuevoTitulo = note.find(".note-title-edit").val().trim();
        var nuevoContenido = note.find(".note-content-edit").val().trim();
        var nuevoAmbito = note.find(".note-ambito-edit").val().trim();
        var nuevoColor = note.find(".note-color-edit").val();

        noteContent.find(".titulo_nota").text(nuevoTitulo);
        noteContent.find(".contenido_nota").text(nuevoContenido);
        noteContent.find(".ambito_nota").text(nuevoAmbito);
        note.css("background-color", nuevoColor);

        note.find(".editar-nota").show();
        note.find(".guardar-nota").hide();
        note.find(".cancelar-editar-nota").hide();
    });

    nuevaNota.find(".cancelar-editar-nota").click(function () {
        var note = $(this).closest(".note");
        var noteContent = note.find(".note-content-view").show();
        var noteEdit = note.find(".note-content-edit").hide();
        var noteActions = note.find(".note-actions");

        noteActions.show();

        note.find(".editar-nota").show();
        note.find(".guardar-nota").hide();
        note.find(".cancelar-editar-nota").hide();
    });

    // ... (resto del código)
});




//ACTION BUTTON
$(document).ready(function () {
    var elems = $(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {
        direction: "top",
    });
});

//TOOLTIPS PARA ACTIONS BUTTON
$(document).ready(function () {
    var elems = $(".tooltipped");
    M.Tooltip.init(elems, {
        position: "left",
    });
});

// DRAGGABLE AND SORTABLE
$(function () {
    $(".sortable").sortable({
        revert: true,
    });
    $("#draggable").draggable({
        connectToSortable: ".sortable",
        helper: "clone",
        revert: "invalid",
    });
    $("ul, li").disableSelection();
});

//MODAL AÑADIR TAREA
$(document).ready(function () {
    var elems = $(".modal");
    M.Modal.init(elems, {
        opacity: 0.7,
        preventScrolling: true,
    });
});

//ELiminar
$(document).ready(function() {
    $(".eliminar_nota").click(function() {
        $(".section_eliminar").fadeIn();
        $(".boton_eliminar").hide();
        $(".note").removeClass("selected").off("click").on("click", function() {
            $(this).toggleClass("selected");
            var selectedNotes = $(".note.selected");
            if (selectedNotes.length > 0) {
                $(".boton_eliminar").fadeIn();
            } else {
                $(".boton_eliminar").fadeOut();
            }
        });
    });

    $(".boton_eliminar").click(function() {
        $(".note.selected").remove();
        $(".section_eliminar").fadeOut();
        $(".note").off("click");
    });

    $(".boton_cancelar_eliminar").click(function() {
        $(".section_eliminar").fadeOut();
        $(".note").removeClass("selected");
        $(".note").off("click");
    });

});

//MODIFICAR TAREA
$(document).ready(function () {
    $(".editar-nota").click(function () {
        var note = $(this).closest(".note");
        note.find(".editar-nota").hide();
        note.find(".guardar-nota").show();
        note.find(".cancelar-editar-nota").show();

        var noteContent = note.find(".note-content-view").hide();
        var noteEdit = note.find(".note-content-edit").show();

        noteEdit.find(".note-title-edit").val(note.find(".titulo_nota").text());
        noteEdit.find(".note-content-edit").val(note.find(".contenido_nota").text());
        noteEdit.find(".note-ambito-edit").val(note.find(".ambito_nota").text());
        noteEdit.find(".note-color-edit").val(rgbToHex(note.css("background-color")));
    });

    $(".cancelar-editar-nota").click(function () {
        var note = $(this).closest(".note");
        var noteContent = note.find(".note-content-view").show();
        var noteEdit = note.find(".note-content-edit").hide();
        var noteActions = note.find(".note-actions");

        noteActions.show();

        note.find(".editar-nota").show();
        note.find(".guardar-nota").hide();
        note.find(".cancelar-editar-nota").hide();
    });

    $(".guardar-nota").click(function () {
        var note = $(this).closest(".note");
        var noteContent = note.find(".note-content-view");
        var noteEdit = note.find(".note-content-edit");
        var noteActions = note.find(".note-actions");

        noteActions.show();

        var nuevoTitulo = noteEdit.find(".note-title-edit").val().trim();
        var nuevoContenido = noteEdit.find(".note-content-edit").val().trim();
        var nuevoAmbito = noteEdit.find(".note-ambito-edit").val().trim();
        var nuevoColor = noteEdit.find(".note-color-edit").val();

        noteContent.find(".titulo_nota").text(nuevoTitulo);
        noteContent.find(".contenido_nota").text(nuevoContenido);
        noteContent.find(".ambito_nota").text(nuevoAmbito);
        note.css("background-color", nuevoColor);

        note.find(".editar-nota").show();
        note.find(".guardar-nota").hide();
        note.find(".cancelar-editar-nota").hide();
        noteContent.show();
        noteEdit.hide();
    });
});


function rgbToHex(rgb) {
    var match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*\d+\.\d+)?\)/);
    if (!match) {
        return "";
    }
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(match[1]) + hex(match[2]) + hex(match[3]);
}

//BUSQUEDA DE NOTAS
$(document).ready(function () {
    $("#search").on("input", function () {
        var searchTerm = $(this).val().toLowerCase();

        $(".note")
            .filter(function () {
                var noteText = $(this).text().toLowerCase();
                return noteText.indexOf(searchTerm) === -1;
            })
            .fadeOut();

        $(".note")
            .filter(function () {
                var noteText = $(this).text().toLowerCase();
                return noteText.indexOf(searchTerm) !== -1;
            })
            .fadeIn();
    });
});

//ORDENAR NOTAS
// Function to sort notes by title
function sortNotesAlphabetically() {
    var notesContainer = $("#notes-container");
    var notes = notesContainer.children(".note").get();

    notes.sort(function (a, b) {
        var titleA = $(a).find(".titulo_nota").text().toUpperCase();
        var titleB = $(b).find(".titulo_nota").text().toUpperCase();
        return titleA.localeCompare(titleB);
    });

    // Animate the movement of notes
    notesContainer.slideUp(400, function () {
        $.each(notes, function (index, note) {
            $(note).appendTo(notesContainer);
        });
        notesContainer.slideDown(400);
    });
}

// Call the sort function when the button is clicked
$(".ordenar_fecha").click(function () {
    sortNotesAlphabetically();
});
