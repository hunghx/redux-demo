//
// export const increment =()=>({
//     type:"INCREMENT"
// });
// export const decrement =()=>({
//     type:"DECREMENT"
// });
export  const  createTodo = (data)=>({
    type:"todolist/create",
    data: data
})
export  const  editTodo = (data)=>({
    type:"todolist/edit",
    data: data
})
export  const  deleteTodo = (data)=>({
    type:"todolist/delete",
    data: data
})