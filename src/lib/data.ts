import { FlaskConical, Magnet, Gem, Waves, Radiation, ShieldCheck, BadgeCheck, Flame, Layers, Users, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "dye-penetrant-testing",
    title: "Dye Penetrant Testing",
    shortDescription: "A sensitive method to find surface-breaking defects on non-porous materials without causing harm.",
    longDescription: `Liquid Penetrant Testing, also known as Dye Penetrant Testing (DPT), is a non-destructive test method that does not harm the samples or parts being tested. This test is used to find surface-breaking discontinuities on relatively smooth, nonporous surfaces. It is highly effective in detecting casting, forging, and welding surface defects such as hairline cracks, surface porosity, leaks in new products, and fatigue cracks on in-service components. It is a sensitive and reliable test method.`,
    icon: FlaskConical,
  },
  {
    slug: "magnetic-particle-testing",
    title: "Magnetic Particle Testing",
    shortDescription: "Detects surface and near-surface flaws in ferromagnetic materials using magnetic fields and particles.",
    longDescription: `Magnetic Particle Testing (MPT) is a method used to find surface and near-surface flaws in ferromagnetic materials like steel and iron. The process involves creating a magnetic field in the part and applying wet or dry magnetic particles to the surface. Any flaws will create a leakage field, attracting the particles and forming an indication. This indication is then evaluated against applicable acceptance standards to determine the integrity of the component.`,
    icon: Magnet,
  },
  {
    slug: "radiography-testing",
    title: "Radiography Testing",
    shortDescription: "Examines the internal structure of components using X-rays or gamma rays to find hidden defects.",
    longDescription: `Radiographic Testing (RT) is a non-destructive test method that uses either X-rays or gamma rays to examine the internal structure of manufactured components. As a volumetric inspection method, it is highly sensitive to changes in thickness, voids, and variations in material density. RT is widely used to inspect castings, forgings, and weldments for internal defects, providing a clear picture of the material's integrity without causing damage.`,
    icon: Radiation,
  },
  {
    slug: "ultrasonic-testing",
    title: "Ultrasonic Testing",
    shortDescription: "Uses high-frequency sound waves for volumetric examination to detect internal flaws and measure dimensions.",
    longDescription: `Ultrasonic Testing (UT) is a versatile NDT method that utilizes high-frequency sound energy to conduct examinations and make precise measurements. It is a volumetric examination technique, meaning it can detect internal flaws within a component. UT is commonly used for a wide range of applications, including flaw detection and evaluation, dimensional measurements, material characterization, and is particularly effective for weld inspection, as well as inspecting castings, forgings, and composites.`,
    icon: Waves,
  },
  {
    slug: "ultrasonic-thickness-gauging",
    title: "Ultrasonic Thickness Gauging",
    shortDescription: "Measures material thickness from one side to detect corrosion or damage.",
    longDescription: `Ultrasonic Thickness Gauging (UTG) is a non-destructive testing method used to inspect the thickness of a solid material by accessing it from only one side. This technique is fast, reliable, and versatile, making it an essential tool for quality control and maintenance. It is commonly used to measure wall thickness and to detect corrosion, erosion, and other damages on a material. UTG can be applied to a wide range of materials, including metals, plastics, ceramics, and composites.`,
    icon: Layers,
  },
  {
    slug: "hardness-testing",
    title: "Hardness Testing",
    shortDescription: "Measures material resistance to plastic deformation, ensuring quality control with portable testing equipment.",
    longDescription: `Hardness Testing is a method used to determine the resistance of a material to plastic deformation from a standard source. It is primarily used on metals as a crucial part of the quality control process, ensuring that components meet their required specifications. At Royscan, we utilize a portable hardness tester, allowing us to perform highly accurate hardness testing at any location, providing flexibility and convenience for our clients.`,
    icon: Gem,
  },
  {
    slug: "post-weld-heat-treatment",
    title: "Post Weld Heat Treatment",
    shortDescription: "Reduces residual stresses and improves material ductility after welding.",
    longDescription: `Post Weld Heat Treatment (PWHT) is a controlled process where a welded material is heated to a specific temperature below its lower critical transformation point and held for a specified duration. The primary purpose of this treatment is to reduce residual stresses introduced during welding, thereby maintaining material strength and significantly enhancing ductility. We provide comprehensive PWHT services for a wide range of materials and component sizes.`,
    icon: Flame,
  },
  {
    slug: "welding-inspection",
    title: "Welding Inspection",
    shortDescription: "Ensures that welds meet all code and standard requirements for quality and safety.",
    longDescription: `Welding inspection is a critical process to ensure the quality, integrity, and safety of welded structures. Our certified welding inspectors (CWIs) perform visual inspections and oversee other NDE methods to verify that welds meet all applicable codes, standards, and specifications. This includes checking for proper joint preparation, monitoring welding parameters, and inspecting the final weld for any defects. A thorough welding inspection program is essential for preventing failures in critical components across various industries, from construction to aerospace.`,
    icon: ShieldCheck,
  },
];

export interface Certification {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
}

export const certifications: Certification[] = [
    {
        slug: "iso-17025",
        title: "ISO/IEC 17025 Accreditation",
        shortDescription: "SAC-SINGLAS accredited laboratory for technical competence.",
        longDescription: "Accredited under the Singapore Laboratory Accreditation Scheme (SAC-SINGLAS) to the ISO/IEC 17025:2017 standard. This demonstrates our technical competence in laboratory testing and our ability to generate precise, accurate, and reliable test data, ensuring the highest level of quality assurance for our clients.",
        icon: BadgeCheck,
    },
    {
        slug: "iso-9001",
        title: "ISO 9001:2015 Certification",
        shortDescription: "Certified for quality management systems by Socotec.",
        longDescription: "Our ISO 9001:2015 certification from Socotec affirms our commitment to a robust quality management system. This ensures that our processes are standardized, efficient, and focused on continual improvement, consistently delivering services that meet and exceed customer expectations and regulatory requirements.",
        icon: BadgeCheck,
    },
    {
        slug: "bizsafe-level-4",
        title: "bizSAFE Level 4",
        shortDescription: "Certified for workplace safety and health management.",
        longDescription: "Achieving bizSAFE Level 4 certification from the Workplace Safety and Health (WSH) Council signifies our capability in implementing a comprehensive WSH management system. This reflects our deep commitment to maintaining the highest standards of safety and health for our employees, clients, and partners on every project.",
        icon: BadgeCheck,
    },
    {
        slug: "dnv-approved",
        title: "DNV Approved Service Supplier",
        shortDescription: "Approved for NDT on offshore units and ships by DNV.",
        longDescription: "Recognized by DNV as an approved service supplier under their class programme DNV-CP-0640. This certification validates our competence to perform non-destructive testing on ships, high-speed and light craft, and mobile offshore units, adhering to DNV's stringent international standards for the maritime and offshore industries.",
        icon: BadgeCheck,
    },
    {
        slug: "abs-recognized",
        title: "ABS Recognised Service Supplier",
        shortDescription: "Recognized by the American Bureau of Shipping.",
        longDescription: "As a service supplier recognized by the American Bureau of Shipping (ABS), we are authorized to perform specific tests and inspections on ABS-classed vessels and offshore structures. This recognition underscores our technical expertise and adherence to the high safety and quality standards set by one of the world's leading classification societies.",
        icon: BadgeCheck,
    },
    {
        slug: "aspri-member",
        title: "ASPRI Corporate Member",
        shortDescription: "Member of the Association of Process Industry.",
        longDescription: "Our corporate membership with the Association of Process Industry (ASPRI) connects us to the heart of Singapore's process sector. This affiliation enables us to stay current with industry best practices, safety standards, and technological advancements, reinforcing our position as a trusted partner for plant owners in the petroleum, chemical, and pharmaceutical industries.",
        icon: Users,
    },
    {
        slug: "asmi-member",
        title: "ASMI Associate Member",
        shortDescription: "Member of the Association of Singapore Marine Industries.",
        longDescription: "As an associate member of the Association of Singapore Marine Industries (ASMI), we are an active participant in Singapore's dynamic marine and offshore engineering ecosystem. This membership reflects our commitment to supporting the industry's growth and upholding the highest standards of service and professionalism.",
        icon: Building2,
    }
];
