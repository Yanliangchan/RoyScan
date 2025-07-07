import { FlaskConical, Magnet, Gem, Waves, Radiation, ShieldCheck, BadgeCheck, Flame, Layers } from "lucide-react";
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
        slug: "singlas",
        title: "SINGLAS",
        shortDescription: "Singapore Laboratory Accreditation Scheme.",
        longDescription: "The Singapore Laboratory Accreditation Scheme (SINGLAS) is the national accreditation body for laboratories and inspection bodies. Accreditation by SINGLAS signifies that Royscan Engineering has met internationally recognized standards of technical competency and quality management. This ensures that our testing and calibration services are precise, reliable, and meet the stringent requirements of our clients and regulatory authorities.",
        icon: BadgeCheck,
    },
    {
        slug: "dnv",
        title: "DNV",
        shortDescription: "Det Norske Veritas.",
        longDescription: "DNV is an independent expert in risk management and quality assurance, renowned for its work in the maritime, oil and gas, and energy industries. Our DNV certification demonstrates our capability to provide services that meet the high standards of safety, quality, and environmental performance required for offshore and marine assets. This accreditation is crucial for clients operating in these demanding sectors, providing confidence in our inspection and testing services.",
        icon: BadgeCheck,
    },
    {
        slug: "abs",
        title: "ABS",
        shortDescription: "American Bureau of Shipping.",
        longDescription: "The American Bureau of Shipping (ABS) is a global leader in providing classification services to the marine and offshore industries. ABS approval confirms that our services, procedures, and facilities comply with their established rules and standards for the design, construction, and operational maintenance of marine vessels and offshore structures. This certification is a testament to our commitment to safety and excellence in the maritime sector.",
        icon: BadgeCheck,
    },
    {
        slug: "asmi",
        title: "ASMI",
        shortDescription: "Association of Singapore Marine Industries.",
        longDescription: "As a member of the Association of Singapore Marine Industries (ASMI), Royscan Engineering is part of a collective body representing the interests of the marine and offshore engineering sector in Singapore. This affiliation keeps us at the forefront of industry developments, best practices, and technological advancements. It underscores our role as a key service provider within Singapore's vibrant maritime ecosystem, committed to supporting the industry's growth and success.",
        icon: BadgeCheck,
    }
];
