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
		goto() {
			// routing
			// this.$emit("goto", route);
		}
	}
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 57px;
	z-index: 999;
  width: 100%;
}

ion-tab-bar {
	border-radius: 10px 10px 0 0;
	--background: #ffffff;

	ion-tab-button {
		&:nth-child(2) {
			// margin-top: -51px;
			// background: #ffff;
			ion-icon {
				border: 1px #232323 solid;
				border-radius: 50px;
				padding: 13px;
			}
		}
	}
}
</style>
