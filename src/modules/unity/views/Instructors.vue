<template>
<div class="container">
  <div class="card mb-3"  v-for="instructor of instructors" :key="instructor.id">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ instructor.Name }}</h5>
        <p class="card-text"><b><small class="text-muted">{{ instructor.m_Description }}</small></b></p>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  data() {
            return {
                instructors : [
                  {"id":0,"Name":"Martin Paz", "m_Description":"Head Professor", "M_Description":"ASD2"},
                  {"id":1,"Name":"Nicolas Vitasse", "m_Description":"Head Professor", "M_Description":"ASD2"},
                  {"id":2,"Name":"Agostina Bonazza", "m_Description":"No-Gi Professor, Kids 6-13 Class Professor", "M_Description":"ASD2"},
                  {"id":3,"Name":"KATOGA", "m_Description":"ASD", "No-Gi Professor, Kids 6-13 Class Professor":"ASD2"},
                  {"id":4,"Name":"Fernando Alcocer", "m_Description":"No-Gi Professor", "M_Description":"ASD2"}
                ]
            };
  },
}
</script>