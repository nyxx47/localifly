<template>
  <div class="wrapper">
    <div class="main">
      <div class="menus">
        <NuxtLink to="/"> Home </NuxtLink>
        <NuxtLink to="/career"> Karir </NuxtLink>
        <NuxtLink to="/"> FAQ </NuxtLink>
        <NuxtLink to="/" class="contact"> Kontak Kami </NuxtLink>
        <NuxtLink to="/"> Privasi </NuxtLink>
      </div>
      <div class="divider"></div>
      <p>Copyright © 2022 All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8em;
  padding-bottom: 8em;
  background-color: $ArtboardSurfaceVariant;
  width: 100%;
  border-top: 1.5px solid $ArtboardBorder;

  .main {
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    width: 50%;

    .menus {
      display: flex;
      gap: 32px;
      flex-wrap: wrap;
      a {
        color: $TextPrimary;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
      }
    }

    .divider {
      background-color: $ArtboardBorder;
      width: 100%;
      height: 1px;
    }

    p {
      color: $TextSecondary;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .wrapper {
    padding-top: 3em;
    padding-bottom: 3em;
    .main {
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      .menus {
        justify-content: center;

        .contact {
          display: none;
        }
      }

      p {
        font-size: 12px;
      }
    }
  }
}
</style>
