function task_4()
{    
    function isValidstr(str) {
        var objRE =/^([A-ZА-ЯЁ]{10,}$)+$/i;
        return objRE.test(str);
        }

    let str=prompt("введите строку");
    alert(isValidstr(str));

}