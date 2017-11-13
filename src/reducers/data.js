export function dataIsLoading(state = false, action) {
  switch (action.type) {
    case 'DATA_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function dataHasErrored(state = false, action) {
  switch (action.type) {
    case 'DATA_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function data(state = {}, action) {
  switch (action.type) {
    case 'DATA_FETCH_DATA_SUCCESS':
      return action.data;

    default:
      return state;
  }
}

export function providers(state = [], action) {
  switch (action.type) {
    case 'DATA_FETCH_DATA_SUCCESS_FILTERED':
      return action.providers;

    default:
      return state;
  }
}
