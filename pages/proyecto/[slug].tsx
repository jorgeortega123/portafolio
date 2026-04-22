import { GetStaticPaths, GetStaticProps } from "next";
import { slugify } from "@/hooks/slugify";
import ProjectDetailPage from "@/components/ProjectDetailPage";

interface Proyecto {
  title: string;
  about: string;
  tags: string[];
  img: string;
  web: string;
  repo: string;
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: { params: { slug: string }; locale: string }[] = [];
  for (const locale of locales || []) {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    const proyects: Proyecto[] = messages.proyects || [];
    proyects.forEach((p) => {
      paths.push({
        params: { slug: slugify(p.title) },
        locale,
      });
    });
  }
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const proyects: Proyecto[] = messages.proyects || [];
  const proyecto = proyects.find((p) => slugify(p.title) === params?.slug);

  if (!proyecto) {
    return { notFound: true };
  }

  return {
    props: {
      messages,
      locale,
      proyecto,
    },
  };
};

export default function ProyectoPage({
  proyecto,
}: {
  proyecto: Proyecto;
}) {
  return (
    <ProjectDetailPage
      title={proyecto.title}
      description={proyecto.about}
      tags={proyecto.tags}
      img={proyecto.img}
      web={proyecto.web}
      repo={proyecto.repo}
    />
  );
}
