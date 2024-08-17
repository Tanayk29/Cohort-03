// DECLARING VARIABLES

let firstName = "John"

const age = 30;

var isStudent = true;


console.log(firstName)
console.log(age)
console.log(isStudent)

var isTeacher = true;
isTeacher = "Harkirat"
isTeacher =  10

console.log(isTeacher)
// 10 gets printed...all other previous code gets overrided
// if we do console log after isTeacher = "Harkirat then "Harkirat" will get printed


// const let 

    // const - constant, value cannot be changed after declaration
    // let - variable, value can be changed after declaration

    // const age = 30;
    // age = 31; // this will throw an error
    //also if you try to write any code after redeclaring a same varible using const the code after it wont run...it will stop at the redeclared line only

    let isSir = true;
    const surName = "Singh"
    console.log("Hello Before ")
    // surName = 1
    // console.log("Hello After")

    // here the "Hello Before" will run and then the code will crash and the after the rest all code wont run ...that is "Hello after" wont run

    // you can change the value to let

    // ARRAY

    let user1 = "Tanay"
    let user2 = "Harkirat"
    let user3 = "Laila"

    console.log(user1)
    console.log(user2)
    console.log(user3)

    let users = ["Tanay", "Harkirat", "Laila"]
    console.log(users[0]);


    let reqAge = 19;
    let canVote = (reqAge > 18)
    
    console.log(reqAge)


    // function sum(n) {
    //     let ans = 0;
    //     for (let i = 1; i <= n; i++) {
    //       ans = ans + i
    //     }
    //     return ans;
    //   }
      
    //   const ans = sum(100);
    //   console.log(ans);


    //   function sum(n) {
        
    //    ans =  n*(n+1)
    //     return ans;
    //   }
      
    //   const ans = sum(100);
    //   console.log(ans);

    