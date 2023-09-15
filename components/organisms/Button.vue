<template>
  <div class="btn" :class="type">
    <p>
      {{ content }}
    </p>
    <img v-if="icon" src="~/assets/icons/arrowup.svg" alt="arrow up" />
  </div>
</template>

<script setup>
defineProps(["content", "type", "icon"]);
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  padding: 8px 16px;
  align-items: center;
  border-radius: 8px;
  height: fit-content;
  font-size: 13px;
  cursor: pointer;

  img {
    position: relative;
    left: 3px;
  }
}

.primary {
  background: #7053ff;
  transition: 0.3s ease;
  font-size: 13px;

  p {
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 19.5px */
    letter-spacing: 0.26px;
    color: $TextWhite;
  }
  &:hover {
    box-shadow: 0px 10px 30px 0px rgba(112, 83, 255, 0.2);
  }
}

.secondary {
  border: 1px solid #293237;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  letter-spacing: 0.3px;
}

.tertiary {
  border: 1px solid $ArtboardSurfaceEmphasis;
  background-color: $ArtboardSurfaceEmphasis;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
  letter-spacing: 0.26px;
}
</style>
