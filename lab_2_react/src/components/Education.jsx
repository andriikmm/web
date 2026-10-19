function Education({ university, program, years }) {
  return (
    <section>
      <h3>Освіта</h3>
      <p><strong>{university}</strong> — {program}</p>
      <p>Рік навчання: {years}</p>
    </section>
  );
}

export default Education;
