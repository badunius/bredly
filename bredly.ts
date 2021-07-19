type TDictionary = {
	[key: string]: string[]
}

const pick = (list: string[] = []): string => list[Math.floor(Math.random() * list.length)]

const parse = (template: string = '', dictionary: TDictionary = {}): string => {
	// find all replacements
	const replacements = template.match(/\$[a-zA-Z0-9]*/) || []

	// replace them with the coresponding entries in dictionary
	let output = template
	replacements.forEach(key => {
		if (key in dictionary) {
			const option = parse(pick(dictionary[key]), dictionary)
			output = output.replace(key, option)
		}
	})

	return output
}

export const compose = (dictionary: TDictionary = {}, entryPoint: string): string => parse(pick(dictionary[entryPoint]), dictionary)