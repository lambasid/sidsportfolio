export interface Education {
    title: string;
    date: string;
    institution: string;
    gpa: string;
}

export interface Experience {
    title: string;
    company: string;
    date: string;
    location: string;
    tasks: string[];
}

export interface Skills {
    skills: string[];
}

export interface Certifications {
    certifications: string[];
}
