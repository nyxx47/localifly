<template>
  <div class="container">
    <div class="head-wrapper">
      <div class="wrap">
        <img src="~/assets/images/avatars.svg" alt="avatars" />
        <h2>Become a translator</h2>
        <p>
          Are you a seasoned translator or a specialist fluent in multiple
          languages? Join our team and bring your expertise to the table!
        </p>
      </div>

      <UButton
        label="Be part of the team"
        size="lg"
        to="https://wa.link/ktpzi4"
        target="_blank"
      >
        <template #trailing>
          <UIcon name="i-heroicons-arrow-up-right-solid" />
        </template>
      </UButton>
    </div>
    <div class="section-1">
      <div class="s-header">
        <h2>Why working with Localifly?</h2>
        <p>
          Our translators don’t need to be their own marketers, financial
          analysts or service agents. Our model ensures that you get jobs
          regularly wherever you are, so you only have to worry about
          translating.
        </p>
      </div>
      <div class="wrap">
        <div class="col">
          <img src="~/assets/icons/company.svg" alt="perusahaan" />
          <h5>Work from anywhere</h5>
          <p>
            You have the freedom to define your workspace. Work when and where
            you want, on your terms.
          </p>
          <!-- <OrganismsButton content="Learn More" type="secondary" /> -->
        </div>
        <div class="col">
          <img src="~/assets/icons/personal.svg" alt="perusahaan" />
          <h5>Take the jobs that interest you</h5>
          <p>
            Our project managers match you with translation tasks aligned with
            your expertise and passions
          </p>
          <!-- <OrganismsButton content="Learn More" type="secondary" /> -->
        </div>
        <div class="col">
          <img src="~/assets/icons/akademik.svg" alt="perusahaan" />
          <h5>Full support</h5>
          <p>
            We handle all the administrative tasks and billing, allowing you to
            concentrate solely on your expertise: translating
          </p>
          <!-- <OrganismsButton content="Learn More" type="secondary" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Localifly | Career",
  meta: [
    {
      name: "description",
      content:
        "Are you a seasoned translator or a specialist fluent in multiple languages? Join our team and bring your expertise to the table!",
    },
  ],
});
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding-top: 8em;
  .head-wrapper {
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

  .section-1 {
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
        font-weight: 700 !important;
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
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 19.5px */
          letter-spacing: 0.26px;
          text-align: center;
        }
      }
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 7em;
    .head-wrapper {
      padding-left: 20px;
      padding-right: 20px;
    }

    .section-1 {
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
  }
}
</style>
