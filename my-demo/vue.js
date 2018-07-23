// vue初步总结整理

// 8个 (beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed)
// 参考：https://segmentfault.com/a/1190000008879966
// beforeCreate:实例刚创建，属性绑定之前
// created:实例创建完成，属性绑定，但是还未将实例挂载到'el'上，也就是挂载元素上。
// beforeMount:模板编译/挂载前
// mounted:模板编译/挂载之后

/* beforeCreate	在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

created	实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。
然而，挂载阶段还没开始，$el 属性目前不可见。

beforeMount	在挂载开始之前被调用：相关的 render 函数首次被调用。

mounted	el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

beforeUpdate	数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

updated	由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。

activated	keep-alive 组件激活时调用。

deactivated	keep-alive 组件停用时调用。

beforeDestroy	实例销毁之前调用。在这一步，实例仍然完全可用。

destroyed	Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 */

/* 
beforCreate:在加载DOM创建实例时插入loading等

created：结束loading

mounted：发起数据请求，更新数据

beforeDestory：在这可以询问是否是删除某某某 
*/



// 组件之间传值
/* 
  console.log(this.$parent.msg,"获取父组件的值")
  
1、父组件往子组件传值
  父组件先绑定： v-bind:message="message" 
  子组件接收： props: ["message"] 接收数据类型不知一种

2、子组件往父组件传值
  子组件 this.$emit("ievent", data, "lalal");
  父组件 v-on:ievent="ievent"   ievent(...data){console.log(data)}

3、兄弟组件之间传值
  借助 eventBus
  哥哥 =》 弟弟
  哥哥：import bus from "../../assets/eventBus";  bus.$emit("userDefinedEvent", "这是来自哥哥组件的数据");
  弟弟：import bus from "../../assets/eventBus";  bus.$on("userDefinedEvent", msg => {console.log(msg)});
 */

/* 
 computed和methods的区别：
computed属性在vue官网中的说法：模板内的表达式是非常便利的，但是它们实际上只用于简单的运算。
在模板中放入太多的逻辑会让模板过重且难以维护。

 两种方式在缓存上也大有不同，利用computed计算属性是将 reverseMessage与message绑定，
 只有当message发生变化时才会触发reverseMessage，而methods方式是每次进入页面都要执行
 该方法，但是在利用实时信息时，比如显示当前进入页面的时间，必须用methods方式
 */

 /* 
 页面优化：
 https://www.cnblogs.com/hity-tt/p/7169307.html
 */
/* 
发送一个 GET 请求

axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });
  
发送一个 POST 请求
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });
 */