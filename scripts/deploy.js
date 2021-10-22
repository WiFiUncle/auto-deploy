
import { scp, getVersion } from './utils'
import deployConfig from "./config/deployConfig";
const mode = process.argv[2]
export const deploy = async function (env = 'dev') {
  console.log(`------------ ${ env } deploy start----------------`)
  let start = new Date()
  let opt = JSON.parse(JSON.stringify(deployConfig[env].scpOpt))  
  await scp(opt) 
  console.log(`------------ ${ env } deploy success----------------`) 
  console.log(`------------ ${ env } back up start----------------`)
  // 先部署后备份
  opt.path = opt.path + '-version/' + getVersion()
  await scp(opt)
  let time =( new Date() - start ) / 1000
  console.log(`------------${ env } back up success, total time ${time} s----------------`)
}
deploy(mode)
