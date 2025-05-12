<template>
  <div class="border border-t w-full px-1 text-justify">
    <h2 class="text-xl font-bold mb-2">Colt Express</h2>

    <!-- / ecrit en français l'objectif de ce jeu -->
    <section>
      <p class="Introduction">
        L'objectif du jeu est de devenir le bandit le plus riche en volant des trésors et
        en évitant d'être capturé par le shérif ou d'être attaqué par d'autres bandits.
      </p>
      <p class="Introduction">
        Le jeu se joue de 2 à 6 joueurs et dure environ 30 à 60 minutes.
      </p>
    </section>


    <section>
      <h3>Une partie se déroule en 5 manches. À chaque manche, deux phases de jeu :</h3>
      <ul>
        <li>
          Phase 1 : Les joueurs choisissent secrètement leurs cartes Action et les placent
          face cachée sur la pile de cartes Action.
        </li>
        <li>
          Phase 2 : Les joueurs révèlent leurs cartes Action et les résolvent dans l'ordre
          de la pile de cartes Action.
        </li>
      </ul>

      <img src="https://www.data.ludonaute.fr/Colt_Express/WEBSITE/carte116.png" class="w-96 mx-auto"/>
    </section>
  </div>

  <section
    id="actions"
    class="container grid grid-cols-[1fr_10rem] md:grid-cols-[150px_1fr_150px_1fr_150px_1fr] gap-4 mt-4 "
  >
    <img src="https://www.data.ludonaute.fr/Colt_Express/WEBSITE/carte_Avancer.png" />
    <div>
      <h4>Avancer</h4>
      <p>
        Bouger votre pion d’un wagon à l’intérieur du train, ou de un à trois wagons sur
        le toit
      </p>
    </div>

    <img
      src="https://www.data.ludonaute.fr/Colt_Express/WEBSITE/carte_Chagementdetage.png"
    />
    <div>
      <h4>Changer d’étage</h4>
      <i> Monter sur le toit ou descendre dans le wagon</i>
    </div>
    <img src="https://www.data.ludonaute.fr/Colt_Express/WEBSITE/carte_Coupdepoing.png" />
    <div>
      <div>
        <h4>Coup de poing</h4>
        <i
          >Faire reculer un bandit depuis son wagon vers un wagon adjacent, et lui faire
          perdre un butin</i
        >
      </div>
    </div>

    <img src="https://www.data.ludonaute.fr/Colt_Express/WEBSITE/carte_Tirer.png" />
    <div>
      <h4>Tirer</h4>

      <p>
        <i style="font-weight: inherit"
          >Donner une carte balle à un bandit présent dans un wagon adjacent ou dans la
          ligne de vue sur le toit</i
        >
      </p>
    </div>
    <img src="https://www.data.ludonaute.fr/Colt_Express/WEBSITE/carte_Voler.png" />

    <div>
      <h4>Voler</h4>

      <p><i>Prendre un butin dans le train</i></p>
    </div>
    <img src="https://www.data.ludonaute.fr/Colt_Express/WEBSITE/carte_Marshal.png" />
    <div>
      <h4>Déplacer le Marshal</h4>

      <p>
        <i
          >Bouger le Marshal d’un wagon. S’il rencontre un bandit, ce dernier reçoit une
          carte balle neutre</i
        >
      </p>
    </div>
    <img src="https://www.ludonaute.fr/wp-content/uploads/2015/08/carte7-e1440571728774-214x300.png" />
    <div>
      <h4>monter à cheval</h4>

      <p><i>
        1) le cheval doit être sur le même wagon que le bandit.
        2) Le bandit doit être sur le toit du train pour monter à cheval.Déplacement de 0,1,2 ou 3 wagons
        3) le bandit monte ç l'intérieur du wagon ou la diligence.
      </i>
      </p>
    </div>
    <img src="https://www.data.ludonaute.fr/Colt_Express/WEBSITE/carte30.png" />

    <div class="wpb_column columns small-12 medium-6">
      <div class="wpb_wrapper"><strong>Les blessures</strong></div>
      <p id="u4553-5">
        Lorsqu’un bandit est blessé par un autre bandit ou par le Marshall, le joueur
        reçoit une carte Blessure qu’il ajoute à son paquet de cartes Action. Ces cartes
        Blessure sont des cartes « mortes » qui vont le handicaper car elles diluent son
        jeu.
      </p>
    </div>
  </section>
 <section id="vehicules" class="grid grid-cols-[1fr_10rem] md:grid-cols-[150px_1fr] gap-4 mt-4">
    <img src="https://www.ludonaute.fr/wp-content/uploads/2015/08/dili-1024x576.png">
    <div>
    <p>
    Diligence
    </p>
<i>
1) accessible depuis un wagon adjacent ou d'un cheval
2) le bandit prend un otage si il penetre dans la diligence et n'en n'a pas
3) un bandit peut tirer  sur n'importe quel wagon du train (et peut être visé par n'importe quel joueurs sur le train)
4) Le shotGun libère la valise si on lui donne un coup de poing (qui est alors expulsé vers le toit du wagon).  On ne peut plus alors être sur  la meme place que le shotgun (on recoit une balle et on doit bouger) 
5) A la fin de la manche, la dilligence se déplace d'une d'un wagon vers la queue du train</i>
    </div>

 </section>
  <section id="finDePartie">
  <h3>Fin de partie</h3>
    <p>
      Chacun compte son butin. Le bandit ayant le plus blessé ses adversaires devient<span
        id="u4553-43"
        >&nbsp;As de la gâchette&nbsp;</span
      >et gagne 1,000$ supplémentaires. Le plus riche est déclaré vainqueur.
    </p>
  </section>

  <section id="personnages">
    <h3>Personnages</h3>
    <p>Chaque personnage a une capacité spéciale qui lui est propre.</p>
    <img src="https://www.data.ludonaute.fr/Colt_Express/WEBSITE/colt_express_perso.png" />
    </section>


<section id="miseEnPlace" class="text-left ">
<h3>7 joueurs</h3>
<ul>
<li>
1 carte personnage par joueur
les cartes de sa couleur
</li>
<li>
autant de wagon que de joueurs
</li>
<li> wagon circus : où on veut</li>
<li> wagon pompe devant la locomotive</li>
<li>marshall + cagnotte sur la locomotive</li>
<li>4 cartes Manches + 1 fin de partie</li>
<li>dilligence à hauteur de la locomotive + valise + shotgun</li>
<li>1 whisky dans chaque wagon sauf dans la locomotive</li>
<li>8 otages face visible</li>
<li>Bandits sur les chevaux + alterner les restants sur les 2 derniers wagons
<i>Ceux à cheval monteront librement sur le train (STOP ou encore)</i>
</li>
<li>1er joueur parmi les wagons de fin</li>
</ul>
</section>

</template>
<script setup lang="ts"></script>
<style lang="css" scoped>
h3 {
  @apply font-semibold underline decoration-blue-400;
}
.Introduction {
  font-size: 1.2em;
  margin-bottom: 1em;
}
.list-disc {
  list-style-type: disc;
}
li {
@apply list-disc ml-6;
 }
</style>
