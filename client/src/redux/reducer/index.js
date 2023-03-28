
const initialState = {
    AllEmployees: [],
    AllTargetOrange: [],
    DetailsEmployee: [],
    DetailCardOrange: []
}
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_EMPLOYEE":
            return {
                ...state,
                AllEmployees: action.payload
            }
        case "CREATE_EMPLOYEE":
            return {
                ...state,
            }
        case "DETAIL_EMPLOYEE":
            return {
                ...state,
                DetailsEmployee: action.payload

            }

        case "CREATE_TARGET":
            return {
                ...state,
            }

            case "DETAIL_CARD_ORANGE": 

            return {
                ...state,
                DetailCardOrange: action.payload
            }

            case "ALL_DETAIL_CARD_ORANGE":
            return {
                ...state,
                AllTargetOrange: action.payload
            }

            case "AVATAR_UPLOAD": 
            return {
                ...state,
            }



        default: return {...state}
    }
}