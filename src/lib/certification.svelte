<script>
  import Certificate from './certificate.svelte';
  import MdiLink from '~icons/mdi/link';

  let agilePmUrl =
    'https://candidateportal.apmg-international.com/api/exams/2000389061/certificate/AGILEF14';
  let scrumUrl = 'https://www.scrum.org/user/919181';
</script>

<article class="p-5 gap-8 flex flex-col">
  <h2>Certification</h2>

  <ul class="flex flex-col gap-4">
    <Certificate name="Computer Science Expert" description="Vocational Degree">
      <p>
        Obtained certification as Computer Science Expert after 2.5 years of
        studying and working in parallel with a perfect score for the practical
        exam. Qualifies as ISCED 4.
      </p>
    </Certificate>
    <Certificate name="AgilePM Foundation" description="Agile Project Management">
      <p>
        Obtained <a href={agilePmUrl}><MdiLink class="inline"/>certification</a>
        for Agile Project Management using the Dynamic Systems Development
        Method (DSDM), an agile project delivery framework.
      </p>
    </Certificate>
    <Certificate name="PSM I" description="Professional Scrum Master I">
      <p>
        Undertook extensive Scrum.org training to become a <a
        href={scrumUrl}><MdiLink class="inline"/>certified</a> Scrum Master.
      </p>
    </Certificate>
  </ul>
</article>

<style>
  :global(svg) {
    margin-top: -.1rem;
  }
</style>
