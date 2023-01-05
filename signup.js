function check()
{
    let username=document.getElementById('name').value;
    let useremail=document.getElementById('email').value;
    let pswd1=document.getElementById('password').value;
    let pswd2=document.getElementById('cpassword').value;
   

    let user={
        name:username,
        email:useremail,
        password:pswd1
    }


    if(pswd1==pswd2 && username.length>3 && useremail.length>3 && pswd1.length>3 && pswd2.length>3)
    {
        fetch('https://masterclass-january-default-rtdb.firebaseio.com/user.json',
        {
            method:'post',
            body:JSON.stringify(user)
        }).then(()=>
        {
            alert('Data is pushed succesfully');
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('password').value="";
            document.getElementById('cpassword').value="";
        })      
    }
    else if(pswd1!=pswd2){
        alert('Please enter both password similarly')
    }
    else{
        alert("Please enter all inputs")
    }
}


// console.log('Successfully linked')

// let a=10;
// var b=10;
// console.log(a,b)

// let a='Siddesh';
// let b=10;

// Array

// let arr=[1,2,3,4,5,6];
// arr.shift();
// console.log(arr)

// let student={
//     name:'Siddesh',
//     rollno:20,
//     age:22,
// }

// console.log(student)


// let arr=[
//     {
//         name:'sid',
//         rollno:13,
//     },
//     {
//         name:'rahul',
//         rollno:20,
//     },
//     {
//         name:'abhisek',
//         rollno:10,
//     }
// ]

// console.log(arr[0].name)


// function sum(a,b)
// {
//     console.log(a+b);
// }

// sum(2,3)
// sum(4,6)
// sum(7,2)

// sum=(a,b)=>
// {
//     console.log(a+b)
// }

// sum(2,5)

// let show=function()
// {
//     console.log('Function is invoked');
// }

// show();

// let arr=[1,2,3,4,5]

// for(let x of arr)
// {
//     console.log(x)
// }

// let age=14;

// if(age<18)
// {
//     console.log('Person cannot vote')
// }
// else{
//     console.log('Person will vote')
// }

// let arr=[1,2,3,4,5]

// let arr2=arr.filter((x)=>
// {
//     return x>3
// })

// console.log(arr2)


