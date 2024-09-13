<template>
  <div class="wrapper mx-auto">
    <div class="blog px-5 mx:px-5 lg:px-5 xl:px-0 2xl:px-0">
      <div class="header mb-12">
        <div class="badge">Our Blogs</div>
        <p class="text-4xl font-bold txt-primary mt-6">
          Resources and insights
        </p>
        <p class="text-base mt-2 txt-primary">
          The latest industry news, language, laws, technologies, and resources.
        </p>
      </div>
      <div
        class="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-4 mb-24"
      >
        <nuxt-link
          class="relative sm:col-span-2 md:sm:col-span-2 xl:sm:col-span-2 2xl:sm:col-span-2 grow"
          to="blog/jasa-penerjemah-tersumpah-jakarta-bersertifikat-resmi"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image"
            class="w-full card card-top object-cover h-500 thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-6">
            <p
              class="text-base font sm:text-xl md:text-xl xl:text-xl 2xl:text-xl sm:font-bold md:font-bold xl:font-bold 2xl:font-bold text-white"
            >
              Jasa Penerjemah Tersumpah Jakarta, Bersertifikat Resmi <br />
              Terbaik 2024
            </p>
            <p
              class="text-sm mt-2 text-white hidden sm:inline md:inline xl:inline 2xl:inline"
            >
              Dalam era globalisasi ini, kebutuhan akan penerjemahan dokumen
              semakin meningkat. Baik itu...
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-bahasa-jakarta-timur"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image2"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Bahasa Jakarta Timur, Pilih Localifly!
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-jakarta-timur"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image3"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Jakarta Timur
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-tersumpah-di-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image4"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Tersumpah di Jakarta Timur
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-bahasa-jakarta-terpercaya"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image5"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Bahasa Jakarta Terpercaya
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-untuk-bisnis-di-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image6"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Efektivitas Menggunakan Jasa Penerjemah untuk Bisnis di Jakarta
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-murah-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image7"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Murah di Jakarta
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-ijazah-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image8"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Ijazah Jakarta, Percayakan Pada Localifly!
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-dokumen-medis-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image9"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Dokumen Medis Jakarta, Privasi Anda Aman Terjaga!
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-terakreditasi-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image10"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Terakreditasi Jakarta, Tersedia 5 Bahasa untuk
              Proyek Anda!
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-akta-pendirian-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image11"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Akta Pendirian Jakarta Professional
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-dokumen-tersumpah-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image12"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Dokumen Tersumpah Jakarta
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-proofreading-dokumen-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image13"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Proofreading Dokumen Jakarta Profesional Lengkap dengan Cek
              Grammar
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/proofreading-artikel-jurnal-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image14"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Proofreading Artikel Jurnal Jakarta
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-proofreading-cepat-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image15"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Proofreading Cepat Jakarta
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/penerjemah-dokumen-ilmiah-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image16"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Penerjemah Dokumen Ilmiah Jakarta Terpercaya!
            </p>
          </div>
        </nuxt-link>
        <nuxt-link to="blog/jasa-cek-grammar-jakarta" class="relative grow">
          <NuxtImg
            provider="cloudinary"
            :src="image17"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Cek Grammar Jakarta Terpercaya, Paling Diminati!
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-bahasa-inggris-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image18"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Bahasa Inggris Jakarta Akurat dan Tersumpah
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-essay-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image19"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Essay Jakarta untuk Akademik Terbaik 2024
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-tersumpah-online-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image20"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Tersumpah Online Jakarta Resmi dan Bersertifikat
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-translator-dokumen-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image21"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Translator Dokumen Resmi Jakarta, Sedia 5 Bahasa!
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-dokumen-hukum-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image22"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Dokumen Hukum di Jakarta Legal dan Terpercaya
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-penerjemah-terdekat-jakarta"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image23"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Penerjemah Terdekat di Jakarta - Bisnis, Pendidikan dan
              Pribadi
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          to="blog/jasa-translator-bahasa-jepang"
          class="relative grow"
        >
          <NuxtImg
            provider="cloudinary"
            :src="image24"
            class="w-full card object-cover thumbnail"
          />
          <div class="absolute bottom-0 preview-content p-4">
            <p class="text-base font text-white">
              Jasa Translator Bahasa Jepang Berpengalaman
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const image = "/v1710988036/localifly/office1_e8syur.jpg";

const image2 = "/v1710989521/localifly/language_yp02sc.jpg";

const image3 = "/v1711075650/localifly/office2_bipntt.jpg";
const image4 = "/v1711296717/localifly/office5_djdn9d.jpg";
const image5 = "/v1711474675/localifly/scc_r9uaab.jpg";
const image6 =
  "/v1711813012/Localifly/google-deepmind-_HnJfS6WhA8-unsplash_qpqqob.jpg";
const image7 = "/v1713764940/Localifly/microsoft-365_bvmtd1.jpg";
const image8 =
  "/v1714487986/Localifly/bench-accounting-C3V88BOoRoM-unsplash_zebgur.jpg";
const image9 =
  "v1715386831/Localifly/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash_jwpea9.jpg";
const image10 =
  "/v1715388015/Localifly/bench-accounting-nfTA8pdaq9A-unsplash_jq7b6w.jpg";
const image11 =
  "/v1715398526/Localifly/gabrielle-henderson-HJckKnwCXxQ-unsplash_x9xydm.jpg";
const image12 =
  "/v1717338072/Localifly/alvaro-serrano-hjwKMkehBco-unsplash_a06kxf.jpg";
const image13 =
  "/v1717339093/Localifly/pexels-vlada-karpovich-4050315_ajyrbv.jpg";
const image14 = "/v1717943684/Localifly/16060_p9ncj8.jpg";
const image15 = "/v1717944088/Localifly/2299_hwnvqx.jpg";
const image16 = "/v1718153318/Localifly/127905_tmniro.jpg";
const image17 = "/v1718769338/Localifly/2150171388_mdjd13.jpg";
const image18 = "/v1720858548/Localifly/lkjl_rxmeeo.jpg";
const image19 = "/v1720859211/Localifly/lkjloo_vwq5iu.png";
const image20 =
  "/v1721543948/Localifly/jasa-penerjemah-tersumpah-online-jakarta_m8j1u2.png";
const image21 =
  "/v1721545856/Localifly/jasa-translator-dokumen-jakarta_oyundu.png";
const image22 =
  "/v1721547181/Localifly/tingey-injury-law-firm-6sl88x150Xs-unsplash_vihd7c.jpg";
const image23 =
  "/v1721567137/Localifly/luca-bravo-9l_326FISzk-unsplash_mpnkew.jpg";
const image24 = "/v1726203684/Localifly/32852_bqe8yd.jpg";

useHead({
  title: "Blog | Resources and insights",
  meta: [
    {
      name: "description",
      content:
        "The latest industry news, language, laws, technologies, and resources.",
    },
    {
      name: "keywords",
      content: "Jasa Penerjemah Jakarta | Blog",
    },
  ],
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .blog {
    padding-top: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    width: 100%;

    .header {
      width: 100%;
    }

    .cards {
      width: 100%;

      .card-top {
        height: 500px;

        @media only screen and (min-width: 320px) and (max-width: 600px) {
          height: 250px;
        }
      }

      .card {
        min-height: 250px;
        position: relative;
        background-size: cover;
      }

      .preview-content {
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: 0.1);
        backdrop-filter: blur(1px);
      }
    }
  }
}
</style>
