<template>
  <NuxtLoadingIndicator color="#8B5CF6" :duration="8000" :throttle="0" />
  <Navbar />
  <NuxtPage />
  <UNotifications />
</template>

<script setup>
useHead({
  meta: [
    {
      name: "description",
      content:
        "Localifly – Jasa Penerjemah Tersumpah Jakarta | Jasa Penerjemah Bahasa Legal untuk Dokumen Hukum, Medis, Teknis, Pendidikan, dll di Jakarta Hub. 087777446340",
    },
    {
      name: "keywords",
      content:
        "jasa penerjemah bahasa Jakarta, jasa penerjemah Jakarta, jasa penerjemah tersumpah jakarta",
    },
    {
      name: "google-site-verification",
      content: "xZkQCO4eCrFPwAtI1_zdYdXQh_OVi7y8HN_my6HgAXY",
    },
  ],
});
</script>
