'use strict';

const superagent = require('superagent');

// let promiseFetch = () => {
//     return superagent.get(`https://swapi.co/api/people/`)
//     .then( res => {
//         return res.body.results.map(person => {
//             return superagent.get(person.url)
//         });
//     })
//     .then(peoplePromise =>{
//         return Promise.all(peoplePromise)
//         .then(people => {
//             let names = [];
//             for(let data of people){
//                 names.push(data.body.name);
//             }
//             return names;
//         })
//     })
// };

// promiseFetch()
// .then(people => console.log(people));


let asyncFetch = async () => {
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
    catch(err){
        console.error(err);
    };
};

asyncFetch()
.then(people => console.log(people));

