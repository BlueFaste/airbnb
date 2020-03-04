Vue.component('pres-pays',{
  props:['pays'],
  data:function(){
    return{

    }
  },
  template:`

    <div class="div-pres-pays">
      <img v-bind:src="'img/'+pays.img" v-bind:alt="pays.alt" class="img_pays">
      <h4 class="pays"> {{pays.nom}} </h4>
      <p> {{pays.desc}} </p>
    </div>
  `
})

Vue.component('pres-log',{
  props:["log","num_log"],
  data:function(){
    return{

    }
  },
  template:`
  
  <div v-if="num_log==log.id || num_log==5">
    <div class="img_paris" v-bind:style="'background-image:url(img/'+log.img+')'" v-on:click="$emit('selectedlog',log.id)"></div>
    <div>
      <p class="text">{{log.desc}}</p>
      <p v-if="num_log==log.id"> {{log.secdesc}} </p>
    </div>
  </div>
  `
})



var app= new Vue({
  el: '#app',
  data: {
    pays:[
      {
        id:0,
        img:`desert.jpg`,
        alt:`desert du maroc`,
        nom:`Maroc`,
        desc:`Aventure active et séjour avec les locaux`,

      },
      {
        id:1,
        img:`bateau.jpg`,
        alt:`bateau dans Tuscany`,
        nom:`Tuscany`,
        desc:`Walking in Leonardo’s Tuscany`,

      },
      {
        id:2,
        img:`elephant.jpg`,
        alt:`elephant du kenya`,
        nom:`Kenya`,
        desc:`Shimba Hills Coastal Rainforest Safari`,

      },
      {
        id:3,
        img:`train.jpg`,
        alt:`train au sri lanka`,
        nom:`Sri Lanka`,
        desc:`Camping sauvage au Sri Lanka`,

      },
    ],
    page:false,
    num_log:5,

    log_marse:[
      {
        id:0,
        img:`marseille_1.jpg`,
        desc:`Le temps d’un week-end vous allez pouvoir découvrir certaines richesses qui entoure la capitale le temps d’une randonnée à vélo. Les fôrets, châteaux et sites touristiques sont à portée de roue.`,
        secdesc:`Bien plus de description`,
      },
      {
        id:1,
        img:`marseille_2.jpg`,
        desc:`La tour Eiffel Écouter est une tour de fer puddlé de 324 mètres de hauteur (avec antennes) située à Paris. Construite par Gustave Eiffel et ses collaborateurs pour l’Exposition universelle de Paris de 1889, et initialement nommée « tour de 300 mètres », ce monument est devenu le symbole de la capitale française`,
        secdesc:`Encore plus de descprition`,
      },
      {
        id:2,
        img:`marseille_3.jpg`,
        desc:`Une préfiguration du musée du Louvre est imaginée en 1775-1776 par le comte d’Angivillier, directeur général des Bâtiments du roi, comme lieu de présentation des chefs-d’œuvre de la collection de la Couronne.`,
        secdesc:`Toujours plus de descprition`,
      },
      {
        id:3,
        img:`marseille_1.jpg`,
        desc:`Paris comporte 37 ponts au-dessus de la Seine. Cinq sont accessibles uniquement aux piétons, deux sont des ponts ferroviaires et deux comportent un étage ferroviaire et un étage pour la circulation automobile. Quatre relient l’Île Saint-Louis à l’une des rives, huit l’Île de la Cité et un relie les deux îles entre elles. La liste suivante recense ces ponts, d’amont en aval du fleuve, donc du sud-est vers le sud-ouest de la ville.`,
        secdesc:`Infiniment plus de descprition`,
      },
    ]
  },

  methods:{
    recherche: function(){
      this.page=!this.page;
    },
    selectedLog: function(id){
      if (this.num_log==5){
        this.num_log=this.log_marse[id].id;
      }
      else{
        this.num_log=5;
      }
    }
  }
})
