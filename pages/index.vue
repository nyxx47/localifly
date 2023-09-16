<template>
  <div class="wrapper">
    <MoleculesHeader />
    <div class="section-1">
      <div class="col">
        <img
          src="~/assets/images/illustration-1.svg"
          alt="transiago illustration"
        />
      </div>
      <div class="col">
        <h2>Terjemahan <br />Profesional Sesuai <br />Permintaan</h2>
        <p>
          Kami menawarkan penerjemah yang mencakup 2 bahasa inggris dan jepang,
          dengan keahlian dalam negeri dan pengetahuan khusus untuk Legalisasi
          Dokumen, Terjemahan tersumpah, dan Proofreading.
        </p>
      </div>
    </div>
    <MoleculesFooter />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .section-1 {
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 72px;
    padding-right: 72px;
    height: 800px;
    align-items: center;
    gap: 24px;
    .col {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      h2 {
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 46.8px */
        letter-spacing: 0.72px;
        color: $TextPrimary;
        width: 70%;
      }

      p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 19.5px */
        letter-spacing: 0.26px;
        color: $TextSecondary;
        width: 70%;
      }
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .wrapper {
    .section-1 {
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 8em;
      padding-bottom: 8em;
      height: fit-content;
      .col {
        img {
          width: 100%;
        }

        h2 {
          width: 100%;
          text-align: center;
          font-size: 24px;
        }

        p {
          width: 90%;
          text-align: center;
        }
      }
    }
  }
}
</style>
