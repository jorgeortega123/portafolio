// Forma decorativa que abarca las secciones About y Experiencia.
// Curva orgánica anclada al borde izquierdo; el bulto (plano en x≈97%)
// queda calibrado para pasar por detrás del título de Experiencia
// (título medido al ~72-74% de la altura del wrapper, x hasta ~742px @1912).
export default function ExperienceShape() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 hidden h-full lg:block"
      style={{ width: "clamp(140px, 46vw, 880px)" }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        fill="#17175a"
        d="M 0 0
           C 2 8, 5 18, 6 30
           C 6.5 36, 7 40, 10 45
           C 16 52, 40 56, 65 60
           C 85 63, 97 66, 97 72
           C 97 78, 75 82, 50 86
           C 28 89.5, 9 94, 0 100
           Z"
      />
    </svg>
  );
}
