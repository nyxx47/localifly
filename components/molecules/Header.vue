<template>
  <div class="wrapper">
    <div class="main">
      <div class="badge">Your Trusted Translation Partner</div>
      <h1>Jasa Penerjemah Profesional Untuk Kamu</h1>
      <p>
        Layanan untuk setiap bisnis, organisasi, atau individu dengan
        berpengalaman dalam penerjemahan semua jenis dokumen.
      </p>
    </div>
    <OrganismsButton content="Hubungi." :icon="true" type="primary" />
    <img class="hero-img" src="~/assets/images/hero.png" alt="hero" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: $ArtboardSurfaceVariant;
  width: 100%;
  height: 900px;
  padding-top: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;

  .hero-img {
    position: absolute;
    bottom: 0;
    width: 50%;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    .badge {
      border-radius: 32px;
      border: 1px solid $ArtboardPeriwinkle;
      padding: 6px 12px;
      width: fit-content;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 16.5px */
      letter-spacing: 0.22px;
      color: $TextPeriwinkle;
    }

    h1 {
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 62.4px */
      letter-spacing: 0.96px;
      width: 80%;
      text-align: center;
      color: $TextPrimary;
    }

    p {
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 19.5px */
      letter-spacing: 0.26px;
      text-align: center;
      width: 50%;
      color: $TextSecondary;
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .wrapper {
    height: 650px;
    padding-top: 6em;
    .main {
      padding-left: 20px;
      padding-right: 20px;

      .badge {
        font-size: 11px;
      }

      h1 {
        font-size: 24px;
        width: 90%;
      }

      p {
        width: 100%;
      }
    }

    .hero-img {
      width: 80%;
    }
  }
}
</style>
