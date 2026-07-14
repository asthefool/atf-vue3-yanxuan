<template>
  <div class="banner-skeleton">
    <AppSkeleton width="100%" height="100%" bg="#e9e9e9" />
  </div>
</template>

<style lang="less" scoped>
.banner-skeleton {
  width: 100%;
  height: clamp(180px, 28vw, 400px);
  overflow: hidden;
}
</style>
