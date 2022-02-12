<template>
	<div :class="`filter-item ${filter}`" :style="`background-image:url(${upload_img})`">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'filterBox',
	props: {
		upload_img: String,
		filter: String
	}
}
</script>

<style>
	.filter-item {
		width: 100px;
		height: 100px;
		margin: 10px 10px 10px auto;
		padding: 8px;
		display: inline-block;
		color : white;
		background-size: cover;
		background-position : center;
	}
</style>
