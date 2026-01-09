// AboutRecognition.jsx
import React, { useEffect, useRef } from 'react';
import './AboutRecognition.css';
import ElasticCertifiedEngineerImg from '../../assets/Images/elastic-certified-engineer-badge.svg'
import ElasticObservabilityImg from '../../assets/Images/observability.png'
import ElasticAnalystImg from '../../assets/Images/analyst.png'
import ElasticContributorGoldImg from '../../assets/Images/elastic_contibutor_gold.webp'
import udemyImg from '../../assets/Images/udemy.webp'
import uitImg from '../../assets/Images/uit.webp'

const AboutRecognition = () => {
  const recognitionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          recognitionRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (recognitionRef.current) {
      observer.observe(recognitionRef.current);
    }
    
    return () => {
      if (recognitionRef.current) {
        observer.unobserve(recognitionRef.current);
      }
    };
  }, []);

  return (
    <section id="aboutRecognition" ref={recognitionRef} className="about-recognition" aria-label="Certifications and professional distinctions">
      <div className="about-recognition__container">
        <h2 className="about-recognition__title">Certifications and distinctions</h2>

        <div className="about-recognition__badges" role="list">
          <div className="about-recognition__badge" role="listitem">
            <div className="about-recognition__badge-image">
              <img
                src={ElasticCertifiedEngineerImg}
                alt="Elastic Certified Engineer badge"
                className="about-recognition__badge-icon"
                loading="lazy"
                width="120"
                height="120"
              />
            </div>
            <h3 className="about-recognition__badge-title">Elastic Certified Engineer</h3>
            <p className="about-recognition__badge-desc">
              Official certification validating deep expertise in deploying
              and managing Elasticsearch solutions
            </p>
          </div>

          <div className="about-recognition__badge" role="listitem">
            <div className="about-recognition__badge-image">
              <img
                src={ElasticObservabilityImg}
                alt="Elastic Certified Observability Engineer badge"
                className="about-recognition__badge-icon"
                loading="lazy"
                width="120"
                height="120"
              />
            </div>
            <h3 className="about-recognition__badge-title">Elastic Observability Engineer</h3>
            <p className="about-recognition__badge-desc">
              Certified expert in implementing observability solutions with the Elastic Stack for monitoring and performance analysis
            </p>
          </div>

          <div className="about-recognition__badge" role="listitem">
            <div className="about-recognition__badge-image">
              <img
                src={ElasticAnalystImg}
                alt="Elastic Certified Analyst badge"
                className="about-recognition__badge-icon"
                loading="lazy"
                width="120"
                height="120"
              />
            </div>
            <h3 className="about-recognition__badge-title">Elastic Certified Analyst</h3>
            <p className="about-recognition__badge-desc">
              Certified data analyst skilled in using Elasticsearch and Kibana for advanced data analysis and visualization
            </p>
          </div>

          <div className="about-recognition__badge" role="listitem">
            <div className="about-recognition__badge-image about-recognition__badge-image--gold">
              <img
                src={ElasticContributorGoldImg}
                alt="Elastic Gold Contributor badge for Europe, Africa, and Asia 2024-2025"
                className="about-recognition__badge-icon"
                loading="lazy"
                width="120"
                height="120"
              />
            </div>
            <h3 className="about-recognition__badge-title">Elastic Gold Contributor</h3>
            <p className="about-recognition__badge-desc">
              Elite recognition awarded by Elastic for Europe, Africa, and Asia
              for the year 2024-2025
            </p>
          </div>

          <div className="about-recognition__badge" role="listitem">
            <div className="about-recognition__badge-image">
              <img
                src={udemyImg}
                alt="Udemy instructor badge with 4.7 star rating"
                className="about-recognition__badge-icon"
                loading="lazy"
                width="120"
                height="120"
              />
            </div>
            <h3 className="about-recognition__badge-title">Udemy Trainer 4.7⭐</h3>
            <p className="about-recognition__badge-desc">
              Elasticsearch training recognized by the community with an excellence rating
              of 4.7/5 and over 3,000 students trained worldwide
            </p>
          </div>

          <div className="about-recognition__badge" role="listitem">
            <div className="about-recognition__badge-image">
              <img
                src={uitImg}
                alt="ITU Academy certification badge"
                className="about-recognition__badge-icon"
                loading="lazy"
                width="120"
                height="120"
              />
            </div>
            <h3 className="about-recognition__badge-title">ITU Academy Certified</h3>
            <p className="about-recognition__badge-desc">
              Certification delivered by the International Telecommunication Union (ITU) validating skills in evaluation, management, and regulation of Quality of Service (QoS) and Quality of Experience (QoE) in fixed and mobile networks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRecognition;