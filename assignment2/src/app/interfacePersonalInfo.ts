export interface Personal {
    name: string;
    motto: string;
    course: string;
    shortCourseName: string;
    duration: string;
    credential: string;
    college: string;
    courseStart: string;
    courseEnd: string;
    coopTerms: string;
    coopTermsDetails:coopTermsDetails;
    contact: Contact;
    about: string[];
  }
  
  export interface coopTermsDetails {
    term: string;
    duration: string;
    start: string;
    end: string;
    company: string;
    position: string;
    description: string[];
  }
  
  export interface Contact {
    email: string;
    linkedIn: string;
    github: string;
    portfolio: string;
    instagram: string;
    address: Address;
  }
  
  export interface Address {
    line1: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  }
  
  export interface Projects {
    name: string;
    description: string | string[];
    technologies: string[];
    duration: string;
  }
  
  export interface WorkExperience {
    position: string;
    company: string;
    location: string;
    duration: string;
    responsibilities: string[];
  }