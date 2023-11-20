function task_2()
{    
    function isValidstr(str) {
        var objRE =/^[^0-9_]+[a-zA-Z0-9_]+$/i;
        return objRE.test(str);
        }

    let str=prompt("введите строку");
    alert(isValidstr(str));

}