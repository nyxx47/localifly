<template>
  <nuxt-link :class="[variantType, btnStyle]" v-bind="{ ...linkProps }">
    <slot></slot>
    <UIcon :name="icon" dynamic aria-hidden="true" />
  </nuxt-link>
</template>
​
<script setup>
const linkProps = defineProps(["icon", "variant"]);

const btnStyle = ref("button");

const variantType = computed(() => {
  switch (linkProps.variant) {
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
    case "ghost":
      return "ghost";
    default:
      return "primary";
  }
});
</script>

<style lang="scss" scoped>
a {
  color: unset;
}
.button {
  display: flex;
  padding: 8px 16px;
  align-items: center;
  border-radius: 8px;
  height: fit-content;
  font-size: 14px;
  cursor: pointer;
  min-height: 40px;
  justify-content: center;
  width: fit-content;
  gap: 4px;

  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 19.5px */
  letter-spacing: 0.26px;

  .icon {
    width: 18px !important;
    height: 18px;
  }
}

.primary {
  background: $ArtboardBlack;
  transition: 0.3s ease;
  color: $TextWhite;
  &:hover {
    box-shadow: 0px 4px 20px 0px rgba(74, 70, 70, 0.25);
  }
}

.secondary {
  border: 1px solid #e8ebee;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  letter-spacing: 0.3px;
  color: $TextPrimary;
}

.tertiary {
  border: 1px solid $ArtboardSurfaceEmphasis;
  background-color: $ArtboardSurfaceEmphasis;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
  letter-spacing: 0.26px;
  p {
    position: relative;
    top: -1px;
  }
}
</style>
