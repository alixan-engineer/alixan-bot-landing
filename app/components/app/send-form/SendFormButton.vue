<script setup lang="ts">
import SendFormDialog from './SendFormDialog.vue';

defineProps<{
	label: string;
}>();

const dialog = useDialog();

const openDialog = () => {
	dialog.open(SendFormDialog, {
		width: '460px',
		height: '460px',
		title: 'leadForm.title',
	});
};
</script>

<template>
	<Button
		size="responsive"
		color="primary"
		variant="filled"
		@click="openDialog"
	>
		<template #leading>
			<slot />
		</template>
		{{ $t(label) }}
	</Button>
</template>
