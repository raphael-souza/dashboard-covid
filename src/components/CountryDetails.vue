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
    
    <GraphicLine v-bind:date="countryDetail[0].date" v-bind:casesConfirmed="countryDetail[0].confirmed"></GraphicLine>
  </v-app>
</template>

<script>
import axios from "axios";
import GraphicLine from "./GraphicLine.vue"

export default {
  components: {
    GraphicLine
  },
  props: ["country"],
  data() {
    return {
      countryDetail: []
  }
},
  created () {
      this.$vuetify.theme.dark = true;
      axios({
        url: `https://api.covid19api.com/live/country/${this.country}`,
        method: "get",
      }).then( response => {
        console.log(`get values confirmed per country `);

        const query = response.data;
        let confirmedInformations = {
          date: [],
          confirmed: []
        };

        query.forEach(value => {
          const formatedDate = value.Date.split('T')[0];
          confirmedInformations.date.push(formatedDate);
          confirmedInformations.confirmed.push(value.Confirmed);
        });
        this.countryDetail.push(confirmedInformations);
      })
    },
};
</script>