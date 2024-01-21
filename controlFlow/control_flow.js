let user = "admin";
let access;

if (user === "admin"){
    access = "full"
}
else if (user === "manager"){
    access = "less"
}
else{
    access = "no"
}

console.log(access)