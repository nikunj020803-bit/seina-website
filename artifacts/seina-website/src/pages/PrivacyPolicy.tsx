import { Link } from "wouter";

export function PrivacyPolicy() {
  return (
    <section className="legal">
      <div className="container">
        <div className="legal__inner">
          <div className="legal__crumbs">
            <Link href="/" data-testid="link-home">Home</Link> · Legal · Privacy Policy
          </div>
          <h1>Privacy Policy</h1>
          <div className="legal__updated">Last updated: April 2026</div>

          <p className="legal__intro">
            This Privacy Policy describes how Seina (referred to in this Policy as "we", "us", or "our"), operating under the brand name "Seina", collects, uses, stores, shares, and protects your personal data when you visit our website at <a href="http://seina.in">seina.in</a> (the "Site") or engage with us through any of its forms, pages, or communication channels.
          </p>

          <h2><span className="num">01</span>Who we are</h2>
          <p>Seina is a brand name under which Seina operates a project developing autonomous systems for B2B influencer marketing.</p>
          <p>For all matters relating to your personal data — questions, requests, withdrawals of consent, and grievances — you may contact:</p>
          <p><strong>Email:</strong> <a href="mailto:support@seina.in">support@seina.in</a></p>

          <h2><span className="num">02</span>Scope of this Policy</h2>
          <p>This Policy applies to personal data we collect through:</p>
          <ul>
            <li>The Site (<a href="http://seina.in">seina.in</a>) and any of its sub-domains, including <strong>/product/persona</strong>, <strong>/product/pulse</strong>, <strong>/product/reach</strong>, <strong>/vision</strong>, <strong>/pricing</strong>, <strong>/about</strong>, <strong>/thanks</strong>, and any other pages we publish from time to time.</li>
            <li>Any email correspondence to or from <a href="mailto:support@seina.in">support@seina.in</a>.</li>
            <li>Any meetings, calls, or written exchanges conducted as a result of your application or inquiry.</li>
          </ul>
          <p>This Policy does not apply to third-party websites linked from the Site. Your use of those sites is governed by their own privacy policies.</p>

          <h2><span className="num">03</span>Personal data we collect</h2>

          <h3>3.1 Information you provide directly</h3>
          <ul>
            <li><strong>Full name</strong> — required.</li>
            <li><strong>Email address</strong> — required. Any valid email is accepted.</li>
            <li><strong>Company name</strong> — required.</li>
            <li><strong>Your role at the company</strong> — required.</li>
            <li><strong>Any other information you choose to share</strong> — optional, free text.</li>
          </ul>
          <p>When you correspond with us by email or in scheduled calls following your application, you may share additional information about yourself, your agency, and your business operations.</p>

          <h3>3.2 Information collected automatically</h3>
          <p>When you visit the Site, certain information is collected automatically through standard web technologies:</p>
          <ul>
            <li>IP address and approximate geographic country derived from it.</li>
            <li>Browser type, version, operating system, and device class.</li>
            <li>Pages visited, time spent on each page, referring URL, and outgoing links clicked.</li>
            <li>A timestamp of each interaction.</li>
            <li>Strictly necessary cookies (described in Section 7).</li>
          </ul>
          <p>This data is collected through our hosting provider, <strong>Vercel Inc.</strong></p>

          <h3>3.3 What we do not collect</h3>
          <p>We do not collect financial information, government-issued identifiers, biometric data, location data beyond country-level IP geolocation, or any "sensitive personal data" as defined under the IT Rules.</p>
          <p>We do not knowingly collect personal data of children under the age of 18. The Site is intended for adult professionals representing registered business entities.</p>

          <h2><span className="num">04</span>How we use your personal data</h2>
          <p>We process your personal data only for these purposes:</p>
          <ol>
            <li><strong>To respond to your Founding Agency application</strong> — reviewing your submission, contacting you at the email you provided, scheduling and conducting an introductory call, and following up with materials related to Seina.</li>
            <li><strong>To assess fit for the Founding Agency programme</strong> — evaluating your information against our intended customer profile.</li>
            <li><strong>To send transactional communications</strong> — including the automated confirmation email sent at submission, and personal email replies from <a href="mailto:support@seina.in">support@seina.in</a>.</li>
            <li><strong>To improve the Site and the Seina project</strong> — aggregated and de-identified usage data informs product, design, and content decisions.</li>
            <li><strong>To comply with legal obligations</strong> under Indian law, including the DPDP Act.</li>
            <li><strong>To detect, prevent, and respond to fraud,</strong> abuse, security incidents, and unauthorised use of the Site.</li>
          </ol>
          <p>We do not use your personal data for advertising, behavioural targeting, retargeting, or any purpose unrelated to the matters listed above. We do not sell your personal data. We do not share your personal data with marketing platforms or list-brokers under any circumstance.</p>

          <h2><span className="num">05</span>Legal basis for processing</h2>
          <p>Under the DPDP Act, we rely on:</p>
          <ul>
            <li><strong>Your consent</strong>, freely given when you submit the application form. The form has a stated purpose; submitting it constitutes consent for the processing described in this Policy. Consent may be withdrawn at any time as described in Section 6.</li>
            <li><strong>Legitimate uses</strong> under Section 7 of the DPDP Act, where applicable, including responding to communications you have initiated.</li>
            <li><strong>Compliance with law</strong> for any processing necessary to fulfil our legal obligations.</li>
          </ul>

          <h2><span className="num">06</span>Your rights under the DPDP Act</h2>
          <p>As a Data Principal, you have the following rights:</p>
          <ul>
            <li><strong>Right to access</strong> — request a summary of the personal data we hold about you and our processing activities.</li>
            <li><strong>Right to correction</strong> — request that we correct any inaccurate or incomplete personal data.</li>
            <li><strong>Right to erasure</strong> — request that we delete your personal data, subject to overriding legal obligations.</li>
            <li><strong>Right to withdraw consent</strong> — withdraw the consent you previously gave for processing. Withdrawal will not affect the lawfulness of processing carried out before the withdrawal.</li>
            <li><strong>Right to grievance redressal</strong> — raise a complaint about our handling of your personal data.</li>
            <li><strong>Right to nominate</strong> — designate another person to exercise these rights on your behalf in the event of your death or incapacity.</li>
          </ul>
          <p>To exercise any of these rights, email <a href="mailto:support@seina.in">support@seina.in</a> from the email address you provided. We will respond within thirty (30) days of receiving a verifiable request, or as otherwise required by the DPDP Act.</p>

          <h2><span className="num">07</span>Cookies and similar technologies</h2>
          <p>The Site uses only cookies that are strictly necessary for it to function. We do not use advertising cookies, tracking pixels, behavioural targeting cookies, or third-party cookies set for marketing purposes.</p>
          <p>The strictly necessary cookies include a session identifier set by Vercel.</p>
          <p>These cookies are not used for marketing or profiling. Most browsers allow you to block cookies through browser settings, though this may impact Site functionality.</p>

          <h2><span className="num">08</span>Children's data</h2>
          <p>The Site and the Founding Agency programme are intended for adult professionals representing business entities. We do not knowingly collect personal data of any individual under the age of eighteen (18). If we become aware that we have inadvertently collected personal data from a minor, we will delete it promptly upon verification.</p>

          <h2><span className="num">09</span>Changes to this Policy</h2>
          <p>We may update this Policy from time to time. When we make material changes, we will:</p>
          <ul>
            <li>Update the "Last updated" date at the top of this Policy.</li>
            <li>Post a notice on the Site for at least thirty (30) days following the update.</li>
            <li>Where we have your email address and the change materially affects your rights, send you an email summarising the change.</li>
          </ul>
          <p>Your continued use of the Site after a change becomes effective constitutes your acceptance of the revised Policy.</p>
        </div>
      </div>
    </section>
  );
}
