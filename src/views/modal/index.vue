<template>
  <div class="page bfh">
    <h1 class="introduceTitle">自适应模块框</h1>
    <div class="page-main">
      <el-row type="flex" justify="end">
        <el-button type="primary" @click="dialogVisible = true">打开模块框</el-button>
      </el-row>
      <!-- 模态框 -->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="70%"
        class="myModal"
        :close-on-click-modal="false"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss">
.myModal .el-dialog {
  height: 75%;
}
.myModal .el-dialog__body {
  height: calc(100% - 124px);
  overflow: hidden;
}
</style>