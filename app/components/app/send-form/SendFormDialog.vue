<script setup lang="ts">
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue';

defineProps<{
	close: () => void;
}>();

const control = useXControl('');
const dialog = useDialog();

const isSubmitted = ref<boolean>(false);
const isSubmitting = ref<boolean>(false);

const save = async () => {
	if (isSubmitting.value) return;

	control.setErrors(
		/^\d{10}$/.test(control.value) ? {} : { phone: 'validation.phone' },
	);
	control.markAsTouched();
	if (control.invalid) {
		dialog.open(AlertDialog, {
			width: '360px',
			height: '280px',
			data: {
				title: 'leadForm.validationDialog.title',
				description: 'leadForm.validationDialog.description',
				buttonLabel: 'actions.ok',
				buttonColor: 'destructive',
				mediaComponent: 'Lottie',
				mediaProps: {
					name: 'error',
					loop: false,
					width: '80px',
					height: '80px',
				},
			},
		});
		return;
	}

	isSubmitting.value = true;
	try {
		const apiBaseUrl = 'https://kaspibot-api.alixan.kz/api';
		await $fetch(`${apiBaseUrl}/landing/leads`, {
			method: 'POST',
			body: { phone: `+7${control.value}` },
		});

		isSubmitted.value = true;
	} finally {
		isSubmitting.value = false;
	}
};
</script>

<template>
	<form class="size-full flex flex-col divide-y" @submit.prevent="save">
		<div
			v-if="isSubmitting"
			class="flex flex-1 items-center justify-center p-6"
		>
			<Spinner size="lg" />
		</div>

		<div
			v-else-if="isSubmitted"
			class="flex-1 flex flex-col items-center justify-center p-6"
		>
			<Lottie name="success" :loop="false" width="140px" height="140px" />
			<p class="max-md:text-base md:text-xl font-medium text-center">
				{{ $t('leadForm.success') }}!
			</p>
		</div>

		<div v-else class="flex-1 p-6 space-y-6">
			<InfoBox>
				{{ $t('leadForm.description') }}
			</InfoBox>
			<PhoneInput
				:control="control"
				country-code="+7"
				maxlength="13"
				placeholder="777 777 77 77"
			/>
			<!-- <p class="text-xs leading-5 text-muted-foreground">
				{{ $t('leadForm.legalNoticePrefix') }}
				<NuxtLink
					class="underline underline-offset-2"
					:to="$localePath('/privacy-policy')"
					@click="close"
					>{{ $t('footer.privacyPolicy') }}</NuxtLink
				>
				{{ $t('leadForm.legalNoticeAnd') }}
				<NuxtLink
					class="underline underline-offset-2"
					:to="$localePath('/user-agreement')"
					@click="close"
					>{{ $t('footer.userAgreement') }}</NuxtLink
				>.
			</p> -->
		</div>

		<div v-if="isSubmitted && !isSubmitting" class="p-4">
			<Button
				class="w-full"
				color="primary"
				label="actions.ok"
				@click="close"
			/>
		</div>

		<div v-else-if="!isSubmitting" class="grid grid-cols-2 gap-2 p-4">
			<Button color="secondary" label="actions.cancel" @click="close" />
			<Button color="primary" type="submit" label="actions.send" />
		</div>
	</form>
</template>
