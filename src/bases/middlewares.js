const logger = store => next => action => {
  console.log(`[${new Date().toISOString()}|store]`, store.getState());
  console.log(`[${new Date().toISOString()}|action]`, action);

  return next(action);
}

export { logger };