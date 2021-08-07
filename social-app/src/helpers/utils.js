export function getFormBody(params) {
  // params object will contain all the property
  let formBody = []; // an array

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // user name => user%20name
    let encodedValue = encodeURIComponent(params[property]); // aman singh => aman%20singh

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&'); // username=aman&password=123
}
