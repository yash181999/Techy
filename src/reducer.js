export const initailState = {
    user: null,
}

const reducer = (state,action) => {
    switch(action.type) {
        case 'SET_USER' :
            return{
              ...state,
              user : action.user,
            }  
        case 'SET_TEAM_DATA' :
            return {
            ...state,
            teamData : action.teamData,
        }      
          

        default:
            return state;
    }
}

export default reducer;