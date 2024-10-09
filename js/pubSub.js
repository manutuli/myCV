

const state = {
    count: 0,
    fetchStatus: null,
}

const subscribers = [];

function subscribe(subscriber){
    subscribers.push(subscriber)
} 

function dispatch(state){
    subscribers.forEach(subscriber => subscriber(state))
}

function publish(newState){
    dispatch(newState)
}

export {subscribe, publish, state}