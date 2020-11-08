
// Type alias 
type Uid = number | string;
type Platform = 'Windows' | 'Linux' | 'Mac Os';


// The union is represented by a pipe |, so the parameter can accept both types
function logDetails(uid: number | string, item: string){
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string){
  console.log(`A product with ${uid} has a name as ${user}.`);
}

function renderPlatform(platform: Platform){
  return platform;
}


logDetails(123, "shoes")
logDetails("123", "shoes")

logInfo(123, "John")
logInfo("123", "John")

