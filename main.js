/**
 * A blueprint for a MoDiBo Plugin.
 */

/**
 * A one stop shop for all things a MoDiBo Plugin could need!
 */
import { reply, createEmbed, COLORS, logger } from '../../src/utils.js'

/**
 * Access to the configuration
 */
import { config } from '../../src/configManager.js';

/**
 * The display name of the plugin.
 */
const NAME = "The Name"
/**
 * Slug used to programmatically refer to the plugin. Lowercase letters, numbers, and dashes only.
 */
const SLUG = "the-name"
/**
 * The author(s) of this plugin.
 */
const AUTHOR = "Some Person"
/**
 * Concise help text explaining what the plugin does.
 */
const SHORT_HELP = `${NAME} by ${AUTHOR}: Help text here!`
/**
 * Commands supported by this plugin. Do not include the prefix. Only required if processCommand is exported.
 * Good: command
 * Bad: $command
 */
const COMMANDS = ["command1", "command2"]

/**
 * Handles help requests for this plugin.
 * @param {string} [command=null] If processCommand is exported, the command issued, without the prefix.
 * @param {string} [args=null] If processCommand is exported, the rest of the message.
 * @returns Help text to be sent back to the user.
 */
function help(command = null, args = null) {
  return "How to use the command with given args."
}

/**
 * Handles incoming commands for this plugin.
 * @param {string} command The command issued, without the prefix.
 * @param {string} args The rest of the message.
 * @param {Discord.Client} bot The instantiated Discord Bot object.
 * @param {Discord.Message} message An object representing the message sent.
 */
async function processCommand(command, args, bot, message) { }

/**
 * Handles all incoming messages.
 * @param {Discord.Client} bot The instantiated Discord Bot object.
 * @param {Discord.Message} message An object representing the message sent.
 */
async function processMessage(bot, message) { }

/**
 * 
 * @param {Discord.Client} bot The instantiated Discord Bot object.
 * @param {Discord.Reaction} reaction Message Reaction object
 * @param {Discord.User} user User object of the user that reacted
 * @param {boolean} isAdd true if the user added the reaction, false if they removed it.
 */
async function processReaction(bot, reaction, user, isAdd) { }

/**
 * Called after all plugins loaded to start tasks on an interval.
 * @param {Discord.Client} bot The instantiated Discord Bot object.
 */
function startCron(bot) { }

/**
 * Runs when the plugin is first loaded if exported below.
 * @param {Discord.Client} bot The instantiated Discord Bot object.
 */
function onLoad(bot) {
  utils.logger.log("debug", `${NAME} has started.`)
}

module.exports = {
  NAME,
  SLUG,
  SHORT_HELP,
  AUTHOR,
  COMMANDS,
  help,
  processCommand,
  processMessage,
  processReaction,
  startCron,
  onLoad,
}
