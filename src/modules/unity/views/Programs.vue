<template>
  <div class="container row row-cols-md-3 row-cols-md-2 g-4">
    <div class="col" v-for="program of programs" :key="program.id">
        <div class="card" >
          <img :src="require(`@/assets/${program.id}.jpg`)" class="card-img-top" alt="...">
          <div class="card-body" >
            <h5 class="card-title">{{ program.Name }}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-grid gap-2">
              <a @click="getClass(program.id)" class="btn btn-primary btn-block">INFO</a>
            </div>
          </div>
        </div>
    </div>
  </div>

</template>

const programs = [
  {"id":0,"Name":"Intro Class", "m_Description":"ASD", "M_Description":"ASD2", "image", },
  {"id":1,"Name":"Kids Class", "m_Description":"ASD", "M_Description":"ASD2", "image", },
  {"id":2,"Name":"Nogi Class", "m_Description":"ASD", "M_Description":"ASD2"},
  {"id":3,"Name":"Fundamentals Class", "m_Description":"ASD", "M_Description":"ASD2"},
  {"id":4,"Name":"Competition Class", "m_Description":"ASD", "M_Description":"ASD2"},
  {"id":5,"Name":"Open Mat", "m_Description":"ASD", "M_Description":"ASD2"},
  {"id":6,"Name":"Private Lessons", "m_Description":"ASD", "M_Description":"ASD2"},
]


<script>
export default {
  data() {
          return {
              programs : [
  {"id":0,"Name":"Intro Class", "m_Description":"ASD", "M_Description":"ASD2"},
  {"id":1,"Name":"Kids Class", "m_Description":"ASD", "M_Description":"ASD2"},
  {"id":2,"Name":"Nogi Class", "m_Description":"ASD", "M_Description":"ASD2"},
  {"id":3,"Name":"Fundamentals Class", "m_Description":"ASD", "M_Description":"ASD2"},
  {"id":4,"Name":"Competition Class", "m_Description":"ASD", "M_Description":"ASD2"},
  {"id":5,"Name":"Open Mat", "m_Description":"ASD", "M_Description":"ASD2"},
  {"id":6,"Name":"Private Lessons", "m_Description":"ASD", "M_Description":"ASD2"},
]
          };
},
methods: {
  getClass( id ) {
    return this.$router.push({name: 'Class', params: { id }});
  }
},
  
}
</script>

<style>

</style>