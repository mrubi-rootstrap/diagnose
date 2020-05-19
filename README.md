# Diagnose

Utilities to detect and diagnose missconfigurations of an application

## Installation

```
npm install mrubi-rootstrap/diagnose#v0.0.1
```

## Usage

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
