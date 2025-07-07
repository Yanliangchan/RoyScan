import { FlaskConical, Magnet, Gem, Waves, Radiation, ShieldCheck, BadgeCheck } from "lucide-react";
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
    shortDescription: "Detects surface-breaking defects in non-porous materials using liquid penetrant.",
    longDescription: `Dye Penetrant Testing (DPT), also known as Liquid Penetrant Inspection (LPI), is a widely applied and low-cost inspection method used to locate surface-breaking defects in all non-porous materials (metals, plastics, or ceramics). The penetrant may be applied to all non-ferrous materials and ferrous materials, although for ferrous components magnetic-particle inspection is often used instead for its subsurface detection capability.

This method is used to detect casting, forging and welding surface defects such as hair-line cracks, surface porosity, leaks in new products, and fatigue cracks on in-service components.`,
    icon: FlaskConical,
  },
  {
    slug: "magnetic-particle-testing",
    title: "Magnetic Particle Testing",
    shortDescription: "Identifies surface and near-surface discontinuities in ferromagnetic materials.",
    longDescription: `Magnetic Particle Testing (MPT) is a non-destructive testing process for detecting surface and slightly subsurface discontinuities in ferromagnetic materials such as iron, nickel, cobalt, and some of their alloys. The process puts a magnetic field into the part.

The piece can be magnetized by direct or indirect magnetization. Direct magnetization occurs when the electric current is passed through the test object and a magnetic field is formed in the material. Indirect magnetization occurs when no electric current is passed through the test object, but a magnetic field is applied from an outside source. The magnetic particles are applied over a surface, and where there is a crack or a flaw, the magnetic field 'leaks' from the steel. The particles are attracted to the leakage field and cluster to form an indication directly over the discontinuity.`,
    icon: Magnet,
  },
  {
    slug: "hardness-testing",
    title: "Hardness Testing",
    shortDescription: "Measures material resistance to localized plastic deformation such as a scratch or indentation.",
    longDescription: `Hardness testing is a crucial method for determining a material's resistance to localized plastic deformation, such as a scratch or indentation. This test plays a vital role in materials testing, quality control, and acceptance of components.

We perform various types of hardness tests, including Rockwell, Brinell, and Vickers, to suit different materials and application requirements. The data from hardness tests can be used to assess material properties, such as tensile strength and wear resistance, ensuring that materials meet the necessary specifications for their intended use.`,
    icon: Gem,
  },
  {
    slug: "ultrasonic-testing",
    title: "Ultrasonic Testing",
    shortDescription: "Uses high-frequency sound waves to detect internal flaws or characterize materials.",
    longDescription: `Ultrasonic Testing (UT) uses high-frequency sound waves to conduct examinations and make measurements. Ultrasonic inspection can be used for flaw detection/evaluation, dimensional measurements, material characterization, and more.

A key advantage of UT is its ability to detect internal flaws, making it essential for inspecting welds, castings, and composites. We utilize advanced UT techniques, including phased array ultrasonic testing (PAUT) and time-of-flight diffraction (TOFD), to provide comprehensive and accurate results for your critical components.`,
    icon: Waves,
  },
  {
    slug: "radiography-testing",
    title: "Radiography Testing",
    shortDescription: "Inspects materials for hidden flaws by using X-rays and gamma rays to see inside.",
    longDescription: `Radiography Testing (RT) is a non-destructive testing method that uses X-rays or gamma rays to view the internal structure of a component. RT is widely used for inspecting welds, castings, and forged components to detect hidden flaws such as porosity, cracks, and inclusions.

The process involves placing the test object between the radiation source and a detector (or film). The resulting shadowgraph shows the internal features and any discontinuities. Our certified radiographers ensure that all inspections are performed safely and in accordance with industry standards to provide clear and reliable results.`,
    icon: Radiation,
  },
  {
    slug: "welding-inspection",
    title: "Welding Inspection",
    shortDescription: "Ensures that welds meet all code and standard requirements for quality and safety.",
    longDescription: `Welding inspection is a critical process to ensure the quality, integrity, and safety of welded structures. Our certified welding inspectors (CWIs) perform visual inspections and oversee other NDE methods to verify that welds meet all applicable codes, standards, and specifications.

This includes checking for proper joint preparation, monitoring welding parameters, and inspecting the final weld for any defects. A thorough welding inspection program is essential for preventing failures in critical components across various industries, from construction to aerospace.`,
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
