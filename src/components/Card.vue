<template>
  <div class="card">
    <h2>{{ dungeonName }}</h2>

    <div class="content">
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
    <div
      class="img-wrap"
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/DungeonMapDoodle' + roomCount + '.png') +
          ')',
      }"
    ></div>
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
    "roomCount",
  ],
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background: #fff;
  padding: 24px;
  border-radius: 13px;
  position: relative;
  margin: 0 12px;
  box-shadow: 0 10px 16px 0 #cde4dd;
  display: flex;
  flex-wrap: wrap;
}

.card h2 {
  flex-basis: 100%;
}

.card .content,
.card .img-wrap {
  flex-basis: 50%;
}

.card .img-wrap {
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 30%;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.card ul li {
  padding-top: 4px;
}
</style>
