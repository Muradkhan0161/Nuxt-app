<template>
     <section class="Post-list">
            <PostPreview
            id="1"
            :is-admin="isAdmin"
            title="Hey there"
            thumbnail="https://www.tececorp.com/wp-content/uploads/2019/05/050318_LRR_MEN_WomenTech-1-1.jpg"
            post="Check out my first post"
            />
            <PostPreview 
            id="2"
            :is-admin="isAdmin"
            title="Hey there"
            thumbnail="https://d30fl32nd2baj9.cloudfront.net/media/2020/01/02/technology-smart-device-010120-01.jpg/BINARY/technology-smart-device-010120-01.jpg"
            post="Check out my second post"
            />
            <PostPreview 
            id="3"
            :is-admin="isAdmin"
            title="Hey there"
            thumbnail="https://images.frandroid.com/wp-content/uploads/2020/03/coronavirus-covid-19.jpg"
            post="Check out my third post"
            />
            <PostPreview 
            id="4"
            :is-admin="isAdmin"
            title="Hey there"
            thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSddya9qHKTlBurDXgxImzz8dv29ehROkIW5YvWUd1pAJs6snVE"
            post="Check out my forth post"
            />
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
.Post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>