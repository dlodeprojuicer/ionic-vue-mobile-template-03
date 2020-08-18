<template>
	<fragment>
		<ion-slides pager="true">
			<ion-slide v-for="(item, index) in data" :key="index">
				<ion-grid class="card">
					<ion-row>
						<ion-col class="expDate">
							{{ item.expDate }}
						</ion-col>
						<ion-col class="card-icon">
							<ion-icon name="card" />
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col class="card-number">
							{{ item.cardNumber }}
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col class="balance">
							R {{ item.balance }}
						</ion-col>
					</ion-row>
				</ion-grid>
			</ion-slide>
		</ion-slides>
	</fragment>
</template>

<script>
export default {
  name: "card-wallet",
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
.card {
	background-color: #1fc8db;
  background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
	border-radius: 25px;
  height: 170px;
	margin: 0 3px;
}

ion-row {
	margin: 10px;
}

.balance, .expDate, .card-number {
	text-align: left;
}

.balance, .card-number {
	font-size: 20px;
}

.card-number {
	font-size: 7vw;
}

.card-icon {
	text-align: right;
}

</style>
