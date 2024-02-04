
// Bill = Es un array con los platos consumidos
// k = lo que Ana no comió 
// B = lo que Brian le cobró a Ana

 

function CalcularAna (bill, k, b){
    let totalAna = 0;
    for (let i = 0; i < bill.length; i++) {
        if(i !== k){
        total += bill[i]
        }
    }

    // Lo que tiene que pagar Ana
    let x = Math.floor(totalAna/2);

    if (x === b) {
        console.log("CalcularAna");
    }
    else {
        console.log(b- x);
        // Esto sería lo que Brian tiene que devolverle a Ana
    }
}

//