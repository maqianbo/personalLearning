<template>
  <div>
    <div>该功能主要为js代码，因涉及后台交互，无法演示</div>
    <el-button type="primary" @click="exportExcel">导出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    // 导出
    // 导出主要是与后台进行交互，提交参数，由后台创建表格，前端请求，较前端比较简单的方式
    exportExcel() {
      // 使用a连接方式导出后台表格  get方式，传参数少
      // this.useAFun()
      // 使用form连接方式导出后台表格  post方式，传参数多
      let url = config.api + '/console/wlsq/shxxToExcel';
      let params = {
        xmbh: xmbh,
        xmmc: xmmc
      };
      this.postExcelFile(params, url);
    },
    // a链接的方式
    useAFun() {
      // let params =
      //   '?xmbh=' +
      //   xmbh +
      //   '&xmmc=' +
      //   xmmc
      // let script1 = document.createElement('a');
      // console.log(params);
      // script1.href = config.api + '/console/wlsq/shxxToExcel' + params;
      // script1.click();
    },
    postExcelFile(params, url) {
      // 用表单去下载
      // 创建表单部分
      var form = document.createElement('form');
      form.style.display = 'none';
      form.action = url;
      form.method = 'post';
      document.body.appendChild(form);
      setObj(params); // 执行添加input框
      function setObj(obj, name) {
        // obj是你的对象数据，name是你的父级名字
        for (var key in obj) {
          if (typeof obj[key] === 'object') {
            // 如果值是对象，把键和值传到重新递归
            setObj(obj[key], key);
          } else {
            // 如果值不是对象，创建input
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = name ? name + '.' + key : key; // 有父级就加上父级的名字（例：goods.goodsId）
            input.value = obj[key] !== undefined ? obj[key] : null; // 如果数据为undefined就改为null
            form.appendChild(input);
          }
        }
      }
      form.submit();
      form.remove();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>