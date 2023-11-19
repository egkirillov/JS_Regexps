function task_1()
{    
    function isValidUrl(url) {
        var objRE =/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        return !!objRE.test(url);
        }

    let url=prompt("введите URL");
    alert(isValidUrl(url));
   
}