module.exports = {
  name: 'help',
  description: 'DMs a list of all commands.',
  execute (message) {
    message.author.send([
      '.',
      '**Help**:',
      '__**Commands:**__',
      'Syntax: **<prefix> <command> <thing>**',
      '**`sk help`**: DMs this list to you',
      '**`sk new <thing>`**: Creates a new thing',
      '**`sk search <string>`**: DMs you a list of things with names that contain the string',
      '**`sk best`**: Shows a list of the best five things by karma',
      '**`sk worst`**: Shows a list of the worst five things by karma',
      '**`sk <thing>`**: Shows a thing\'s karma',
      '**`sk + <thing>`**: Increments a thing\'s karma',
      '**`sk - <thing>`**: Decrements a thing\'s karma',
      '**`sk delete <thing>`**: Deletes a thing. Only bad people do this.',
      'Notes:',
      '*- Prefix, commands, and thing names are case insensitive.*',
      '*- Thing names in parentheses can have spaces.*',
      '*- User Thing names with spaces must have a space between the @ and the rest of the name.*',
      '*  - Example: `(@ Joe User)` for `@Joe User`*'
    ])
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.author.send([
        '.',
        '__**ADMIN Commands:**__',
        'Syntax: **<prefix> <command> <thing> <value>**',
        '**`sk adminset <thing> <value>`**: Sets a thing\'s karma to the value',
        '**`sk admindelete <thing>`**: Deletes a thing'
      ])
    }
  }
}
