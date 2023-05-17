# Fable UI

Just another ui framework.

## Install

`npm i @borgenfalkskott/fable-ui`

## Getting started

Import Fable UI in your sass, and you're good to go.

```scss
// style.scss
@import "~@borgenfalkskott/fable-ui";

body {
  background-color: hotpink;
}
```

## Custom values

If you want to override some default variables, just include your own config sass file before Fable UI to override them.

```scss
// style.scss
@import "config";
@import "~@borgenfalkskott/fable-ui";

body {
  background-color: hotpink;
}
```

```scss
// _config.scss
$fable-flex-gap: 50px;
```

## Include partials

If you don't want everything in Fable UI, you can include the partials you want.

```scss
// style.scss
@import "config";

// required
@import "~@borgenfalkskott/fable-ui/src/sass/vars";

// we only want these partials
@import "~@borgenfalkskott/fable-ui/src/sass/reset";

body {
  background-color: hotpink;
}
```
