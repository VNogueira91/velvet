export function cli(args) {
    const {execSync} = require('child_process')

    let options = "";

    if(args)
        args.forEach(element => {
            options = options + element + " "
        });


    execSync(`npx gulp ${options}`);
}