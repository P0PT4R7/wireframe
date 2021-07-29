confirm ("There is no page here");
confirm ("Literally there isnt a page here just an error");
confirm ("It probably wont be fix so you can go on your way");
let userInput = false;
console.log("userInput1"+ userInput)
while (!userInput)
{
  let userInput = prompt ("Oh you're still here")
  console.log("userInput2 "+ userInput)
  if (userInput == 'yes')
  {
    alert("lies!")
  }
  else
  {
    alert("theres still nothing of interest here")
    userInput = true;
   
  }
  console.log("userInput3 "+ userInput)
}    
prompt ("I dont understand why youre still here")    
