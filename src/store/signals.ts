import Action from "./../models/Action"

// Action Types
const SIGNAL_SERVER = "signalServer"

// Action Creators
export const signalServer = (description: any) => {
  let action: Action = {
    type: SIGNAL_SERVER,
    payload: {
      description,
    },
  }
  return action
}

// Reducers
export default function reducer(state: any = [], action: Action) {
  switch (action.type) {
    case SIGNAL_SERVER:
      return [
        ...state,
        {
          signallingInProgress: true,
        },
      ]

    default:
      return state
  }
}