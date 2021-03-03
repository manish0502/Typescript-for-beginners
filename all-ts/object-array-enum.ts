// const person:{
//     name: string,
//     age: number,
//     hobbies:string[],
//     role:[number, string] // tuple of size 2 
// } =
// {
//     name: 'Manish',
//     age:23,
//     hobbies:['sports','Cookies'] ,// This is Array of string , we can not assign other kind of data type
//     role :[2 ,'Author']  //tuple exaple

// }



// tuple operations

//person.role.push['admin'], // we can not push more element because it has size-2
//person.role[0]=13

//console.log(person.role);


//let favoriteHobbies :any[]; // if you wanted to use mixed array you can use type any

// favoriteHobbies=['Cricket',1 ,true]

// console.log(person.name)

// print the value inside the hobbies

// for(const hobby of person.hobbies) {

//     console.log(hobby.toUpperCase()) 

// }
// console.log(favoriteHobbies)


// const ADMIN=0;
// const READ_ONLY=1;
// const AUTHORS=2;

enum Role { ADMIN , READ_ONLY , AUTHOR }

const person =
{
    name: 'Manish',
    age:23,
    hobbies:['sports','Cookies'],
    role : Role.ADMIN 

}

if(person.role===Role.ADMIN) {
    console.log('Admin Role only');
}