const userDatabase ={
    "Muibat123" :{
        firstName : "Muibat",
        lastName : "Gbadamosi",
        email : "gbadamosimuibat@gmail.com",
        accountActivated : true ,
        password : "Muibatasabi"
    
    },
}

function displayUserDetails() {
//Enter username
let username = prompt("Enter your username")


while (validateUsername(username) == false) {
    username = prompt("Username not valid.Please enter a valid username(username must be less than 10)")    
}
if (username == null) {
    return
    
}

//Enter password
let password = prompt("Enter your password")


while (validatePassword(password) == false) {
    password = prompt("Password not valid.Please enter a valid password(password must be more than 6)")   
}
if (password == null) {
    return
    
}

//Confirm password
let confirmPassword = prompt("Confirm Password")

while (confirmPassword !== password) {
    confirmPassword = prompt("Password incorrect.Re-confirm password again")  
}
if (confirmPassword == null) {
    return
    
}

const user = userDatabase[username]

if (user == undefined) {
    alert(" User not found.Please enter with the correct username and password")
    return
    
}
console.log(user)
alert(`
    User have the following details:
    first Name: ${user.firstName}
    Last Name: ${user.lastName}
    Email: ${user.email}
    Account Activated: ${user.accountActivated}

`)



console.log(username , password , confirmPassword)
}
displayUserDetails()


alert("You have come to the end of this program! Goodbye")



function validateUsername(username) {
    if(username == null){
        return true
    }
    if (username.length > 10) {
        return false
    } else {
        return true
    }
    
}
function validatePassword(password){
    if (password == null) {
        return true    
    }
    if (password.length < 6) {
        return false
        
    } else {
        return true
        
    }
}

