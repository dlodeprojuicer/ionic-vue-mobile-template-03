<template>
	<fragment>
    <ion-list>
      <ion-item v-for="(item,index) in data" :key="index">
        <ion-icon slot="start" :name="item.icon"></ion-icon>
        <ion-label>
					<h2>{{ item.name }}</h2>
					<p>{{ item.date }}</p>
				</ion-label>
        <ion-text slot="end">
          <b>R {{ item.cost }}</b>
        </ion-text>
      </ion-item>
    </ion-list>
	</fragment>
</template>

<script>
export default {
  name: "recent-list",
  props: {
		data: {
			type: Array,
			required: true,
			default: () => []
		}
	}
}
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 600;
	color: #000000;
}

ion-item {
  // --background: #e2e9ea;
  --border-style: none;
}

ion-icon {
  background: #ffffff;
  padding: 10px;
  border-radius: 16px;
  color: #000;
}
</style>
