// PointsForts.jsx
import { Award, Globe, GraduationCap, Network, FileText } from 'lucide-react';
import './PointsForts.css';
import { Link } from 'react-router-dom';

const PointsForts = () => {
  const points = [
    {
      icon: <Award size={36} />,
      title: "Triple Elastic Certified Expert",
      description: "Certified Elasticsearch Engineer, Observability Engineer, and Data Analyst - demonstrating comprehensive expertise across the Elastic Stack ecosystem."
    },
    {
      icon: <Globe size={36} />,
      title: "Elastic Gold Contributor 2024-2025",
      description: "Elite recognition from Elastic for significant technical contributions and community leadership across Europe, Africa, and Asia."
    },
    {
      icon: <GraduationCap size={36} />,
      title: "Udemy Instructor – 4.7⭐ Rating",
      description: "Trusted educator with 3,000+ students trained worldwide through comprehensive Elasticsearch courses available online and in corporate settings."
    },
    {
      icon: <Award size={36} />,
      title: "ITU Academy Certified",
      description: "Internationally certified in telecommunications Quality of Service (QoS) and Quality of Experience (QoE) by the International Telecommunication Union."
    },
    {
      icon: <Network size={36} />,
      title: "Mobile Network Specialist",
      description: "Deep expertise in 2G/3G/4G/LTE mobile network architectures, performance KPIs, and real-time operational monitoring systems."
    },
    {
      icon: <FileText size={36} />,
      title: "Published 4G QoS Research",
      description: "Comprehensive research project on 4G Quality of Service monitoring, covering network architecture, performance indicators, and optimization strategies.",
      lien: "https://fr.scribd.com/document/740152086/Developpement-d-une-solution-de-monitoring-et-d-analyse-des-performances-4G"
    },
  ];

  return (
    <section id="points-forts">
      <div className="points-forts-container">
        <h2 className="points-forts-title">Why work with me?</h2>
        
        <div className="points-forts-grid">
          {points.map((point, index) => (
            <div 
              className="point-fort-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="point-fort-icon">
                {point.icon}
              </div>
              <h3 className="point-fort-title">{point.title}</h3>
              <p className="point-fort-description">{point.description}</p>
              {point.lien && <p className="point-fort-description">
                <Link target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read the document"
                  to={point.lien}>
                    Read the document
                </Link>
              </p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsForts;