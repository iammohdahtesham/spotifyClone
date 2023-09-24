import axios from 'axios';

export const getAuthorization = () => {
  //API hit
  return async dispatch => {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: '5a1fe97becfa4f53869a4c1037f41940',
        client_secret: 'd7ea3348df0646798d405b8c2df47c56',
      }),
    );
    try {
      const token = response.data;
      dispatch({
        type: 'getAuthorization',
        data: token,
      });
    } catch {
      err => console.log(err);
    }
  };
};

// export const getContactDetails = () => {
//   //API hit
//   return dispatch => {
//     axios
//       .get('https://random-data-api.com/api/v2/users')
//       .then(response => {
//         const users = response.data;
//         dispatch({
//           type: 'getContactDetails',
//           data: users,
//         });
//       })
//       .catch(err => console.log(err));
//   };
// };

// export const getAddressDetails = () => {
//   //API hit
//   return dispatch => {
//     axios
//       .get('https://random-data-api.com/api/v2/addresses')
//       .then(response => {
//         const users = response.data;
//         dispatch({
//           type: 'getAddressDetails',
//           data: users,
//         });
//       })
//       .catch(err => console.log(err));
//   };
// };
