const gulp = require('gulp');
const {src, dest, parallel, series} = gulp;
const concat = require('gulp-concat');


const pathAdaptor = '../../../../'

//Gets all Typescript Files and concatonates them
function createSingleTypescriptFile(){
    const typescriptFiles = pathAdaptor + 'src/**/*.ts';

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