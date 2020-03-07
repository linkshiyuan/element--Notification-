<template>
  <div class="home">
    <el-container>
      <el-header>头部</el-header>
      <el-container>
        <el-aside>侧边栏</el-aside>
        <el-main>
          <el-button>默认按钮</el-button>
          <el-input
            v-model="input"
            placeholder="请输入内容"
          ></el-input>
        </el-main>
      </el-container>
    </el-container>
    <el-button
      type="danger"
      circle
      @click="notice1"
      icon="el-icon-delete"
    ></el-button>
  </div>
</template>

<script>
export default {
  methods: {
    notice1() {
      this.$notify({
        title: '提示',
        message: '即将删除',
        duration: 0,
      });
    },
  },
};
</script>
