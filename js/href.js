

$("table.table-href").on('click', 'tr td:not(.td-href-disable)', function () {
    window.location = $(this).parent().data("href");
});


