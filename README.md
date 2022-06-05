# MoDiBo Plugin Template

This template repository is the base for a [MoDiBo](https://github.com/devcodeabode/MoDiBo) plugin.

Please refer to the in-code documentation for more detailed requirements. This README serves as a non-exhaustive overview.

## To Create a Repo From This Template

- On the GitHub website, click the green "Use this template" button and follow the prompts.
- Using the `gh` command line tool, use `gh repo create --template devcodeabode/MoDiBo-Plugin-Template` [_(docs)_](https://cli.github.com/manual/gh_repo_create)

## Processing Options

A MoDiBo plugin has three options for receiving and processing data. At least one must be exported, but more than one can be used. Please see the in-code documentation for more technical information.

### `processCommand`

This function will receive the command invoked and arguments (a string containing the rest of the message). This is only ever called when a command is issued that matches one in the `COMMANDS` array, which must also be exported if using this function.

### `processMessage`

This function is called for every message received, regardless of if a command is invoked. A `Discord.Message` object is passed.

### `startCron`

This function is called after all plugins are loaded, and is intended to be used to start tasks on an interval. No data is passed. It is only called once and should be non-blocking.

## Additional Functions

### `onLoad`

This function is not required, but can be useful for your plugin. It is run as the plugin is initially loaded, and should be used for any initial plugin setup, not unlike the role of a constructor. There is no guarantee that any other plugins are loaded at this time.
