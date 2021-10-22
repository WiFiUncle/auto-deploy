
import { execCmd } from './utils'
const build = async () => {
  try {
    await execCmd('vite build')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
const main  = async function () {
  console.log('开始编译，请等候···')
  let start = new Date()
  await build()
  let time =( new Date() - start ) / 1000
  console.log(`编译完成，共计耗时约${time}s`)
}
main()
