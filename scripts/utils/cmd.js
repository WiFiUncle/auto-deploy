
const spawnCmd = (name, params) =>
  new Promise((resolve, reject) => {
    console.log("-----------spawnCmd----------")
    const spawn = require('child_process').spawn
    const tsc = spawn(name, params)
    console.log(`run ${name} ${params ? params.join(' ') : ''}`)

    tsc.stdout.on('data', data => console.log(`${data}`))
    tsc.stderr.on('data', data => console.log(`${data}`))

    tsc.on('close', code => {
      console.log(`${name} child process exited with code ${code}`)
      if (code === 1) {
        reject()
      } else {
        resolve()
      }
    })
  })
const execCmd = cmd =>
  new Promise((resolve, reject) => {
    const exec = require('child_process').exec
    console.log(`exec cmd ${cmd}`)
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.log(err)
      }
      if (stdout) {
        console.log(stdout)
      }
      if (stderr) {
        console.log(stderr)
      }
    }).on('close', code => {
      console.log(`child process exited with code ${code}`)

      resolve(code !== 1)
    })
  })

export { spawnCmd , execCmd}
