import type { Project } from "./types";

// Add, remove or reorder projects here. Fill in githubUrl once a repository is public.
// Remove `draft: true` to show a project once its text is complete.
export const projects: Project[] = [
  {
    id: "stm32-freertos",
    title: {
      en: "STM32 FreeRTOS firmware",
      de: "STM32-Firmware mit FreeRTOS",
    },
    problem: {
      en: "Self-taught deep dive into the RTOS concepts that real-time firmware depends on, on an STM32 F446RE (ARM Cortex M4).",
      de: "Selbst erarbeiteter Deep Dive in die RTOS-Konzepte, auf denen Echtzeit-Firmware aufbaut, auf einem STM32 F446RE (ARM Cortex M4).",
    },
    solution: {
      en: "Multi task firmware with queues, mutexes, semaphores, software timers and priority inversion, plus peripheral drivers for UART, SPI and I2C. UART runs non-blocking via DMA with ISR-safe synchronisation, debugged via SWD.",
      de: "Multitasking-Firmware mit Queues, Mutexen, Semaphoren, Software-Timern und Priority Inversion sowie Peripherietreibern für UART, SPI und I2C. UART läuft nicht-blockierend über DMA mit ISR-sicherer Synchronisation, Debugging über SWD.",
    },
    tags: ["C", "STM32", "ARM Cortex M4", "FreeRTOS", "UART", "SPI", "I2C", "DMA", "SWD"],
    githubUrl: "https://github.com/Sumant-Gosi/stm32-freertos-deepdive",
  },
  {
    id: "stm32-can-distributed-system",
    title: {
      en: "Distributed CAN system on STM32",
      de: "Verteiltes CAN-System auf STM32",
    },
    problem: {
      en: "Two ECUs share periodic sensor data and safety relevant commands over CAN. A lost command must never go unnoticed.",
      de: "Zwei Steuergeräte tauschen zyklische Sensordaten und sicherheitsrelevante Kommandos über CAN aus. Ein verlorenes Kommando darf nie unbemerkt bleiben.",
    },
    solution: {
      en: "Two STM32 F446RE nodes on a 500 kbit/s CAN bus. The sensor node broadcasts RPM and temperature, the controller node checks thresholds and sends commands with an explicit ACK protocol and timeout based fault detection. FreeRTOS tasks and queues on both nodes.",
      de: "Zwei STM32-F446RE-Knoten an einem CAN-Bus mit 500 kbit/s. Der Sensorknoten sendet Drehzahl und Temperatur, der Steuerknoten prüft Schwellwerte und sendet Kommandos mit explizitem ACK-Protokoll und timeoutbasierter Fehlererkennung. FreeRTOS-Tasks und Queues auf beiden Knoten.",
    },
    tags: ["C", "STM32", "CAN", "FreeRTOS", "UART", "SWD"],
    githubUrl: "https://github.com/Sumant-Gosi/STM32-CAN-Distributed-System",
  },
  {
    id: "can-capl-test-automation",
    title: {
      en: "CAN / CAPL test automation",
      de: "CAN/CAPL-Testautomatisierung",
    },
    problem: {
      en: "[PROBLEM: what needed to be tested and why]",
      de: "[PROBLEM: Testgegenstand und Motivation]",
    },
    solution: {
      en: "Rest bus simulation and automated test cases in CANoe, written in CAPL.",
      de: "Restbussimulation und automatisierte Testfälle in CANoe, umgesetzt in CAPL.",
    },
    tags: ["CANoe", "CAPL", "CAN", "Rest bus simulation"],
    draft: true,
  },
  {
    id: "uds-diagnostic-tests",
    title: {
      en: "UDS diagnostic tests",
      de: "UDS-Diagnosetests",
    },
    problem: {
      en: "[PROBLEM: which diagnostic functions needed verification]",
      de: "[PROBLEM: zu verifizierende Diagnosefunktionen]",
    },
    solution: {
      en: "Diagnostic services according to ISO 14229 tested with CANoe and vTestStudio.",
      de: "Test von Diagnosediensten nach ISO 14229 mit CANoe und vTestStudio.",
    },
    tags: ["UDS", "ISO 14229", "CANoe", "vTestStudio"],
    draft: true,
  },
  {
    id: "adas-acc-python",
    title: {
      en: "ADAS ACC test automation with Python",
      de: "ADAS-ACC-Testautomatisierung mit Python",
    },
    problem: {
      en: "[PROBLEM: what the ACC tests had to cover]",
      de: "[PROBLEM: Testumfang für die ACC-Funktion]",
    },
    solution: {
      en: "CANoe Python scripting combined with PyTest, executed in a Jenkins CI pipeline.",
      de: "CANoe-Python-Skripte in Kombination mit PyTest, ausgeführt in einer Jenkins-CI-Pipeline.",
    },
    tags: ["Python", "PyTest", "CANoe", "Jenkins", "ADAS"],
    draft: true,
  },
  {
    id: "infotainment-test-automation",
    title: {
      en: "Infotainment test automation",
      de: "Infotainment-Testautomatisierung",
    },
    problem: {
      en: "[PROBLEM: what the infotainment tests had to cover]",
      de: "[PROBLEM: Testumfang im Infotainment]",
    },
    solution: {
      en: "Automated UI tests with Robot Framework and Appium.",
      de: "Automatisierte UI-Tests mit Robot Framework und Appium.",
    },
    tags: ["Robot Framework", "Appium"],
    draft: true,
  },
  {
    id: "ml-inference-service",
    title: {
      en: "ML inference service",
      de: "ML-Inferenzservice",
    },
    problem: {
      en: "Take a trained machine learning model to a tested, deployable service.",
      de: "Ein trainiertes Machine-Learning-Modell in einen getesteten, einsatzfähigen Service überführen.",
    },
    solution: {
      en: "FastAPI inference service in a Docker container with pytest tests. A GitHub Actions CI/CD pipeline deploys it to AWS EC2, and Kubernetes manifests cover scalable deployment.",
      de: "FastAPI-Inferenzservice im Docker-Container mit pytest-Tests. Eine CI/CD-Pipeline mit GitHub Actions deployt auf AWS EC2, Kubernetes-Manifeste ermöglichen eine skalierbare Bereitstellung.",
    },
    tags: ["Python", "FastAPI", "Docker", "pytest", "GitHub Actions", "AWS EC2", "Kubernetes"],
    githubUrl: "https://github.com/Sumant-Gosi/ml-inference-service",
  },
  {
    id: "masters-thesis",
    title: {
      en: "Master's thesis: forgotten object detection",
      de: "Masterarbeit: Erkennung vergessener Objekte",
    },
    problem: {
      en: "Autonomous shuttles have no driver who notices items that passengers leave behind.",
      de: "In autonomen Shuttles gibt es keinen Fahrer, der vergessene Gegenstände von Fahrgästen bemerkt.",
    },
    solution: {
      en: "Developed a YOLOv8 based detection algorithm at IAV GmbH and validated it on real world data, reaching an mAP50 of 90.9%.",
      de: "Entwicklung eines YOLOv8-basierten Erkennungsalgorithmus bei der IAV GmbH, validiert auf realen Daten mit einem mAP50 von 90,9 %.",
    },
    tags: ["YOLOv8", "Computer Vision", "Machine Learning"],
  },
];
