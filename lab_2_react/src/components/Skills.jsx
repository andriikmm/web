function Skills({ skills }) {
  return (
    <section>
      <h3>Технічні навички</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
