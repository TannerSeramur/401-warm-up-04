'use strict';

const superagent = require('superagent');

// WITH PROMISE
// let fetchPeopleWithPromises = () => {
//     return superagent.get('https://swapi.co/api/people/')
//     .then(res => {
//         return res.body.results.map(person =>{
//             return superagent.get(person.url);
//         });
//     })
//     .then(peoplePromises => {
//         return Promise.all(peoplePromises)
//         .then(people => {
//             let names = [];
//             for(let data of people){
//                 names.push(data.body.name);
//             }
//             return names;
//         })
//     })
// };

// fetchPeopleWithPromises()
// .then(people => console.log(people));


// WITH ASYNC
let fetchPeopleWithAsync = async () => {
    try{
    let data = await superagent.get('https://swapi.co/api/people/');
    let people = (data.body && data.body.results) || [];
    let peopleReq = people.map((person) => {
        return superagent.get(person.url);
    });
    let starwarsNames = await Promise.all(peopleReq)
    .then(people => {
        let names = [];
        for(let data of people){
            names.push(data.body.name);
        }
        return names;
    });
    return starwarsNames;
}
catch(e){console.error(e);}
};

fetchPeopleWithAsync()
.then(people => console.log(people));
