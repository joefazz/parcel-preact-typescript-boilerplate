# Parcel Preact TypeScript Boilerplate

```bash
# To Use
npx degit joefazz/parcel-preact-typescript-boilerplate
```

The purpose of this was to see how easy/difficult it would be to try and come as close to the developer experience you get from CRA but using Parcel over WebPack and Preact over React.

I'm sure there are some things missing here that CRA gives you out the box (env files for example) but I think in terms of actually to work on something this should be everything required to make a start.

## Couple of things I didn't know before starting this:

### [Parcel don't really want to have to do your TypeScript compilation for you](https://github.com/parcel-bundler/parcel/issues/4022)

At first I was a bit taken a back by this but someone in that thread sums it up nicely by saying "a bundler should only do the bundling" and seeing as `tsc` works just fine what is the point in Parcel doing the typechecking? In the `package.json` you'll see I install the `concurrently` package so I can run `tsc` and `parcel` at the same time and see the output in one terminal window

### Babel configs suck to write

I guess this is part of the value add of CRA but it was a pain trying to figure out the correct config so everything would play nicely with each other. I added in the JSX Pragmatic plugin because I want to use this boilerplate in a project that is already using React and writing `import { h } from 'preact'` looks weird when you're not actually using the import. At some point people kind of just accepted that you `import React from 'react'` to use React without actually realising what that was doing but I'm not sure the same applies to this `import { h }` but feel free to remove.
