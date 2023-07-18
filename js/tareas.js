var notaCount = 1; // Contador para llevar el control de las notas agregadas
var seleccionados = []; // Array para almacenar los elementos seleccionados

// Agregar nueva nota
$(".agregar-nota").click(function () {
    var notaTitle = $("#note-title").val();
    var notaContent = $("#note-content").val();
    var ambito = $("#ambito").val();

    // Construir el nombre de la clase
    var notaClass = "note" + notaCount;

    // Crear el elemento de la nota con la clase correspondiente
    var nuevaNota = $("<div>", {
        class: "note ui-state-default " + notaClass + "ui-widget-content",
        text: notaTitle,
    });

    // Incrementar el contador
    notaCount++;

    // Agregar la nota al contenedor
    $("#notes-container").append(nuevaNota);

    // Limpiar los campos del formulario
    $("#note-title").val("");
    $("#note-content").val("");
    $("#ambito").val("");

    // Asignar el evento de eliminación a la nueva nota
    nuevaNota.click(function () {
        // Mostrar el modal para confirmar la eliminación
        var modalEliminar = $("#modal_eliminar");
        modalEliminar.modal("open");

        // Eliminar la nota al hacer clic en el botón "Eliminar Nota"
        $(".agregar-nota", modalEliminar).click(function () {
            nuevaNota.remove();
            modalEliminar.modal("close");
        });
    });
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
        preventScrolling:true,	
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

    $(".boton_cancelar").click(function() {
        $(".section_eliminar").fadeOut();
        $(".note").off("click");
    });

});


//BUSQUEDA DE NOTAS
$(document).ready(function() {
    $("#search").on("input", function() {
        var searchTerm = $(this).val().toLowerCase();

        $(".note").filter(function() {
            var noteText = $(this).text().toLowerCase();
            return noteText.indexOf(searchTerm) === -1;
        }).fadeOut();

        $(".note").filter(function() {
            var noteText = $(this).text().toLowerCase();
            return noteText.indexOf(searchTerm) !== -1;
        }).fadeIn();
    });
});