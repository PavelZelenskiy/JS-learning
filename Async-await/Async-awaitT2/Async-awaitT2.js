// T2

// const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
// const getTodosByIds = (ids) => {
//   const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//   console.log(requests);
//   Promise.all(requests)
//     .then((responses) => {
//         console.log(responses);
//       const dataResults = responses.map((data) => data.json());
//       return Promise.all(dataResults);
//     })
//     .then((allTasks) => {
//     //   console.log(allTasks);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// getTodosByIds([43, 21, 55, 100, 10]);

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosByIds = async (ids) => {
    try {
        const requests =  await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        console.log(requests);
        const responses = await Promise.all(requests);
        console.log(responses);
        const dataResults = responses.map((data) => data.json());
        const allTasks = await Promise.all(dataResults);
        console.log(allTasks); 
    } catch (error) {
        console.log(error);
    };
};

getTodosByIds([43, 21, 55, 100, 10]);