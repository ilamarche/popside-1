<template>
  <section id="concept" class="about-wrapper">
    <div class="container about-inner">
      <div class="about-desc">
        <div>
          <p class="big">
            Nous concevons des parcours numériques scénarisés, immersifs et
            interactifs, pour le patrimoine, l’industrie et l’éducation.
          </p>
          <p>
            Nous sommes convaincus que les technologies immersives sont une
            formidable opportunité pour interpeler votre audience. Dans un
            contexte où la production et la diffusion de contenus explose, nous
            créons des parcours atypiques, impactants et utiles.
          </p>
          <p>
            Nous concevons nos expériences comme de véritables sites
            web-documentaires, où la part d’immersion est traitée comme une
            invitation à mieux comprendre, à mieux percevoir, et à créer un lien
            avec l’usager.
          </p>
          <p>
            Nous conjuguons techniques de récit et savoir-faire digital, afin
            d’utiliser des technologies pertinentes et innovantes pour susciter
            l’émotion et marquer durablement vos cibles.
          </p>
        </div>
        <div class="shape-1"></div>
        <div class="shape-2"></div>
      </div>
      <div class="about-details">
        <ul class="about-list">
          <li class="about-list-item">
            <img
              class="about-list-item-svg"
              src="~/assets/img/creativite.svg"
              style="padding-bottom: 25px"
            />
            <div class="about-list-item-content">
              <h3 class="js-svg-wrapper about-list-item-title">Créativité</h3>
              <p>
                Nous développons des parcours sur mesure. Pas de proposition sur
                étagère en ce qui concerne la mise en récit, nos concepts sont
                singuliers, tout comme la direction artistique.
              </p>
            </div>
          </li>
          <li class="about-list-item">
            <img
              class="about-list-item-svg"
              src="~/assets/img/technologie.svg"
            />
            <div class="about-list-item-content">
              <h3 class="js-svg-wrapper about-list-item-title">Technologie</h3>
              <p>
                Nous déployons des concepts où les technologies immersives
                (Webgl) sont au service de l’histoire : 3D, 360°, réalité
                virtuelle, audio, vidéo, motion design, exclusivement en web.
              </p>
            </div>
          </li>
          <li class="about-list-item">
            <img
              class="about-list-item-svg"
              src="~/assets/img/interactivite.svg"
            />
            <div class="about-list-item-content">
              <h3 class="js-svg-wrapper about-list-item-title">
                Interactivité
              </h3>
              <p>
                Nous renforçons l’engagement des utilisateurs et dynamisons les
                relations avec vos audiences par l’interaction : récolte de
                feedback, viralité sur les réseaux sociaux ou encore gaming.
                L’utilisateur est résolument acteur dans la découverte.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="shape-3"></div>
    <div class="shape-4"></div>
    <div class="shape-5"></div>
    <div class="shape-6"></div>
    <div class="shape-7"></div>
    <div class="shape-8"></div>
    <div class="shape-9"></div>
    <div class="shape-10"></div>
    <div class="shape-11"></div>
  </section>
</template>

<style scoped lang="scss">
.shape {
  &-1 {
    position: absolute;
    height: 90px;
    width: 100vw;
    bottom: 0;
    right: 50%;
    border-top-right-radius: 90px;
    background-color: white;
  }
  &-2 {
    position: absolute;
    height: 40px;
    width: 40px;
    bottom: 75px;
    left: 75%;
    border-radius: 50%;
    background-color: white;
  }
}

@media (max-width: $desktop-small) {
  .about {
    &-desc {
      padding: 80px 0 160px 0;
    }
    &-details {
      padding: 80px 10% 160px 0;
    }
  }
}
@media (min-width: $desktop-large) {
  .about {
    &-desc {
      padding: 80px 10% 160px 0;
    }
  }
}

.shape {
  &-3 {
    position: absolute;
    height: 40px;
    width: 100vw;
    bottom: -20px;
    left: 75%;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    background-color: $secondary;
    z-index: 1;
  }
  &-4 {
    position: absolute;
    height: 25px;
    width: 100vw;
    bottom: 10px;
    left: 87.5%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: black;
    z-index: 1;
  }

  &-8 {
    position: absolute;
    height: 25px;
    width: 25px;
    bottom: -20px;
    right: 55%;
    background-color: $tertiary;
    transform: rotate(45deg);
    z-index: 1;
  }

  &-10 {
    position: absolute;
    height: 25px;
    width: 25px;
    bottom: -25px;
    left: 60%;
    background-color: $secondary;
    border-radius: 50%;
    z-index: 1;
  }
  &-11 {
    position: absolute;
    height: 35px;
    width: 35px;
    bottom: 20px;
    left: 67.5%;
    background-color: $tertiary;
    transform: rotate(45deg);
    z-index: 1;
  }
}

@media (max-width: $phone) {
    .shape {
        &-8{
            display: none;
        }
    }
}

</style>
