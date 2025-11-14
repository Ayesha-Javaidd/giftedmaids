export const environment = {
  production: false,
  google: {
    clientId:
      '814378952571-kmsheoit1993iah6u3ut0p810vqa1nf8.apps.googleusercontent.com',
    apiKey: 'AIzaSyCDXvilf4BgmTr7glhDLbzH8pL8IinkxzE', // optional but recommended
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    ],
    scope: 'https://www.googleapis.com/auth/calendar.events',
  },
  emailJS: {
    serviceID: 'service_e3mag1o',
    templateID: 'template_yy7qubn',
    publicKey: 'j9RfRz9VD6OIZHEjY',
    adminEmail: 'codebyhassann@gmail.com',
  },
};
