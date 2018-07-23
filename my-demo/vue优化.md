### [性能优化]

**v-show，v-if 用哪个？**
>频繁切换的使用 v-show，不频繁切换的使用 v-if，这里要说的优化点在于减少页面中 dom 总数

**key 的唯一性**
>循环调用子组件时添加 key，key 可以唯一标识一个循环个体，可以使用例如 item.id 作为 key，假如数组数据是这样的 ['a' , 'b', 'c', 'a'],使用 :key="item" 显然没有意义，更好的办法就是在循环的时候 (item, index) in arr，然后 :key="index"来确保 key 的唯一性。

**全局样式**

**props 父子组件传值**
>props 父子组件传值时尽量 :width="" :heigth="" 不要 :option={}，细化的好处是只传需要修改的参数，在子组件 props 里加数据类型，是否必传，以及默认值，便于排查错误，让传值更严谨。

**computed和methods的区别**
>computed属性在vue官网中的说法：模板内的表达式是非常便利的，但是它们实际上只用于简单的运算。
在模板中放入太多的逻辑会让模板过重且难以维护。

 >两种方式在缓存上也大有不同，利用computed计算属性是将 reverseMessage与message绑定，
 只有当message发生变化时才会触发reverseMessage，而methods方式是每次进入页面都要执行
 该方法，但是在利用实时信息时，比如显示当前进入页面的时间，必须用methods方式

**组件懒加载**
>懒加载也叫延迟加载，即在需要的时候进行加载，随用随载。
网上查资料，下面只是例子提示：
component:  resolve => require(['../page/any/any.vue'], resolve),//懒加载

**深度查找**
异步
>vue初始化的组件编译原则是，按照深度查找，遇到v-if为false的节点或者叶子节点，停止查找。
