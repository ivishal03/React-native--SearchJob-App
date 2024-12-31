const jobData = [
    {
      id: 1,
      title: 'Sr. UX Designer',
      company: 'Google',
      location: 'New York',
      experience: '3 years',
      type: 'Full-time',
      description:
        'UX Designers are the synthesis of design and development. They take Google’s most innovative product concepts.',
      posted: '2 days ago',
      salary: '$50K/mo',
      color: '#5E5CE6',
      logo: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
      jobDescription:
        'In a UX Designer job, you’ll need both types of skills to develop the next generation of products. You’ll partner with Researchers and Designers to define and deliver new features.',
      skills: [
        '3 years experience',
        'Degree in Computer Science, Psychology, or Design',
        'Proficiency in User Personas, Empathy Maps, and Information Architecture',
      ],
      role: 'As a UX Designer, you will be directly responsible for helping the evolution of enterprise design systems. You will engineer solutions that create shareable components for use across various teams.',
      benefits: [
        'Health insurance',
        'Retirement savings plan',
        'Flexible work hours',
        'On-site gym and wellness programs',
      ],
    },
    {
      id: 2,
      title: 'Project Manager',
      company: 'Airbnb',
      location: 'Sydney',
      experience: '1-5 years',
      type: 'Part-time',
      description:
        'Airbnb was born in 2007 when two Hosts welcomed three guests to their San Francisco home.',
      posted: '5 days ago',
      salary: '$25K/mo',
      color: '#E63946',
      logo: 'https://cdn.iconscout.com/icon/free/png-512/free-airbnb-logo-icon-download-in-svg-png-gif-file-formats--rent-house-brand-pack-logos-icons-1583156.png?f=webp&w=256',
      jobDescription:
        'As a Project Manager, you’ll oversee project lifecycles, working closely with teams to deliver results efficiently and effectively.',
      skills: [
        'Strong leadership skills',
        'Experience in project management methodologies (Agile, Scrum)',
        'Excellent communication and stakeholder management skills',
      ],
      role: 'You will coordinate between teams to ensure timely delivery of projects while mitigating risks and managing stakeholder expectations.',
      benefits: [
        'Professional development courses',
        'Performance bonuses',
        'Remote-friendly work policies',
      ],
    },
    {
      id: 3,
      title: 'Graphic Designer',
      company: 'Spotify',
      location: 'Remote',
      experience: 'Freshers',
      type: 'Full-time',
      description:
        'Graphic Designers will create designs for marketing campaigns and product promotion.',
      posted: '3 days ago',
      salary: '$30K/mo',
      color: '#FFC300',
      logo: 'https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Spotify-icon.png',
      jobDescription:
        'As a Graphic Designer, you’ll work closely with marketing and product teams to design compelling visuals for campaigns and promotions.',
      skills: [
        'Creative mindset',
        'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)',
        'Strong portfolio of previous design work',
      ],
      role: 'You will conceptualize and execute designs for print, digital, and social media platforms, ensuring brand consistency and innovation.',
      benefits: [
        'Remote working',
        'Career development programs',
        'Access to creative workshops and events',
      ],
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Microsoft',
      location: 'San Francisco',
      experience: '2+ years',
      type: 'Full-time',
      description:
        'Data Scientists use data to solve complex business problems and generate insights.',
      posted: '1 week ago',
      salary: '$75K/mo',
      color: '#2E86C1',
      logo: 'https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png',
      jobDescription:
        'As a Data Scientist, you’ll analyze large datasets to uncover patterns, trends, and insights that will help shape business decisions.',
      skills: [
        'Proficiency in Python, R, or SQL',
        'Experience with machine learning algorithms',
        'Strong analytical and problem-solving skills',
      ],
      role: 'You will collaborate with cross-functional teams to deliver data-driven solutions and build predictive models to improve business outcomes.',
      benefits: [
        'Competitive salary',
        'Stock options',
        'Access to cutting-edge technology',
      ],
    },
    {
      id: 5,
      title: 'Software Engineer',
      company: 'Tesla',
      location: 'Austin, Texas',
      experience: '2+ years',
      type: 'Full-time',
      description:
        'Software Engineers develop and maintain software systems for Tesla’s innovative products.',
      posted: '2 weeks ago',
      salary: '$100K/mo',
      color: '#E74C3C',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJP7X_crOPPYfdGyvHw8KhkxswWPubv8P4w&s',
      jobDescription:
        'As a Software Engineer, you’ll contribute to Tesla’s cutting-edge technology by developing and optimizing software systems for their vehicles and energy products.',
      skills: [
        'Proficiency in C++, JavaScript, or Python',
        'Experience with embedded systems and real-time software',
        'Ability to work in a fast-paced, innovative environment',
      ],
      role: 'You will design, develop, and maintain high-performance software solutions, collaborating with hardware engineers and product teams to push the boundaries of innovation.',
      benefits: [
        'Equity options',
        'Health and wellness programs',
        'Opportunities to work on cutting-edge projects',
      ],
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      company: 'Meta',
      location: 'London',
      experience: '1-2 years',
      type: 'Full-time',
      description:
        'Marketing Specialists create and execute marketing campaigns to grow brand awareness.',
      posted: '6 days ago',
      salary: '$45K/mo',
      color: '#9B59B6',
      logo: 'https://i.pinimg.com/736x/2c/3f/0c/2c3f0cd6b0f316955b1468d37507c314.jpg',
      jobDescription:
        'As a Marketing Specialist, you’ll plan and execute creative campaigns to attract and retain customers.',
      skills: [
        'Experience in digital marketing',
        'Strong analytical skills',
        'Familiarity with Google Analytics and marketing automation tools',
      ],
      role: 'You will collaborate with the content and design teams to create engaging campaigns across various platforms.',
      benefits: [
        'Paid parental leave',
        'Learning and development programs',
        'Free meals at work',
      ],
    },
    {
      id: 7,
      title: 'Business Analyst',
      company: 'Amazon',
      location: 'Seattle',
      experience: '1-3 years',
      type: 'Full-time',
      description:
        'Business Analysts help companies make data-driven decisions to improve operations.',
      posted: '4 days ago',
      salary: '$60K/mo',
      color: '#F1C40F',
      logo: 'https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg',
      jobDescription:
        'As a Business Analyst, you’ll work with stakeholders to identify improvement opportunities and recommend solutions.',
      skills: [
        'Strong analytical and communication skills',
        'Experience with data visualization tools (Tableau, Power BI)',
        'Ability to manage multiple projects',
      ],
      role: 'You will analyze business operations and work with stakeholders to improve efficiency and productivity.',
      benefits: [
        'Flexible work schedules',
        'Comprehensive health coverage',
        'Employee discounts',
      ],
    },
    {
      id: 8,
      title: 'Product Manager',
      company: 'Netflix',
      location: 'Los Angeles',
      experience: '4+ years',
      type: 'Full-time',
      description:
        'Product Managers lead product development teams to build and improve offerings.',
      posted: '1 week ago',
      salary: '$80K/mo',
      color: '#E74C3C',
      logo: 'https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940',
      jobDescription:
        'As a Product Manager, you’ll oversee the entire lifecycle of product development, from conception to launch.',
      skills: [
        'Experience with Agile methodologies',
        'Strong leadership and communication skills',
        'Ability to translate user needs into product requirements',
      ],
      role: 'You will work closely with engineering and design teams to deliver world-class products.',
      benefits: [
        'Stock options',
        'Work-life balance initiatives',
        'Unlimited paid time off',
      ],
    },
    {
      id: 9,
      title: 'Cybersecurity Analyst',
      company: 'IBM',
      location: 'Remote',
      experience: '3+ years',
      type: 'Full-time',
      description:
        'Cybersecurity Analysts protect company systems and data from cyber threats.',
      posted: '5 days ago',
      salary: '$70K/mo',
      color: '#34495E',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtNIzRpzgCP-LG0xpfuDwA_alyeCv4mUPuw&s',
      jobDescription:
        'As a Cybersecurity Analyst, you’ll monitor systems for security breaches and implement measures to protect data.',
      skills: [
        'Proficiency in network security tools',
        'Experience in threat detection and incident response',
        'Strong knowledge of cybersecurity best practices',
      ],
      role: 'You will proactively protect company systems by identifying vulnerabilities and implementing security measures.',
      benefits: [
        'Remote work options',
        'Generous PTO',
        'Professional certification reimbursement',
      ],
    },
    {
      id: 10,
      title: 'DevOps Engineer',
      company: 'Slack',
      location: 'Remote',
      experience: '2+ years',
      type: 'Full-time',
      description:
        'DevOps Engineers bridge the gap between development and operations to streamline workflows.',
      posted: '2 weeks ago',
      salary: '$95K/mo',
      color: '#16A085',
      logo: 'https://static-00.iconduck.com/assets.00/slack-icon-2048x2048-sgl67hsi.png',
      jobDescription:
        'As a DevOps Engineer, you’ll optimize development workflows, automate processes, and ensure smooth deployments.',
      skills: [
        'Experience with CI/CD pipelines',
        'Proficiency in Docker and Kubernetes',
        'Strong scripting skills (Python, Bash)',
      ],
      role: 'You will collaborate with engineering teams to build and maintain infrastructure, ensuring scalability and reliability.',
      benefits: [
        'Health insurance',
        'Flexible remote work',
        'Annual performance bonuses',
      ],
    },
  ];
  
  export default jobData;
  