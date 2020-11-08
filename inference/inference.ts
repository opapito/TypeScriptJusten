

// Type Inference -> based on the type assigned TS can infer variable data type
let message2 = "message"
//message2 = 1
message2 = "new"

// TS can suggest applicable events and methods 
window.addEventListener("click",(e)=>{
  console.log(e.target);

})