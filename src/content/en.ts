import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Sumant Shivaram Gosi | Embedded Software Engineer, Automotive",
    description:
      "Automotive embedded software engineer in Germany. Development, testing and integration of embedded software in AUTOSAR, ASPICE and ISO 26262 environments.",
  },
  header: {
    homeLabel: "Back to top",
    navLabel: "Main navigation",
    nav: [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "training", label: "Training" },
      { id: "languages", label: "Languages" },
      { id: "contact", label: "Contact" },
    ],
    languageSwitchLabel: "Language",
    themeToggleLabel: "Switch between light and dark mode",
  },
  hero: {
    name: "Sumant Shivaram Gosi",
    initials: "SG",
    title: "Embedded Software Engineer | Automotive",
    summary:
      "I develop, test and integrate automotive embedded software, from C code and AUTOSAR components to HiL benches and CI pipelines.",
    availability: "Open to roles across Germany",
    downloadCv: "Download CV",
    contact: "Contact",
    cvFile: "/cv/Sumant_Gosi_CV_EN.pdf",
    specsLabel: "Profile at a glance",
    specs: [
      { label: "Current", value: "IAV GmbH" },
      { label: "Focus", value: "Development, SiL/HiL testing, integration" },
      { label: "Standards", value: "AUTOSAR · ASPICE · ISO 26262" },
      { label: "Protocols", value: "CAN FD · UDS · XCP · DoIP" },
    ],
    imageAlt:
      "X-ray view of a sedan showing its ECU network: engine, body, transmission, gateway and ABS ECUs connected by bus lines",
  },
  about: {
    title: "About",
    paragraphs: [
      "I work as an embedded software engineer at IAV GmbH, where I develop, analyse and integrate ECU software in an AUTOSAR, ASPICE and ISO 26262 environment.",
      "Before that, I worked on engine management software at Robert Bosch in India, from requirements in IBM DOORS to SiL and HiL testing.",
      "I hold a Master's degree in Automotive Software Engineering from TU Chemnitz.",
      "Outside work I keep upskilling, with FreeRTOS and CAN projects on STM32, a Python For Automotive course and a German C1.2 course.",
    ],
  },
  skills: {
    title: "Skills",
    hint: "Select a skill to see where I have used it.",
    focus: {
      usedIn: "used in",
      roles: ["role", "roles"],
      projects: ["project", "projects"],
      show: "Show",
      clear: "Clear selection",
    },
  },
  experience: {
    title: "Experience",
    currentLabel: "Current",
    items: [
      {
        role: "Embedded Software Engineer",
        company: "IAV GmbH",
        location: "Sindelfingen, Germany",
        period: "Sep 2023 – present",
        current: true,
        points: [
          "Software development in MATLAB/Simulink for powertrain ECUs",
          "Model and code quality: MXAM guideline audits, static analysis with Lint (MISRA-C) and Polyspace",
          "Interface implementation and validation of OEM signals for semantics, data types and scaling",
          "Software integration on multi-core ECUs: flashing via CANape (XCP), calibration data migration with vCDMstudio, post-flash checks with CAPL in CANoe",
          "Automation: a Jenkins CI pipeline in Python for Simulink model checks, and a Python tool for HiL result validation that cut manual effort from weeks to days",
        ],
        tags: ["MATLAB/Simulink", "MXAM", "Polyspace", "MISRA-C", "CANape", "XCP", "vCDMstudio", "CANoe", "CAPL", "Jenkins", "Python"],
      },
      {
        role: "Embedded AI Intern",
        company: "Bosch Global Software Technologies",
        location: "Renningen, Germany",
        period: "Jun 2022 – Nov 2022",
        points: [
          "Built a deployment pipeline for deep neural networks on an STM32 NUCLEO-F767ZI with STM32Cube.AI and Zephyr RTOS on Linux",
          "Integrated the toolchain into an AutoML neural architecture search framework with Azure cloud-to-device profiling",
          "Benchmarked the inference latency of three DNN architectures: STM32Cube.AI was up to 9x faster than Zephyr RTOS",
        ],
        tags: ["STM32", "STM32Cube.AI", "Zephyr RTOS", "Linux", "Azure"],
      },
      {
        role: "Software Engineer",
        company: "Robert Bosch",
        location: "Bengaluru, India",
        period: "Aug 2019 – Mar 2021",
        points: [
          "Software requirements engineering for engine management air path functions in IBM DOORS, including change request assessment and traceability",
          "Function development in ETAS ASCET on the MSR/AUTOSAR architecture, with MISRA checks on the generated C code",
          "Unit and functional testing on SiL and HiL, plus calibration measurements with ETAS INCA",
          "ASPICE spot checks on deliverables across the V-model development cycle",
        ],
        tags: ["IBM DOORS", "ETAS ASCET", "AUTOSAR", "MISRA-C", "ETAS INCA", "SiL", "HiL", "ASPICE"],
      },
    ],
  },
  projects: {
    title: "Projects",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    githubLabel: "View on GitHub",
  },
  training: {
    title: "Training & Education",
    educationTitle: "Education",
    coursesTitle: "Training",
    certificationsTitle: "Certifications",
    education: [
      {
        degree: "M.Sc. Automotive Software Engineering",
        school: "TU Chemnitz, Germany",
        period: "Apr 2021 – Aug 2023",
        details: [
          "Grade 1.7 (German scale)",
          "Thesis at IAV GmbH: YOLOv8 based detection of forgotten objects in autonomous shuttles",
          "Deutschlandstipendium scholarship for outstanding academic performance",
        ],
      },
      {
        degree: "B.Sc. Electronics and Communication Engineering",
        school: "SDM College of Science and Technology, Dharwad, India",
        period: "Jun 2015 – Apr 2019",
        details: ["Grade 1.7 (German scale)"],
      },
    ],
    courses: [
      { title: "AET4", issuer: "Jacks Technologies", status: "Completed 2026" },
      { title: "Python For Automotive", status: "In progress, 2026", inProgress: true },
    ],
    certifications: [
      { title: "ISTQB Certified Tester Foundation Level", status: "July 2024" },
      { title: "telc Deutsch B2", status: "August 2025" },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      { name: "English", level: "C1" },
      { name: "German", level: "B2", note: "telc certified, C1.2 course in progress" },
    ],
    licenseLabel: "Driving licence",
    license: "Class B",
  },
  hobbies: {
    title: "Hobbies",
    items: [
      { id: "boardgames", name: "Board games", detail: "7 Wonders, Catan, Azul" },
      { id: "swimming", name: "Swimming" },
      { id: "table-tennis", name: "Table tennis" },
      { id: "strength", name: "Strength training" },
    ],
  },
  contact: {
    title: "Contact",
    text: "I am open to roles across Germany. Send me an email or connect with me on LinkedIn.",
    emailLabel: "Send an email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  footer: {
    builtWith: "Built with Next.js and Tailwind CSS",
  },
};
