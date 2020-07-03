<template>
    <v-app id="inspire" dark>
    <div>
      <h2 class="text-md-center headline">Informações sobre Casos de Covid 19 - {{ country }}</h2>
    </div>

   


    <v-container >
      <v-btn class="mx-2" fab dark large color="gray">
        <router-link :to="`/dashboard`"><v-icon dark>mdi-backburger</v-icon></router-link>
      
      </v-btn>
      <v-row style="margin-top:120px"> 
        <v-col cols="4" >
          <div color="#4e4e4e" style="background: #2f2f2f; border-radius: 6px;" >
            <div class="text-md-center headline" style="margin: 10px; background: #848484">Casos Confirmados</div>

            <h2 class="text-md-center"> {{ countryDetail[0].confirmed.slice(-1)[0]}} </h2>
          </div>
        </v-col>
        
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="8 offset-md-2">
        <GraphicLine id="linear-graph" v-bind:date="countryDetail[0].date" v-bind:casesConfirmed="countryDetail[0].confirmed"></GraphicLine>
      </v-col>
    </v-row>

  <v-card height="150">
      <v-footer
        absolute
        class="font-weight-medium"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Raphael Souza</strong>
        </v-col>
      </v-footer>
    </v-card>
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