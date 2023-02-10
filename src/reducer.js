const intialState = {
    filter: {
        search: ""
    },
    todolist: [
        {id: "001", todo: "đi học", isComplete: true},
        {id: "002", todo: "đi chơi", isComplete: true},
        {id: "003", todo: "đi ngủ", isComplete: true},
    ]
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "todolist/create" :
            return {...state,todolist:[...state.todolist,action.data]};

        case "todolist/delete":
            return  {...state,todolist:[...state.todolist.filter((todo)=>todo.id!==action.data)]};
        case "todolist/edit":
            let updateList =[];
            state.todolist.forEach((todo)=>{
                if(todo.id === action.data.id){
                    updateList.push(action.data)
                }else {
                    updateList.push(todo)
                }
            })
            return {...state,todolist: updateList};

        default:
            return state
    }
}
export default reducer;