<template>
  <div class="wrapper mx-auto">
    <div class="blog px-5 mx:px-5 lg:px-5 xl:px-0 2xl:px-0">
      <div class="header mb-12">
        <nuxt-link to="/blog"
          ><div class="badge">Resources and insights</div></nuxt-link
        >
        <p class="text-4xl font-bold txt-primary mt-6 mb-4 leading-snug">
          Jasa Penerjemah Bahasa Jakarta Terpercaya
        </p>
        <p class="text-base mt-2 txt-primary">
          Jasa Penerjemah Bahasa Jakarta terpercaya dan profesional | Localifly
          hadir dengan tim ahli di berbagi bidang
        </p>
      </div>
      <div class="content">
        <!-- <div
          class="thumbnail"
          :style="{
            backgroundImage: 'url(' + image + ')',
          }"
        ></div> -->
        <NuxtImg :src="image" class="w-full object-cover h-500 thumbnail" />

        <div class="blocks mt-4 mb-56">
          <p class="text-base mt-4 txt-primary">
            Di era globalisasi ini, kebutuhan akan jasa penerjemah bahasa
            semakin meningkat. Baik untuk keperluan bisnis, pendidikan, ataupun
            personal, dokumen dan komunikasi antar bahasa menjadi hal yang
            lumrah. Di Jakarta, sebagai pusat bisnis dan pemerintahan Indonesia,
            kebutuhan akan jasa penerjemah bahasa yang profesional dan
            terpercaya semakin tinggi.
          </p>
          <p class="text-base font-bold txt-primary mt-12 mb-2 leading-snug">
            Jasa Penerjemah Bahasa Jakarta Terpercaya
          </p>
          <p class="text-base mt-4 txt-primary">
            Localifly hadir sebagai solusi tepat bagi kebutuhan penerjemahan
            Anda di Jakarta. Kami merupakan perusahaan jasa penerjemah yang
            telah berpengalaman selama lebih dari 10 tahun, dengan tim
            penerjemah tersumpah dan profesional di berbagai bidang. Localifly
            berkomitmen untuk memberikan layanan penerjemahan berkualitas tinggi
            dengan harga yang kompetitif.
          </p>
          <p class="text-base font-bold txt-primary mt-12 mb-2 leading-snug">
            Layanan Penerjemahan yang Kami Tawarkan
          </p>
          <p class="text-base mt-4 txt-primary">
            Localifly menawarkan berbagai layanan penerjemahan yang dapat
            disesuaikan dengan kebutuhan Anda, di antaranya:
          </p>
          <ol class="list-disc ml-6 mt-4">
            <li class="mb-4">
              <strong class="text-base txt-primary"
                >Penerjemahan Dokumen</strong
              >
              <br />
              <p class="text-base txt-primary">
                Kami menerjemahkan berbagai jenis dokumen, seperti akta
                kelahiran, ijazah, sertifikat, surat perjanjian, dan lain
                sebagainya.
              </p>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary"
                >Penerjemahan Website</strong
              >
              <br />
              <p class="text-base txt-primary">
                Membantu Anda menerjemahkan website Anda ke berbagai bahasa,
                sehingga dapat menjangkau target pasar yang lebih luas.
              </p>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary">Penerjemahan Lisan</strong>
              <br />
              <p class="text-base txt-primary">
                Menyediakan jasa penerjemah lisan untuk berbagai acara, seperti
                seminar, konferensi, rapat bisnis, dan lain sebagainya.
              </p>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary"
                >Penerjemahan Subtitle</strong
              >
              <br />
              <p class="text-base txt-primary">
                Membantu Anda menerjemahkan subtitle film, video, dan multimedia
                lainnya.
              </p>
            </li>
          </ol>
          <p class="text-base mt-4 txt-primary">
            Itulah layanan yang Localifly tawarkan untuk Anda.
          </p>
          <p class="text-base font-bold txt-primary mt-12 mb-2 leading-snug">
            Spesialisasi Bidang di Localifly
          </p>
          <p class="text-base mt-4 txt-primary">
            Localifly memiliki tim penerjemah profesional yang berpengalaman di
            berbagai bidang, antara lain:
          </p>
          <ol class="list-disc ml-6 mt-4">
            <li class="mb-4">
              <strong class="text-base txt-primary">Hukum</strong>
              <br />
              <ol class="list-disc ml-12">
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Penerjemahan dokumen hukum seperti kontrak, perjanjian,
                    surat kuasa, dan akta notariil.
                  </p>
                </li>
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Mampu memahami dan menerjemahkan terminologi hukum yang
                    kompleks dengan akurat.
                  </p>
                </li>
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Memiliki pengetahuan tentang sistem hukum di berbagai
                    negara.
                  </p>
                </li>
              </ol>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary">Keuangan</strong>
              <br />
              <ol class="list-disc ml-12">
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Penerjemahan laporan keuangan, neraca, audit, dan dokumen
                    keuangan lainnya.
                  </p>
                </li>
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Mampu memahami dan menerjemahkan terminologi keuangan yang
                    kompleks dengan akurat.
                  </p>
                </li>
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Memiliki pengetahuan tentang peraturan dan regulasi keuangan
                    di berbagai negara.
                  </p>
                </li>
              </ol>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary">Medis</strong>
              <br />
              <ol class="list-disc ml-12">
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Penerjemahan dokumen medis seperti rekam medis, hasil tes
                    laboratorium, dan jurnal ilmiah.
                  </p>
                </li>
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Mampu memahami dan menerjemahkan terminologi medis yang
                    kompleks dengan akurat.
                  </p>
                </li>
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Memiliki pengetahuan tentang berbagai bidang medis.
                  </p>
                </li>
              </ol>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary">Teknik</strong>
              <br />
              <ol class="list-disc ml-12">
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Penerjemahan manual mesin, spesifikasi teknis, gambar
                    teknik, dan dokumen teknik lainnya.
                  </p>
                </li>
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Mampu memahami dan menerjemahkan terminologi teknik yang
                    kompleks dengan akurat.
                  </p>
                </li>
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Memiliki pengetahuan tentang berbagai bidang teknik.
                  </p>
                </li>
              </ol>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary">Teknologi Informasi</strong>
              <br />
              <ol class="list-disc ml-12">
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Penerjemahan software, website, aplikasi mobile, dan dokumen
                    IT lainnya.
                  </p>
                </li>
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Mampu memahami dan menerjemahkan terminologi IT yang
                    kompleks dengan akurat.
                  </p>
                </li>
                <li>
                  <p class="text-base mt-4 txt-primary">
                    Memiliki pengetahuan tentang berbagai teknologi terbaru.
                  </p>
                </li>
              </ol>
            </li>
          </ol>
          <p class="text-base font-bold txt-primary mt-12 mb-2 leading-snug">
            Keunggulan Localifly
          </p>
          <p class="text-base font-bold txt-primary mt-6 mb-2">
            Tim Penerjemah Profesional
          </p>
          <p class="text-base mt-2 txt-primary">
            Kami memiliki tim penerjemah tersumpah dan profesional di berbagai
            bidang, yang memastikan hasil terjemahan yang akurat dan berkualitas
            tinggi.
          </p>
          <ol class="list-disc ml-6 mt-4">
            <li class="mb-4">
              <strong class="text-base txt-primary">Harga Kompetitif</strong>
              <br />
              <p class="text-base txt-primary">
                Kami menawarkan harga yang kompetitif dan terjangkau untuk
                berbagai layanan penerjemahan.
              </p>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary"
                >Proses Cepat dan Tepat Waktu</strong
              >
              <br />
              <p class="text-base txt-primary">
                Localifly selalu berusaha menyelesaikan pekerjaan tepat waktu
                dan sesuai dengan deadline yang disepakati.
              </p>
            </li>
            <li class="mb-4">
              <strong class="text-base txt-primary"
                >Keamanan dan Kerahasiaan Data</strong
              >
              <br />
              <p class="text-base txt-primary">
                Kami menjaga keamanan dan kerahasiaan data klien dengan penuh
                tanggung jawab.
              </p>
            </li>
          </ol>
          <p class="text-base font-bold txt-primary mt-12 mb-2">
            Localifly Adalah Partner Tepat untuk Kebutuhan Penerjemahan Anda
          </p>
          <p class="text-base mt-2 txt-primary">
            Localifly merupakan partner tepat bagi Anda yang membutuhkan jasa
            penerjemahan bahasa yang profesional, terpercaya, dan berkualitas
            tinggi. Kami siap membantu Anda menyelesaikan kebutuhan penerjemahan
            dengan cepat, tepat waktu, dan harga yang kompetitif. Kontak
            Localifly: 087777446340
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const image =
  "https://res.cloudinary.com/ahroidlife/image/upload/v1711474675/Localifly/scc_r9uaab.jpg";

useHead({
  title: "Jasa Penerjemah Bahasa Jakarta Terpercaya | Telp 087777446340",
  meta: [
    {
      name: "description",
      content:
        "Jasa Penerjemah Bahasa Jakarta terpercaya dan profesional | Localifly hadir dengan tim ahli di berbagi bidang, Hubungi kami: 087777446340",
    },
    {
      name: "keywords",
      content: "Jasa Penerjemah Bahasa Jakarta",
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
