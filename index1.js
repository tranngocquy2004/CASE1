const users = [
    {id: 1, name:'camnh', age:30},
    {id: 2, name:'congnv', age:31}
    
];
const evenAges = users.filter(user => user.age % 2 === 0);
console.log(evenAges)
export default evenAges
