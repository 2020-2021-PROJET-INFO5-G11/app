<template>
  <!-- NavBar -->
  <div class="navBand">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <!-- Inline block list -->
    <ul>
      <!-- Left block -->

      <li class="left">
        <ul>
          <!-- Home -->
          <li class="home">
            <div @click="$router.push('/accueil')">
              <div>
                <i class="fa fa-home fa-3x"></i>
              </div>
              <span> Accueil </span>
            </div>
          </li>

          <!-- Activity -->
          <li class="activity" click="$router.push('/sorties')">
            <div @click="$router.push('/sorties')">
              <div>
                <i class="fa fa-shopping-bag fa-3x"></i>
              </div>
              <span> Sorties </span>
            </div>
          </li>

          <!-- Group -->
          <li class="group" @click="$router.push('/groupes')">
            <div>
              <i class="fa fa-group fa-3x"></i>
            </div>
            <span> Groupes </span>
          </li>

          <!-- Utilisateurs -->
          <li v-show="false">
            <button>Gérer les Utilisateurs</button>
          </li>
        </ul>
      </li>

      <!-- Center block -->

      <li class="center">
        <ul>
          <!-- Search bar -->
          <li class="searchBar">
            <div style="padding-left: 10px; font: bold">
              Rechercher une sortie
            </div>
            <input
                type="text"
                v-model="search_expression"
                style="width: 550px; height: 50px; padding: 5px"
                bg-color="white"
                placeholder="ID sortie, mots clés ..."
                @keyup.enter="searchSortie"
            >
          </li>
        </ul>
      </li>

      <!-- Right block -->

      <li class="right">
        <ul>
          <!-- Back button -->
          <li class="back" @click="$router.go(-1)">
            <div>
              <i class="fa fa-arrow-left fa-3x"></i>
            </div>
            <span> Retour </span>
          </li>

          <!-- Notifications -->
          <li class="activity" @click="$bvModal.show('notification-modal')">
            <div>
              <div>
                <i class="fa fa-bell-o fa-3x"></i>
              </div>
              <span> Alertes </span>
            </div>
          </li>

          <!-- Profil button -->
          <li class="profil" @click="$router.push({path: `/profil/${current_user.id}`})">
            <div>
              <i class="fa fa-user fa-3x"></i>
            </div>
            <span> Profil </span>
          </li>

          <!-- log out button -->
          <li class="logout" @click="$router.push('/')">
            <div>
              <i class="fa fa-sign-out fa-3x"></i>
            </div>
            <span> Quitter</span>
          </li>
        </ul>
      </li>
    </ul>

    <b-modal ref="notification"
              id="notification-modal"
              size="xl"
              title="Notifications">

      <ul style="overflow-y: scroll;">
        <li style="display: block" v-for="n in notifications" v-bind:key="n">
          <br>
          <div class="notification"> {{n}}</div>
        </li>
        <br>
      </ul>
    </b-modal>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      current_user: {},
      search_expression: '',
      notifications: ["Nouvelle sortie créee : Foot Us", "Sortie supprimée : Aquagym", "Invitation à un nouveau groupe"],
    };
  },
  methods: {
    getCurrentUser() {
      const path = 'http://localhost:5000/api/user/current';
      axios.get(path)
        .then((res) => {
          this.current_user = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    searchSortie(e) {
      if (e.keyCode === 13) {
        this.$router.push(`/recherche/${this.search_expression}`)
      }
    },
  },
  created() {
    this.getCurrentUser();
  }
};
</script>

<style>
/* objects */

.notification {
  font-size: 30px;
}

.navBand {
  padding: 10px;
  background-color: black;
  color: whitesmoke;
  opacity: 0.9;
}

span {
  font-size: 10 px;
  font-family: "Georgia";
}

li {
  display: inline-block;
}

/* blocs */

.left,
.center,
.right {
  padding-top: 10px;
}

.right {
  float: right;
  padding-right: 80px;
}

.left {
  float: left;
}

/* Icons */

.home {
  font-size: 18px;
}

.home:hover {
  cursor: pointer;
  color: rgb(65, 192, 171);
}

.activity {
  padding-left: 50px;
  font-size: 18px;
}

.activity:hover {
  cursor: pointer;
  color: rgb(65, 192, 171);
}

.group {
  padding-left: 50px;
  font-size: 18px;
}

.group:hover {
  cursor: pointer;
  color: rgb(65, 192, 171);
}

.searchBar {
  padding-left: 200px;
  font-size: 18px;
}

.back {
  font-size: 18px;
}

.back:hover {
  cursor: pointer;
  color: rgb(65, 192, 171);
}

.profil {
  padding-left: 50px;
  font-size: 18px;
}

.profil:hover {
  cursor: pointer;
  color: rgb(65, 192, 171);
}

.logout {
  padding-left: 50px;
  font-size: 18px;
}

.logout:hover {
  cursor: pointer;
  color: rgb(65, 192, 171);
}
</style>
