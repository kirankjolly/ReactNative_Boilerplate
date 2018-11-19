export const callGETWebservice = (url, actionName) => {
    return dispatch => {
        dispatch(serviceActionPending(actionName))
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("responseJson",responseJson);
                dispatch(serviceActionSuccess(responseJson.data.children, actionName));
            })
            .catch((error) => {
                console.log("responseJson: error",error);
                dispatch(serviceActionError(error, actionName));
            });
    }
}
export const callPOSTWebservice = (url, actionName, body) => {
    return dispatch => {
        dispatch(serviceActionPending(actionName));
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log("responseJson", responseJson);
            dispatch(serviceActionSuccess(responseJson.data.children, actionName));
          })
          .catch(error => {
            console.log("responseJson: error", error);
            dispatch(serviceActionError(error, actionName));
          });
    }
}

export const serviceActionPending = (actionName) => ({
    type: `${actionName}_PENDING`
})

export const serviceActionError = (error, actionName) => ({
    type: `${actionName}_ERROR`,
    error: error
})

export const serviceActionSuccess = (data, actionName) => ({
    type: `${actionName}_SUCCESS`,
    data: data
})















//import axios from 'react-native-axios';
// export const callWebservice1 = () => {
//     return dispatch => {
//         dispatch(serviceActionPending())
//         axios.get('https://www.reddit.com/r/reactjs.json')
//         .then(response => {
//             dispatch(serviceActionSuccess(response.data.data.children))
//         })
//         .catch(error => {
//             dispatch(serviceActionError(error))
//         });
//     }
// }

