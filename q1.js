let userlist = ["Ranjan","Mithun","Naman","Prince"]

function checkusername(username) {
    if (userlist.includes(username)){
        console.log(
            `${username} is a valid user!`
        )
    }
    else{
        console.log(`${username} is not a valid user!`);
    }
    
}
checkusername("Mithun");
checkusername("Rohit");
