<template>
  <section class="post-list">
    <PostPreview id="1" :is-admin="isAdmin" title="Hello!!" previewText="This is my first Post" thumbnail="http://www.businessbigwigs.com/wp-content/uploads/2013/07/shutterstock_141806476.jpg" />
    <PostPreview id="2" :is-admin="isAdmin" title="Hello Again" previewText="This is my second Post" thumbnail="http://www.aapt.org.af/fa/wp-content/uploads/2017/06/17.jpg" />
    <PostPreview id="3" :is-admin="isAdmin" title="Hello No. 3" previewText="This is my third Post" thumbnail="http://techtrends.tech/wp-content/uploads/2017/02/tech.jpg" />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>

