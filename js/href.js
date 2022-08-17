

$("table.table-href").on('click', 'tr td:not(:last-child,:first-child,.td-href-disable)', function () {
    window.location = $(this).parent().data("href");
});


