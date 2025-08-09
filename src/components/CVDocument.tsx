import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

const userData = {
  name: "Endricho Folabessy",
  title: "Developing robust, scalable backend systems",
  email: "garisas336@gmail.com",
  github: "github.com/garisas",
  portfolio: "portfolio",
  portfolioLink: "https://endrichofolabessy.vercel.app/",
  githubLink: "https://github.com/garisas",
  location: "Pontianak, West Kalimantan, Indonesia",
  summary: "I design and implement backend systems focused on reliability, performance, and maintainability. My work covers API development, business logic implementation, and database optimization to support scalable applications. I primarily work with the PHP and JavaScript ecosystems, with extensive experience in Laravel and RESTful API design. I follow best practices for testing, documentation, and deployment to ensure production-ready outcomes. Beyond coding, I emphasise clear communication, pragmatic problem-solving, and continuous learning to deliver solutions that meet both technical and business needs.",
  education: {
    school: "STMIK Pontianak",
    major: "Informatics Engineering",
    period: "2021 - 2025",
    gpa: "3.43"
  },
  skills: {
    languages: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
    frameworks: ['Laravel', 'React JS', 'Bootstrap', 'Tailwind CSS'],
    databases: ['MySQL'],
    tools: ['Git'],
  }
};

const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontSize: 10,
    lineHeight: 1.5,
    color: '#374151',
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingBottom: 15,
    marginBottom: 20,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#1F2937',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 12,
    color: '#4B5563',
    marginTop: 20,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 9,
    color: '#4B5563',
  },
  link: {
    color: '#1D4ED8',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
    paddingBottom: 3,
    marginBottom: 10,
  },
  twoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  educationItem: {
    marginBottom: 10,
  },
  school: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  major: {
    fontStyle: 'italic',
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  skillList: {
    fontSize: 10,
  },
  project: {
    marginBottom: 12,
  },
  projectTitle: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#1D4ED8',
    textDecoration: 'none',
  },
  projectDescription: {
    marginTop: 2,
  },
});

const CVDocument = ({ repos }) => (
  <Document author="Endricho Folabessy" title={`CV - ${userData.name}`}>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.title}>{userData.title}</Text>
        <View style={styles.contactInfo}>
          <Link style={styles.link} src={`mailto:${userData.email}`}>{userData.email}</Link>
          <Text> • </Text>
          <Link style={styles.link} src={userData.githubLink}>{userData.github}</Link>
          <Text> • </Text>
          <Link style={styles.link} src={userData.portfolioLink}>{userData.portfolio}</Link>
          <Text> • </Text>
          <Text>{userData.location}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text>{userData.summary}</Text>
      </View>

      <View style={styles.twoColumn}>
        <View style={styles.column}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.educationItem}>
              <Text style={styles.school}>{userData.education.school}</Text>
              <Text style={styles.major}>{userData.education.major}</Text>
              <Text>{userData.education.period}</Text>
              <Text>GPA: {userData.education.gpa}</Text>
            </View>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills & Expertise</Text>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Languages:</Text>
              <Text style={styles.skillList}>{userData.skills.languages.join(', ')}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Frameworks & Libraries:</Text>
              <Text style={styles.skillList}>{userData.skills.frameworks.join(', ')}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Databases:</Text>
              <Text style={styles.skillList}>{userData.skills.databases.join(', ')}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Tools:</Text>
              <Text style={styles.skillList}>{userData.skills.tools.join(', ')}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {repos && repos.slice(0, 5).map(repo => (
          <View key={repo.id} style={styles.project}>
             <Link style={styles.projectTitle} src={repo.html_url}>{repo.name}</Link>
            <Text style={styles.projectDescription}>{repo.description || 'No description provided.'}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default CVDocument;
