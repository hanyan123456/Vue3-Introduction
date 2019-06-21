<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ total }}</h1>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  @Prop() private msg!: string;
  public total:number=this.$store.state.total
 
}
</script>