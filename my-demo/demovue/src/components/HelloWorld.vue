<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <div class="element">
      <h3>element-UI组件练习</h3>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <el-pagination background layout="prev, pager, next" :total="total" :page-size="20" @current-change="handleCurrentChange">
      </el-pagination>
      <div style="width:400px;margin:0 auto;">
        <el-carousel height="150px" type="card">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div>
        <el-cascader :options="options2" @active-item-change="handleItemChange" @change="handleIchange" :props="props"></el-cascader>
      </div>
      <div>
        <el-progress type="circle" :percentage="percentage" color="#8e71c7"></el-progress>
      </div>
      <div class="loading" v-loading="true" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.8)">

      </div>
    </div> -->

    <router-link to="/">跳转到详情页</router-link>
    <router-link to="/heighter">高级组件-跨级传递等</router-link>
    <button v-on:click="link">跳转到列表页</button>
    <button v-on:click="add">点击</button>
    <input v-model.trim="value"> {{value}}
    <p>{{count}}</p>
    <!-- <BrotherFir></BrotherFir>
    <BrotherTwo></BrotherTwo> -->
    <router-view></router-view>
  </div>
</template>

<script>
import BrotherFir from "components/common/BrotherFir";
import BrotherTwo from "components/common/BrotherTwo";

export default {
  beforeRouteEnter(to, from, next) {
    //获取数据  加载数据
    next(vm => {
      console.log(vm, vm.msg);//在这是拿不到this vm可以 注意
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 切换页面的时候 =》 提醒是否保存已编辑内容
    next();
  },
  name: "HelloWorld",
  components: { BrotherFir, BrotherTwo },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      fileData: [1, 2],
      value: "",
      total: 1000,
      cities: ["上海", "北京", "广州", "深圳"],
      checkAll: false,
      checkedCities: ["上海", "北京"],
      isIndeterminate: true,
      options2: [
        {
          label: "江苏",
          value: 1
        },
        {
          label: "浙江",
          value: 2,
          cities: []
        }
      ],
      props: {
        value: "label",
        lable: "value",
        children: "cities"
      },
      percentage: 0
    };
  },
  computed: {
    count() {
      // 从vuex 取数据
      return this.$store.state.count;
      // return this.$store.getters.getCount;
    }
  },
  mounted() {
    let num = 0;
    let timer = setInterval(() => {
      num++;
      this.percentage += 1;
      if (this.percentage == 80) {
        clearInterval(timer);
      }
    }, 10);
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    add() {
      // 触发 action => vuex  带参数触发
      // this.$store.commit("actionIncrease", this.fileData)
      this.$store.dispatch("actionIncrease", this.fileData);
    },
    link() {
      // 路由跳转
      // this.$router.push("/list/2");
      this.$router.push({ path: '/list/2', query:{type:'c'}})
    },
    // 多选框
    handleCheckAllChange(val) {
      console.log(this.checkAll);
      console.log(val);
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount == this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
      console.log(this.isIndeterminate);
    },
    handleIchange(val) {
      console.log(val);
    },
    handleItemChange(val) {
      console.log("active item:", val);
      setTimeout(_ => {
        if (val.indexOf("江苏") > -1 && !this.options2[0].cities.length) {
          this.options2[0].cities = [
            {
              label: "南京"
            }
          ];
        } else if (
          val.indexOf("浙江") > -1 &&
          !this.options2[1].cities.length
        ) {
          this.options2[1].cities = [
            {
              label: "杭州"
            }
          ];
        }
      }, 300);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.loading {
  width: 500px;
  height: 200px;
  border: 1px solid red;
  margin: 0 auto;
}
.element {
  padding: 20px;
  background: #e6f5e6;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
