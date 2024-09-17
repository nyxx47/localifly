<template>
  <div class="wrapper">
    <div class="head-wrap">
      <div class="header">
        <div class="wrap">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567369/Localifly/icons/avatars_cd7bmy.svg"
            alt="avatars"
            style="height: 56px"
          />
          <h2>Become a translator</h2>
          <p>
            Are you a seasoned translator or a specialist fluent in multiple
            languages? Join our team and bring your expertise to the table!
          </p>
        </div>
        <Button
          to="https://wa.link/ktpzi4"
          target="_blank"
          icon="heroicons:arrow-up-right-20-solid"
          variant="primary"
        >
          Be part of the team
        </Button>
      </div>
    </div>
    <div class="section-1">
      <div class="s-header">
        <h2>Why working with Localifly?</h2>
        <p>
          Translators can focus on what they do best—translating—without
          worrying about marketing themselves, crunching numbers, or managing
          customer service. Our model ensures that you get jobs regularly
          wherever you are, so you only have to worry about translating.
        </p>
      </div>
      <div class="wrap">
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567782/Localifly/icons/1_wih7aj.svg"
            alt="Work from anywhere"
            style="height: 32px"
          />
          <h5>Work from anywhere</h5>
          <p>
            You have the freedom to define your workspace. Work when and where
            you want, on your terms.
          </p>
          <!-- <OrganismsButton content="Learn More" type="secondary" /> -->
        </div>
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567782/Localifly/icons/2_j7bep7.svg"
            alt="Take the jobs that interest you"
            style="height: 32px"
          />
          <h5>Take the jobs that interest you</h5>
          <p>
            Our project managers match you with translation tasks aligned with
            your expertise and passions
          </p>
          <!-- <OrganismsButton content="Learn More" type="secondary" /> -->
        </div>
        <div class="col">
          <NuxtImg
            provider="cloudinary"
            src="/v1726567783/Localifly/icons/3_o5itzt.svg"
            alt="Full support"
            style="height: 32px"
          />
          <h5>Full support</h5>
          <p>
            We handle all the administrative tasks and billing, allowing you to
            concentrate solely on your expertise: translating
          </p>
          <!-- <OrganismsButton content="Learn More" type="secondary" /> -->
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
            src="/icons/avatars.svg"
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
  title: "Localifly | Career",
  meta: [
    {
      name: "description",
      content:
        "Are you a seasoned translator or a specialist fluent in multiple languages? Join our team and bring your expertise to the table!",
    },
  ],
});

const faq = ref([
  {
    id: 0,
    title: "Do I need specific software to be a translator for Localifly?",
    content: "No, You can use any software.",
    isOpen: false,
  },
  {
    id: 1,
    title: "How are rates set?",
    content:
      "You will receive 40% for every single page. For example, the price for Indonesian to English is Rp75,000, and you will get Rp30,000 for every page.",
    isOpen: false,
  },
  {
    id: 2,
    title: "How and when do I get paid?",
    content: "You will get paid one week after the project is done.",
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
  padding-top: 8em;
  .head-wrap {
    max-width: 1440px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    .header {
      border-radius: 16px;
      background-color: $ArtboardSurfaceVariant;
      display: flex;
      padding: 56px 0px;
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
}

@media only screen and (min-width: 320px) and (max-width: 600px) {
  .wrapper {
    padding-top: 7em;
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
