function task_5()
{    

    let text=prompt("введите строку");
    
    letters = text.match(/\p{L}/gu).length;
    nums = text.match(/[0-9]/gu).length;

    console.log(`количество букв: ${letters}`);
    console.log(`количество цифр: ${nums}`);
  
}