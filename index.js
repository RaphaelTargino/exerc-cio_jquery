$(document).ready(function () {
    $("header button").click(function () {
        $("form").slideDown();
    })

})

$("criarTarefa").on("submit", function (e) {
    e.preventDefault();
    const tarefa = $("novaTarefa").val();
    const novoItem = $("<li></li>")
    $(tarefa).appendTo(novoItem);
})


