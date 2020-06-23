const gulp = require("gulp");
// gulp.task("hello", (done) => {
//   console.log("hello gulp");
//   done();
// });
gulp.task("copyHtml", (done) => {
  gulp.src("index.html").pipe(gulp.dest("dist"));
  done();
});
gulp.task("copyImg", (done) => {
  gulp.src("img/*.{jpg,png,gif}").pipe(gulp.dest("dist/img"));
  done();
});
gulp.task("copyCss", (done) => {
  gulp.src("css/*.css").pipe(gulp.dest("dist/css"));
  done();
});
gulp.task("copyfont", (done) => {
  gulp.src("font/*").pipe(gulp.dest("dist/font"));
  done();
});
