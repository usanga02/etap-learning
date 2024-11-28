-- Create the 'Subject' table if it doesn't exist
CREATE TABLE IF NOT EXISTS Subject (
  id SERIAL PRIMARY KEY,    -- Auto-incrementing id
  title VARCHAR(255) NOT NULL
);

-- Insert subjects into the 'Subject' table
INSERT INTO Subject (title) VALUES 
  ('Web Development'),
  ('Backend and Databases'),
  ('Mobile Development'),
  ('Cybersecurity'),
  ('Cloud Computing'),
  ('Data Science and Big Data'),
  ('Artificial Intelligence and Machine Learning'),
  ('DevOps and Automation');

-- Create the 'Topic' table if it doesn't exist
CREATE TABLE IF NOT EXISTS Topic (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  videoUrl VARCHAR(255) NOT NULL,
  subjectId INT NOT NULL,
  FOREIGN KEY (subjectId) REFERENCES Subject(id)
);

-- Insert topics into the 'Topic' table
INSERT INTO Topic (title, description, videoUrl, subjectId) VALUES 
  -- Web Development (subjectId: 1)
  ('Frontend Frameworks', 'An introduction to popular frontend frameworks like React, Angular, and Vue.js.', 'https://www.youtube.com/watch?v=Tef1e9FiSR0&t=258s', 1),
  ('Backend Technologies', 'Explore the fundamentals of backend development using Node.js, Python, and Java.', 'https://www.youtube.com/watch?v=OeEHJgzqS1k', 1),
  ('Web Performance Optimization', 'Learn techniques to improve the performance and speed of your web applications.', 'https://www.youtube.com/watch?v=0fONene3OIA', 1),

  -- Backend and Databases (subjectId: 2)
  ('SQL vs. NoSQL Databases', 'A comparison of SQL and NoSQL databases and their use cases.', 'https://www.youtube.com/watch?v=_Ss42Vb1SU4', 2),
  ('RESTful APIs vs. GraphQL', 'Understand the differences between RESTful APIs and GraphQL.', 'https://www.youtube.com/watch?v=PTfZcN20fro', 2),
  ('Caching Strategies', 'Implement caching strategies with tools like Redis and Memcached.', 'https://www.youtube.com/watch?v=dGAgxozNWFE', 2),

  -- Mobile Development (subjectId: 3)
  ('Native vs. Cross-Platform Development', 'Explore the differences between native and cross-platform mobile development.', 'https://www.youtube.com/watch?v=yux5kD-sVeA', 3),
  ('Mobile App Security', 'Best practices for securing mobile applications.', 'https://www.youtube.com/watch?v=9Pcim2Hfc-g', 3),
  ('Flutter Basics', 'Learn how to build mobile apps with Flutter.', 'https://www.youtube.com/watch?v=1xipg02Wu8s', 3),

  -- Cybersecurity (subjectId: 4)
  ('Network Security Basics', 'An overview of network security concepts and practices.', 'https://www.youtube.com/watch?v=lYvijnPI1Rg', 4),
  ('Ethical Hacking', 'Learn the basics of ethical hacking and penetration testing.', 'https://www.youtube.com/watch?v=XLvPpirlmEs', 4),
  ('Encryption and Cryptography', 'Explore encryption techniques and cryptography fundamentals.', 'https://www.youtube.com/watch?v=NuyzuNBFWxQ', 4),

  -- Cloud Computing (subjectId: 5)
  ('AWS vs. Azure vs. Google Cloud', 'Compare the top cloud service providers and their features.', 'https://www.youtube.com/watch?v=RXsT1tUpFBs', 5),
  ('Infrastructure as Code (IaC)', 'Learn about IaC tools like Terraform and CloudFormation.', 'https://www.youtube.com/watch?v=POPP2WTJ8es', 5),
  ('Serverless Computing', 'An introduction to serverless computing and its benefits.', 'https://www.youtube.com/watch?v=YoBfFwsoWIU', 5),

  -- Data Science and Big Data (subjectId: 6)
  ('Data Visualization Tools', 'Explore data visualization tools such as Power BI and Tableau.', 'https://www.youtube.com/watch?v=jgXp1EE4Wms', 6),
  ('Big Data Technologies', 'Introduction to big data frameworks like Hadoop and Spark.', 'https://www.youtube.com/watch?v=Pyo4RWtxsQM', 6),
  ('Predictive Analytics', 'Learn the fundamentals of predictive analytics and modeling.', 'https://www.youtube.com/watch?v=4y6fUC56KPw', 6),

  -- Artificial Intelligence and Machine Learning (subjectId: 7)
  ('Neural Networks', 'Understand the structure and working of neural networks.', 'https://www.youtube.com/watch?v=jmmW0F0biz0', 7),
  ('Natural Language Processing (NLP)', 'Learn about NLP techniques and applications.', 'https://www.youtube.com/watch?v=fLvJ8VdHLA0', 7),
  ('Reinforcement Learning', 'Explore the fundamentals of reinforcement learning.', 'https://www.youtube.com/watch?v=nIgIv4IfJ6s', 7),

  -- DevOps and Automation (subjectId: 8)
  ('CI/CD Pipelines', 'Learn how to set up CI/CD pipelines for automated deployment.', 'https://www.youtube.com/watch?v=scEDHsr3APg', 8),
  ('Containerization with Docker', 'An introduction to Docker and containerization.', 'https://www.youtube.com/watch?v=0qotVMX-J5s', 8),
  ('Infrastructure as Code (IaC)', 'Automate infrastructure management using IaC tools.', 'https://www.youtube.com/watch?v=POPP2WTJ8es', 8);
