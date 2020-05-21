const iState = []
const reducer = (state=iState, action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [{},{}]
		case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
    	return state  
	} 
} 

export default reducer;