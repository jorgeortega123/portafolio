import { GetStaticPaths, GetStaticProps } from "next";
import { slugify } from "@/hooks/slugify";
import ProjectDetailPage from "@/components/ProjectDetailPage";

interface Trabajo {
  title: string;
  sub: string;
  description: string;
  tags: string[];
  link: string;
  img: string;
  update?: string;
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: { params: { slug: string }; locale: string }[] = [];
  for (const locale of locales || []) {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    const trabajos: Trabajo[] = messages.trabajos || [];
    trabajos.forEach((t) => {
      paths.push({
        params: { slug: slugify(t.title) },
        locale,
      });
    });
  }
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const trabajos: Trabajo[] = messages.trabajos || [];
  const trabajo = trabajos.find((t) => slugify(t.title) === params?.slug);

  if (!trabajo) {
    return { notFound: true };
  }

  return {
    props: {
      messages,
      locale,
      trabajo,
    },
  };
};

export default function TrabajoPage({
  trabajo,
}: {
  trabajo: Trabajo;
}) {
  return (
    <ProjectDetailPage
      title={trabajo.title}
      subtitle={trabajo.sub}
      description={trabajo.description}
      tags={trabajo.tags}
      img={trabajo.img}
      web={trabajo.link}
      update={trabajo.update}
    />
  );
}
