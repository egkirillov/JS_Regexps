function task_3()
{    
    function isValidstr(str) {
        var objRE =/^[0-9A-ZА-ЯЁ]+$/i;
        return !objRE.test(str);
        }

    let str=prompt("введите строку");
    alert(isValidstr(str));
   
}