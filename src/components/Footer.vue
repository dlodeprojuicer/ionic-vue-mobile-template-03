<template>
	<div class="footer">
		<ion-tabs>
			<ion-tab-bar>
				<ion-tab-button :tab="item.label" v-for="(item, index) in data" :key="index" @click="goto(item.route)">
					<ion-icon :name="item.icon"></ion-icon>
					<!-- <ion-label>{{ item.label }}</ion-label> -->
					<!-- <ion-badge>6</ion-badge> -->
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</div>
</template>

<script>
export default {
  name: "page-footer",
  props: {
		data: {
			type: Array,
			required: true,
			default: () => []
		},
		loggedIn: {
			type: Boolean,
			required: true,
			default: false
		}
	},
	methods: {
		goto(route) {
			this.$emit("goto", route);
		}
	}
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 70px;
	z-index: 999;
  width: 100%;
}

ion-tab-bar {
	border-radius: 40px 40px 0 0;
	padding: 10px 0;
	--background: #ffffff;
}
</style>
