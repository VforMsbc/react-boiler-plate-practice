type RecursiveObject = { [key: string]: string | RecursiveObject };

// export function insertRootRules(js: RecursiveObject, prefix: string = '') {
//   if (window.document) {
//     Object.keys(js).forEach((key) => {
//       const value = js[key];
//       if (typeof value === 'string') {
//         document.documentElement.style.setProperty(
//           `--m-${prefix ? prefix + '-' : ''}${key}`,
//           value
//         );
//       } else {
//         insertRootRules(value, `${prefix}-${key}`);
//       }
//     });
//   }
// }
