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
  padding: 6px 12px;
  align-items: center;
  border-radius: 8px;
  height: fit-content;
  font-size: 14px;
  cursor: pointer;
  min-height: 36px;
  justify-content: center;
  width: fit-content;
  img {
    position: relative;
    left: 3px;
  }
}

.primary {
  background: #7053ff;
  transition: 0.3s ease;

  p {
    font-style: normal;
    font-weight: 300;
    line-height: 150%; /* 19.5px */
    letter-spacing: 0.26px;
    color: $TextWhite;
  }
  &:hover {
    box-shadow: 0px 10px 30px 0px rgba(112, 83, 255, 0.2);
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

  p {
    position: relative;
    top: -1px;
  }
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
