# processing-units [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url]
[travis-image]: https://img.shields.io/travis/laat/processing-units.svg?branch=master
[travis-url]: https://travis-ci.org/laat/processing-units
[npm-image]: https://img.shields.io/npm/v/processing-units.svg?style=flat
[npm-url]: https://npmjs.org/package/processing-units

> Get the number of processing units available

Get the number of processing units available to the current process, which may
be less than the number of online processors. If this information is not
accessible, then print the number of processors installed.

## Install
```
npm install -D processing-units
```

## Usage

```js
const processingUnits = require('processing-units');

processingUnits(); // => 4
```

## Motivation

When running a docker container with fewer cpus than the host, os.cpus().length
returns the number of processors on the host.

```
$ docker run -it \
>   --cpuset-cpus="0-1" \
>   node \
>   node -e "console.log(os.cpus().length)"
4
```

To get the number of processing units we could run nproc

```
$ docker run -it \
>   --cpuset-cpus="0-1" \
>   node \
>   nproc
2
```

This is an abstraction.

## Behind the scenes

Uses [nproc](https://www.gnu.org/software/coreutils/manual/html_node/nproc-invocation.html#nproc-invocation) on linux if awilable. When unavailable, returns the number of cpus.
