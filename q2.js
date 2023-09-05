function totalcartvalue(params) {
    let totalvalue=0;
    for (let i = 0; i < arguments.length; i++) {

        totalvalue += arguments[i];
        
    }
    console.log(`The total cart value is ${totalvalue}`);
    return totalvalue;
}
totalcartvalue(20,10,20);

