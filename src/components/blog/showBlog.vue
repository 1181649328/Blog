<template>
  <div class="container">
    <div class="title">
      <h1>{{blog.title}}</h1>
      <div class="artlceMsg">
        <span class="date">{{blog.date}}</span>

        <span class="read">
          <span class="readIcon"></span>
          <span class="read_number">:{{blog.read}}</span>
        </span>

        <span class="like">
          <span class="likeIcon"></span>
          <span class="like_number">:{{blog.like}}</span>
        </span>

        <span class="comment">
          <span class="commentIcon"></span>
          <span class="comment_number">:{{blog.comment}}</span>
        </span>
      </div>
    </div>
    <div class="markdown-body articles">
      <div v-html="blog.markdown" class="ql-editor"></div>
    </div>
    <div id="gitalk-container"></div>
    <VueEditor style="display:none"></VueEditor>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "showBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  components: {
    VueEditor
  },
  created() {
    this.axios
      .get(`rest/blogs/${this.id}`)
      .then(data => {
        this.blog = data.data;
        this.blog.date = this.blog.date.slice(0, 10);
        this.blog.comment = this.blog.comment.length - 1;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  border: 1px solid #e3e3e5;
  box-shadow: 1px -5px 15px #e3e3e5;
  border-radius: 5px;
  padding: 5px;
  background: #fafafa;
  display: inline-block;
  text-align: left;
}

.articles {
  /* border: 1px solid red; */
  min-height: 75vh;
  margin: 10px;
  padding: 20px;
}

.artlceMsg {
  height: 20px;
  /* border: 1px solid red; */
}

/*时间*/
.date {
  float: left;
  margin-right: 10px;
  /* border: 1px solid red; */
}

/*查看*/
.read {
  float: left;
}

.readIcon {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  background: url("../../assets/read.svg") no-repeat;
  background-size: cover;
}

.read .read_number {
  font-size: 14px;
  margin-right: 10px;
  display: block;
  float: left;
}

/*点赞*/
.like {
  float: left;
}

.likeIcon {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  position: relative;
  bottom: 1px;
  background: url("../../assets/like.svg") no-repeat;
  background-size: cover;
}

.like .like_number {
  font-size: 14px;
  display: block;
  margin-right: 10px;
  float: left;
}

/*评论*/
.comment {
  float: left;
}

.commentIcon {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  background: url("../../assets/pinglun.svg");
  background-size: cover;
}

.comment .comment_number {
  font-size: 14px;
  display: block;
  margin-right: 10px;
  float: left;
  background-size: cover;
}

.title {
  border-bottom: 1px solid #e3e3e5;
}
.title > h1 {
  text-align: center;
}
</style>
