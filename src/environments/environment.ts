// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoints:{
    getTaskList:'tasks/',
    creatTask:'tasks/create',
    getOneTask:'tasks/view/{taskId}',
    updateTask:'tasks/update/{taskId}',
    deleteTask:'tasks/delete/{taskId}'
  },

  //for the time being im gonna use API key here
  weatherEndpoint:'http://api.weatherapi.com/v1/current.json?key=7037b45456fa426697550441210402&q='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
