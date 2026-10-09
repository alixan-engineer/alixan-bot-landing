<template>
	<Layout>
		<template #scaffold>
			<Scaffold>
				<template #app-bar>
					<Header />
				</template>
				<template #body>
					<main>
						<NuxtPage />
					</main>
					<Footer class="mt-14 md:mt-18 lg:mt-20" />
				</template>
			</Scaffold>
		</template>
	</Layout>
</template>
