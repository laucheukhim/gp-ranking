export default error => {
  let errorMessages;
  if (error instanceof Error) {
    console.error(error);
    errorMessages = [`${error.name}: ${error.message}`];
  } else {
    switch (error.status) {
      default:
        errorMessages = [error.title];
    }
  }
  return errorMessages;
};
