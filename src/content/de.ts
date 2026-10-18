import type { Dictionary } from "./types";

export const de: Dictionary = {
  meta: {
    title: "Sumant Shivaram Gosi | Embedded Software Engineer, Automotive",
    description:
      "Embedded Software Engineer im Automotive-Umfeld in Deutschland. Entwicklung, Test und Integration von Embedded Software in AUTOSAR-, ASPICE- und ISO 26262-Umgebungen.",
  },
  header: {
    homeLabel: "Zum Seitenanfang",
    navLabel: "Hauptnavigation",
    nav: [
      { id: "about", label: "Profil" },
      { id: "skills", label: "Kenntnisse" },
      { id: "experience", label: "Erfahrung" },
      { id: "projects", label: "Projekte" },
      { id: "training", label: "Weiterbildung" },
      { id: "languages", label: "Sprachen" },
      { id: "contact", label: "Kontakt" },
    ],
    languageSwitchLabel: "Sprache",
    themeToggleLabel: "Zwischen hellem und dunklem Modus wechseln",
  },
  hero: {
    name: "Sumant Shivaram Gosi",
    initials: "SG",
    title: "Embedded Software Engineer | Automotive",
    summary:
      "Ich entwickle, teste und integriere Embedded Software für Fahrzeuge: von C-Code und AUTOSAR-Komponenten bis zu HiL-Prüfständen und CI-Pipelines.",
    availability: "Offen für Positionen in ganz Deutschland",
    keywords: ["Embedded Systems", "Modellbasierte Entwicklung", "Software-Integration"],
    downloadCv: "Lebenslauf",
    cvFile: "/cv/Sumant_Gosi_CV_DE.pdf",
    specsLabel: "Profil auf einen Blick",
    specs: [
      { label: "Aktuell", value: "IAV GmbH" },
      { label: "Schwerpunkt", value: "Entwicklung, SiL/HiL-Test, Integration" },
      { label: "Standards", value: "AUTOSAR · ASPICE · ISO 26262" },
      { label: "Protokolle", value: "CAN FD · UDS · XCP · DoIP" },
    ],
  },
  about: {
    title: "Hallo, ich bin Sumant",
    paragraphs: [
      "Als Embedded Software Engineer bei der IAV GmbH entwickle, analysiere und integriere ich Steuergerätesoftware in einem Umfeld mit AUTOSAR, ASPICE und ISO 26262.",
      "Zuvor habe ich bei Robert Bosch in Indien an Software für das Motormanagement gearbeitet, von Anforderungen in IBM DOORS bis zu SiL- und HiL-Tests.",
      "Meinen Master in Automotive Software Engineering habe ich an der TU Chemnitz abgeschlossen.",
      "Neben dem Beruf bilde ich mich gezielt weiter: mit FreeRTOS- und CAN-Projekten auf STM32, dem Kurs „Python For Automotive“ und einem Deutschkurs auf Niveau C1.2.",
    ],
  },
  skills: {
    title: "Mein technischer Werkzeugkasten",
    hint: "Wählen Sie eine Kenntnis aus, um zu sehen, wo ich sie eingesetzt habe.",
    focus: {
      usedIn: "eingesetzt in",
      roles: ["Position", "Positionen"],
      projects: ["Projekt", "Projekten"],
      show: "Anzeigen",
      clear: "Auswahl aufheben",
    },
  },
  experience: {
    title: "Mein beruflicher Werdegang",
    currentLabel: "Aktuell",
    viewDetails: "Details ansehen",
    panelLabel: "Positionsdetails",
    responsibilitiesTitle: "Aufgaben",
    toolsTitle: "Tools & Kenntnisse",
    close: "Schließen",
    items: [
      {
        role: "Embedded Software Engineer",
        company: "IAV GmbH",
        location: "Sindelfingen",
        period: "Sept. 2023 – heute",
        current: true,
        summary:
          "Modellbasierte Softwareentwicklung, Qualitätsanalyse und Integration für Antriebsstrang-Steuergeräte, ergänzt durch Testautomatisierung mit Python und Jenkins.",
        points: [
          "Softwareentwicklung mit MATLAB/Simulink für Antriebsstrang-Steuergeräte",
          "Modell- und Codequalität: Audits nach MXAM-Richtlinien, statische Analyse mit Lint (MISRA-C) und Polyspace",
          "Implementierung von Schnittstellen und Validierung von OEM-Signalen hinsichtlich Semantik, Datentypen und Skalierung",
          "Software-Integration auf Multi-Core-Steuergeräten: Flashen über CANape (XCP), Migration von Kalibrierdaten mit vCDMstudio, Post-Flash-Prüfungen mit CAPL in CANoe",
          "Automatisierung: Jenkins-CI-Pipeline in Python für Simulink-Modellprüfungen sowie ein Python-Tool zur Auswertung von HiL-Testergebnissen, das den manuellen Aufwand von Wochen auf Tage reduziert hat",
        ],
        tags: ["MATLAB/Simulink", "MXAM", "Polyspace", "MISRA-C", "CANape", "XCP", "vCDMstudio", "CANoe", "CAPL", "Jenkins", "Python"],
      },
      {
        role: "Praktikum Embedded AI",
        company: "Bosch Global Software Technologies",
        location: "Renningen",
        period: "Juni 2022 – Nov. 2022",
        summary: "Deployment neuronaler Netze auf STM32-Mikrocontrollern und Messung ihrer Inferenzlatenz.",
        points: [
          "Aufbau einer Deployment-Pipeline für neuronale Netze auf einem STM32 NUCLEO-F767ZI mit STM32Cube.AI und Zephyr RTOS unter Linux",
          "Integration der Toolchain in ein AutoML-Framework zur Neural Architecture Search mit Azure-Cloud-to-Device-Profiling",
          "Messung der Inferenzlatenz von drei DNN-Architekturen: STM32Cube.AI war bis zu 9-mal schneller als Zephyr RTOS",
        ],
        tags: ["STM32", "STM32Cube.AI", "Zephyr RTOS", "Linux", "Azure"],
      },
      {
        role: "Software Engineer",
        company: "Robert Bosch",
        location: "Bengaluru, Indien",
        period: "Aug. 2019 – März 2021",
        summary: "Anforderungen, Entwicklung und Test von Air-Path-Funktionen im Motormanagement in einem ASPICE-Umfeld.",
        points: [
          "Requirements Engineering für Air-Path-Funktionen im Motormanagement in IBM DOORS, inklusive Bewertung von Change Requests und Rückverfolgbarkeit",
          "Funktionsentwicklung in ETAS ASCET auf Basis der MSR/AUTOSAR-Architektur mit MISRA-Prüfung des generierten C-Codes",
          "Unit- und Funktionstests in SiL und HiL sowie Kalibriermessungen mit ETAS INCA",
          "ASPICE-Spot-Checks der Liefergegenstände im V-Modell-Entwicklungszyklus",
        ],
        tags: ["IBM DOORS", "ETAS ASCET", "AUTOSAR", "MISRA-C", "ETAS INCA", "SiL", "HiL", "ASPICE"],
      },
    ],
  },
  projects: {
    title: "Projekte, die ich umgesetzt habe",
    problemLabel: "Aufgabe",
    solutionLabel: "Lösung",
    githubLabel: "Auf GitHub ansehen",
    viewDetails: "Details ansehen",
    panelLabel: "Projektdetails",
    toolsTitle: "Tools & Kenntnisse",
    close: "Schließen",
  },
  training: {
    title: "Mein Bildungsweg",
    educationTitle: "Studium",
    coursesTitle: "Weiterbildung",
    certificationsTitle: "Zertifizierungen",
    education: [
      {
        degree: "M.Sc. Automotive Software Engineering",
        school: "TU Chemnitz",
        period: "Apr. 2021 – Aug. 2023",
        details: [
          "Note 1,7",
          "Masterarbeit bei der IAV GmbH: YOLOv8-basierte Erkennung vergessener Objekte in autonomen Shuttles",
          "Deutschlandstipendium für herausragende Studienleistungen",
        ],
      },
      {
        degree: "B.Sc. Electronics and Communication Engineering",
        school: "SDM College of Science and Technology, Dharwad, Indien",
        period: "Juni 2015 – Apr. 2019",
        details: ["Note 1,7"],
      },
    ],
    courses: [
      { title: "AET4", issuer: "Jacks Technologies", status: "Abgeschlossen 2026" },
      { title: "Python For Automotive", status: "Laufend, 2026", inProgress: true },
    ],
    certifications: [
      { title: "ISTQB Certified Tester Foundation Level", status: "Juli 2024" },
      { title: "telc Deutsch B2", status: "August 2025" },
    ],
  },
  languages: {
    title: "Sprachen",
    items: [
      { name: "Englisch", level: "C1" },
      { name: "Deutsch", level: "B2", note: "telc-zertifiziert, C1.2-Kurs laufend" },
    ],
  },
  hobbies: {
    title: "Nach Feierabend",
    items: [
      { id: "boardgames", name: "Brettspiele", detail: "7 Wonders, Catan, Azul" },
      { id: "swimming", name: "Schwimmen" },
      { id: "table-tennis", name: "Tischtennis" },
      { id: "strength", name: "Krafttraining" },
    ],
  },
  licence: {
    title: "Führerschein",
    value: "Klasse B",
  },
  contact: {
    title: "Lassen Sie uns ins Gespräch kommen",
    text: "Ich bin offen für Positionen in ganz Deutschland. Schreiben Sie mir gern eine E-Mail oder vernetzen Sie sich mit mir auf LinkedIn.",
    details: [
      { label: "Standort", value: "Böblingen" },
    ],
    emailLabel: "E-Mail schreiben",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  footer: {
    tagline: "Embedded Software für Steuergeräte im Fahrzeug, von der Entwicklung über den Test bis zur Integration.",
    linksLabel: "Kontakt und Links",
    backToTop: "Nach oben",
    builtWith: "Erstellt mit Next.js und Tailwind CSS",
  },
};
