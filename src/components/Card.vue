<template>
  <div class="card">
    <div class="img-wrap"></div>

    <h2>{{ dungeonName }}</h2>

    <p>{{ description }}</p>
    <p>
      <span class="strong">Kit Type: </span>
      {{ kitType }}
    </p>
    <p>
      <span class="strong">Kit Mix: </span>

      {{ kitMix }}
    </p>
    <p><span class="strong">Enemies: </span> {{ enemies }}</p>

    <ul>
      <li v-for="(unique, index) in uniques" :key="index">
        {{ unique }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: [
    "dungeonName",
    "description",
    "kitType",
    "kitMix",
    "enemies",
    "uniques",
  ],
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
