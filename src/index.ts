import { NodeSSH } from 'node-ssh'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getBooleanInput, getInput, setFailed } from '@actions/core'
import { isIPv4 } from 'node:net'

const run = async () => {
  try {
    // validate inputs
    const host = getInput('host', { required: true })
    const port = getInput('port')
    const username = getInput('username', { required: true })
    const privateKey = getInput('privateKey', { required: true })
    const pm2 = getInput('pm2')
    const dependencies = getBooleanInput('dependencies')
    const destination = getInput('destination', { required: true })
  
    if (!isIPv4(host))
      throw new Error('Invalid Hostname')
  
    // deploy app
    const __dirname = dirname(fileURLToPath(import.meta.url))
    , ssh = new NodeSSH()
    
    await ssh.connect({
      host,
      port: parseInt(port),
      username,
      privateKey
    })
    
    await ssh.putFile(join(__dirname, './dist/index.js'), `${destination}/dist/index.js`)
    
    if (dependencies) {
      await ssh.putFile(join(__dirname, './package.json'), `${destination}/package.json`)
      await ssh.putFile(join(__dirname, './package-lock.json'), `${destination}/package-lock.json`)
  
      await ssh.execCommand('npm i', { cwd: destination })
    }
    
    if (pm2)
      await ssh.execCommand(`pm2 restart ${pm2} --cron-restart="0 0 * * *" --exp-backoff-restart-delay=100`)
    
    if (ssh.connection)
      ssh.connection.end()
  } catch (err) {
    if (err instanceof Error)
      setFailed(err.message)
    else
      setFailed('Unknown Error')
  } finally {
    process.exit()
  }
}

run()
