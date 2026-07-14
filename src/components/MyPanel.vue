<template>
  <section class="my-panel">
    <!-- 头部区域 -->
    <div class="header">
      <h3>
        {{ title }}
        <small>{{ subTitle }}</small>
      </h3>
      <!-- 插槽 -->
      <slot name="right" />
    </div>
    <!-- 默认插槽 -->
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "主标题",
    },
    subTitle: {
      type: String,
      default: "副标题",
    },
  },
};
</script>

<style lang="less" scoped>
.my-panel {
  background-color: #fff;

  .header {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      text-align: left;
      font-weight: normal;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 10px;
      }
    }
  }
}

@media (max-width: 767px) {
  .my-panel .header {
    min-height: 76px;
    padding: 24px 0 16px;
    align-items: center;
    gap: 12px;
  }

  .my-panel .header h3 {
    min-width: 0;
    font-size: 24px;
    line-height: 1.25;
  }

  .my-panel .header h3 small {
    display: block;
    margin: 4px 0 0;
    font-size: 13px;
    line-height: 1.4;
  }
}
</style>
