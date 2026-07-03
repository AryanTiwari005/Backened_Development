const command = process.argv[2];
const directory = process.argv[3];
console.log(command);


function handleCommand(command){
   switch (command) {
    case "organize":
        
        console.log("command organized");
        break;
        
   case "tree":
    console.log("show tree");
    break;
    case "help":
        console.log(("show help"));
        break;
        
    default:
        console.log("unknown Command")
        break;
   }
}

handleCommand(command);