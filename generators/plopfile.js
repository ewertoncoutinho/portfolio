module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/index.jsx',
				templateFile: 'templates/component.jsx.hbs',
			},
		],
	})
}
