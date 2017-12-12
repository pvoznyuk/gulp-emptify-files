# gulp-emptify-files

> Takes files and makes them empty

## Install

```
$ npm install --save-dev gulp-emptify-files
```

## Usage

```js
const gulp = require('gulp');
const emptifyFiles = require('gulp-emptify-files');

gulp.task('default', () => {
	gulp.src('src/file.ext')
		.pipe(emptifyFiles())
		.pipe(gulp.dest('dist'))
);
```


## License

MIT © Pavlo Vozniuk
