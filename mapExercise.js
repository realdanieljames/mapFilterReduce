let users1 = [
    {
        firstName: 'Joe',
        lastName: 'Orin',
        car: 'Porsche',
        dog: 'Shitzu',
    },

    {
        firstName: 'Lori',
        lastName: "Foster",
        car: 'Porsche',
        dog: 'German Shepherd'
    },

    {
        firstName: 'Guy',
        lastName: 'Peters',
        car: 'Chevrolet',
        dog: 'Poodle'
    },

    {
        firstName: 'Lori',
        lastName: 'Foster',
        car: 'Toyota',
        dog: 'German Shepherd'
    },

];
// map through array

const firstAndLastName = users1.map((value, index) => {
    console.log(`${value.firstName} ${value.lastName}`)
}
)




//=============================================================================//
//=============================================================================//


// 2.  a. Create an array of objects where the value from the name key in each object in users,
//  is the key in the new object index,
//  and the likes value is the value in the new object index.
// b. Calculate age based on the number of letters in the name multiplied by 10




const users2 = [
    { name: 'pan', likes: 'lasagne' },
    { name: 'lena', likes: 'wine' },
    { name: 'jill', likes: 'tacos' },
    { name: 'conner', likes: 'turkey' }
];
// Should look like:
// [
//     { pan: 'lasagne', age: 30 },
//     { lena: 'wine', age: 40 },
//     { jill: 'tacos', age: 40 },
//     { conner: 'turkey', age: 60 }
// ]

// create an array of objects
const arrObj = users2.map((value, index, array) => {

    // Calculate age based on the number of letters in the name multiplied by 10
    const age  = value.name.length *10;

    console.log(`${value.name}:  '${value.likes}', age: ${age} `)

    // put it it into an object
    

    //  push it into an array

}
)




