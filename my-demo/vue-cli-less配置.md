##配置less##
>参考：https://www.cnblogs.com/QQ-Monarch/p/7126309.html
>https://www.cnblogs.com/zph666/p/7776696.html

>安装 less less-loader  npm install less less-loader --save-dev
>新建 文件  src 下面 /common/less/base.less
>main.js里面引入import './common/less/base.less'
>build/webpack.base.conf.js  修改：
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'src':resolve('src'),
      'less':resolve('src/common/less'),
       'components': path.resolve(__dirname, '../src/components'),
       
    }
  },
然后你就可以在任意.vue文件，使用import xxxComponent from 'components/xxxComponent'


>需要引入的文件：
<style scoped lang="less">
@import '~less/base.less';
.div1 {
  p {
    color: @orange;
  }
}
</style>
