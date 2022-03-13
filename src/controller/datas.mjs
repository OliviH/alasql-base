import alasql from "alasql"
import fs from "fs-extra"
import path from 'path'

const DB_PATH = process.env.DB_PATH || path.resolve(process.cwd(), `datas`)

const PATH_FILE_DB = (name) => {
    return {
        json: `${path.resolve(DB_PATH, name)}.json`,
        yaml: `${path.resolve(DB_PATH, name)}.yml`,
        xml: `${path.resolve(DB_PATH, name)}.xml`,
    }
}

const verifFileExists = (pathFile) => {
    return new Promise((a,r)=>{
        fs.pathExists(pathFile)
        .then(exists=>{
            if(!exists) {
                fs.ensureDir(path.parse(pathFile).dir)
                .then(()=>{
                    return fs.outputJson(pathFile,[])
                })
                .then(a(true))
                .catch(err=>{
                    console.error(err)
                    r(err)
                })
            }
            a(true)
        })
    })
}

export const query = (fileBase, q) => {
    const files = PATH_FILE_DB(fileBase)
    return new Promise((a,r)=> {
        verifFileExists(files.json)
        .then(() => {

        })
        .catch(err => {
            console.error(err)
            r(err)
        })
    })
}