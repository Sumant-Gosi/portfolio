import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { DialogTriggers } from "@/components/DialogTriggers";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hobbies } from "@/components/Hobbies";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Licence } from "@/components/Licence";
import { Projects } from "@/components/Projects";
import { SkillFocus } from "@/components/SkillFocus";
import { Skills } from "@/components/Skills";
import { Training } from "@/components/Training";
import { getDictionary, hasLocale } from "@/content";
import { projects } from "@/content/projects";
import { evidencedSkills } from "@/lib/skills";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const evidenced = evidencedSkills(
    dict.experience.items,
    projects.filter((project) => !project.draft),
  );

  return (
    <>
      <Header locale={lang} content={dict.header} />
      <main id="top">
        <Hero content={dict.hero} />
        <About content={dict.about} />
        <Skills locale={lang} content={dict.skills} evidenced={evidenced} />
        <Experience content={dict.experience} />
        <Projects locale={lang} content={dict.projects} />
        <Training content={dict.training} />
        <Languages content={dict.languages} />
        <Hobbies content={dict.hobbies} />
        <Licence content={dict.licence} />
        <Contact content={dict.contact} />
      </main>
      <Footer content={dict.footer} hero={dict.hero} contact={dict.contact} />
      <SkillFocus content={dict.skills.focus} />
      <DialogTriggers />
    </>
  );
}
