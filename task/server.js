import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-liver-server';
import args from './util/args';

gulp.task('serve', (cb) => {
    if(!args.watch) return cb();

    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();

    // 监听前端文件改变
    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file){
        server.notify.apply(server, [file]);
    });
    // 监听服务器文件改变
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], function(){
        server.start.bind(server)();
    });
});