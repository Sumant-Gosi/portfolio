import type { SkillGroup } from "./types";

// Tool and protocol names are the same in both languages, so only titles are localized.
export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: { en: "Programming", de: "Programmierung" },
    items: ["C", "C++", "Python (OOP)", "MATLAB/Simulink", "TargetLink", "ASCET", "CAPL"],
  },
  {
    id: "testing",
    title: { en: "Testing", de: "Test" },
    items: [
      "SiL (TPT)",
      "HiL (ETAS LABCAR)",
      "dSPACE ControlDesk",
      "dSPACE AutomationDesk",
      "Polyspace",
      "ETAS INCA",
      "PyTest",
      "Robot Framework",
      "Appium",
      "IBM RQM",
    ],
  },
  {
    id: "processes",
    title: { en: "Processes & Standards", de: "Prozesse & Standards" },
    items: [
      "V-Model",
      "AUTOSAR Classic",
      "AUTOSAR Adaptive",
      "ASPICE",
      "MISRA-C",
      "MXAM",
      "Agile",
      "ISO 26262",
    ],
  },
  {
    id: "vector",
    title: { en: "Vector Toolchain", de: "Vector-Toolkette" },
    items: ["CANoe", "CANoe Python scripting", "CANape (A2L)", "vTestStudio", "vCDMstudio"],
  },
  {
    id: "firmware",
    title: { en: "Firmware", de: "Firmware" },
    items: ["CMake", "FreeRTOS", "Zephyr RTOS", "Lauterbach Trace32", "SWD/JTAG"],
  },
  {
    id: "protocols",
    title: { en: "Communication Protocols", de: "Kommunikationsprotokolle" },
    items: [
      "CAN",
      "CAN FD",
      "UDS (ISO 14229)",
      "XCP",
      "DoIP",
      "SOME/IP",
      "AUTOSAR NM",
      "UART",
      "SPI",
      "I2C",
      "PCAN",
    ],
  },
  {
    id: "devops",
    title: { en: "DevOps", de: "DevOps" },
    items: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker"],
  },
  {
    id: "docs",
    title: { en: "Version Control & Documentation", de: "Versionsverwaltung & Dokumentation" },
    items: ["Git", "IBM DOORS", "Polarion", "SBM", "PVCS", "Jira", "Confluence"],
  },
];
