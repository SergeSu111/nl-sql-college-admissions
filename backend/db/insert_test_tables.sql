insert into University (iped_unit_id, name, us_news_ranking, website_url) values
(230038, 'Brigham Young University', 83, 'https://www.byu.edu'),
(230764, 'University of Utah', 104, 'https://www.utah.edu'),
(230737, 'Utah Valley University', NULL, 'https://www.uvu.edu'),
(230728, 'Utah State University', 164, 'https://www.usu.edu'),
(110662, 'University of California, Los Angeles', 20, 'https://www.ucla.edu'),
(110635, 'University of California, Berkeley', 20, 'https://www.berkeley.edu'),
(110680, 'University of California, San Diego', 34, 'https://www.ucsd.edu'),
(110653, 'University of California, Irvine', 35, 'https://www.uci.edu');


insert into Applicant (applicant_id, full_name, email) values
    (1, 'Alice Zhang',    'alice.zhang@example.com'),
    (2, 'Bob Li',         'bob.li@example.com'),
    (3, 'Carol Chen',     'carol.chen@example.com'),
    (4, 'David Wu',       'david.wu@example.com'),
    (5, 'Emily Smith',    'emily.smith@example.com'),
    (6, 'Frank Liu',      'frank.liu@example.com'),
    (7, 'Grace Lee',      'grace.lee@example.com'),
    (8, 'Henry Johnson',  'henry.johnson@example.com'),
    (9,  'Ian Thompson',    'ian.thompson@example.com'),
    (10, 'Julia Martinez',  'julia.martinez@example.com'),
    (11, 'Kevin Brown',     'kevin.brown@example.com'),
    (12, 'Linda Davis',     'linda.davis@example.com'),
    (13, 'Michael Wilson',  'michael.wilson@example.com'),
    (14, 'Nina Patel',      'nina.patel@example.com'),
    (15, 'Oscar Hernandez', 'oscar.hernandez@example.com');



insert into Program (cip_code, iped_unit_id, name, degree_level, tuition_usd, application_deadline) values
    ('11.0701', 230038, 'Computer Science', 'bachelor', 50000.00, '2024-01-15'),
    ('30.7001', 230764, 'Data Science, General', 'master', 60000.00, '2024-02-01'),
    ('11.1003', 230737, 'Computer and Information Systems Security', 'doctorate', 70000.00, '2024-03-01'),
    ('11.0103', 230728, 'Information Technology', 'bachelor', 55000.00, '2024-04-01'),
    ('14.0903', 110662, 'Software Engineering', 'master', 65000.00, '2024-05-01'),
    ('11.0102', 110635, 'Artificial Intelligence and Robotics', 'doctorate', 75000.00, '2024-06-01'),
    ('30.7101', 110680, 'Data Analytics, General', 'bachelor', 52000.00, '2024-07-01'),
    ('11.0902', 110653, 'Cloud Computing', 'master', 62000.00, '2024-08-01'),
    ('52.0301', 230038, 'Accounting', 'bachelor', 18000.00, '2024-09-01'),
    ('52.0201', 230764, 'Business Administration, General', 'master', 22000.00, '2024-10-01');


insert into Application(cip_code, application_id, apply_date, status) values
    ('11.0701', 1, '2024-01-10', 'waiting'),
    ('30.7001', 2, '2024-02-01', 'admitted'),
    ('11.1003', 3, '2024-03-01', 'rejected'),
    ('11.0103', 4, '2024-04-01', 'waiting'),
    ('14.0903', 5, '2024-05-01', 'admitted'),
    ('11.0102', 6, '2024-06-01', 'rejected'),
    ('30.7101', 7, '2024-07-01', 'waiting'),
    ('11.0902', 8, '2024-08-01', 'admitted'),
    ('52.0301',  9,  '2024-09-01', 'waiting'),
    ('52.0301', 10,  '2024-09-02', 'admitted'),
    ('52.0201', 11,  '2024-10-03', 'waiting'),
    ('52.0201', 12,  '2024-10-04', 'rejected'),
    ('11.0701', 13,  '2024-09-05', 'admitted'),
    ('30.7001', 14,  '2024-09-06', 'waiting'),
    ('14.0903', 15,  '2024-09-07', 'rejected');


INSERT INTO Inquiry (inquiry_id, cip_code, message, submit_date) VALUES
  (1,  '11.0701', 'How many credits are required for the Computer Science program?',          '2024-01-05 09:30'),
  (2,  '11.0701', 'What is the scholarship application deadline for Computer Science?',      '2024-01-10 14:20'),
  (3,  '30.7001', 'Does the Data Science program include machine learning courses?',          '2024-02-08 11:45'),
  (4,  '11.1003', 'Are there lab sessions in the Information Systems Security track?',        '2024-03-12 16:00'),
  (5,  '11.0103', 'Can transfer students enroll in the Information Technology program?',     '2024-04-02 10:15'),
  (6,  '14.0903', 'Do I need previous programming experience for Software Engineering?',      '2024-05-20 13:50'),
  (7,  '11.0102', 'Does the Artificial Intelligence program offer a speech recognition focus?','2024-06-18 15:10'),
  (8,  '30.7101', 'What are the core courses in Data Analytics, General?',                   '2024-07-22 09:05'),
  (9,  '11.0902', 'Is remote learning available for the Cloud Computing program?',            '2024-08-15 12:30'),
  (10, '52.0301', 'Does the Accounting program require a related undergraduate background?', '2024-09-01 14:00');
