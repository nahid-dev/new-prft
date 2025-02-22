import SectionHeaderTag from "@/components/SectionHeaderTag";
import Container from "@/components/shared/Container";
import { Asterisk } from "lucide-react";
import React from "react";

const data = [
  {
    id: 1,
    category: "Analyzing",
    title: "Understanding Business Needs – Laying the Foundation",
    steps: [
      {
        label: "Requirement Gathering",
        value:
          "Discuss business needs with stakeholders or analyze project documentation.",
      },
      {
        label: "Defining User Stories",
        value: "Identify the key users and their needs.",
      },
      {
        label: "Technology Selection",
        value:
          "Choose the best tech stack based on performance, scalability, and cost.",
      },
      {
        label: "Competitive Analysis",
        value:
          "Research similar products to identify best practices and unique features.",
      },
    ],
  },
  {
    id: 2,
    category: "Architecture",
    title: "Design & Architecture – Structuring the Application",
    steps: [
      {
        label: "Database Schema Design",
        value:
          "Structuring tables and relationships ( MongoDB for flexibility).",
      },
      {
        label: "Component & State Management",
        value:
          "Planning React component structure and state flow (e.g., Context API, Zustand, or Redux).",
      },
      {
        label: "API Design",
        value:
          "Creating RESTful APIs with authentication and role-based access control.",
      },
      {
        label: "Performance Considerations",
        value:
          "Implementing caching, lazy loading, and server-side rendering (SSR) where needed.",
      },
    ],
  },
  {
    id: 3,
    category: "Development",
    title: "Development & Testing – Writing Clean & Scalable Code",
    steps: [
      {
        label: "Component-Driven Development",
        value: "Using reusable UI components with Tailwind CSS and shadcn.",
      },
      {
        label: "API Integration",
        value: "Connecting frontend with backend services via REST.",
      },
      {
        label: "Testing",
        value:
          "Writing unit, integration, and end-to-end tests (e.g., Jest, Cypress).",
      },
      {
        label: "Version Control",
        value:
          "Using GitHub/GitLab for branch-based development and CI/CD pipelines.",
      },
    ],
  },
  {
    id: 4,
    category: "Deployment",
    title: "Deployment & Optimization – Delivering a High-Performance Product",
    steps: [
      {
        label: "Hosting & Deployment",
        value: "Using Vercel, AWS, or DigitalOcean for scalable hosting.",
      },
      {
        label: "CI/CD Pipelines",
        value: "Automating deployment and testing via GitHub Actions.",
      },
      {
        label: "Monitoring & Logging",
        value:
          "Setting up tools like LogRocket, Sentry, or Datadog to track errors and performance.",
      },
      {
        label: "Performance Optimization",
        value:
          "Implementing caching strategies, CDN, image optimization, and reducing unused JavaScript.",
      },
    ],
  },
];

const HowItWorkSection = () => {
  return (
    <div className="bg-dark text-white">
      <Container>
        <div className="py-20 border-b">
          <SectionHeaderTag title="{03} — Process" />
          <h2 className="text-[50px] xl:text-[90px] leading-tight">
            My Development Workflow
          </h2>
        </div>
        <div className="divide-y">
          {data.map((item, index) => (
            <div key={item.id} className="py-12 grid grid-cols-4 md:gap-5">
              <div className="col-span-1 flex justify-between">
                <div>
                  <span className="rounded-full border text-[15px] py-2 px-5 inline">
                    {item.category}
                  </span>
                </div>
                <div className="text-4xl font-semibold">
                  <span className="text-highlight">/</span>
                  <span>0{index + 1}</span>
                </div>
              </div>
              <div className="col-span-3">
                <h4 className="text-2xl font-semibold mb-5 mt-1">
                  {item.title}
                </h4>
                <ul className="space-y-2">
                  {item.steps.map((step, index) => (
                    <li key={index}>
                      <div className="flex items-start gap-2">
                        <span>
                          <Asterisk className="text-highlight size-8" />
                        </span>
                        <div className="flex flex-col lg:flex-row lg:gap-2 text-[17px]">
                          <p>
                            <span className=" font-semibold inline">
                              {step.label}
                            </span>{" "}
                            —{" "}
                            <span className="text-white/80">{step.value}</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HowItWorkSection;
