<template>
	<view class="uni-numbox">
		<view class="uni-numbox-minus" 
			@click="_calcValue('subtract')"
		>
			<text class="" :class="minDisabled?'uni-numbox-disabled': ''" >-</text>
		</view>
		<input 
			class="uni-numbox-value" 
			type="number" 
			:disabled="disabled"
			:value="inputValue" 
			
			@blur="_onBlur"
		>
		<view 
			class="uni-numbox-plus" 
			@click="_calcValue('add')"
		>
			<text class="" :class="maxDisabled?'uni-numbox-disabled': ''" >+</text>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'uni-number-box',
		props: {
			isMax: {
				type: Boolean,
				default: false
			},
			isMin: {
				type: Boolean,
				default: false
			},
			index: {
				type: Number,
				default: 0
			},
			goodsindex: {
				type: Number,
				default: 0
			},
			value: {
				type: Number,
				default: 0
			},
			min: {
				type: Number,
				default: -Infinity
			},
			max: {
				type: Number,
				default: Infinity
			},
			step: {
				type: Number,
				default: 1
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				inputValue: 0,
				minDisabled: false,
				maxDisabled: false
			}
		},
		created(){
			this.inputValue = +this.value;
			this.maxDisabled = this.isMax;
			this.minDisabled = this.isMin;
		},
		computed: {
		
		},
		watch: {
			value(val) {
				this.inputValue = +val
			},
			inputValue(number) {
				const data = {
					number: number,
					index: this.index,
					goodsindex:this.goodsindex
				}
				this.$emit('eventChange', data);
			}
		},
		computed: {

		},
		methods: {
			_calcValue(type) {
				const scale = this._getDecimalScale();
				let value = this.inputValue * scale;
				let newValue = 0;
				let step = this.step * scale;
				
				if(type === 'subtract'){
					newValue = value - step;
					if (newValue <= this.min){
						this.minDisabled = true;
					}
					if(newValue < this.min){
						newValue = this.min
					}
					if(newValue < this.max && this.maxDisabled === true){
						this.maxDisabled = false;
					}
				}else if(type === 'add'){
					newValue = value + step;
					if (newValue >= this.max){
						this.maxDisabled = true;
					}
					if(newValue > this.max){
						newValue = this.max
					}
					if(newValue > this.min && this.minDisabled === true){
						this.minDisabled = false;
					}
				}
				if(newValue === value){
					return;
				}
				this.inputValue = newValue / scale;
			},
			_getDecimalScale() {
				let scale = 1;
				// 浮点型
				if (~~this.step !== this.step) {
					scale = Math.pow(10, (this.step + '').split('.')[1].length);
				}
				return scale;
			},
			_onBlur(event) {
				let value = event.detail.value;
				if (!value) {
					this.inputValue = 0;
					return
				}
				value = +value;
				if (value > this.max) {
					value = this.max;
				} else if (value < this.min) {
					value = this.min
				}

				this.inputValue = value
			}
		}
	}
</script>
<style>
	.uni-numbox {
		position:absolute;
		left: 30upx;
		bottom: 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width:230upx;
		height: 50upx;
		background:#ffffff;
	}

	.uni-numbox-minus,
	.uni-numbox-plus {
		margin: 0;
		background-color: #ffffff;
		width: 60upx;
		height: 100%;
		line-height: 50upx;
		text-align: center;
		position: relative;
		border:1upx solid #cccccc;
	}
	.uni-numbox-minus .yticon,
	.uni-numbox-plus .yticon{
		font-size: 36upx;
		color: #555;
	}

	.uni-numbox-minus {
		border-right: none;
		border-top-left-radius: 6upx;
		border-bottom-left-radius: 6upx;
	}

	.uni-numbox-plus {
		border-left: none;
		border-top-right-radius: 6upx;
		border-bottom-right-radius: 6upx;
	}

	.uni-numbox-value {
		position: relative;
		background-color: #FFFFFF;
		width: 60upx;
		height: 50upx;
		text-align: center;
		padding: 0;
		font-size: 30upx;
		border:1upx solid #cccccc;
	}

	.uni-numbox-disabled.yticon {
		color: #d6d6d6;
	}
</style>
