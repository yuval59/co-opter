const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const tmi = require('tmi.js')
require('dotenv').config();

//For setup:
//Create .env file near this one
//process.env.[NAME] comes from line [NAME]='[value]'
//Seperate lines, no need to use semicolon
//Example value - " USER='Yuval_Bot' "

const config = {
    //The bot's user
    User: process.env.TWITCHUSER,
    //Get OAUTH at https://twitchapps.com/tmi/
    OAUTH: process.env.OAUTH,
    //The channel the bot will monitor
    Channel: process.env.CHANNEL,
    //The auth server's listening port
    Port: process.env.PORT,
    //Secret key for JWT
    Secret: process.env.SECRET
}

var suggestions_array = []
if (fs.existsSync('./suggestions.json')) load_suggestions_from_json()

//--------------------------------\\
//                                \\
//       Twitch integrations      \\
//                                \\
//--------------------------------\\

//connect to Twitch chat using tmi.js api
const client = new tmi.Client({

    connection: {
        secure: true,
        reconnect: true
    },

    identity: {
        username: config.User,
        password: config.OAUTH
    },
    channels: [config.Channel]

})

//Perform initial connection to Twitch chat
client.connect()
    .catch(function (error) {
        // handle error
        console.error(error)
    })
    .then(console.log(`Connected to channels ${config.Channel} as ${config.User}`))

//Listen to new messages
client.on('message', (channel, tags, message, self) => {

    //Don't progress on self-sent messages
    if (self) return

    //Split the received message into different elements by space
    if (message.split(' ')[0].toLowerCase() != '!question') return

    const question = message.replace('!question ', '')

    suggestions_array.push({
        question: question,
        suggestion_state: 'unverified',
        id: uuidv4()
    })

    console.log(`${tags.username} sent question "${question}"`)

    client.say(channel, `@${tags.username} Thanks, your question is saved!`)

    save_suggestions_to_json()

})

function save_suggestions_to_json() {
    fs.writeFileSync('./suggestions.json', JSON.stringify(suggestions_array, null, 2))
}

function load_suggestions_from_json() {
    suggestions_array = JSON.parse(fs.readFileSync('./suggestions.json', 'utf-8'))
}

// Removes suggestion with [id] from suggestions_array
// Returns the deleted suggestion object
exports.remove_suggestion = function (id) {
    // Finds the index of the suggestion with [id] and splices the array in that position
    suggestions_array.splice(suggestions_array.findIndex(item => item.id === id), 1)
    save_suggestions_to_json()
}

// Change suggestion_state of suggestion with [id]
exports.change_suggestion_state = function (id, new_state) {
    // Find the index of the item, and then modify the corresponding value in the array
    console.log(suggestions_array[suggestions_array.findIndex(item => item.id === id)])
    suggestions_array[suggestions_array.findIndex(item => item.id === id)].suggestion_state = new_state
    save_suggestions_to_json()
}

exports.get_suggestions = function (state) {
    return suggestions_of_type = suggestions_array.filter(item => item.suggestion_state === state)
}