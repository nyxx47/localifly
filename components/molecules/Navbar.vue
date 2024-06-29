<template>
  <div class="wrapper">
    <!-- <div class="banner">
      <p class="up">info@localifly.com</p>

      <p>
        0877-7744-6340<img
          @click="copy"
          src="~/assets/icons/copy.svg"
          alt="svg"
        />
      </p>
    </div> -->
    <div class="main">
      <div class="col">
        <nuxt-link to="/">
          <img class="logo" src="~/assets/logo.svg" alt="localifly logo" />
        </nuxt-link>
        <div class="menus">
          <nuxt-link to="/">Home</nuxt-link>

          <div class="services">
            <p>Layanan</p>
            <img src="~assets/icons/arrow1.svg" alt="arrow-down" />
            <div class="menu-s">
              <nuxt-link to="/terjemahan-dokumen">Terjemahan Dokumen</nuxt-link>
              <nuxt-link to="/legalisasi">Legalisasi Dokumen</nuxt-link>
              <nuxt-link to="/proofreading">Proofreading</nuxt-link>
            </div>
          </div>
          <nuxt-link to="/faq">FAQ</nuxt-link>
          <nuxt-link to="/blog">Blog</nuxt-link>
          <nuxt-link to="/career" class="n-badge"
            >Become a Translator</nuxt-link
          >
        </div>
      </div>

      <div class="col">
        <div class="btn-h">
          <p>info@localifly.com</p>

          <Button
            to="https://wa.link/ktpzi4"
            target="_blank"
            icon="heroicons:arrow-up-right-20-solid"
            variant="secondary"
          >
            Whatsapp
          </Button>
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
    <div class="sidebar" :class="[isActive ? 'activeSidebar' : '']">
      <UVerticalNavigation
        :links="links"
        :ui="{
          wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
          base: 'group block border-s -ms-px leading-6 before:hidden',
          padding: 'p-0 ps-4',
          rounded: '',
          font: '',
          ring: '',
          active:
            'text-primary-500 dark:text-primary-400 border-current font-semibold',
          inactive:
            'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
        }"
      />

      <UButton
        label="Hubungi Kami"
        color="gray"
        to="https://wa.link/ktpzi4"
        target="_blank"
        block
        class="justify-between"
      >
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </template>
      </UButton>
    </div>
  </div>
</template>

<script setup>
const isActive = ref(false);
const toast = useToast();
const click = () => {
  Toggle(isActive);
};
const links = [
  {
    label: "Home",
    to: "/",
    click,
  },
  {
    label: "Terjemahan Dokumen",
    to: "/",
    click,
  },
  {
    label: "Legalisasi Dokumen",
    to: "/",
    click,
  },
  {
    label: "Proofreading",
    to: "/",
    click,
  },
  {
    label: "Karir",
    to: "/career",
    click,
  },
  {
    label: "Blog",
    to: "/blog",
    click,
  },
];

const copy = async () => {
  try {
    toast.add({ title: "Copied" });
    await navigator.clipboard.writeText("087777446340");
  } catch ($e) {
    console.log("Cannot copy");
  }
};

const Toggle = async (params) => {
  isActive.value = !params;
  const body = document.getElementsByTagName("body")[0];

  if (!params) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
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
        width: 50px;
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

          p {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 145%;
            letter-spacing: 0.26px;
            color: $TextPrimary;
          }

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
          @media only screen and (min-width: 601px) and (max-width: 1080px) {
            display: none;
          }
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

  .sidebar {
    display: none;
  }

  .activeSidebar {
    display: flex;
  }
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .wrapper {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    flex-direction: column;
    padding-bottom: 0;

    .banner {
      display: flex;
      background-color: $artboardBanner;
      padding-left: 20px;
      padding-right: 20px;
      height: 40px;
      justify-content: space-between;

      .up {
        font-size: 13px !important;
      }
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
        color: $TextWhite;
      }
    }
    .main {
      z-index: 100;
      background: white;
      // padding-top: 16px;
      padding-left: 20px;
      padding-right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      flex: auto;
      .col {
        .logo {
          width: 32px;
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
    .sidebar {
      height: 100dvh;
      position: fixed;
      background-color: white;
      top: 0;
      left: 0;
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 80px;
      padding-bottom: 2em;

      flex-direction: column;
      justify-content: space-between;
      gap: 24px;
    }
  }
}
</style>
