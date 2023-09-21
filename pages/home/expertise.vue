<template>
    <section id="expertise" class="bg-white expertise-wrapper">
        <div class="expertise-tags" id="tags">
            <ul class="expertise-tags-list js-tags">
                <li class="expertise-tag">Conception de parcours transmédia</li>
                <li class="expertise-tag">Design</li>
                <li class="expertise-tag">Gestion de projets</li>
                <li class="expertise-tag">Déploiement</li>
                <li class="expertise-tag">Technologies 360° et 3D interactives</li>
                <li class="expertise-tag">Maintenance</li>
                <li class="expertise-tag">Production de contenus multimédias</li>
                <li class="expertise-tag">Développement technologique</li>
                <li class="expertise-tag">Conseil stratégique</li>
            </ul>
        </div>

        <div class="container">
            <h2 class="expertise-title">Nos expertises</h2>

            <ul class="expertise-list">
                <li class="expertise-list-item js-shape-wrapper" id="shape-circle">
                    <img src="~/assets/img/strat-editoriale.svg">
                    <h3 class="expertise-list-item-title">Stratégie éditoriale</h3>
                    <p>
                        Nous intervenons en amont : analyse d’audience, de canaux, et d’objectif, pour avoir une réponse
                        créative pertinente et adaptée.
                    </p>
                </li>
                <li class="expertise-list-item js-shape-wrapper" id="shape-arcs">
                    <img src="~/assets/img/production.svg">
                    <h3 class="expertise-list-item-title">Production de contenus</h3>
                    <p>
                        Captation 360° ou VR, manipulation 3D : nous incrustons des contenus multimédias pluriels et adaptés
                        au récit : son, image, vidéo, motion design...
                    </p>
                </li>
                <li class="expertise-list-item js-shape-wrapper" id="shape-oval">
                    <img src="~/assets/img/diffusion.svg">
                    <h3 class="expertise-list-item-title">Diffusion numérique</h3>
                    <p>
                        Nous développons nos parcours dans le web afin de garantir la diffusion sur tous devices et
                        faciliter l’interopérabilité. L’accès à un parcours se fait en 1 clic.
                    </p>
                </li>
            </ul>
        </div>
        <div class="shape-1"></div>
        <div class="shape-2"></div>
        <div class="shape-3"></div>
        <div class="shape-4"></div>
        <div class="shape-5"></div>
        <div class="shape-6"></div>
        <div class="shape-7"></div>
        <div class="shape-8"></div>
        <div class="shape-9"></div>
        <div class="shape-10"></div>
    </section>
</template>

<style scoped lang="scss">
.shape {
  &-1 {
    position: absolute;
    height: 90px;
    width: 100vw;
    bottom: -90px;
    left: 75%;
    border-bottom-left-radius: 90px;
    background-color: $secondary;
  }

  &-2 {
    position: absolute;
    height: 45px;
    width: 100vw;
    bottom: 80px;
    left: 87.5%;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    background-color: black;
  }

  &-3 {
    position: absolute;
    height: 30px;
    width: 100vw;
    bottom: 30px;
    left: 95.5%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: black;
  }

  &-4 {
    position: absolute;
    height: 60px;
    width: 100vw;
    bottom: 80px;
    right: 77.5%;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    background-color: $tertiary;
  }

  &-5 {
    position: absolute;
    height: 40px;
    width: 40px;
    bottom: 60px;
    right: 67.5%;
    background-color: $tertiary;
    transform: rotate(45deg);
  }

  &-6 {
    position: absolute;
    height: 40px;
    width: 40px;
    bottom: 40px;
    right: 55%;
    background-color: white;
    border: 2px solid $tertiary;
    border-radius: 50%;
  }

  &-7 {
    position: absolute;
    height: 30px;
    width: 30px;
    bottom: -5px;
    right: 50%;
    background-color: $secondary;
    transform: rotate(45deg);
  }
  &-8 {
    position: absolute;
    height: 80px;
    width: 80px;
    bottom: -20px;
    left: 65%;
    background-color: $tertiary;
    border-radius: 50%;
  }
  &-9 {
    position: absolute;
    height: 30px;
    width: 30px;
    bottom: 60px;
    left: 77.5%;
    background-color: $secondary;
    border-radius: 50%;
  }
  &-10 {
    position: absolute;
    height: 20px;
    width: 20px;
    bottom: 20px;
    left: 82.5%;
    border: 2px solid $secondary;
    transform: rotate(45deg);
  }
}

@media (max-width: $desktop) {
    .shape {
        &-6{
            display: none;
        }
        &-9{
            display: none;
        }
    }
}

@media (max-width: $desktop-small) {
    .shape {
        &-5{
            right: 62.5%;
        }
    }
}

@media (max-width: $phone) {
    .shape {
        &-8{
            display: none;
        }
        &-5{
            right: 57.5%;
        }
        &-7{
            right: 37.5%;
        }
    }
}
</style>