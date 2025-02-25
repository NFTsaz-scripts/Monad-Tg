require("colors");

function displayHeader() {
  process.stdout.write("\x1Bc"); 

  console.log(`
            ${"██".rainbow}  
            ${"██".cyan} 
            ${"██╔╝".green} 
            ${"██".yellow}  
            ${"╚█".blue}      
            ${" ╚══╝".red}  

            ${"🔥 Join channel TG:".bold} ${"@nftsaz".underline.brightCyan}
  `.split("\n").map(line => line.padStart(50)).join("\n")); 
}

module.exports = displayHeader;
