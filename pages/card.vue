<template>
  <UContainer>
    <div>
      <h1>TEST</h1>
      <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1>TEST</h1>
    </div>
    <section class="m-0 pt-28 flex flex-wrap flex-row justify-center gap-4">
      <div
        v-for="data in datas"
        :key="id"
        ref="wrapper"
        class="wrapper relative z-10 rounded-xl overflow-hidden p-[1px] hover:bg-[#374151] transition-colors duration-300 w-full"
        style="--x: -350px; --y: -350px"
      >
        <div class="inner rounded-xl p-6 h-full">
          <NuxtImg provider="cloudinary" :src="data.icon" class="mb-4 icon" />
          <h3 class="text-base font-bold mb-2">{{ data.title }}</h3>
          <p class="text-sm">
            {{ data.subtitle }}
          </p>
        </div>
      </div>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
const id = useId();
const datas = ref([
  {
    icon: "/v1719690549/Localifly/icons/docs_ylfxzv.svg",
    title: "Akta kelahiran",
    subtitle:
      "Saat mengajukan ke instansi pemerintah untuk mendaftarkan kelahiran atau sebagai identifikasi.",
  },
  {
    icon: "/v1719690549/Localifly/icons/docs_ylfxzv.svg",
    title: "Akte Perkawinan / Surat Nikah",
    subtitle:
      "Ketika mengajukan ke instansi pemerintah untuk mendapatkan pengakuan resmi atas pernikahan.",
  },
  {
    icon: "/v1719690549/Localifly/icons/docs_ylfxzv.svg",
    title: "Catatan Kriminal",
    subtitle:
      "Ketika mengajukan ke instansi pemerintah untuk visa atau izin tinggal, atau terkadang sebagai persyaratan kerja.",
  },
  {
    icon: "/v1719690549/Localifly/icons/docs_ylfxzv.svg",
    title: "Surat keterangan Dokter",
    subtitle:
      "Ketika ditunjukkan di negara tempat Anda akan bekerja atau mengakses layanan tertentu.",
  },
  {
    icon: "/v1719690549/Localifly/icons/docs_ylfxzv.svg",
    title: "Gelar universitas",
    subtitle:
      "Jika mengajukan ke lembaga pemerintah untuk memenuhi syarat gelar yang setara di negara tersebut.",
  },
  {
    icon: "/v1719690549/Localifly/icons/docs_ylfxzv.svg",
    title: "Sertifikasi Akademik",
    subtitle:
      "Ketika mengajukan ke lembaga atau pemberi kerja di negara di mana bahasa resmi berbeda dari bahasa aslinya.",
  },
]);

const wrapper = ref("wrapper");

function mouseMoveGradient(e: MouseEvent) {
  for (let i = 0; i < wrapper.value.length; i++) {
    const rect = wrapper.value[i]?.getBoundingClientRect();

    if (rect) {
      const x = e.clientX;
      const y = e.clientY;

      const diffX = x - rect.x;
      const diffY = y - rect.y;

      wrapper.value[i]?.style.setProperty("--x", `${diffX}px`);
      wrapper.value[i]?.style.setProperty("--y", `${diffY}px`);
    }
  }
}

onMounted(() => {
  document.addEventListener("mousemove", mouseMoveGradient, false);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", mouseMoveGradient, false);
});
</script>

<style scoped lang="scss">
.wrapper {
  flex-basis: 30%;
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

.wrapper:before {
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
</style>
