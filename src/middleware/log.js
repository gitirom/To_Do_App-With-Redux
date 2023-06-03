const log = (Store) => (next) => (action) => {
    console.log(action);
    
    next(action);
}

export default log;