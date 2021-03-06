// Analog Object.assign() in ECMASCRIPT 6.
// Copying all properties from list of objects to one.

function mix() {
  var arg;
  var prop;
  child = {};
  
  for(arg = 0; arg < arguments.length; arg += 1) {
    for(prop in arguments[arg]) {
      if(arguments[arg].hasOwnProperty(prop)) {
        child[prop] = arguments[arg][prop];
      }
    }
  }
  return child;
}
