// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  username: {
    name: 'Pridli',
    surname: 'Scott',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600/month',
  address: 'Kyiv, m.Petrivka',
}

var footer = {
  contacts: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    social: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ___________________________________________________________________
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: { title: 'Resume|summary' },

    header,

    main: {
      experience: {
        title: 'Summary',
        text: `Open-minded for new technologies, 
        with 1 years of experience in development. 
        Whenever I start to work on a new project
        I learn the domain and try to understand the idea of the project.
        Good team player, every colleague is a friend to me.`,
      },
    },
    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: { title: 'Resume|skills' },
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          istop: true,
        },
        {
          name: 'Handlebars',
          point: 5,
          istop: false,
        },
        {
          name: 'GIT',
          point: 3,
        },
        {
          name: 'PHP',
          point: null,
        },
        {
          name: 'React.js',
          point: 0,
        },
      ],
      hobbies: [
        {
          name: '***-kicking',
          isFav: true,
        },
        {
          name: 'Sleepin in Planking',
          isFav: false,
        },
        {
          name: 'Plants vs Zombies',
          isFav: false,
        },
      ],
    },
    footer,
  })
})
router.get('/education', function (req, res) {
  res.render('education', {
    header,

    main: {
      educlist: [
        {
          name: 'kindergarten',
          isEnd: true,
        },
        {
          name: 'primary school',
          isEnd: false,
        },
        {
          name: 'etc.',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Об успешном окончании дет.сада',
          id: 1,
        },
        {
          name: 'Об успешном неокончании школьі',
          id: 2,
        },
        {
          name: 'Об намерениях податься куда-нибудь',
          id: 3,
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: { title: 'Resume|work' },
    header,
    main: {
      work: [
        {
          name: 'Junior Fullstack JS Developer',
          company: {
            name: 'IT Brains',
            url: null,
            // url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '11.11.2222',
            to: null,
          },
        },
      ],
      projAmt: '3',
      projects: [
        {
          name: 'resume',
          url: 'https://resume.com.ua/',
          about: 'aboutabout aboutabout aboutabout',
          stacksAmt: '3',
          stacks: [
            { name: 'React.js' },
            { name: 'HTML/CSS' },
            { name: 'Node.js' },
          ],
          awards: [
            { name: 'grammy' },
            { name: 'oscar' },
            { name: 'one kiss' },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================
