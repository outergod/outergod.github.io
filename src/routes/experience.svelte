<script>
  import TimelineItem from './timeline-item.svelte';

  let tech = {
    dixa: ["Kubernetes", "Docker", "Drone CI", "Terraform", "Hashicorp Vault"]
  };
</script>

<article class="p-5 gap-8 flex flex-col">
  <h2>Experience</h2>

  <ul class="timeline">
    <TimelineItem active company="Dixa" role="Tech Lead Automation Platform" year="Now" tech={tech.dixa}>
      <p>
        After Solvemate's aquisition through Dixa, I took on the role of
        the Platform Engineering Lead for the new Automation Platform,
        now fully focussing on delivering the right platform and tools
        to our customer experience teams.
      </p>
    </TimelineItem>
    <TimelineItem company="Solvemate" role="Head of Engineering" year="2020">
      <p>
        As Solvemate's Head of Engineering, I took on the responsibility
        to establish development practices that ensured delivery teams were
        empowered to deliver valuable features and were always
        unblocked. I also took on the responsibility of a Platform
        Engineer and containerized the platform together with the SRE
        Lead.
      </p>
    </TimelineItem>
    <TimelineItem company="Communicatio.Systems" role="Managing Director" year="2018">
      <p>
        After striking a deal with multiple digital agencies in Berlin as
        well as a Munich-based investor, I became the Managing Director of a
        DevOps-centric technology company which provided B2B hosting and DevOps services
        and supported the development of innovative hosting and monitoring
        solutions.
      </p>
    </TimelineItem>
    <TimelineItem company="Æternity Blockchain" role="Freelance Software Engineer" year="2018">
      <p>
        I was contributing to the æternity Blockchain project as a
        freelancing software engineer. My main focus were the JavaScript
        and Python SDKs as well as DevOps. All my contributions are
        Open Source and can be scrutinized via my GitHub account.
      </p>
    </TimelineItem>
    <TimelineItem company="Oliver Wyman" role="Berlin Hub Lead" year="2017">
      <p>
        After the acquisition of LShift through Oliver Wyman (Marsh & McLennan
        Companies), I ensured the smooth transition for the German team. My main
        responsibility was to provide a corporate-level approved Enterprise Linux
        distribution based on Fedora and Red Hat for develoment teams.
      </p>
    </TimelineItem>
    <TimelineItem company="LShift" role="Lead Developer" year="2015">
      <p>
        I took over two bespoke legacy projects, effectively saving them while preserving a
        good customer relationship. Also among my responsibilities was maintaining a
        running infrastructure for all internal services.
      </p>
    </TimelineItem>
    <TimelineItem company="HERE (Nokia)" role="Senior Software Engineer" year="2010">
      <p>
        In the Maps on MeeGo team, I contributed to the Qt-based Maps application for
        the Nokia N9 handset, developing central parts of the application. Later in the
        Windows Phone integration team, my responsiblity was to enable Microsoft
        integrate Nokia’s native mapping platform into the Windows Phone line of
        operating systems from a DevOps perspective. In the Search Analytics division, my
        responsibility was to analyze and monitor log data activities from search clients.
      </p>
    </TimelineItem>
    <TimelineItem company="Iconmobile" role="Developer" year="2007">
      <p>
        I was hired to complement the existing Perl mobile web technology stack with a
        PHP framework that enabled other developers use the existing stack with a more
        familiar approach. Aside that, I helped develop web front-ends.
      </p>
    </TimelineItem>
    <TimelineItem company="InMediasP" role="Apprentice" year="2004">
      <p>
        During my time as an apprentice, I was mainly working on middleware polyglot
        software. Technologies to bridge included .NET, Java Beans and Portals, SAP R/3
        and Microsoft Sharepoint.
      </p>
    </TimelineItem>
  </ul>
</article>

<style>
  p {
    @apply text-justify;
  }
</style>
