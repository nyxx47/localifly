<template>
  <div class="wrapper mx-auto">
    <div class="blog">
      <div class="header mb-12">
        <div class="badge">Our Blogs</div>
        <p class="text-4xl font-bold txt-primary mt-6">
          Resources and insights
        </p>
        <p class="text-base mt-2 txt-primary">
          The latest industry news, language, laws, technologies, and resources.
        </p>
      </div>
      <div class="cards grid grid-cols-2 gap-4 mb-24">
        <nuxt-link
          class="col-span-2 grow"
          to="blog/jasa-penerjemah-tersumpah-jakarta-bersertifikat-resmi"
        >
          <div
            class="card card-top"
            :style="{
              backgroundImage: 'url(' + image + ')',
            }"
          >
            <div class="preview-content p-6">
              <p class="text-xl font-bold text-white">
                Jasa Penerjemah Tersumpah Jakarta, Bersertifikat Resmi <br />
                Terbaik 2024
              </p>
              <p class="text-sm mt-2 text-white">
                Dalam era globalisasi ini, kebutuhan akan penerjemahan dokumen
                semakin meningkat. Baik itu...
              </p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="blog/jasa-penerjemah-bahasa-jakarta-timur" class="grow">
          <div
            class="card"
            :style="{
              backgroundImage: 'url(' + image2 + ')',
            }"
          >
            <div class="preview-content p-4">
              <p class="text-base font text-white">
                Jasa Penerjemah Bahasa Jakarta Timur, Pilih Localifly!
              </p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="blog/jasa-penerjemah-jakarta-timur" class="grow">
          <div
            class="card"
            :style="{
              backgroundImage: 'url(' + image3 + ')',
            }"
          >
            <div class="preview-content p-4">
              <p class="text-base font text-white">
                Jasa Penerjemah Jakarta Timur
              </p>
            </div>
          </div>
        </nuxt-link>
        <!-- <div class="card grow">03</div> -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const image =
  "https://res.cloudinary.com/ahroidlife/image/upload/v1710988036/Localifly/office1_e8syur.jpg";

const image2 =
  "https://res.cloudinary.com/ahroidlife/image/upload/v1710989521/Localifly/language_yp02sc.jpg";

const image3 =
  "https://res.cloudinary.com/ahroidlife/image/upload/v1711075650/Localifly/office2_bipntt.jpg";
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
    width: 800px;

    .header {
      width: 100%;
    }

    .cards {
      width: 100%;

      .card-top {
        height: 500px;
      }
      .card {
        min-height: 250px;
        position: relative;
        background-size: cover;

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
}
</style>
