<template>
    <div class="home-page">
        <section class="intro">
            <h1>Get the latest tech news!</h1>
        </section>
        <section class="featured-posts">
            <PostPreview
            id="1"
            title="Hey there"
            thumbnail="https://www.tececorp.com/wp-content/uploads/2019/05/050318_LRR_MEN_WomenTech-1-1.jpg"
            post="Check out my first post"
            />
            <PostPreview 
            id="2"
            title="Hey there"
            thumbnail="https://d30fl32nd2baj9.cloudfront.net/media/2020/01/02/technology-smart-device-010120-01.jpg/BINARY/technology-smart-device-010120-01.jpg"
            post="Check out my second post"
            />
            <PostPreview 
            id="3"
            title="Hey there"
            thumbnail="https://images.frandroid.com/wp-content/uploads/2020/03/coronavirus-covid-19.jpg"
            post="Check out my third post"
            />
            <PostPreview 
            id="4"
            title="Hey there"
            thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSddya9qHKTlBurDXgxImzz8dv29ehROkIW5YvWUd1pAJs6snVE"
            post="Check out my forth post"
            />
        </section>
    </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/Images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>