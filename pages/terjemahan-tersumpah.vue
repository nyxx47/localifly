<template>
  <div class="wrapper">
    <div class="head-wrap container">
      <div class="header">
        <div class="wrap">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567580/Localifly/icons/sworn_s7srxm.svg"
            alt="penerjemah tersumpah"
            style="width: 40px; height: 40px"
            class="mb-4"
          />
          <h2>Layanan terjemahan tersumpah</h2>
          <p>
            Butuh terjemahan resmi yang diakui? Localifly memahami persyaratan
            di Indonesia dan menjamin keakuratan serta keamanan.
          </p>
        </div>
        <Button
          to="https://wa.link/ktpzi4"
          target="_blank"
          icon="heroicons:arrow-up-right-20-solid"
          variant="primary"
        >
          Pesan Sekarang
        </Button>
      </div>
    </div>
    <div class="section-1">
      <div class="s-header">
        <h2>
          Mengapa Localifly adalah pilihan terbaik untuk penerjemahan tersumpah
          Anda?
        </h2>
      </div>
      <div class="wrap">
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567638/Localifly/icons/pm_mse44z.svg"
            alt="Manajer Proyek Pribadi"
            style="width: 32px; height: 32px"
          />
          <h5>Manajer Proyek Pribadi</h5>
          <p>
            PM pribadi akan membantu proses penerjemah dan memastikan dokumen
            Anda dikirimkan sesuai jadwal yang telah ditentukan
          </p>
          <!-- <OrganismsButton content="Learn More" type="secondary" /> -->
        </div>
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567683/Localifly/icons/hq_fxdvnr.svg"
            alt="Kualitas terjamin"
            style="width: 32px; height: 32px"
          />
          <h5>Kualitas terjamin</h5>
          <p>
            Setiap penerjemah tersumpah kami memiliki akreditasi dan sertifikasi
            dari otoritas pemerintah di Indonesia
          </p>
        </div>
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567735/Localifly/icons/secure_mcppvn.svg"
            alt="Keamanan dan kerahasiaan"
            style="width: 32px; height: 32px"
          />
          <h5>Keamanan dan kerahasiaan</h5>
          <p>
            Kami mengutamakan keamanan dan kerahasiaan data pribadi Anda,
            menangani informasi rahasia dengan hati-hati
          </p>
        </div>
      </div>
    </div>
    <div class="section-1">
      <div class="s-header">
        <h2>Kapan saya memerlukan terjemahan tersumpah?</h2>
        <p>
          Dokumen terjemahan tersumpah disertifikasi oleh penerjemah yang telah
          lulus ujian sertifikasi tingkat nasional, dengan cap resmi yang
          mengesahkan keabsahan hukumnya
        </p>
      </div>
      <div
        class="m-0 flex flex-wrap flex-row justify-center gap-4 cards container"
      >
        <div
          v-for="data in datas"
          :key="id"
          ref="card"
          class="card relative z-10 rounded-xl overflow-hidden p-[1px] hover:bg-[#374151] transition-colors duration-300 w-full"
          style="--x: -350px; --y: -350px"
        >
          <div class="inner rounded-xl p-6 h-full">
            <NuxtImg
              provider="cloudinary"
              :src="data.icon"
              :alt="data.title"
              class="mb-4 icon"
            />
            <h3 class="text-base font-bold mb-2">{{ data.title }}</h3>
            <p class="text-base">
              {{ data.subtitle }}
            </p>
          </div>
        </div>
      </div>
      <div class="end-of-section">
        <p class="text-base">
          Jika Anda tidak yakin apakah dokumen Anda perlu diterjemahkan oleh
          penerjemah tersumpah, sebaiknya bicarakan dengan organisasi yang
          meminta dokumen tersebut. Jika Anda tidak memerlukan terjemahan
          tersumpah, Anda dapat mencari penerjemah standar di sini.
        </p>
      </div>
    </div>
    <div class="section-2">
      <div class="s-header">
        <h2>Pesan Terjemahan dalam 3 Langkah</h2>
        <p>Proses cepat dan mudah untuk mendapatkan terjemahan berkualitas</p>
      </div>
      <div class="wrap container">
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567782/Localifly/icons/1_wih7aj.svg"
            alt="kirim"
          />
          <p>Kirim atau scan dari dokumen yang perlu Anda terjemahkan</p>
        </div>
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567782/Localifly/icons/2_j7bep7.svg"
            alt="penawaran gratis"
          />
          <p>Dapatkan penawaran gratis dalam hitungan menit dan terima</p>
        </div>
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567783/Localifly/icons/3_o5itzt.svg"
            alt="dokumen terjemahan tersumpah"
          />
          <p>
            Terima dokumen terjemahan tersumpah Anda di rumah atau kantor Anda
          </p>
        </div>
      </div>
    </div>
    <div class="section-1">
      <div class="s-header">
        <h2>Apa yang bisa saya terjemahkan?</h2>
        <p>
          Kita dapat menerjemahkan sebagian besar jenis dokumen, dengan dukungan
          jenis file berikut:
        </p>
      </div>
      <div class="wrap types-wrapper">
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726568000/Localifly/icons/text_tsbbok.svg"
            alt="plain text"
            class="icon-type"
          />
          <p>Plain Text</p>
        </div>

        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726568000/Localifly/icons/csv_j0gkfe.svg"
            alt="csv"
            class="icon-type"
          />
          <p>CSV</p>
        </div>
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726568001/Localifly/icons/office_cixahk.svg"
            alt="microsoft office"
            class="icon-type"
          />
          <p>Microsoft Office</p>
        </div>
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567999/Localifly/icons/html_avbuia.svg"
            alt="html"
            class="icon-type"
          />
          <p>HTML</p>
        </div>
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726568000/Localifly/icons/xliff_mqanza.svg"
            alt="xliff"
            class="icon-type"
          />
          <p>XLIFF</p>
        </div>
      </div>
    </div>
    <div class="section-5">
      <div class="s-header">
        <h2>FAQ</h2>
        <p>We answer all your questions and concerns.</p>
      </div>
      <div class="faq-wrapper">
        <div class="faq" v-for="(item, index) in faq" :key="index">
          <div class="faq-btn" @click="ToggleFaq(item.id)">
            <h2>{{ item.title }}</h2>
            <NuxtImg
              provider="cloudinary"
              src="/v1726567902/Localifly/icons/chevron-down_wpqo1v.svg"
              :class="{ isRotate: item.isOpen }"
              alt="chevron-down"
              style="width: 24px; height: 24px"
            />
          </div>
          <div class="faq-content" :class="{ isShow: item.isOpen }">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div class="box-wrapper">
        <div class="wrap">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567369/Localifly/icons/avatars_cd7bmy.svg"
            style="height: 56px"
            alt="avatars"
          />
          <h2>Still Have Any Questions?</h2>
          <p>
            Can't find the answer you're looking for? Please contact our team.
          </p>
        </div>
        <Button
          to="https://wa.link/ktpzi4"
          target="_blank"
          icon="heroicons:arrow-up-right-20-solid"
          variant="primary"
        >
          Contact Us
        </Button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: "Layanan Terjemahan Tersumpah - Penerjemah Resmi untuk Dokumen Anda",
  meta: [
    {
      name: "description",
      content:
        "Kami menyediakan layanan terjemahan tersumpah untuk dokumen hukum, akta kelahiran, ijazah, dan lainnya. Diterjemahkan oleh penerjemah tersumpah yang berpengalaman dan diakui secara internasional.",
    },
    {
      name: "keywords",
      content:
        "Layanan terjemahan tersumpah, penerjemah tersumpah, terjemahan resmi, penerjemah dokumen hukum, terjemahan akta kelahiran, terjemahan ijazah, terjemahan tersumpah Indonesia, jasa penerjemah tersumpah",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
});

const id = useId();
const datas = ref([
  {
    icon: "/v1719838409/Localifly/icons/birth_rrollp.svg",
    title: "Akta kelahiran",
    subtitle:
      "Saat mengajukan ke instansi pemerintah untuk mendaftarkan kelahiran atau sebagai identifikasi.",
  },
  {
    icon: "/v1719838409/Localifly/icons/married_gpqtgq.svg",
    title: "Akte Perkawinan / Surat Nikah",
    subtitle:
      "Ketika mengajukan ke instansi pemerintah untuk mendapatkan pengakuan resmi atas pernikahan.",
  },
  {
    icon: "/v1719838409/Localifly/icons/criminal_nozefg.svg",
    title: "Catatan Kriminal",
    subtitle:
      "Ketika mengajukan ke instansi pemerintah untuk visa atau izin tinggal, atau terkadang sebagai persyaratan kerja.",
  },
  {
    icon: "/v1719838409/Localifly/icons/medicine_f8cctl.svg",
    title: "Surat keterangan Dokter",
    subtitle:
      "Ketika ditunjukkan di negara tempat Anda akan bekerja atau mengakses layanan tertentu.",
  },
  {
    icon: "/v1719838409/Localifly/icons/driver_kzzz0k.svg",
    title: "Surat izin Mengemudi",
    subtitle:
      "Saat mengajukan ke lembaga pemerintah untuk mendapatkan lisensi setara di negara tujuan.",
  },
  {
    icon: "/v1719838409/Localifly/icons/academy_vpdt3y.svg",
    title: "Sertifikasi Akademik",
    subtitle:
      "Ketika mengajukan ke lembaga atau pemberi kerja di negara di mana bahasa resmi berbeda dari bahasa aslinya.",
  },
]);

const card = ref(null);

function mouseMoveGradient(e) {
  for (let i = 0; i < card.value.length; i++) {
    const rect = card.value[i]?.getBoundingClientRect();

    if (rect) {
      const x = e.clientX;
      const y = e.clientY;

      const diffX = x - rect.x;
      const diffY = y - rect.y;

      card.value[i]?.style.setProperty("--x", `${diffX}px`);
      card.value[i]?.style.setProperty("--y", `${diffY}px`);
    }
  }
}

onMounted(() => {
  document.addEventListener("mousemove", mouseMoveGradient, false);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", mouseMoveGradient, false);
});

const faq = ref([
  {
    id: 0,
    title: "Apa itu penerjemah tersumpah?",
    content:
      "Penerjemah tersumpah adalah penerjemah yang telah lulus ujian kualifikasi dan disumpah oleh pejabat berwenang untuk menerjemahkan dokumen resmi dengan keabsahan hukum.",
    isOpen: false,
  },
  {
    id: 1,
    title: "Kapan saya memerlukan penerjemah tersumpah?",
    content:
      "Anda memerlukan penerjemah tersumpah ketika dokumen yang diterjemahkan akan digunakan untuk keperluan resmi seperti pengajuan visa, registrasi pernikahan, atau pengakuan gelar di luar negeri.",
    isOpen: false,
  },
  {
    id: 2,
    title: "Kapan saya memerlukan penerjemah tersumpah?",
    content:
      "Anda memerlukan penerjemah tersumpah ketika dokumen yang diterjemahkan akan digunakan untuk keperluan resmi seperti pengajuan visa, registrasi pernikahan, atau pengakuan gelar di luar negeri.",
    isOpen: false,
  },
  {
    id: 3,
    title: "Apa perbedaan antara penerjemah biasa dan penerjemah tersumpah?",
    content:
      "Penerjemah tersumpah memiliki kewenangan resmi dan kualifikasi hukum untuk menerjemahkan dokumen yang memerlukan keabsahan hukum, sedangkan penerjemah biasa tidak memiliki kewenangan tersebut.",
    isOpen: false,
  },
  {
    id: 4,
    title: "Dokumen apa saja yang memerlukan terjemahan tersumpah?",
    content:
      "Dokumen yang biasanya memerlukan terjemahan tersumpah meliputi akta kelahiran, akta pernikahan, ijazah, transkrip akademik, dokumen hukum, dan dokumen keimigrasian.",
    isOpen: false,
  },
  {
    id: 5,
    title: "Berapa biaya untuk jasa penerjemah tersumpah?",
    content:
      "Biaya penerjemahan tersumpah bervariasi tergantung pada jenis dan jumlah dokumen. Silakan hubungi kami untuk mendapatkan penawaran harga yang lebih rinci.",
    isOpen: false,
  },
  {
    id: 6,
    title: "Apakah terjemahan tersumpah diakui di luar negeri?",
    content:
      "Ya, terjemahan tersumpah diakui secara internasional, asalkan diterjemahkan oleh penerjemah yang diakui oleh lembaga berwenang di negara asal.",
    isOpen: false,
  },
  {
    id: 7,
    title: "Apakah saya perlu menyerahkan dokumen asli untuk diterjemahkan?",
    content:
      "Tidak selalu. Dalam banyak kasus, salinan dokumen cukup. Namun, beberapa lembaga mungkin memerlukan dokumen asli untuk validasi.",
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

<style lang="scss" scoped>
.isShow {
  display: block !important;
}

.isRotate {
  transition: 0.3s ease;
  transform: rotate(-180deg);
}
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5em;
  .head-wrap {
    max-width: 1440px;
    width: 100%;
    .header {
      border-radius: 16px;
      background-color: $ArtboardSurfaceVariant;
      display: flex;
      padding: 100px 20px;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      width: 100%;

      .wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        h2 {
          color: $TextPrimary;
          font-size: 24px;
          font-weight: 700;
          line-height: 22px;
          letter-spacing: 2%;
          text-align: center;
        }

        p {
          color: $TextSecondary;
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 2%;
          text-align: center;
        }
      }
    }
  }

  .section-1 {
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    gap: 56px;
    justify-content: center;
    padding-top: 8em;
    padding-bottom: 8em;
    align-items: center;

    .s-header {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: 700 !important;
        line-height: 130%;
        letter-spacing: 0.72px;
        color: #293237;
        width: 70%;
        text-align: center;
      }

      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.26px;
        color: #708089;
        width: 80%;
        text-align: center;
      }
    }

    .cards {
      .card {
        flex-basis: 32.5%;
        @media only screen and (min-width: 320px) and (max-width: 600px) {
          flex-basis: 100%;
        }
        @media only screen and (min-width: 601px) and (max-width: 1280px) {
          flex-basis: 45%;
        }
        border: 1px solid #e2e8f0;
        .inner {
          background-color: white;

          .icon {
            width: 32px;
          }

          h3 {
            color: $TextPrimary;
          }
          p {
            color: $TextSecondary;
          }
        }
      }

      .card:before {
        background: radial-gradient(
          150px circle at var(--x) var(--y),
          #374151 0,
          transparent 100%
        );
        will-change: background;
        content: "";
        display: block;
        position: absolute;
        left: -2px;
        top: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        z-index: -1;
      }
    }
    .types-wrapper {
      gap: 80px !important;
    }
    .wrap {
      display: flex;
      flex-direction: row;
      gap: 32px;
      border-radius: 16px;
      padding: 32px;

      .col {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        .icon-type {
          width: 32px;
          margin: 0 !important;
        }
        img {
          width: fit-content;
          margin-bottom: 0.5em;
        }

        h5 {
          color: $TextPrimary;
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          letter-spacing: 2%;
          text-align: center;
        }

        p {
          color: $TextSecondary;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 19.5px */
          letter-spacing: 0.26px;
          text-align: center;
        }
      }
    }
    .end-of-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      p {
        width: 90%;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.26px;
        color: $TextPrimary;
        text-align: center;
      }
    }
  }

  .section-2 {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 5em;
    padding-bottom: 5em;
    align-items: center;
    gap: 24px;
    .s-header {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: 700 !important;
        line-height: 130%;
        letter-spacing: 0.72px;
        color: #293237;
        width: 100%;
        text-align: center;
      }

      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.26px;
        color: #708089;
        width: 100%;
        text-align: center;
      }
    }

    .wrap {
      display: flex;
      flex-direction: row;
      gap: 32px;
      border-radius: 16px;
      padding: 32px;
      margin-top: 3em;
      @media only screen and (min-width: 320px) and (max-width: 600px) {
        flex-direction: column;
      }

      .col {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        img {
          height: 32px;
          margin-bottom: 0.5em;
        }

        p {
          color: $TextPrimary;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 19.5px */
          letter-spacing: 0.26px;
          text-align: center;
        }
      }
    }
  }

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
        font-size: 16px;
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
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 2%;
          text-align: center;
        }
      }
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .wrapper {
    padding-top: 4em;
    .head-wrap {
      padding-left: 20px;
      padding-right: 20px;
    }

    .section-1 {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 6em;
      padding-bottom: 4em;
      height: fit-content;
      gap: 16px;

      .s-header {
        h2 {
          width: 80%;
          text-align: center;
          font-size: 24px;
        }

        p {
          width: 90%;
        }
      }

      .wrap {
        flex-direction: column;
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
