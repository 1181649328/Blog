<template>
  <div class="container-fuliter">
    <div class="containers">
      <div class="aside">
        <ul>
          <li>
            <router-link to="/blogManagerment/deleteBlog" class="nav-link">博客管理</router-link>
          </li>
          <li>
            <router-link to="/blogManagerment/sendBlog" class="nav-link">博客发布</router-link>
          </li>
          <li>
            <router-link to="/blogManagerment/userCreate" class="nav-link">创建用户</router-link>
          </li>
          <li>
            <router-link to="/blogManagerment/userList" class="nav-link">用户列表</router-link>
          </li>
          <li>
            <router-link to="/blogManagerment/tagCreat" class="nav-link">创建标签</router-link>
          </li>
          <li>
            <router-link to="/blogManagerment/tagList" class="nav-link">标签列表</router-link>
          </li>
          <li>
            <router-link to="/blogManagerment/linksCreate" class="nav-link">添加友链</router-link>
          </li>
          <li>
            <router-link to="/blogManagerment/linksList" class="nav-link">友链列表</router-link>
          </li>
          <li>
            <router-link to="/OpenWrtConfig" class="nav-link">OpenWrt配置</router-link>
          </li>
        </ul>
      </div>
      <section class="section">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogManagement",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    authVerify() {
      if (!localStorage.token) {
        this.$router.push("/userLogin");
        this.$message({
          type: "error",
          message: "请先登陆"
        });
      } else {
        this.axios.post("/authVerify");
      }
    }
  },
  created() {
    this.authVerify();
  }
};
</script>

<style scoped>
.containers {
  margin-top: 50px;
  width: 90vw;
  max-width: 1600px;
  border: 1px solid #e3e3e5;
  box-shadow: 1px -5px 15px #e3e3e5;
  border-radius: 5px;
  background: #fafafa;
  display: inline-block;
}

.aside {
  /* border: 1px solid #e3e3e5; */
  height: 100%;
  width: 20%;
  float: left;
}

.aside > ul > li {
  height: 50px;
  line-height: 40px;
  display: block;
  text-align: center;
  border-bottom: 1px solid #c8c8c8ed;
}

.nav-link {
  color: black;
}

.section {
  height: 100%;
  min-height: 90vh;
  width: 80%;
  float: left;
  padding: 5px;
  border-left: 1px solid #e3e3e5;
}

@media screen and (max-width: 730px) {
  .aside {
    width: 100%;
    height: auto;
    border: 1px solid #f9f9f9;
    float: left;
  }

  .section {
    width: 100%;
    height: auto;
    display: inline-block;
    border: 1px solid #f9f9f9;
  }
}
</style>
