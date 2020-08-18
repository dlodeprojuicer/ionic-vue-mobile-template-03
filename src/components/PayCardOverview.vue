<template>
	<ion-grid>
		<ion-row class="first-row">
			<ion-col>
					<ion-icon name="arrow-round-back" @click="back"></ion-icon>
			</ion-col>
			<ion-col>
				<div class="balance">Balance</div>
				<br />
				<div class="amount">R 7 658</div>
			</ion-col>
		</ion-row>

		<ion-row>
			<ion-col>
				Favorites
			</ion-col>
			<ion-col>
				All users
			</ion-col>
			<ion-col>
				New users
			</ion-col>
		</ion-row>

	</ion-grid>
</template>

<script>
export default {
  name: "pay-card-overview",
  methods: {
		back() {
			this.$router.back();
		}
	}
}
</script>

<style lang="scss" scoped>
ion-grid {
	border-radius: 0 0 40px 40px;
	background: #ffffff;
	height: 160px;
	padding: 5px 0 0 35px;
	margin-bottom: 15px;
}

.first-row {
	margin: 10px 0px 30px 0;
}

.amount, .balance {
	color: #000000;
}

.amount {
	font-size: 25px;
  margin-top: 10px;
}

ion-col {
	padding-right: 20px;
	div {
		float: right;
	}

	ion-icon {
		float: left;
    font-size: 22px;
    background: #e0e0e0;
    padding: 8px 16px 8px 10px;
    margin-left: -42px;
		border-radius: 0 11px 11px 0;
	}
}

</style>
