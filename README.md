# Simple Guards

[![Build Status](https://travis-ci.org/trabe/simple-guards.svg?branch=master)](https://travis-ci.org/trabe/simple-guards)

## Description

Simple utilities to add guard clauses to your JS code.

Guards raises an Error if a given condition is falsy.

## Features

* Guards not executed in production environment (`process.env.NODE_ENV !== "production"`)
* Guards can be checked lazily

## Install

```bash
npm install simple-guards
```

If you use `yarn`, just:

```bash
yarn add simple-guards
```

## Usage

The utility exports two methods: `guard` and `guards`.

To set a simple guard:

```js
import { guard } from "simple-guards";

function division(numerator, denominator) {
  guard(denominator !== 0, "denominator cannot be zero");

  // more awful code
}
```

You can also pass a function to lazy evaluate an expensive guard:

```js
function division(numerator, denominator) {
  guard(() => !expensiveDetectionOfZero(denominator), "denominator cannot be zero");

  // more awful code
}

```

If you want to lazy evaluate many guards you can use the `guards` method to
avoid excessive wrapper functions:

```js
import { guards } from "simple-guards";

function division(numerator, denominator) {
  guards(guard => {
    guard(!expensiveDetectionOfZero(numerator), "we don't want numerator to be zero");
    guard(!expensiveDetectionOfZero(denominator), "denominator cannot be zero");
  });

  // more awful code
}


## Changelog

### next

* Updated all dependencies
* No longer use Mocha. Just jest
* Added ESLint + Prettier to make our code nicer
* Use Travis CI

### 1.0.0

Initial release
