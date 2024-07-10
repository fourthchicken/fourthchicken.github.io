
$(".plus").on("click", plus)

$(".minus").on("click", minus)

$(".plus_page .ok").on("click", plus_ok)

$(".plus_page .cancel").on("click", plus_cancel)

$(".minus_page .ok").on("click", minus_ok)

$(".minus_page .cancel").on("click", minus_cancel)

function plus(){
    $(".back_filter").css("display", "block")
    $(".plus_page").css("display", "flex")
}

function minus(){
    $(".back_filter").css("display", "block")
    $(".minus_page").css("display", "flex")
}

function plus_ok(){
    if($(".plus_page .time").val()=="" && $(".plus_page .turnin").val()=="" && $(".plus_page .saves_bonus").val()=="" && $(".plus_page .saves").val()=="" && $(".plus_page .back").val()=="" && $(".plus_page .money_bonus").val()=="" && $(".plus_page .note").val()==""){
        alert("輸入框不可全部為空")
        return
    }
    if($(".plus_page .time").val() == ""){
        alert("日期為必填項目")
        return
    }
    $(".back_filter").css("display", "none")
    $(".plus_page").css("display", "none")



    $(".plus_page .time").val("")
    $(".plus_page .turnin").val("")
    $(".plus_page .saves_bonus").val("")
    $(".plus_page .saves").val("")
    $(".plus_page .back").val("")
    $(".plus_page .money_bonus").val("")
    $(".plus_page .note").val("")
}

function plus_cancel(){
    $(".back_filter").css("display", "none")
    $(".plus_page").css("display", "none")
}

function minus_ok(){
    $(".back_filter").css("display", "none")
    $(".minus_page").css("display", "none")
}

function minus_cancel(){
    $(".back_filter").css("display", "none")
    $(".minus_page").css("display", "none")
}