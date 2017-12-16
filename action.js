$(document).ready(function () {
    var show = show ? show : '0';
    // $("input[type='text']").val(show);
    function stateChange(show, str) {
        show = show+""
        return show === '0' ? str : show.concat(str)
    }

    $("input[type='submit']").click((event) => {
        try {
            if (event.target.name === "=") {
                var result = eval(show)
                show = result
            } else if (event.target.name === "clear") {
                show = '0'
            } else {
                show = stateChange(show, event.target.name)
            }
        } finally {
            $("input[type='text']").val(show)
        }
    })
})