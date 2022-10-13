// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

// createUser
// Accepts two parameters, a user's first name and last name
// Returns a user objects

function createUser(firstName, lastName) {
    let user = {
        firstName: firstName,
        lastName: lastName,
    }
    return user;
}
console.log(createUser('enzo', 'morales'));

// setAge
// Accepts two parameters, a user object and an age
// Adds a new age field to the user
// Returns the user object

// enzoAge = createUser.setAge;

function setAge(user, age) {
    user.age = age;

    return user;
}

console.log(setAge(createUser('enzo', 'morales'), 20));

// incrementAge
// Accepts a user object
// Increments the age field by one
// Returns the user object

function incrementAge(user) {
    user.age = user.age + 1;
    return user;
}

console.log(incrementAge(setAge(createUser('enzo', 'morales'), 20)));

// fixCar
// Accepts a car object
// Sets the needsMaintenance field to false
// Returns the car object

function fixCar(car){
    car.needsMaintenance = false;
    return car
}
console.log (fixCar({
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: true,
}));

// ### `addGrades`

// * Accepts two parameters, a student object and an array of grades
// * Adds each new grade to the student's `grades` array
// * Returns the student object

// ```
// Example

// const student = {
//     name: 'Anthony DeRosa',
//     email: 'anthony.derosa@codeimmersives.com',
//     grades: [80, 100, 95]
// };

// const newGrades = [88, 70, 90];

// addGrades(student, newGrades) =>
// {
//     name: 'Anthony DeRosa',
//     email: 'anthony.derosa@codeimmersives.com',
//     grades: [80, 100, 95, 88, 70, 90]
// }
// ```

function addGrades(student, newGrades){

    for (let i = 0; newGrades.length > i; i++){
    if(typeof newGrades === "object"){
        student.grades.push(newGrades[i]);
        }
    }
    return student
}

let exampleGrades = [88,70,90];

console.log(addGrades({
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95],
    }, exampleGrades));

    // ### `getDataType`

    // * Accepts two parameters, an object and a key in that object
    // * Returns the data type of the value at that key in the object
  
    // Examples
    
    // const car = {
    //     make: 'Ford',
    //     model: 'Mustang',
    //     year: 1969,
    //     needsMaitenance: false
    // };
    
    // getDataType(car, 'make') => 'string'
    
    // getDataType(car, 'model') => 'string'
    
    // getDataType(car, 'year') => 'number'
    
    // getDataType(car, 'needsMaitenance') => 'boolean'

function getDataType(object,key){
    key = typeof object[key];

    return key;
}


    // ### `addTodo`
    
    // * Accepts two parameters, an array of to-do items and a new to-do item
    // * Adds the new-todo item to the array
    // * Returns the array of to-do items
    
    let todos = [
        { 
            title: 'Get gas', 
            isComplete: false },
        { 
            title: 'Buy bread', 
            isComplete: true  
        }
    ];
    const newTodo = {
        title: 'Call mom', 
        isComplete: false
    };

function toDo(array){
    array.title;
    array.isComplete;
    return array;
}

console.log(toDo(todos));

function addTodo(oldArray, newArray){
    oldArray.push(newArray);
    return oldArray;
}

console.log(addTodo(todos, newTodo));


    // ### `addSong`
    
    // * Accepts two parameters, a playlist object and a song object
    // * Updates the duration of the playlist
    // * Adds the song to the playlist's `songs`
    // * Returns the playlist object
    
    function addSong (playlist, newSong){
        playlist.songs.push(newSong);
        playlist.duration = 0;
        for(let i=0; playlist.songs.length > i; i++){
            playlist.duration += playlist.songs[i].duration;
        }
        return playlist;
    }
    
    let playlist1 = {
        title: 'My jams',
        duration: 7,
        songs: [
            {
                title: 'Texas Sun',
                artist: 'Khruangbin',
                duration: 4
            },
            {
                title: 'Malamente',
                artist: 'Rosalia',
                duration: 3
            }
        ]
    };
    
    let newSong1 = {
        title: 'Old Friends',
        artist: 'Pinegrove',
        duration: 3
    };

    console.log(addSong(playlist1,newSong1));


    // ### `updateReportCard`
    
    // * Accepts two parameters, a report card and a new grade (a number between 0 and 100)
    // * Updates the report card's lowest grade, highest grade, and average grade
    // * Adds the new grade to the report card's grades
    
    function updateReportCard(reportCard, updateReportCard){
        reportCard.averageGrade = 0;
        if (updateReportCard >= 0 && updateReportCard <= 100){
            reportCard.grades.push(updateReportCard);
        } else {
            console.log(`error, please input a valid grade between 0 and 100`);
        }

        reportCard.lowestGrade = Math.min(...reportCard.grades);
        reportCard.highestGrade = Math.max(...reportCard.grades);

        for (let i=0; reportCard.grades.length > i; i++){   
            reportCard.averageGrade = (reportCard.averageGrade + reportCard.grades[i]);
        }
        reportCard.averageGrade = reportCard.averageGrade / reportCard.grades.length;
        return reportCard;
    }
 
    const reportCard = {
        lowestGrade: 70,
        highestGrade: 96,
        averageGrade: 82,
        grades: [70, 95, 80]
    };
    
    updateReportCard(reportCard, 62)
 
    console.log(reportCard);
    


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
