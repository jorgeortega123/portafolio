export interface TestimonialsIn {
  title: string;
  sub: string;
  description: string;
  tags: string[];
  link: string;
  img: string;
  update?: string;
}

export type ProjectStatus = "active" | "maintenance" | "abandoned";

/** Campos enriquecidos compartidos por proyectos personales y trabajos. */
export interface ProjectMeta {
  year?: string;
  duration?: string;
  status?: ProjectStatus;
  highlights?: string[];
  gallery?: string[];
}

/** Proyecto personal (messages.proyects). */
export interface Proyecto extends ProjectMeta {
  title: string;
  about: string;
  tags: string[];
  img: string;
  web: string;
  repo: string;
  onGroup?: boolean;
}

/** Trabajo freelance (messages.trabajos). */
export interface Trabajo extends ProjectMeta {
  title: string;
  sub: string;
  description: string;
  tags: string[];
  link: string;
  img: string;
  update?: string;
  client?: string;
  role?: string;
}
