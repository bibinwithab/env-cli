# env-mod

`env-mod` is a Command Line Interface (CLI) tool built with Node.js and Commander for managing environment variables in a `.env` file effortlessly.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Setting Environment Variables](#setting-environment-variables)
  - [Getting Environment Variables](#getting-environment-variables)
  - [Deleting Environment Variables](#deleting-environment-variables)
- [Options](#options)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed on your system. Then, install `env-mod` globally using npm:

```bash
npm install -g env-mod
```

## Usage

### Setting Environment Variables

To set an environment variable in the `.env` file, use the following command:

```bash
env-mod set KEY value
```

### Getting Environment Variables

To retrieve the value of an environment variable from the `.env` file, use:

```bash
env-mod get KEY
```

### Deleting Environment Variables

To delete an environment variable from the `.env` file, use:

```bash
env-mod delete KEY
```

## Options

- `--help`: Display help for the command.
- `--version`: Display the version of `env-mod`.

## Examples

```bash
# Set environment variable
env-mod set DATABASE_URL "mongodb://localhost:27017/mydb"

# Get environment variable value
env-mod get DATABASE_URL

# Delete environment variable
env-mod delete DATABASE_URL
```

## Contributing

Contributions are welcome! To contribute to `env-mod`, follow these steps:

1. Fork the repository.
2. Create a branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

Feel free to modify this template according to your project's specific details and requirements. Make sure to include relevant information about installation, usage, options, examples, contributing guidelines, and the license.
