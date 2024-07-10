var companyList = []
let complete_array = []
var str = localStorage.getItem('search_company_list')
if(str == null || str.length == 0){
    companyList = JSON.stringify(companyList)
    localStorage.setItem('search_company_list', companyList)
    companyList = JSON.parse(companyList)
}
else{
    companyList = localStorage.getItem('search_company_list')
    companyList = JSON.parse(companyList)
    for(var i = 0; i < companyList.length; i ++){
        var company_name = companyList[i].company
        var num = companyList[i].number
        $(".company").append('<li data-number:"' + i + '"><a href="' + 'https://www.capital.com.tw/web/#/stock-analysis/qoute;stockSymbol='+num + '"' + 'target="search_company"><p>' + company_name + '</p></a></li>')
    }
}
console.log("start")

$(".add_company .add").on("click", add_company)

$(".delete").on("click", delete_company)

$(".delete_page .delete_cancel").on("click", delete_cancel)

$(".delete_page .delete_ok").on("click", delete_ok)

function add_company(){
    console.log(1)
    if($(".add_company #name_input").val() == ""){
        alert("請填入公司名稱")
        return
    }
    if($(".add_company #number_input").val() == ""){
        alert("請填入股票代號")
        return
    }
    $(".company").append('<li><a href="' + 'https://www.capital.com.tw/web/#/stock-analysis/qoute;stockSymbol='+$(".add_company #number_input").val() + '"' + 'target="search_company"><p>' + $(".add_company #name_input").val() + '</p></a></li>')
    var save = {
        company: $(".add_company #name_input").val(),
        number: $(".add_company #number_input").val(),
        delete: "0"
    }
    $(".add_company #name_input").val("")
    $(".add_company #number_input").val("")
    companyList.push(save)
    var s = JSON.stringify(companyList)
    localStorage.setItem('search_company_list', s)
}

function delete_company(){
    $(".find_container").css("overflow", "hidden")
    $(".back_filter").css("display", "block")
    $(".delete_page").css("display", "flex")
    $(".delete_company_list").empty()
    for(let i = 0; i < companyList.length; i ++){
        $(".delete_company_list").append('<li>' + '<input type="checkbox" data-number="' + i + '">' + companyList[i].company + '</li>')
        complete_array.push(false)
    }
    console.log(companyList.length)
    if(companyList.length == 0){
        $(".delete_company_list").append('<li class="nothing"><p>沒東西能刪了...</p><img src="image/bye.gif"></li>')
    }
    $(".delete_page .delete_ok").css("background-color", "rgb(215, 215, 215)")
    $(".delete_company_list input").on("click", delete_checkbox)
}

let can_delete = false
function delete_checkbox(){
    let temp = parseInt($(this).data("number"), 10)
    if($(this).is(':checked')){
        complete_array[temp] = true
        
    }
    else{
        complete_array[temp] = false
        
    }
    for(let i = 0; i < complete_array.length; i ++){
        if(complete_array[i] == true){
            $(".delete_page .delete_ok").css("background-color", "red")
            can_delete = true
            return
        }
        can_delete = false
        $(".delete_page .delete_ok").css("background-color", "rgb(215, 215, 215)")
    }  
    console.log(complete_array) 
}

function delete_cancel(){
    $(".find_container").css("overflow", "scroll")
    $(".back_filter").css("display", "none")
    $(".delete_page").css("display", "none")
}

function delete_ok(){
    if(can_delete == false){
        return
    }
    for(let i = 0; i < companyList.length; i ++){
        if(complete_array[i] == true){
            companyList[i].delete = "1"
        }
    }
    console.log(companyList)
    let temp = []
    $(".company").empty()
    for(let i = 0; i < companyList.length; i ++){
        if(companyList[i].delete == "0"){
            temp.push(companyList[i])
            var company_name = companyList[i].company
            var num = companyList[i].number
            $(".company").append('<li data-number:"' + i + '"><a href="' + 'https://www.capital.com.tw/web/#/stock-analysis/qoute;stockSymbol='+num + '"' + 'target="search_company"><p>' + company_name + '</p></a></li>')
        }
    }
    companyList = temp
    var s = JSON.stringify(companyList)
    localStorage.setItem('search_company_list', s)
    complete_array = []
    can_delete = false
    $(".find_container").css("overflow", "scroll")
    $(".back_filter").css("display", "none")
    $(".delete_page").css("display", "none")
}