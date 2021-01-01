<template>
  <div class="common-list-wrapper">
    <a-table :columns="columns" :data-source="data" rowKey="id">
      <template #action="{ record }">
        <span>
          <a-button
            type="link"
            size="small"
            :disabled="!isAdmin"
            @click="goDetail(record.id)"
            >查看详情</a-button
          >
        </span>
      </template>
    </a-table>
  </div>
</template>

<script lang='ts'>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { defineComponent, computed } from "vue";
const columns = [
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "终局",
    dataIndex: "end",
    key: "end",
  },
  {
    title: "排名",
    dataIndex: "rank",
    key: "rank",
  },
  {
    title: "点数",
    key: "point",
    dataIndex: "point",
  },
  {
    title: "操作",
    key: "action",
    slots: { customRender: "action" },
  },
];

export default defineComponent({
  name: "commonList",
  setup() {
    const store = useStore();
    const isAdmin = computed(() => store.getters.isAdmin);
    const data = store.getters.dataArr;
    const router = useRouter();
    const goDetail = (id: string) => {
      router.push(`/dashboard/detail/${id}`);
    };
    return {
      isAdmin,
      columns,
      data,
      goDetail,
    };
  },
});
</script>

<style lang='less'>
.common-list-wrapper {
  position: relative;
  padding: 5px 10px;
  width: 100%;
}
</style>