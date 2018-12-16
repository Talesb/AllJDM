
REM ###########################################
REM ############# LETS DO THIS! ###############
REM ###########################################
call npm install gulp-cli -g
call npm install gulp --save-dev
call npm install gulp-newer gulp-imagemin --save-dev
call npm install gulp-htmlclean --save-dev
call npm install gulp-deporder gulp-concat gulp-strip-debug gulp-uglify --save-dev
call npm install gulp-sass gulp-postcss postcss-assets autoprefixer css-mqpacker cssnano --save-dev
call npm install gulp browser-sync  --save-dev
call gulp -v
