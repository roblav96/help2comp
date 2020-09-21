import * as getStdin from 'get-stdin'
import * as mri from 'mri'
import * as parseHelp from 'parse-help'
import * as stringFn from 'string-fn'
import helpParser = require('help-parser')
import stripAnsi = require('strip-ansi')

process.nextTick(async () => {
	let command = mri(process.argv.slice(2))._[0]
	if (!command) {
		throw new Error('Missing command name as first argument')
	}
	if (process.env.NODE_ENV == 'development') {
		command = 'nghttp'
	}

	let stdin = stripAnsi((await getStdin()) || (await import(`./tests/${command}`)))
	if (!stdin) {
		throw new Error(`Empty piped stdin for ${command} command`)
	}
	// console.log('stdin ->', stdin)

	let parsed = helpParser(stdin, command)
	console.log('args ->', parsed.args)
	let lines = [] as string[]
	for (let [flag, { alias, doc }] of Object.entries(parsed.args)) {
		if (!flag.match(/\w/)) continue
		alias = alias == flag ? null : alias
		let line = `{${flag}}`
		if (alias) line = `{${alias},${flag}}`
		if (doc)
			line += `'[${doc
				.replace(/[^a-z\d\s_.-]/gi, '')
				.replace(/\s+/g, ' ')
				.trim()}]'`
		lines.push(line)
	}

	let output = `
#compdef ${command}

local arguments=(
	${lines.join('\n\t')}
	'*:filename:_files'
)

_arguments -s $arguments
	`
	console.log('output ->', output)
	// process.stdout.write(output)

	//

	// let schema = { command, subcommands: [{ command: '', args: [], flags: [] }] } as spec.Schema
	// let flags = schema.subcommands[0].flags
	// console.log('flags ->', flags)
	// for (let [key, value] of Object.entries(parsed.args)) {
	// 	flags.push({
	// 		name: key.slice(2),
	// 		type: 'string',
	// 		completion: { type: 'any' },
	// 	})
	// }
	// console.log('flags ->', flags)
	// console.log('zsh.generate ->', zsh.generate(schema))
})
