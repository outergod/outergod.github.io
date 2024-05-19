<script>
  import TimelineItem from './timeline-item.svelte';
  import MdiLink from '~icons/mdi/link';

  let tech = {
    sonova: ["TypeScript", "Terraform", "Google Cloud", "rush", "git", "Scrum"],
    dixaStaff: ["Amazon Web Services", "Google Cloud", "Kubernetes", "Docker", "GitHub Actions", "TypeScript", "Pulumi", "Git"],
    dixa: ["Google Cloud", "Google Workspaces", "Kubernetes", "Docker", "Drone CI", "Terraform", "Vault", "Git", "Scrum"],
    solvemate: ["Google Cloud", "Google Workspaces", "Kubernetes", "Docker", "Jenkins", "Terraform", "TypeScript", "Python", "Bash", "MongoDB", "F#", "Git", "Scrum"],
    communicatio: ["Docker", "Docker Stack", "Nix", "Bash", "Clojure", "Vue.js", "JavaScript", "Prometheus", "Elasticsearch", "Snyk", "Postfix", "FreeIPA", "Nextcloud", "PostgreSQL", "PHP", "Salt", "Git"],
    aeternity: ["JavaScript", "Erlang", "Git"],
    ow: ["RHEL", "Python", "Clojure", "Git"],
    lshift: ["GSuite", "Heroku", "AWS", "FreeIPA", "TypeScript", "Clojure", "Python", "Salt", "Ansible", "RabbitMQ", "AngularJS", "Git", "DSDM", "Scrum"],
    search: ["AWS", "MapReduce", "Hadoop", "Cascalog", "Clojure", "Java", "Knockout", "JavaScript", "D3", "Git", "Scrum"],
    nmaa: ["Windows Phone", "Jenkins", "Groovy", "Gradle", "F#", "Mercurial", "Git"],
    maps: ["Qt", "QML", "JavaScript", "C++", "Maemo", "Jenkins", "Git", "Scrum"],
    iconmobile: ["PHP", "JavaScript", "Perl", "Xen", "RPM", "MySQL", "Prototype", "jQuery", "Subversion", "Git", "Waterfall"],
    inmediasp: ["C#", "ASP.NET", "JavaScript", "Java", "MSSQL", "SharePoint", "SAP R/3", "SAP NetWeaver", "CATIA V5", "Visual Studio", "Eclipse", "Visual Source Safe", "Extreme Programming"]
  };
</script>

<article class="p-5 gap-8 flex flex-col break-after-page">
  <h2>Career</h2>

  <ul>
    <TimelineItem active company="Sonova Marketing" role="Engineering Lead" date="2024" tech={tech.sonova}>
      <p>
        Assumed the role of Engineering Lead with Sonova Marketing's Lead
        Generation Factory in order to shape an engineering team setup that can
        scale to new markets.
      </p>
      <p>
        Migrated the team's repository and workflows to GitHub Enterprise from
        GitHub Cloud.
      </p>
      <p>
        Collaborated with Product Management to create a Scrum Team and re-shape
        development to be product-centric, increasing developer productivity as
        well as stakeholder and developer satisfaction in the process.
      </p>
      <p>
        Assumed roles of Scrum Master and DevOps in the new team to empower
        their autonomy.
      </p>
      <p>
        Educated the team on Functional Programming methodologies to reduce
        boilerplate and increse code quality and test efficiency.
      </p>
    </TimelineItem>
    <TimelineItem company="Dixa" role="Staff Platform Engineer" date="2023" tech={tech.dixaStaff}>
      <p>
        Joined forces with the Dixa SRE team to standardize and unify the
        platforms of all joined companies.
      </p>
      <p>
        Ported Solvemate's Drone CI pipelines to Dixa's standard GitHub Actions
        solution.
      </p>
      <p>
        Added crucial missing features to Dixa's custom infrastructure-as-code
        solution based on Pulumi and TypeScript to support GitHub Actions with
        Kubernetes clusters in different regions and environments.
      </p>
      <p>
        Migrated Solvemate's legacy chatbot stack from GCP to AWS while porting
        functionality from Helm charts to Pulumi.
      </p>
    </TimelineItem>
    <TimelineItem company="Dixa" role="Tech Lead Automation Platform" date="2022" tech={tech.dixa}>
      <p>
        Leadership of the newly founded Automation Platform team after
        Solvemate's acquisition through Dixa with an "engineering teams as
        customers" focus.
      </p>
      <p>
        Successfully ported the legacy CI environment and its pipelines to a
        Drone based solution and guided the team to empower the customer
        experience teams develop locally.
      </p>
      <p>
        Championed and completed the Google Workspace migration project.
      </p>
    </TimelineItem>
    <TimelineItem company="Solvemate" role="Head of Engineering" date="2020" tech={tech.solvemate}>
      <p>
        Took on the responsibility to manage all engineers as well as
        engineering processes and put in charge of tech recruitment.
      </p>
      <p>
        Established agile development practices and coding standards that
        ensured delivery teams were empowered to deliver valuable features first
        and foremost while staying unblocked.
      </p>
      <p>
        Containerized the existing platform in collaboration with with the SRE
        Lead, enabling autoscaling and safe automatic rollbacks through
        Kubernetes on Google Cloud.
      </p>
      <p>
        As part of a delivery team, implemented asynchronous channel integration
        successfully for four different providers by providing a new Python backend.
      </p>
      <p>
        Helped create a new onboarding experience from scratch by extending the
        existing Python services and Angular frontend.
      </p>
      <p>
        Increased developer satisfaction and effectiveness by 20% through
        coaching and regular surveys.
      </p>
      <p>
        Led the tech recruitment efforts to success by hiring three new
        colleagues through extensive interviewing.
      </p>
      <p>
        Coordinated training and certification program for Scrum Masters and
        Product Owners, resulting in increase in team productivity.
      </p>
      <p>
        Served as Scrum Master and Agile Coach for multiple teams, increasing
        overall team independence, happiness and efficiency.
      </p>
    </TimelineItem>
    <TimelineItem company="Communicatio.Systems" role="Managing Director" date="2018" tech={tech.communicatio}>
      <p>
        Managing Director and sole engineer of a B2B DevOps as a Service
        company, part of a group of companies.
      </p>
      <p>
        Modernized all legacy Ruby and PHP services for the other shareholders'
        companies by porting them into Docker Stack environments.
      </p>
      <p>
        Established and maintained custom IDP-backed mail and file hosting
        solution using FreeIPA, Nextcloud, and Postfix.
      </p>
      <p>
        Developed an innovative, Linux distribution independent monitoring and
        security analysis solution using Nix, Prometheus, and Snyk.
      </p>
      <p>
        Upgraded a legacy SSL certificate provider system written in PHP to support S/MIME.
      </p>
    </TimelineItem>
    <TimelineItem company="æternity blockchain" role="Freelancer" date="2018" tech={tech.aeternity}>
      <p>
        Freelancing JavaScript SDK developer for the æternity blockchain. All
        contributions are Free Software and can be scrutinized publicly.
      </p>
      <p>
        Took over the lead for the JavaScript SDK and modernized it in close
        collaboration with the core blockchain development team.
      </p>
      <p>
        Also contributed minor parts to the backend Erlang API.
      </p>
    </TimelineItem>
    <TimelineItem company="Oliver Wyman" role="Berlin Hub Lead" date="2017" tech={tech.ow}>
      <p>
        Assumed the role of Berlin Hub Lead after the acquisition of LShift
        through Oliver Wyman (Marsh & McLennan Companies).
      <p>
        Ensured the smooth transition for the former LShift development team in
        Germany.
      </p>
      <p>
        Successfully lead an effort to develop a custom, corporate-level
        approved Enterprise Linux distribution based on Fedora and Red Hat for
        development teams.
      </p>
      <p>
        Supported Account Executives to win several sales pitches.
      </p>
    </TimelineItem>
    <TimelineItem company="LShift" role="Lead Developer" date="2015" tech={tech.lshift}>
      <p>
        Joined the Managing Director to build up the new German satellite team
        for London-based LShift, a former FinTech agency specialized in
        Functional Programming.
      </p>
      <p>
        Assumed the lead for an almost-failed private social network project
        that was based on Clojure, TypeScript and Event Sourcing and saved the
        customer from churning by fixing the technical issues, which also
        involved a migration from Heroku to AWS.
      </p>
      <p>
        Adopted another project at risk of churning for a UK pro-bono platform
        that involved AngularJS, Python and Salt based deployment strategies.
      </p>
      <p>
        Implemented <a href="https://github.com/outergod/rammler"><MdiLink
        class="inline"/>rammler</a>, the world's first AMQP 0.9.1 proxy, the
        protocol used by recent versions of the RabbitMQ message broker.
      </p>
      <p>
        Set up and maintained infrastructure, cloud setup and services for the
        company using FreeIPA and GSuite.
      </p>
      <p>
        Provided support for RabbitMQ consulting.
      </p>
    </TimelineItem>
    <TimelineItem company="HERE (Nokia)" role="Senior Software Engineer" date="2014" tech={tech.search}>
      <p>
        With the previous project successfully rolled out, switched over to the
        Search Analytics division to become a member of the research-savvy
        Recommendations team.
      <p>
        Employed Hadoop MapReduce with Cascalog on AWS to answer complex queries
        the existing tooling couldn't handle, resulting in great improvements of
        the UX in response to observations.
      </p>
      <p>
        Developed a web application for A/B testing search result quality from
        scratch using Knockout and D3 that was rolled out to hundreds of
        external helpers and resulted in higher search precision.
      </p>
      <p>
        Optimized the Java-based Search engine to be run locally without having
        to use Cloud capabilities.
      </p>
    </TimelineItem>
    <TimelineItem company="Nokia" role="Senior DevOps Engineer" date="2012" tech={tech.nmaa}>
      <p>
        After completing the previous project, changed to the new NMAA team that
        delivered Windows Phone native integration for Nokia's native maps
        stack, MOS, in direct collaboration with Microsoft.
      <p>
        Successfully supported the team by building test frameworks, build
        pipelines and debugging capabilities into Windows Phone source code.
        Ultimately, all code was shipped as part of Windows Phone 7.5 onwards.
      </p>
      <p>
        Implemented a custom Test Anything Protocol harness for collaboration
        with Microsoft from scratch in F#.
      </p>
    </TimelineItem>
    <TimelineItem company="Nokia" role="Senior Software Engineer" date="2010" tech={tech.maps}>
      <p>
        Joined Nokia's Maps on MeeGo team as Senior Software Engineer.
      <p>
        Successfully delivered the Qt/QML-based Maps on MeeGo application for
        the last pure Nokia smartphone, the N9, with a strong focus on places
        logic as well as being in charge for the user data synchronization.
        Contributed most of its offline maps downloader in C++.
      </p>
    </TimelineItem>
    <TimelineItem company="Iconmobile" role="Developer" date="2007" tech={tech.iconmobile}>
      <p>
        Junior PHP developer for a pre-smartphone era mobile web development company.
      <p>
        Complemented the existing Perl mobile web technology stack with a
        PHP framework that enabled other developers use the existing stack with a more
        familiar approach, significantly speeding up overall development.
      </p>
      <p>
        Developed various mobile web front-ends using Prototype, an early
        JavaScript framework, and later jQuery.
      </p>
      <p>
        Delivered a Perl-based mail responder system for a luxury clothes brand.
      </p>
      <p>
        Implemented countless mobile web services from scratch using PHP and the
        in-house markup languange.
      </p>
      <p>
        Delivered a custom PHP-based CMS system to Microsoft for maintaining
        their mobile XBox website.
      </p>
    </TimelineItem>
    <TimelineItem company="InMediasP" role="Apprentice" date="2004" tech={tech.inmediasp}>
      <p>
        Joined as an sofware engineering apprentice, ultimately earned
        vocational degree.
      </p>
      <p>
        Implemented a custom time tracking system that enabled all company
        employees to track their flexible working hours with ASP.NET in C#.
      </p>
      <p>
        Complemented the time tracking system with a SharePoint add-in in C#
        that provided quick access to every employee's time tracking account.
      </p>
      <p>
        Collaborated with a university student to store CATIA V5 CAD data into
        SAP R/3 recursively in ABAP/4, ultimately helping him graduate
        successfully.
      </p>
      <p>
        Successfully wrote an Outlook add-in from scratch in C# that enabled
        users store individual mails into SAP R/3.
      </p>
      <p>
        Used Java and SVG plotting to implement a graph library from scratch and
        integrated it with SAP NetWeaver using Java Portlets.
      </p>
    </TimelineItem>
  </ul>
</article>

<style>
  :global(svg) {
    margin-top: -.1rem;
  }
</style>
