function dataFetchDataSuccess(data) {
  return {
    type: 'DATA_FETCH_DATA_SUCCESS',
    data
  };
}

function dataFetchDataSuccessFiltered(data) {
  const providers = standardFilter(data);
  return {
    type: 'DATA_FETCH_DATA_SUCCESS_FILTERED',
    providers
  }
}

function standardFilter(data) {
  var providers = data.providers.filter((provider) => (
    provider.yearStarted > 2010
  ));
  providers.sort((a, b) => {
    var textA = a.companyName.toUpperCase();
    var textB = b.companyName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  // providers = providers.slice(0, 21);
  return providers
}

export const dataIsLoading = (bool) => ({ type: 'DATA_IS_LOADING', isLoading: bool});
export const dataHasErrored = (bool) => ({ type: 'DATA_HAS_ERRORED', hasErrored: bool});

export function dataFetchData(url) {
  return (dispatch) => {
    dispatch(dataIsLoading(true))
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // dispatch(dataHasErrored(true));
          throw Error(response.statusText);
        }
        dispatch(dataIsLoading(false))
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        dispatch(dataFetchDataSuccess(data));
        dispatch(dataFetchDataSuccessFiltered(data));
      })
      .catch(() => dispatch(dataHasErrored(true)));
  }
}
