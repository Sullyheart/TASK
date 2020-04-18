function parameter (number) {
    for (let i = 1; i<=number; i++)

    if (i % 2 ==0 && i % 3==0 && i % 5==0){
        console.log("yu-gi-oh");
    
 }else if (i % 2 ==0 && i % 3==0){
    console.log("yu-gi");

    } else if (i % 2 ==0 && i % 5==0){
    console.log("yu-oh");

    } else if (i % 3 ==0 &&  i % 5==0){
    console.log("gi-oh");

    } else if (i % 2 == 0) { 
        console.log("yu");

    } else if (i % 3 ==0) {  
        console.log("gi");

    } else if (i % 5 ==0){
        console.log("oh");
    
    } else{
        console.log(i);
    }
    }

    function parameter(number){
        let arrayNumber = [];
        division = "";
    for (let i = 1; i<=number; i++) {
    if (i % 2 ==0 && i % 3==0 && i % 5==0){
        division = "yu-gi-oh"
    }else if (i % 2 ==0 && i % 3==0){
        division = "yu-gi"
        
    } else if (i % 2 ==0 && i % 5==0){
        division = "yu-oh"
        
    } else if (i % 3 ==0 &&  i % 5==0){
        division = "gi-oh"
        
    } else if (i % 2 == 0) {
        division = "yu"
        
    } else if (i % 3 ==0) {  
        division = "gi"
        
    } else if (i % 5 ==0){
        division = "oh"

    } else {    
        division = i
    }
        arrayNumber.push(division)
    }
        return (arrayNumber);
    }
    console.log(parameter(100));
    console.log(parameter(30));
