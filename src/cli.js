export function cli(args) {
    console.log(args)
    const {execSync} = require('child_process')

    execSync("npx gulp")
}