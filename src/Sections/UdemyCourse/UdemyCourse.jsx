// UdemyCourse.jsx
import React, { useEffect, useRef } from 'react';
import { Star, Clock, Video, Award, MessageCircle } from 'lucide-react';
import './UdemyCourse.css';
import { Link } from 'react-router-dom';

const UdemyCourse = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Reset references on re-renders
  cardsRef.current = [];

  // Function to add references to elements
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const courses = [
    {
      title: "Master Elasticsearch: From Beginner to Certification",
      description: "Comprehensive training covering Elasticsearch fundamentals, cluster management, search optimization, and certification preparation. Perfect for aspiring Elastic Certified Engineers.",
      duration: "8h",
      level: "Beginner to Advanced",
      language: "English & French",
      rating: "4.7⭐",
      url: "https://www.udemy.com/course/master-elasticsearch/learn/lecture/49403443?referralCode=D5A39B3F9159B3842617#overview"
    },
    {
      title: "Kibana Expert: Master Data Analysis and Visualization",
      description: "Deep dive into Kibana for creating powerful dashboards, visualizations, and data analysis. Learn to build production-ready analytics solutions.",
      duration: "6h",
      level: "Intermediate",
      language: "English & French",
      rating: "4.7⭐",
      url: "https://www.udemy.com/course/kibana-expert/learn/lecture/53372811?referralCode=2CD26D6CFA89BA6B7D45#overview"
    },
    {
      title: "Introduction to the Elastic Stack",
      description: "Get started with the complete Elastic Stack (ELK). Learn Elasticsearch, Logstash, Kibana, and Beats from scratch with hands-on projects.",
      duration: "2h",
      level: "Beginner",
      language: "English & French",
      rating: "4.7⭐",
      url: "https://www.udemy.com/course/introduction-elk-stack/learn/lecture/53696077?referralCode=2369F08A3245DAF538AA#overview"
    }
  ];

  const features = [
    {
      icon: <Clock />,
      title: "Lifetime Access",
      description: "Enjoy content and updates without time limits"
    },
    {
      icon: <Video />,
      title: "Practical Exercises",
      description: "Consolidate your knowledge with real practical cases"
    },
    {
      icon: <Award />,
      title: "Certificate",
      description: "Get a completion certificate at the end of the training"
    },
    {
      icon: <MessageCircle />,
      title: "Direct Support",
      description: "Ask your questions and receive expert answers"
    }
  ];

  return (
    <section id="udemy-course" className="udemy-course" ref={sectionRef}>
      <div className="udemy-course__container">
        <div className="udemy-course__header">
          <h2 className="udemy-course__title">Udemy Training Courses</h2>
          <div className="udemy-course__title-underline"></div>
          <p className="udemy-course__subtitle">
            Join 3,000+ students worldwide in mastering Elasticsearch and the Elastic Stack.
            Rated 4.7⭐ with 25h+ of exclusive content.
          </p>
        </div>

        <div className="udemy-course__courses-grid">
          {courses.map((course, index) => (
            <div
              key={index}
              className="udemy-course__course-card"
              ref={addToRefs}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="udemy-course__course-badge">{course.level}</div>
              <h3 className="udemy-course__course-title">{course.title}</h3>
              <p className="udemy-course__course-description">{course.description}</p>
              <div className="udemy-course__course-rating">{course.rating}</div>
              <div className="udemy-course__course-meta">
                <div className="udemy-course__meta-item">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="udemy-course__meta-item">
                  <Video size={16} />
                  <span>{course.language}</span>
                </div>
              </div>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="udemy-course__course-cta"
                aria-label={`Access ${course.title} on Udemy`}
              >
                <span>View Course</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="udemy-course__features">
          <h3 className="udemy-course__features-title">What You Get</h3>
          <div className="udemy-course__features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="udemy-course__feature"
                ref={addToRefs}
                style={{ animationDelay: `${(courses.length + index) * 0.1}s` }}
              >
                <div className="udemy-course__feature-icon">
                  {React.cloneElement(feature.icon, { size: 24, color: '#007BFF' })}
                </div>
                <div className="udemy-course__feature-content">
                  <h4 className="udemy-course__feature-title">{feature.title}</h4>
                  <p className="udemy-course__feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UdemyCourse;