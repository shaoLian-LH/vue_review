<template>
  <a-layout id="components-layout-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div v-if="collapsed" class="logo">L</div>
      <div v-else class="logo">LOGO</div>
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item style="margin-top: 15px" key="dashboard">
          <user-outlined />
          <span>列表页</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <div>
          <span>{{ identity === "admin" ? "管理员" : "kaopuyun" }}</span>
          <a-button type="link" size="small" @click="logout">登出</a-button>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang='ts'>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { StoreProps } from "../store/index.d";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";

export default defineComponent({
  components: {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const store = useStore<StoreProps>();
    const router = useRouter();
    const isValidate = store.getters.isValidate;
    // if (!isValidate) {
    //   message.error("未知身份");
    //   setTimeout(() => {
    //     message.destroy();
    //   }, 1000);
    //   router.push("/");
    // }
    const identity = computed(() => store.state.identity);
    const logout = () => {
      store.dispatch("logout").then(() => {
        message.info("成功登出");
        setTimeout(() => {
          message.destroy();
        }, 1000);
        router.push("/");
      });
    };
    return {
      selectedKeys: ["dashboard"],
      collapsed: false,
      isValidate,
      identity,
      logout,
    };
  },
});
</script>
<style lang='less'>
#components-layout-custom-trigger {
  position: relative;
  width: 100%;
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .ant-layout-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-right: 50px;
  }
  .logo {
    display: inline-block;
    width: calc(100% - 50px);
    height: 32px;
    box-sizing: border-box;
    margin: 10px 25px;
    margin-top: 32px;
    background: #f2f2f2;
    color: black;
    font-size: 24px;
    font-weight: bolder;
  }
}
</style>
