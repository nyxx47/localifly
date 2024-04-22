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

useHead({
  title: "Blog | Resources and insights",
  meta: [
    {
      name: "description",
      content:
        "The latest industry news, language, laws, technologies, and resources.",
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
