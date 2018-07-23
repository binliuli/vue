##scss配置##

>npm install sass-loader node-sass --save-dev

><style lang="scss">
   $highlight-color: #F90;
   $highlight-border: 1px solid $highlight-color;
   .selected {
     border: $highlight-border
   }
</style>

>引用sass/scss 文件
@import  "./common/scss/mixin";