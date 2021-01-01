<template>
  <div class="login-wrapper">
    <a-card title="选择身份" style="width: 520px; height: 230px">
      <a-button
        class="login-btn"
        type="primary"
        size="large"
        @click="loginAction('admin')"
      >
        以 Admin 身份登录
      </a-button>
      <a-button
        class="login-btn"
        type="primary"
        size="large"
        @click="loginAction('kaopuyun')"
      >
        以 kaopuyun 身份登录
      </a-button>
    </a-card>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { UserIdentity } from "../store/index.d";
import { message } from "ant-design-vue";
export default defineComponent({
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();
    const loginAction = (type: UserIdentity) => {
      store.dispatch("login", type).then(() => {
        message.success("登录成功!", 100);
        setTimeout(() => {
          router.push("/dashboard");
          message.destroy();
        }, 500);
      });
    };
    return {
      loginAction,
    };
  },
});
</script>

<style lang="less">
.login-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  .login-btn {
    display: block;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
}
</style>