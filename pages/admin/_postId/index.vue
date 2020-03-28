<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm 
            :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    components: {
        AdminPostForm
    },
    data(){
        return {
            loadedPost: {
                author: 'Md Murad Khan',
                title: 'How bad is Covid-19 can be',
                thumbnailLink: 'https://images.frandroid.com/wp-content/uploads/2020/03/coronavirus-covid-19.jpg',
                content: 'Covid-19 recently outbreak from the wuhan city of china'
            }
        }
    }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>