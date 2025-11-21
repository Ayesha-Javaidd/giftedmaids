export const environment = {
  production: true,
  google: {
    clientId:
      '814378952571-kmsheoit1993iah6u3ut0p810vqa1nf8.apps.googleusercontent.com',
    apiKey: 'AIzaSyCDXvilf4BgmTr7glhDLbzH8pL8IinkxzE', // optional but recommended
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    ],
    scope: 'https://www.googleapis.com/auth/calendar.events',
    // redirectUri: 'https://yourdomain.com/callback', // Add this if needed
  },
  emailJS: {
    serviceID: 'service_7cy67rm',
    templates: {
      booking: {
        templateID: 'template_bspnp19',
        adminEmail: 'giftedmaids@gmail.com',
      },
      contact: {
        templateID: 'template_enocd6n',
        adminEmail: 'giftedmaids@gmail.com',
      },
    },
    publicKey: 'Ycw_OOysTbDfEwrCT',
  },
};

// export const environment = {
//   production: false,
//   google: {
//     clientId:
//       '814378952571-kmsheoit1993iah6u3ut0p810vqa1nf8.apps.googleusercontent.com',
//     apiKey: 'AIzaSyCDXvilf4BgmTr7glhDLbzH8pL8IinkxzE', // optional but recommended
//     discoveryDocs: [
//       'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
//     ],
//     scope: 'https://www.googleapis.com/auth/calendar.events',
//     // redirectUri: 'https://yourdomain.com/callback', // Add this if needed
//   },
//   emailJS: {
//     serviceID: 'service_e3mag1o',
//     templates: {
//       booking: {
//         templateID: 'template_yy7qubn',
//         adminEmail: 'codebyhassann@gmail.com',
//       },
//       contact: {
//         templateID: 'template_yaj08o5',
//         adminEmail: 'mhassanahmad905@gmail.com',
//       },
//     },
//     publicKey: 'j9RfRz9VD6OIZHEjY',
//   },
// };
