<template>
  <div class="wrapper mx-auto">
    <div class="blog px-5 mx:px-5 lg:px-5 xl:px-0 2xl:px-0">
      <div class="header mb-12">
        <div class="badge">Resources and insights</div>
        <p class="text-4xl font-bold txt-primary mt-6 mb-4 leading-snug">
          Jasa Penerjemah Bahasa Jakarta Timur, Pilih Localifly!
        </p>
        <p class="text-base mt-2 txt-primary">
          Jasa Penerjemah Bahasa Jakarta Timur profesional berkualitas
          penerjemah dokumen, lisan, dan website Localifly.com.
        </p>
      </div>
      <div class="content">
        <div
          class="thumbnail"
          :style="{
            backgroundImage: 'url(' + image + ')',
          }"
        ></div>
        <div class="blocks mt-4 mb-56">
          <p class="text-base mt-4 txt-primary">
            <strong>Jasa Penerjemah Bahasa Jakarta Timur</strong> – Era
            globalisasi meningkatkan kebutuhan jasa penerjemah bahasa, terutama
            di kota-kota besar seperti Jakarta Timur, tempat berbagai bisnis dan
            industri berkembang pesat. Dalam konteks ini, jasa penerjemah
            menjadi layanan penting.
          </p>
          <p class="text-base mt-4 txt-primary">
            Banyak orang dari berbagai belahan dunia tertarik ke Indonesia,
            pusat bisnis dan pendidikan di Indonesia. Ini menciptakan kebutuhan
            jasa penerjemah bahasa yang dapat membantu dalam berbagai situasi,
            mulai dari pertemuan bisnis, konferensi internasional, hingga
            kegiatan sehari-hari.
          </p>
          <p class="text-base mt-4 txt-primary">
            Localifly.com memahami kebutuhan ini. Sebagai penyedia jasa
            penerjemah bahasa, kami berkomitmen memberikan layanan terbaik.
            Dengan tim penerjemah profesional berpengalaman, kami siap membantu
            Anda mengatasi hambatan bahasa dan memastikan komunikasi Anda
            berjalan lancar.
          </p>
          <p class="text-base font-bold txt-primary mt-12 mb-2 leading-snug">
            Mengapa Memilih Localifly.com?
          </p>
          <p class="text-base mt-4 txt-primary">
            Localifly.com lebih dari sekedar penyedia jasa penerjemah bahasa.
            Kami adalah mitra Anda dalam menghadapi tantangan globalisasi.
            Berikut beberapa alasan memilih Localifly.com:
          </p>
          <ol class="list-decimal ml-6 mt-4">
            <li class="mb-4">
              <strong class="text-base txt-primary">Tim Profesional</strong>
              <br />
              <p class="text-base txt-primary">
                Tim penerjemah kami profesional dan berpengalaman dalam berbagai
                bidang, mulai dari bisnis, teknologi, hukum, hingga pendidikan.
              </p>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary">Kualitas Terjamin</strong>
              <br />
              <p class="text-base txt-primary">
                Kami menjamin kualitas terjemahan kami. Penerjemah manusia,
                bukan mesin, melakukan setiap terjemahan untuk memastikan
                akurasi dan nuansa bahasa yang tepat.
              </p>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary">Harga Kompetitif </strong>
              <br />
              <p class="text-base txt-primary">
                Kami menawarkan harga kompetitif tanpa mengorbankan kualitas
                layanan kami.
              </p>
            </li>
          </ol>
          <p class="text-base font-bold txt-primary mt-12 mb-2 leading-snug">
            Layanan Kami
          </p>
          <p class="text-base mt-4 txt-primary">
            Dengan tim penerjemah profesional berpengalaman, Localifly.com
            berkomitmen untuk membantu Anda mengatasi hambatan bahasa dan
            memastikan komunikasi Anda berjalan lancar. Kami menawarkan berbagai
            layanan penerjemahan, termasuk penerjemahan dokumen, penerjemahan
            lisan, dan penerjemahan website.
          </p>
          <ul class="list-disc ml-6 mt-4">
            <li class="mb-4">
              <strong class="text-base txt-primary"
                >Penerjemahan Dokumen</strong
              >
              <br />
              <p class="text-base txt-primary">
                Kami menerjemahkan berbagai jenis dokumen, mulai dari dokumen
                bisnis, kontrak hukum, hingga dokumen akademik.
              </p>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary">Penerjemahan Lisan </strong>
              <br />
              <p class="text-base txt-primary">
                Kami menyediakan layanan penerjemahan lisan untuk pertemuan
                bisnis, konferensi, seminar, dan acara lainnya.
              </p>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary"
                >Penerjemahan Website
              </strong>
              <br />
              <p class="text-base txt-primary">
                Kami membantu Anda menerjemahkan website Anda ke berbagai bahasa
                untuk menjangkau audiens global.
              </p>
            </li>
          </ul>
          <p class="text-base font-bold txt-primary mt-12 mb-2 leading-snug">
            Jasa Penerjemah Bahasa Jakarta Timur
          </p>

          <p class="text-base mt-4 txt-primary">
            Kami memahami betul tantangan globalisasi dan pentingnya komunikasi
            lintas budaya, khususnya di kota-kota besar seperti Jakarta Timur.
            Jika Anda membutuhkan jasa penerjemah bahasa, hubungi
            kami <nuxt-link
              class="text-blue-600"
              to="https://localifly.com"
              target="_blank"
              >Localifly.com</nuxt-link
            >. Tim kami siap membantu Anda mengatasi hambatan bahasa dan
            mencapai tujuan global Anda.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const image =
  "https://res.cloudinary.com/ahroidlife/image/upload/v1710989521/Localifly/language_yp02sc.jpg";

useHead({
  title: "Jasa Penerjemah Bahasa Jakarta Timur, Pilih Localifly!",
  meta: [
    {
      name: "description",
      content:
        "Jasa Penerjemah Bahasa Jakarta Timur profesional berkualitas penerjemah dokumen, lisan, dan website Localifly.com.",
    },
    {
      name: "keywords",
      content: "Jasa Penerjemah Bahasa Jakarta Timur",
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
    width: 100%;
    padding-top: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;

    .header {
      width: 100%;
    }

    .content {
      width: 100%;

      .thumbnail {
        height: 500px;
        background-size: cover;
        @media only screen and (min-width: 320px) and (max-width: 600px) {
          height: 300px;
        }
      }
    }
  }
}
</style>
