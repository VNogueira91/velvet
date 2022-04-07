//Gulp related imports
const gulp = require('gulp');
const {src, dest, parallel, series} = gulp;
const concat = require('gulp-concat');

//Glass Project related imports
const {argParser} = require('@glass-project/dsu-utils/src/utils.js');

const pathAdaptor = '../../../../'

const STAGES = {
    BUILD: "build",
    DEPLOY: "deploy"
}

const MODES = {
    DEVELOPMENT: "development",
    PRODUCTION: "production"
}


//Gets all Typescript Files and concatonates them
function createSingleTypescriptFile(){
    const typescriptFiles = [pathAdaptor + 'src/**/*.ts'];

    //get files
    //concat files
    //resolve imports
    //generate outputfile

    return src(typescriptFiles)
        .pipe(concat())
        .pipe(dest(pathAdaptor + 'temp-build/'))
}



function controlFlow(){
    return series(createSingleTypescriptFile)
}

function test(){
    return src('src/cli.js')
        .pipe(dest('temp-build'))
}

exports.default = test