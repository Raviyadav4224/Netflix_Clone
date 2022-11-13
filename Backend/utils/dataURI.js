import DataUriParser from "datauri/parser.js"
import path from 'path'
const getDataUri=(file)=>{
    const parser=new DataUriParser()

    const extensionName=path.extname(file.originalname).toString()
    console.log('Extension name is ',extensionName);
    return parser.format(extensionName,file.buffer)
}

export default getDataUri