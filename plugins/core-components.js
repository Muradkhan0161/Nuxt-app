import Vue from 'vue';

import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
import PostList from "@/components/Posts/PostList"
import AdminPostForm from '@/components/Admin/AdminPostForm'

Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostList', PostList)
Vue.component('AdminPostForm', AdminPostForm)