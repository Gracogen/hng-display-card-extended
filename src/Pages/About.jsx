export default function About() {
  return (
    <main data-testid="test-about-page" className="about-page">
      <section data-testid="test-about-bio">
        <h2>Bio</h2>
        <p>
          My name is Grace Olumuyiwa, a passionate frontend developer learning
          daily and building creative web interfaces.
        </p>
      </section>

      <section data-testid="test-about-goals">
        <h2>Goals in This Program</h2>
        <ul>
          <li>Sharpen my React and JavaScript skills.</li>
          <li>Build real-world, accessible projects.</li>
        </ul>
      </section>

      <section data-testid="test-about-confidence">
        <h2>Areas of Low Confidence</h2>
        <p>I sometimes struggle with complex state management logic.</p>
      </section>

      <section data-testid="test-about-future-note">
        <h2>Note to Future Self</h2>
        <p>Keep pushing forward — you’re closer to mastery than you think!</p>
      </section>

      <section data-testid="test-about-extra">
        <h2>Extra Thoughts</h2>
        <p>Frontend is fun when you focus on creating value for users.</p>
      </section>
    </main>
  );
}
