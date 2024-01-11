<template>
  <div class="wrapper">
    <div class="banner">
      <p>info@localifly.com</p>
      <p>(+62)877-7744-6340<img src="~/assets/icons/copy.svg" alt="svg" /></p>
    </div>
    <div class="main">
      <div class="col">
        <img class="logo" src="~/assets/logo.svg" alt="localifly logo" />
        <div class="menus">
          <nuxt-link to="/">Home</nuxt-link>

          <div class="services">
            Services
            <img src="~assets/icons/arrow1.svg" alt="arrow-down" />
            <div class="menu-s">
              <nuxt-link to="/document-translation"
                >Document Translation</nuxt-link
              >
              <nuxt-link to="/proofreading">Proofreading</nuxt-link>
            </div>
          </div>
          <nuxt-link to="/faq">FAQ</nuxt-link>
          <nuxt-link to="/career" class="n-badge"
            >Become a Translator</nuxt-link
          >
        </div>
      </div>

      <div class="col">
        <div class="btn-h">
          <p>info@localifly.com</p>
          <OrganismsButton
            content="Whatsapp"
            type="secondary"
            to="/test"
            target="_blank"
          />
        </div>
        <div
          class="m-menu"
          :class="{ 'menu-open': isActive }"
          @click="Toggle(isActive)"
        >
          <svg class="m-menu-icon">
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              class="top"
              shape-rendering="crispEdges"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              class="middle"
              shape-rendering="crispEdges"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              class="bottom"
              shape-rendering="crispEdges"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isActive = ref(false);

const Toggle = async (params) => {
  isActive.value = !params;
  console.log(isActive);
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 16px 72px 16px 72px;
  position: fixed;
  background-color: $ArtboardSurface;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;

  .banner {
    display: none;
  }

  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    flex: 1;
    .col {
      display: flex;
      align-items: center;
      gap: 56px;

      .logo {
        width: 100px;
      }

      .btn-h {
        p {
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 19.5px */
          letter-spacing: 0.26px;
        }
      }

      .m-menu {
        display: none;
      }

      .menus {
        display: flex;
        gap: 32px;

        .services {
          position: relative;
          display: flex;
          align-items: center;

          .menu-s {
            position: absolute;
            background: white;
            padding: 12px 16px;
            border-radius: 8px;
            width: max-content;
            top: 2em;
            border: 1px solid $ArtboardBorder;
            z-index: 10;
            display: none;
            flex-direction: column;
            gap: 6px;
          }
        }

        .services:hover > .menu-s {
          display: flex;
        }

        a {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 145%; /* 19.5px */
          letter-spacing: 0.26px;
          color: $TextPrimary;
        }

        .n-badge {
          background-color: $ArtboardSurfaceEmphasis;
          padding: 6px 12px;
          border-radius: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 145%; /* 19.5px */
          letter-spacing: 0.26px;
          width: max-content;
          color: $TextPrimary;
        }
      }

      // Menu Animation

      .m-menu-icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: scaleX(-1);
      }

      .m-menu-icon line {
        stroke: #192a6b;
        stroke-dasharray: 100%;
        stroke-dashoffset: 0%;
        transition: transform 0.3s, stroke-dashoffset 0.4s;
        transform-origin: center;
        stroke-width: 2px;
      }

      .m-menu-icon .top {
        transform: translateY(-35%);
        -webkit-transform: translateY(-35%);
        -moz-transform: translateY(35%);
        -ms-transform: translateY(35%);
        -o-transform: translateY(35%);
      }

      .m-menu-icon .middle {
        transform: scaleX(1);
        -webkit-transform: scaleX(1);
        -moz-transform: scaleX(1);
        -ms-transform: scaleX(1);
        -o-transform: scaleX(1);
        transition: opacity 0.3s, transform 0.3s;
        -webkit-transition: opacity 0.3s, transform 0.3s;
        -moz-transition: opacity 0.3s, transform 0.3s;
        -ms-transition: opacity 0.3s, transform 0.3s;
        -o-transition: opacity 0.3s, transform 0.3s;
      }

      .m-menu-icon .bottom {
        transform: translateY(33%);
        -webkit-transform: translateY(33%);
        -moz-transform: translateY(33%);
        -ms-transform: translateY(33%);
        -o-transform: translateY(33%);
        stroke-dasharray: 100%;
        stroke-dashoffset: 9px;
      }
      // .m-menu-icon:hover .bottom {
      //   stroke-dashoffset: 0%;
      // }

      /*** Mode Croix ***/
      .m-menu.menu-open .m-menu-icon .top {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        stroke-linecap: round;
      }

      .m-menu.menu-open .m-menu-icon .middle {
        transform: scaleX(0.1);
        -webkit-transform: scaleX(0.1);
        -moz-transform: scaleX(0.1);
        -ms-transform: scaleX(0.1);
        -o-transform: scaleX(0.1);
        opacity: 0;
      }

      .m-menu.menu-open .m-menu-icon line.bottom {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        stroke-linecap: round;
      }

      .m-menu.menu-open .m-menu-icon .bottom {
        stroke-dashoffset: 0%;
      }
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .wrapper {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    flex-direction: column;

    .banner {
      display: flex;
      background-color: $artboardBanner;
      padding: 10px 20px;
      justify-content: space-between;
      p {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.26px;
        color: $TextWhite;
        display: flex;
        align-items: center;
        gap: 6px;
      }
    }
    .main {
      padding-top: 16px;
      padding-left: 20px;
      padding-right: 20px;
      .col {
        .logo {
          width: 100%;
        }
        .menus {
          display: none;
        }

        .btn-h {
          display: none;
          p {
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 19.5px */
            letter-spacing: 0.26px;
          }
        }

        .m-menu {
          display: flex;
        }
      }
    }
  }
}
</style>
