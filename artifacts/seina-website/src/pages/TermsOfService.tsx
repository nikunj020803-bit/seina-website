import { Link } from "wouter";

export function TermsOfService() {
  return (
    <section className="legal">
      <div className="container">
        <div className="legal__inner">
          <div className="legal__crumbs">
            <Link href="/" data-testid="link-home">Home</Link> · Legal · Terms of Service
          </div>
          <h1>Terms of Service</h1>
          <div className="legal__updated">Last updated: April 2026</div>

          <p className="legal__intro">
            These Terms of Service (the "Terms") govern your access to and use of the Seina website at <a href="http://seina.in">seina.in</a> (the "Site"). By accessing or using the Site or submitting any information through it, you agree to these Terms. If you do not agree, please do not use the Site.
          </p>

          <h2><span className="num">01</span>About Seina</h2>
          <p>Seina is a brand name, a project developing autonomous systems for B2B influencer marketing.</p>

          <h2><span className="num">02</span>Eligibility</h2>
          <p>You may use the Site if all of the following are true:</p>
          <ul>
            <li>You are at least eighteen (18) years of age.</li>
            <li>You provide truthful, accurate, current, and complete information when submitting any form on the Site.</li>
          </ul>

          <h2><span className="num">03</span>Your representations and warranties</h2>
          <p>By using the Site, you represent and warrant that:</p>
          <ul>
            <li>All information you submit through the Site is truthful, accurate, current, and complete to the best of your knowledge.</li>
            <li>You will promptly correct any information that becomes inaccurate.</li>
            <li>You will not use the Site to submit any information that infringes the rights of a third party, violates any law, or is fraudulent, defamatory, harassing, or otherwise objectionable.</li>
            <li>You will not attempt to circumvent, disable, or defeat any security feature of the Site.</li>
            <li>You will not use any automated means — including but not limited to bots, scrapers, or harvesting tools — to access the Site or submit information through it without our prior written consent.</li>
            <li>You will not reverse-engineer, decompile, or attempt to derive the underlying source code of any software made available through the Site.</li>
            <li>You are not a competitor of Seina submitting an application for the purpose of obtaining confidential commercial information.</li>
          </ul>

          <h2><span className="num">04</span>Disclaimers</h2>
          <p>To the maximum extent permitted by applicable law:</p>
          <ul>
            <li>The Site is provided <strong>"as is"</strong> and <strong>"as available."</strong> We make no representations or warranties of any kind, express or implied, regarding the Site's operation, the accuracy of the information presented on it, or its fitness for any particular purpose.</li>
            <li>The product descriptions on the Site refer to products in development. No representation on the Site is a guarantee that the corresponding product, capability, or performance characteristic will be delivered.</li>
            <li>The illustrative example data on the Site — including sample scores, sample audience compositions, and sample reports — is fictional and is provided solely for demonstration. It does not represent any real LinkedIn user or any actual customer.</li>
            <li><strong>No warranty of fitness for any particular use.</strong> Nothing on the Site should be construed as a representation that any future Seina product is suitable for any specific business use.</li>
          </ul>

          <h2><span className="num">05</span>Suspension and termination</h2>
          <p>We may, at our sole discretion and without prior notice:</p>
          <ul>
            <li>Refuse to accept any application submitted through the Site.</li>
            <li>Restrict, suspend, or terminate your access to the Site if we reasonably believe you have violated these Terms.</li>
            <li>Modify, suspend, or discontinue the Site, or any part of it, at any time and without liability.</li>
          </ul>
          <p>You may stop using the Site at any time.</p>

          <h2><span className="num">06</span>Privacy</h2>
          <p>Your use of the Site is also governed by our <Link href="/privacy-policy">Privacy Policy</Link>. By using the Site, you acknowledge that you have read and understood the Privacy Policy.</p>

          <h2><span className="num">07</span>Changes to these Terms</h2>
          <p>We may update these Terms from time to time. When we make material changes, we will:</p>
          <ul>
            <li>Update the "Last updated" date at the top of these Terms.</li>
            <li>Post a notice on the Site for at least thirty (30) days following the update.</li>
          </ul>
          <p>Your continued use of the Site after a change becomes effective constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, please discontinue your use of the Site.</p>

          <h2><span className="num">08</span>Contact</h2>
          <p>For questions about these Terms, contact:</p>
          <p><strong>Email:</strong> <a href="mailto:support@seina.in">support@seina.in</a></p>
        </div>
      </div>
    </section>
  );
}
