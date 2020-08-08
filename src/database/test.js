const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
  proffyValue = {
    name: 'Mayk Brito',
    avatar:
      'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
    whatsapp: '3029482309',
    bio: 'Instrutor de Educação Física',
  };

  classValue = {
    subject: 1,
    cost: '30,00',
  };

  classScheduleValue = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 3,
      time_from: 520,
      time_to: 1220,
    },
  ];

  // await createProffy(db, { proffyValue, classValue, classScheduleValue });

  const selectedProffys = await db.all('SELECT * FROM proffys');

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `);

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday = "3"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `);
});
