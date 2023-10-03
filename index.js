$(document).ready(function () {
    $("header button").click(function () {
        $("form").slideDown();
    })

})

$("form").on("submit", function (e) {
    e.preventDefault();
    const tarefa = $("#novaTarefa").val();
    const novoItem = $("<li></li>").text(tarefa);
    $(tarefa).appendTo(novoItem);
    $("#novaTarefa").val("");
})


