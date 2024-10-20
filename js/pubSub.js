

const state = {
    count: 0,
    fetchStatus: null,
}

const subscribers = [];

function subscribe(subscriber){
    subscribers.push(subscriber)
} 

function publish(state){
    subscribers.forEach(subscriber => subscriber(state))
}

function dispatch({newState}){
    publish(newState)
}

export {subscribe, dispatch, state}