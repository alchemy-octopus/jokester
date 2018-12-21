 <template>
   <form @submit.prevent="onSubmit(profile)">
     <label>
       Username: 
       <input v-model="profile.username" required>
     </label>
     <label>
       Password: 
       <input :type="showPassword ? 'text' : 'password'" v-model="profile.password" required>
       <button type="button" @click="showPassword = !showPassword">
         {{ showPassword ? 'Hide' : 'Show' }}
       </button>
     </label>
     <label>
       <button>{{prompt}}</button>
     </label>
   </form>
 </template>
 
<script>
export default {
  props: {
    onSubmit: Function,
    prompt: String
  },
  data() {
    return {
      profile: {
        username: '',
        password: ''
      },
      showPassword: false
    };
  }
};
</script>
 
  <style lang="postcss" scoped>
 
 label {
   display: block;
   padding: 10px 0;
 }
 
 pre {
   color: red;
 }

 input {
   margin-left: 5px;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, .5);
 }
 
 </style>