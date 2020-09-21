import * as docopt from '@eyalsh/docopt/dist/docopt'
import * as getStdin from 'get-stdin'
import helpParser = require('help-parser')

process.nextTick(async () => {
  let stdin = await getStdin()
  console.log('stdin ->', stdin)
  let parsed = helpParser(stdin, 'node')
  console.log('parsed ->', parsed)
})
