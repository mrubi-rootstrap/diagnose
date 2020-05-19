# Diagnose

Utilities to detect and diagnose miss-configurations of an application

## Installation

```
npm install mrubi-rootstrap/diagnose#v0.0.1
```

## Usage

Create a `diagnose` block and define what to checkout for

```javascript
const { diagnose } = require('diagnose')

const examinations = function(e) {
  e.topic('Environment variables', (checkout) => {
    checkout.environmentVariable('PATH').isDefined()
    checkout.environmentVariable('NODE').isDefined()
  })
})

const results = diagnose(examinations)
console.info(results.getFailures())
```

If you want to create a diagnose endpoint or page use the code above and present
the results in the response.

If you want to run the examinations using a CLI create a script with the code above
in the application host.

## Examinations

### environmentVariable

```javascript
const examinations = function(e) {
  e.topic('Environment variables', (checkout) => {
    checkout.environmentVariable('PATH').isDefined()
  })
})
```

## Development

Clone the repository

```
git clone git@github.com:mrubi-rootstrap/diagnose.git
```

Install dependencies

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

Run the tests including coding styles and lines coverage
```
npm run all-tests
```
