import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clen', () => {
   return del(['server/public', 'server/views']);
});