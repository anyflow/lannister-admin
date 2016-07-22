const logger = store => next => action => {
  console.log(`[${new Date()}|store]`, store.getState().actionDefault);
  console.log(`[${new Date()}|action]`, action);

  return next(action);
}

export { logger };