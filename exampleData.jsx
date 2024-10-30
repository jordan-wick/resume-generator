const example = {
  personalInfo: {
    name: 'John Deer',
    phone: '(555) 012-4793',
    email: 'buck@deer.com',
  },
  educations: [
    {
      school: 'University of Phoenix Online',
      degree: 'Bachelor of Science',
      major: 'Chemistry',
      graduated: '07-2018',
      isCollapsed: true,
      id: crypto.randomUUID(),
    },
    {
      school: 'Harvard University',
      degree: 'Juris Doctorate',
      major: 'Law',
      graduated: '06-2023',
      isCollapsed: false,
      id: crypto.randomUUID(),
    },
  ],
  experiences: [
    {
      company: 'xyzCorp',
      position: 'Help Desk',
      start: '09-2016',
      end: '07-2018',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur explicabo deleniti impedit nemo saepe quidem, tempora itaque beatae vel ipsa.',
    },
    {
      company: 'Warner Brothers & Associates',
      position: 'Intern',
      start: '09-2021',
      end: 'Present',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur explicabo deleniti impedit nemo saepe quidem, tempora itaque beatae vel ipsa.',
    },
  ]
};

export default example;