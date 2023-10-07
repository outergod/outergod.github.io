<script>
	import OcticonMarkGithub16 from '~icons/octicon/mark-github-16';
	import IcBaselineLocationOn from '~icons/ic/baseline-location-on';
	import MdiLinkedin from '~icons/mdi/linkedin';
	import MdiWeb from '~icons/mdi/web';
	import Avatar from './avatar.svelte';

	let years = new Date().getFullYear() - 2004;
	export let name;
	export let role;
</script>

<article class="flex flex-col p-5 gap-4">
	<div class="flex flex-row items-center gap-2">
		<Avatar />
		<div class="grow lato">
			<p class="text-3xl sm:text-6xl">{name}</p>
			<p class="text-xl sm:text-3xl">{role}</p>
		</div>
	</div>

	<ul class="hidden sm:flex flex-row justify-between">
		<li>
			<IcBaselineLocationOn />
			<a href="maps:q=Biesenthal, Germany">Biesenthal, Germany</a>
		</li>
		<li>
			<MdiWeb />
			<a href="https://outergod.dev">outergod.dev</a>
		</li>
		<li>
			<OcticonMarkGithub16 />
			<a href="https://github.com/outergod">@outergod</a>
		</li>
		<li>
			<MdiLinkedin />
			<a href="https://linkedin.com/in/outergod">@outergod</a>
		</li>
	</ul>

	<div class="flex sm:hidden flex-row gap-2">
		<a href="maps:q=Berlin, Germany"><IcBaselineLocationOn /></a>
		<a href="https://outergod.dev"><MdiWeb /></a>
		<a href="https://github.com/outergod"><OcticonMarkGithub16 /></a>
		<a href="https://linkedin.com/in/outergod"><MdiLinkedin /></a>
	</div>

	<p>
		Software engineering veteran with {years} years of professional experience in different areas and
		companies of all sizes. Highly specialized in Platform Engineering, Engineering Leadership, Recruitment,
		Agile Coaching and Functional Programming methodologies. Excellent team multiplier and extremely
		eager to both learn and teach new techniques and technologies. Linux operating system expert with
		a high Red Hat / Fedora and GNU Emacs affinity.
	</p>
</article>

<style>
	p {
		@apply text-justify;
	}

	.lato {
		font-family: Lato;
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
