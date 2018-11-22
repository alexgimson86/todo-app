$(document).ready(function() {
    var count = 0;
    var ident = "id_" + count;

    function addItem() {
        var todoItem = $('input[type=text]').val();
        $('input[type=text]').val('');
        if (todoItem.length < 1) {
            alert("you must enter valid todo item");

        } else {
            var li = '<li class="list-group-item">' + todoItem + '<span id="' + ident + '" class="badge badge-pill badge-danger">x</span></li >';
            $('#list').append(li);
            $('#' + ident).on('click', function(event) {
                $(this).parent().remove();
            });
            ident = "id_" + ++count;
        }
    }
    $('input').on('keydown', function(event) {
        if (event.which === 13) {
            event.preventDefault();
            addItem();
        }
    });
    $('#butto').on('click', function(event) {
        addItem();
    });


});