<template>
  <section class="bg-white uses-wrapper">
    <div class="container">
      <h2 class="uses-title">Nos Réalisations</h2>
      <ul class="uses-list">
        <li class="uses-list-item">
          <img src="~/assets/img/musee.jpg" alt="" />
          <h3 class="uses-list-item-title">Patrimoine</h3>
          <p>
            Par des capsules 360° enrichies, nous donnons vie et voix aux murs,
            afin d’embarquer le visiteur dans une découverte spatio-temporelle
            inédite.
          </p>
        </li>
        <li class="uses-list-item">
          <img src="~/assets/img/territoire.jpg" alt="" />
          <h3 class="uses-list-item-title">Industrie</h3>
          <p>
            Nous valorisons sites ou procédés industriels avec singularité, pour
            émerger auprès vos prospects (outil d’aide à la vente, salons, site
            web).
          </p>
        </li>
        <li class="uses-list-item">
          <img src="~/assets/img/marque.jpg" alt="" />
          <h3 class="uses-list-item-title">Education / médiation</h3>
          <p>
            Nous acompagnons les équipes de recherche, pour faire découvrir la
            science autrement, en 3D et en 360°, auprès de publics larges.
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
  </section>
</template>

<style scoped lang="scss">
.shape {
  &-1 {
    position: absolute;
    height: 40px;
    width: 100vw;
    bottom: -20px;
    left: 75%;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    background-color: $secondary;
  }
  &-2 {
    position: absolute;
    height: 25px;
    width: 100vw;
    bottom: 10px;
    left: 87.5%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: black;
  }

  &-3 {
    position: absolute;
    height: 60px;
    width: 100vw;
    bottom: 15px;
    right: 77.5%;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    background-color: $tertiary;
  }

  &-4 {
    position: absolute;
    height: 30px;
    width: 100vw;
    bottom: -5px;
    right: 95.5%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: black;
  }

  &-5 {
    position: absolute;
    height: 70px;
    width: 70px;
    bottom: -10px;
    right: 67.5%;
    background-color: $secondary;
    border-radius: 50%;
  }

  &-6 {
    position: absolute;
    height: 25px;
    width: 25px;
    bottom: -20px;
    right: 55%;
    background-color: $tertiary;
    transform: rotate(45deg);
  }

  &-7 {
    position: absolute;
    height: 30px;
    width: 30px;
    bottom: -5px;
    right: 50%;
    background-color: transparent;
    border: 2px solid $secondary;
    transform: rotate(45deg);
  }
  &-8 {
    position: absolute;
    height: 25px;
    width: 25px;
    bottom: -25px;
    left: 60%;
    background-color: $secondary;
    border-radius: 50%;
  }
  &-9 {
    position: absolute;
    height: 35px;
    width: 35px;
    bottom: 20px;
    left: 67.5%;
    background-color: $tertiary;
    transform: rotate(45deg);
  }
}

@media (max-width: $desktop) {
    .shape {
        &-7{
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
        &-6{
            display: none;
        }
        &-5{
            right: 55.5%;
        }
    }
}
</style>
