<template>
	<div>
		<ion-grid v-for="(item, index) in data" :key="index">
			<ion-row class="first-row">
				<div class="company">
					{{ item.company }}
					<br />
					<span class="model">
						{{ item.model }}
					</span>
				</div>
				<img :src="item.image" />
			</ion-row>
			<ion-row class="second-row">
				<ion-col>
					<div class="label">Leasing Rate</div>
					<div class="value">
						{{ item.rate }}
						<span class="unit">
							/month
						</span>
					</div>
				</ion-col>
				<ion-col>
					<div class="label">Leasing Term</div>
					<div class="value">
						{{ item.term }} 
						<span class="unit">
							months
						</span>
					</div>
				</ion-col>
				<ion-col>
					<div class="label">New</div>
					<div class="value">
						{{ item.new }}
					</div>
				</ion-col>
			</ion-row>
		</ion-grid>
	</div>
</template>

<script>
import { IonGrid, IonRow, IonCol } from "@ionic/vue";

export default {
	name: "card-wallet",
	components: { IonGrid, IonRow, IonCol },
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
.company {
	color: #ffffff;
	font-weight: 500;
	margin: 0 0 -64px 0;
	padding: 15px;
	z-index: 9999999999999;
}

.model {
	font-size: 13px;
	float: left;
}

ion-row {
	img {
		border-radius: 20px;
		margin: 0;
		padding: 0;
	}

	&.first-row {
		border-radius: 20px 20px 0 0;
		background: #ffffff;
		margin: 0;
		padding: 0;
	}

	&.second-row {
		padding: 10px;
		background: #ffffff;
		border-radius: 0 0 20px 20px;
	}

	ion-col {
		.label {
			margin-bottom: 10px;
			font-weight: 500;
			font-size: 13px;
		}

		.value {
			font-weight: 500;
			font-size: 15px;
			color: #96a6d2;
		}

		.unit {
			font-size: 11px;
		}
	}
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
