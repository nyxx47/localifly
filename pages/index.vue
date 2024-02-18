<template>
  <div class="wrapper">
    <Header />
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
          Indonesia oleh 5 penerjemah <br />
          kami yang profesional untuk setiap proyek Anda.
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
      <div class="lottie-wrapper" v-if="$device.isDesktop">
        <client-only>
          <Vue3Lottie
            :animationData="LottieDesktop"
            height="100%"
            width="100%"
            :scale="1"
          />
        </client-only>
      </div>
      <div class="lottie-wrapper" v-else>
        <client-only>
          <Vue3Lottie
            :animationData="LottieMobile"
            height="100%"
            width="100%"
            :scale="1"
          />
        </client-only>
      </div>
    </div>
    <div class="section-5">
      <div class="s-header">
        <h2>FAQ</h2>
        <p>Kami menjawab semua pertanyaan Anda</p>
      </div>
      <div class="faq-wrapper">
        <div class="faq" v-for="(item, index) in faq" :key="index">
          <div class="faq-btn" @click="ToggleFaq(item.id)">
            <h2>{{ item.title }}</h2>
            <img
              src="~/assets/icons/chevron-down.svg"
              :class="{ isRotate: item.isOpen }"
              alt="chevron-down"
            />
          </div>
          <div class="faq-content" :class="{ isShow: item.isOpen }">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div class="box-wrapper">
        <div class="wrap">
          <img src="~/assets/images/avatars.svg" alt="avatars" />
          <h2>Masih Punya Pertanyaan?</h2>
          <p>
            Tidak dapat menemukan jawaban yang Anda cari? Silakan hubungi dengan
            tim kami.
          </p>
        </div>
        <Button
          to="https://wa.link/ktpzi4"
          target="_blank"
          icon="heroicons:arrow-up-right-20-solid"
          variant="primary"
        >
          Hubungi Kami
        </Button>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script setup>
const { isMobile } = useDevice();
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

const faq = ref([
  {
    id: 0,
    title: "Apa ini jasa penerjemah?",
    content:
      "Localifly.com merupakan kantor penyedia layanan / jasa penerjemah baik penerjemah lisan atau penerjemah dokumen",
    isOpen: false,
  },
  {
    id: 1,
    title: "Apakah menyediakan layanan penerjemah tersumpah?",
    content:
      "Kami menyediakan 2 jenis layanan jasa penerjemah dokumen yaitu jasa penerjemah professional serta jasa penerjemah tersumpah.",
    isOpen: false,
  },
  {
    id: 2,
    title:
      "Apa perbedaan layanan penerjemah reguler (Professional) dengan penerjemah tersumpah?",
    content:
      "Perbedaannya terdapat pada legalitas hasil terjemahnya, pada layanan tersumpah hasil terjemah yang berupa dokumen hardcopy akan bisa dipertanggungjawabkan sampai kementrian hukum dan ham serta kementrian luar negeri sedangkan untuk layanan jasa penerjemah reguler (professional) hanya alih bahasa saja dari bahasa asing ke bahasa Indonesia atau sebaliknya.",
    isOpen: false,
  },
  {
    id: 3,
    title: "Bagaimana dengan perhitungan harganya ?",
    content:
      "Hitungan harga yang kami terapkan adalah per halaman hasil setelah diterjemahkan bukan per halaman asal (bukan dengan karakter atau kata). Hasilnya dengan format Kertas A4,Font Courir New 12 Point,Spasi Double, Margin normal All 1 inchi.",
    isOpen: false,
  },
]);

const ToggleFaq = (id) => {
  for (let i = 0; i < faq.value.length; i++) {
    const element = faq.value[i];
    if (element.id == id) {
      faq.value[id].isOpen = !faq.value[id].isOpen;
    }
  }
};
</script>

<script>
import LottieDesktop from "@/assets/lottiefiles/workflow_desktop.json";
import LottieMobile from "@/assets/lottiefiles/workflow_mobile.json";

export default {
  data() {
    return {
      LottieDesktop: LottieDesktop,
      LottieMobile: LottieMobile,
    };
  },
};
</script>

<style lang="scss" scoped>
.isShow {
  display: block !important;
}

.isRotate {
  transition: 0.3s ease;
  transform: rotate(-180deg);
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  // SECTION-5
  .section-5 {
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 56px;
    justify-content: center;
    padding-top: 8em;
    padding-bottom: 8em;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
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
        color: $TextPrimary;
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

    .faq-wrapper {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 4px;

      .faq {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 12px 16px;
        border-radius: 6px;

        &:hover {
          background-color: #fafafa;
        }
        .faq-btn {
          display: flex;
          width: 100%;
          justify-content: space-between;
          cursor: pointer;
          flex-direction: row;
          gap: 24px;

          h2 {
            color: $TextPrimary;
            font-size: 18px;
            font-weight: 400;
            line-height: 140%;
            letter-spacing: 0%;
            text-align: left;
          }

          img {
            transition: 0.3s ease;
          }
        }
        .faq-content {
          display: none;
          padding-right: 5em;

          p {
            color: $TextSecondary;
            font-size: 16px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0%;
            text-align: left;
          }
        }
      }
    }

    .box-wrapper {
      border-radius: 16px;
      background-color: $ArtboardSurfaceVariant;
      display: flex;
      padding: 56px 0px;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      align-self: stretch;
      width: 100%;

      .wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        h2 {
          color: $TextPrimary;
          font-size: 18px;
          font-weight: 700;
          line-height: 22px;
          letter-spacing: 2%;
          text-align: center;
        }

        p {
          color: $TextSecondary;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 2%;
          text-align: center;
        }
      }
    }
  }

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
    padding-left: 120px;
    padding-right: 120px;
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
    padding-left: 120px;
    padding-right: 120px;
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
        font-size: 18px;
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
        text-align: center;
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

    .section-5 {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 1.3em;

      .faq-wrapper {
        width: 100%;

        .faq {
          .faq-btn {
            h2 {
              font-size: 16px;
            }
          }
        }
      }

      .box-wrapper {
        .wrap {
          width: 85%;
        }
      }
    }
  }
}
</style>
