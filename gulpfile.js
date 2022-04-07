//Gulp related imports
const gulp = require('gulp');
const {src, dest, parallel, series} = gulp;
const concat = require('gulp-concat');

//Glass Project related imports
const {argParser} = require('@glass-project/dsu-utils/src/utils.js');


const pathAdaptor = '../../../'
const testPath = 'test/';

// let {name, version} = require(pathAdaptor + 'package.json');

// if (name.indexOf(glassPrefix) !== -1)
//     name = name.substr(glassPrefix.length).replaceAll("-", "_");

const STAGES = {
    BUILD: "build",
    DEPLOY: "deploy"
}

const MODES = {
    DEVELOPMENT: "development",
    PRODUCTION: "production"
}

const defaultOptions = {
    mode: MODES.DEVELOPMENT,
    stage: STAGES.BUILD,
    // name: name
}

const config = argParser(defaultOptions, process.argv)

function isDev(){
    return config.mode === MODES.DEVELOPMENT;
}

function isProd(){
    return config.mode === MODES.PRODUCTION;
}

function isBuild(){
    return config.stage === STAGES.BUILD;
}

function isDeploy(){
    return config.stage === STAGES.DEPLOY;
}

//Gets all Typescript Files and concatonates them
function createSingleTypescriptFile(){
    const typescriptFiles = [pathAdaptor + 'src/**/*.ts'];
    console.log(typescriptFiles)

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
        .pipe(dest(testPath +'temp-build'))
}

exports.default = createSingleTypescriptFile