const routes = [
      {
        name: 'reception',
        path: '/',
        component: () => import('../pages/reception.vue'),
      },
      {
        name: 'home',
        path: '/home',
        component: () => import('../pages/home.vue'),
      },
      {
        name: 'my_profile',
        path: '/my_profile',
        component: () => import('../pages/myProfile.vue'),
      },
      {
        name: 'sorties',
        path: '/sorties',
        component: () => import('../pages/sorties.vue'),
      },
      {
        name: 'changement_de_mot_de_passe',
        path: '/changement_de_mot_de_passe',
        component: () => import('../pages/changementDeMotDePasse.vue'),
      },
      {
        name: 'inscription',
        path: '/inscription',
        component: () => import('../pages/inscription.vue'),
      },
        {
          path: '/connexion',
          name: 'connexion',
          component: () => import('../pages/login.vue'),
        },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/error404.vue'),
  });
}

export default routes;