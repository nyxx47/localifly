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
    <div class="section-2">
      <h2>Spesialisasi terjemahan bahasa kami</h2>
      <div class="wrap">
        <div class="col">
          <img src="~/assets/icons/company.svg" alt="perusahaan" />
          <h5>Perusahaan</h5>
          <p>
            Terjemahan tersumpah akta pendirian, Izin Prinsip, SIUP, TDP, NPWP,
            laporan keuangan, perjanjian (agreements) dll.
          </p>
          <OrganismsButton content="Learn More" type="secondary" />
        </div>
        <div class="col">
          <img src="~/assets/icons/personal.svg" alt="perusahaan" />
          <h5>Pribadi</h5>
          <p>
            Jasa translate tersumpah (sworn translation) KTP, paspor, KK, akta
            lahir, surat kenal lahir, akta kawin, buku nikah, SKCK, dll
          </p>
          <OrganismsButton content="Learn More" type="secondary" />
        </div>
        <div class="col">
          <img src="~/assets/icons/akademik.svg" alt="perusahaan" />
          <h5>Akademik</h5>
          <p>
            Jasa penerjemah tersumpah ijazah, transkrip nilai, SKHUN, rapor,
            sertifikat, kartu siswa, surat keterangan sehat, skripsi, tesis,
            dll.
          </p>
          <OrganismsButton content="Learn More" type="secondary" />
        </div>
      </div>
    </div>
    <div class="section-3">
      <div class="box-wrapper">
        <h2>Bahasa yang tersedia</h2>
        <p>
          Kami menyediakan 2 bahasa dari 10+ penerjemah berkualitas untuk proyek
          Anda.
        </p>
        <div class="languages">
          <div class="language">
            <div class="col">
              <img src="@/assets/images/jp.svg" alt="bahasa jepang" />
              <p>Japanese</p>
            </div>
            <img src="@/assets/icons/vv.svg" alt="vice versa" />
            <div class="col">
              <img src="@/assets/images/indonesia.svg" alt="bahasa indonesia" />
              <p>Indonesian</p>
            </div>
          </div>
          <div class="language">
            <div class="col">
              <img src="@/assets/images/uk.svg" alt="bahasa inggris" />
              <p>English</p>
            </div>
            <img src="@/assets/icons/vv.svg" alt="vice versa" />
            <div class="col">
              <img src="@/assets/images/indonesia.svg" alt="bahasa indonesia" />
              <p>Indonesian</p>
            </div>
          </div>
        </div>
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

  // SECTION #3

  // SECTION #1
  .section-1 {
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 72px;
    padding-right: 72px;
    padding-top: 15em;
    padding-bottom: 15em;
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

  // SECTION #2
  .section-2 {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1440px;
    padding-left: 72px;
    padding-right: 72px;
    padding-top: 5em;
    padding-bottom: 15em;
    align-items: center;
    gap: 24px;
    h2 {
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 46.8px */
      letter-spacing: 0.72px;
      color: $TextPrimary;
      width: 50%;
      text-align: center;
    }

    .wrap {
      display: flex;
      flex-direction: row;
      gap: 32px;
      border: 1px solid #e8ebee;
      border-radius: 16px;
      padding: 32px;

      .col {
        display: flex;
        flex-direction: column;
        gap: 16px;
        img {
          width: fit-content;
          margin-bottom: 0.5em;
        }

        p {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 19.5px */
          letter-spacing: 0.26px;
        }
      }
    }
  }

  .section-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    padding-left: 72px;
    padding-right: 72px;
    width: 100%;
    margin-bottom: 5em;
    .box-wrapper {
      border-radius: 16px;
      background-color: $ArtboardSurfaceVariant;
      display: flex;
      padding: 56px 0px;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      align-self: stretch;
      width: 100%;

      h2 {
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        letter-spacing: 0.72px;
        color: #293237;
        width: 50%;
        text-align: center;
        color: $TextPrimary;
      }

      p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.26px;
        color: $TextSecondary;
      }

      .languages {
        margin-top: 2.5em;
        display: flex;
        flex-direction: row;
        gap: 32px;

        .language {
          background-color: $ArtboardSurface;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 24px 32px;
          border-radius: 16px;
          gap: 24px;
          transition: 0.6s ease;

          &:hover {
            box-shadow: -5px 15px 40px 0px rgba(41, 50, 55, 0.05);
          }

          .col {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;

            img {
              width: 56px;
            }

            p {
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%; /* 19.5px */
              letter-spacing: 0.26px;
              color: $TextSecondary;
            }
          }
        }
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

    .section-2 {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 8em;
      padding-bottom: 8em;
      height: fit-content;

      h2 {
        width: 100%;
        text-align: center;
        font-size: 24px;
      }

      .wrap {
        flex-direction: column;
      }
    }

    .section-3 {
      padding-left: 20px;
      padding-right: 20px;
      .box-wrapper {
        padding: 32px 20px;
        text-align: center;

        h2 {
          font-size: 24px;
          width: 80%;
        }
        .languages {
          flex-direction: column;
        }
      }
    }
  }
}
</style>
