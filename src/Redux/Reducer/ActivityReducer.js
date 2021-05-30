const InitialState = {
    activityList: []
}

export default function ActivityReducer(state = InitialState, action) {
    switch (action.type) {
        case 'AddActivityData':
            return {
                ...state,
                activityList: action.payload,
            }

        default:
            return state;
    }
}