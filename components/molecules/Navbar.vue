<template>
  <div class="wrapper">
    <div class="col">
      <img class="logo" src="~/assets/logo.svg" alr="transiago logo" />
    </div>
    <div class="col">
      <div class="menus">
        <div class="menu">Home</div>
        <div class="menu">
          Layanan <img src="~assets/icons/arrow1.svg" alt="arrow-down" />
        </div>
        <div class="menu">FAQ</div>
        <div class="menu">Blog</div>
      </div>
    </div>
    <div class="col">
      <div class="btn-h">
        <OrganismsButton content="Sign In" type="tertiary" />
        <OrganismsButton content="Sign Up" type="secondary" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 72px 16px 72px;
  position: fixed;
  background-color: $ArtboardSurface;
  width: 100%;

  .col {
    display: flex;
    align-items: center;

    .logo {
      width: 95%;
    }

    .menus {
      display: flex;
      gap: 24px;
      .menu {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 19.5px */
        letter-spacing: 0.26px;
      }
    }
  }
}
</style>
