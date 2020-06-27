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
gulp.task("copyimg", (done) => {
  gulp.src("img2/*.{jpg,png,gif}").pipe(gulp.dest("dist/img2"));
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
gulp.task("copyJs", (done) => {
  gulp.src("js/*.js").pipe(gulp.dest("dist/js"));
  done();
});
gulp.task("copyhtml", (done) => {
  gulp.src("html/*.html").pipe(gulp.dest("dist/html"));
  done();
});
