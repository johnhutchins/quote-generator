$(function () {
    //need to add this function either to the html by calling it onClick,
    //other option is to loop the click event.

    var invoice = $("#invoice"),
        product_chosen,
        product_chosen_value = $("option").value,
        product_for_deletion = $("tr"),
        moveToTable,
        removeFromTable,
        newRow;

    moveItemToTable = function () {
        var row = invoice.insertRow();
        
        invoice.row.innerHTML = product_chosen_value;
    };

    removeItemFromTable = function () {
        row_in_table.deleteRow();
    };

    addProductToTable = function () {
        product_chosen.on("click", function () {
            moveItemToTable();
        });
    };

    removeProductFromTable = function () {
        product_for_deletion.on("click", function () {
            removeItemFromTable();
        });
    };

    removeProductFromTable();
    addProductToTable();
});