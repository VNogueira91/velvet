export function cli(args) {
    const {execSync} = require('child_process')

    let options = "";

    if(args)
        args.forEach(element => {
            options = options + element + " "
        });

    console.log("running gulp")
    execSync(`npx gulp ${options}`);
}