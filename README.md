# Diagnose

Utilities to detect and diagnose miss-configurations of an application.

It does not use `throw/catch` and it has no production dependencies,
making it suitable for platforms where exceptions are disabled.

## Installation

```
npm install mrubi-rootstrap/diagnose#v0.0.1
```

## Usage

Create a `diagnose` block and define what to checkout for, for example

```javascript
const { diagnose } = require('diagnose')

const examinations = function(e) {
  e.topic('Environment variables', (checkout) => {
    checkout.environmentVariable('PATH').isDefined()
    checkout.environmentVariable('NODE').isDefined()
  })

  e.topic('Config files', (checkout) => {
    checkout.file('config/someConfigFile.yaml').isPresent()
    checkout.file('config/someOtherConfigFile.yaml').isPresent()
  })

  e.topic('Logs folder', (checkout) => {
    checkout.folder('logs').isPresent()
  })
}

const results = diagnose(examinations)
const failures = results.getFailures()
console.info(failures)
```

If you want to create a diagnose endpoint or page use the code above and present
the results in the response.

If you want to run the examinations using a CLI create a script with the code above
in the application host.

## Examinations

### environment variables

```javascript
const examinations = function(e) {
  e.topic('Environment variables', (checkout) => {
    checkout.environmentVariable('PATH').isDefined()
  })
}
```

### files

```javascript
const examinations = function(e) {
  e.topic('Files', (checkout) => {
    checkout.file('someFolder/someFile').isPresent()
    checkout.file('someOtherFolder/someFile').isNotEmpty()
  })
}
```

### folders

```javascript
const examinations = function(e) {
  e.topic('Folders', (checkout) => {
    checkout.folder('someFolder').isPresent()
  })
}
```

## Development

Clone the repository

```
git clone git@github.com:mrubi-rootstrap/diagnose.git
```

Install its dependencies. It only has dependencies for running the tests

```
docker-compose run -v $(pwd):/usr/src/app diagnose-development npm install
```

Bash the development environment

```
docker-compose run -v $(pwd):/usr/src/app diagnose-development /bin/bash
```

Run the tests

```
npm test
```

Run the tests including assertions on the coding style and lines coverage

```
npm run all-tests
```
