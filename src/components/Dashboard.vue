<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped>
          <v-list dense>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Dashboard COVID 19 - Dados mundiais</v-toolbar-title>
        </v-app-bar>

        <v-main>
          <div style="margin-right: 30px;">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">País</th>
                    <th class="text-left">Total de casos Confirmados</th>
                    <th class="text-left">detalhes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in countries" :key="item.name">
                    <td>{{ item.Country }}</td>
                    <td>{{ item.TotalConfirmed }}</td>
                    <td> 
                      <router-link :to="`/dashboard/${item.Country}`"><v-icon>mdi-television-guide</v-icon></router-link>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
            
        </v-main>

        <v-footer app>
          <span>&copy; <a href="https://github.com/raphael-souza"> Raphael Souza </a> - 2020 </span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import axios from "axios/dist/axios";
export default {
    props: {
      source: String,
      covidData: String
    },
    data: function () {
      return {
        drawer: null,
        countries: ["Brasil", "EUA", "China"]
      }
    },
    created () {
      this.$vuetify.theme.dark = true;
      axios({
        url: "https://api.covid19api.com/summary",
        method: "get",
      }).then( response => {
        const query = response.data;
        console.log(query);
        this.countries = query.Countries;
      })
    },
  }
</script>
