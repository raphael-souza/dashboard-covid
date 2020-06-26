<template>
    <v-app id="inspire" dark>
    <div>
      <h2>Informações sobre Casos de Covid 19 - {{ country }}</h2>
    </div>
    <v-container>
      <v-row> 
        <v-col cols="4" >
          <v-card color="#385F73" dark >
            <v-card-title class="headline">Casos Confirmados</v-card-title>

            <h2 class="text-md-center"> 123 </h2>
          </v-card>
        </v-col>
        
      </v-row>
    </v-container>
    
    {{ countryDetail | json }}

  </v-app>
</template>

<script>
import axios from "axios";

export default {
  props: ["country"],
  data() {
    return {
      countryDetail: []
    };
  },
  created () {
      this.$vuetify.theme.dark = true;
      axios({
        url: `https://api.covid19api.com/live/country/${this.country}`,
        method: "get",
      }).then( response => {
        const query = response.data;
        this.countryDetail = query;
        console.log(query);
      })
    },
};
</script>