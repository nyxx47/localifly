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
          <!-- <OrganismsButton content="Learn More" type="secondary" /> -->
        </div>
        <div class="col">
          <img src="~/assets/icons/personal.svg" alt="perusahaan" />
          <h5>Pribadi</h5>
          <p>
            Jasa translate tersumpah (sworn translation) KTP, paspor, KK, akta
            lahir, surat kenal lahir, akta kawin, buku nikah, SKCK, dll
          </p>
          <!-- <OrganismsButton content="Learn More" type="secondary" /> -->
        </div>
        <div class="col">
          <img src="~/assets/icons/akademik.svg" alt="perusahaan" />
          <h5>Akademik</h5>
          <p>
            Jasa penerjemah tersumpah ijazah, transkrip nilai, SKHUN, rapor,
            sertifikat, kartu siswa, surat keterangan sehat, skripsi, tesis,
            dll.
          </p>
          <!-- <OrganismsButton content="Learn More" type="secondary" /> -->
        </div>
      </div>
    </div>
    <div class="section-3">
      <div class="box-wrapper">
        <h2>Bahasa yang tersedia</h2>
        <p>
          Kami menyediakan 5 bahasa yang dapat di terjemahkan ke dalam bahasa
          <br />
          Indonesia oleh 5 penerjemah kami yang profesional untuk setiap proyek
          Anda.
        </p>
        <div class="languages">
          <div class="language">
            <div class="col">
              <img src="@/assets/images/jp.svg" alt="bahasa jepang" />
              <p>Japanese</p>
              <div class="badge unavailable"><p>Full Booked</p></div>
            </div>
          </div>
          <!-- <div class="language">
            <div class="col">
              <img src="@/assets/images/itali.svg" alt="bahasa itali" />
              <p>Italia</p>
              <div class="badge unavailable"><p>Full Booked</p></div>
            </div>
          </div> -->
          <div class="language">
            <div class="col">
              <img src="@/assets/images/mandarin.svg" alt="bahasa mandarin" />
              <p>Mandarin</p>
              <div class="badge unavailable"><p>Full Booked</p></div>
            </div>
          </div>
          <div class="language">
            <div class="col">
              <img src="@/assets/images/uk.svg" alt="bahasa inggris" />
              <p>English</p>
              <div class="badge available"><p>Available</p></div>
            </div>
          </div>
          <div class="language">
            <div class="col">
              <img src="@/assets/images/dutch.svg" alt="bahasa belanda" />
              <p>Belanda</p>
              <div class="badge available"><p>Available</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-4">
      <div class="s-header">
        <h2>5-Step Quality Kontrol Kami</h2>
        <p>
          Kami menawarkan lifetime guarantee di semua layanan terjemahan kami.
          Ini karena kami sangat yakin dengan proses jaminan kualitas 5 langkah
          kami yang memberikan terjemahan akurat 100%, setiap saat.
        </p>
      </div>
      <div class="lottie-wrapper">
        <client-only>
          <Vue3Lottie
            :animationData="LottieDesktop"
            height="100%"
            width="100%"
            :scale="1"
          />
        </client-only>
      </div>
    </div>
    <MoleculesFooter />
  </div>
</template>
<script setup>
useHead({
  title: "Localifly | Penerjemahan",
  meta: [
    {
      name: "description",
      content:
        "Layanan untuk setiap bisnis, organisasi, atau individu dengan berpengalaman dalam penerjemahan semua jenis dokumen.",
    },
  ],
});
</script>

<script>
import LottieDesktop from "@/assets/lottiefiles/workflow_desktop.json";

export default {
  data() {
    return {
      LottieDesktop: LottieDesktop,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  // SECTION-4
  .section-4 {
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 56px;
    justify-content: center;
    padding-top: 8em;
    padding-bottom: 8em;
    .s-header {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      h2 {
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        letter-spacing: 0.72px;
        color: #293237;
        width: 50%;
        text-align: center;
      }

      p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.26px;
        color: #708089;
        width: 70%;
        text-align: center;
      }
    }

    .lottie-wrapper {
      .lottie-animation-container {
      }
    }
  }

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

  // SECTION #3
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
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;

        .language {
          display: flex;
          width: 50%;
          padding: 12px;
          transition: 0.6s ease;
          max-width: 150px;

          .col {
            flex-direction: row;
            align-items: center;
            width: 100%;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding: 12px;
            background-color: $ArtboardSurface;

            &:hover {
              box-shadow: -5px 15px 40px 0px rgba(41, 50, 55, 0.05);
            }

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

            .badge {
              width: 100%;
              padding: 4px 12px;

              border-radius: 6px;
              p {
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 19.5px */
                letter-spacing: 0.26px;
              }
            }

            .unavailable {
              background-color: $ArtboardSurfaceVariant;
              p {
                color: $TextSecondary;
                text-align: center;
              }
            }

            .available {
              background-color: $artboardLightGreen;
              p {
                text-align: center;
                color: $TextGreen;
              }
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
          // flex-direction: column;
        }
      }
    }

    .section-4 {
      .s-header {
        h2 {
          font-size: 24px;
          width: 80%;
        }

        p {
          width: 90%;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
