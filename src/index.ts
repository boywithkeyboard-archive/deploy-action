import { isIPv4 } from 'node:net'
import { getBooleanInput, getInput, setFailed } from '@actions/core'
import { NodeSSH } from 'node-ssh'
import getFiles from './modules/getFiles'
import slash from 'slash'

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
    const file = getInput('file')
    const directory = getInput('directory')
  
    if (!isIPv4(host))
      throw new Error('Invalid Hostname')
  
    // deploy app
    const ssh = new NodeSSH()
    
    await ssh.connect({
      host,
      port: parseInt(port),
      username,
      privateKey
    })
    
    if (directory.length > 0 && directory.startsWith('/')) {
      const files = []

      for await (let f of getFiles(`.${directory}`)) {
        f = slash(f)

        files.push({
          local: `.${f.substring(f.lastIndexOf(directory))}`,
          remote: `${destination}${f.substring(f.lastIndexOf(directory) + directory.length)}`
        })
      }

      await ssh.putFiles(files)
    } else {
      await ssh.putFile(`.${file}`, `${destination}${file}`)
    }
    
    if (dependencies) {
      await ssh.putFile('./package.json', `${destination}/package.json`)
      await ssh.putFile('./package-lock.json', `${destination}/package-lock.json`)
  
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
