# Simple Guards

## Description

Simple utilities to add guard clauses to yout JS code.

Guards raises an Error if a given condition is truthy.

## Features

* Guards not executed in production environment (`process.env.NODE_ENV !== "production"`)
* Guards can be checked lazily

## Install

```
npm instal simple-guards
````

## Usage

To set a simple guard:

```
import { guard } from "simple-guards";

function division(numerator, denominator) {
  guard(denominator === 0, "denominator cannot be zero");

  // more awful code
}
```

You can also pass a function to lazy evaluate an expensive guard:

```

function division(numerator, denominator) {
  guard(() => expensiveDetectionOfZero(denominator), "denominator cannot be zero");

  // more awful code
}

```

If you want to lazy evaluate many guards you can use the `guards` method to
avoid excessive wrapper functions:

```
import { guards } from "simple-guards";

function division(numerator, denominator) {
  guards((guard) => {
    guard(expensiveDetectionOfZero(numerator), "we don't want numerator to be zero");
    guard(expensiveDetectionOfZero(denominator), "denominator cannot be zero");
  })

  // more awful code
}

