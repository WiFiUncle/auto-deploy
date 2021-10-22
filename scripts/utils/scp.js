
import client from 'scp2'

const scp = (data) =>
  new Promise((resolve, reject) => {
    client.scp(
      './dist/',
      data,
      function(err) {
        if (err) {
          console.log(err)
          reject(err)
          throw new Error('[LOG] Scp File Failed!')
        } else {
          console.log('[LOG] Scp File Success!')
          resolve(true)
        }
      },
    )
  })
export { scp}
