import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Training } from "@/components/Training";
import { getDictionary, hasLocale } from "@/content";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header locale={lang} content={dict.header} />
      <main id="top">
        <Hero content={dict.hero} />
        <About content={dict.about} />
        <Skills locale={lang} content={dict.skills} />
        <Experience content={dict.experience} />
        <Projects locale={lang} content={dict.projects} />
        <Training content={dict.training} />
        <Languages content={dict.languages} />
        <Contact content={dict.contact} />
      </main>
      <Footer content={dict.footer} />
    </>
  );
}
