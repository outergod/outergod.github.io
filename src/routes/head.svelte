<script>
	import OcticonMarkGithub16 from '~icons/octicon/mark-github-16';
	import IcBaselineLocationOn from '~icons/ic/baseline-location-on';
	import MdiLinkedin from '~icons/mdi/linkedin';
	import MdiWeb from '~icons/mdi/web';
	import Avatar from './avatar.svelte';

	export let name;
	export let role;
</script>

<article class="flex flex-col p-5 gap-4">
	<div class="flex flex-row items-center gap-2">
		<Avatar />
		<div class="grow">
			<p class="text-7xl">{name}</p>
			<p class="text-3xl">{role}</p>
		</div>
	</div>

	<ul class="flex flex-row justify-between">
		<li>
			<IcBaselineLocationOn />
			<a href="maps:q=Berlin, Germany">Berlin, Germany</a>
		</li>
		<li>
			<MdiWeb />
			<a href="https://outergod.dev">outergod.dev</a>
		</li>
		<li>
			<OcticonMarkGithub16 class="w-4 h-4" />
			<a href="https://github.com/outergod">@outergod</a>
		</li>
		<li>
			<MdiLinkedin />
			<a href="https://linkedin.com/in/outergod">@outergod</a>
		</li>
	</ul>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis facilisis sem vel
		bibendum. Vivamus metus elit, tincidunt pulvinar dolor eu, rhoncus varius arcu. Maecenas nec
		varius orci. Aenean luctus bibendum purus, et ultrices ipsum vehicula non. Pellentesque luctus
		elit at quam dapibus, sit amet euismod leo commodo. In sed orci hendrerit, lobortis est commodo,
		venenatis nibh. Etiam vehicula nisl tortor, eget molestie est scelerisque at. Cras et pharetra
		magna, et dictum lorem. Nulla pharetra dui sapien, vitae feugiat dolor sagittis non.
	</p>
</article>

<style>
	p {
		@apply text-justify;
	}

	:global(svg) {
		@apply mt-0.5;
	}

	li {
		@apply flex;
		@apply items-center;
		@apply gap-1;
	}
</style>
