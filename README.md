# NL-SQL College Admissions

A web application that allows users to ask natural language questions about a college admissions database and get answers back in plain English. Behind the scenes, it uses GPT-3.5-Turbo to generate SQL from user questions, executes the SQL against an SQLite database, and returns the results.

## Features

- **Natural Language to SQL**: Users type plain English questions, and the system generates and runs SQL queries automatically.  
- **Sample Data**: Preloaded data for Universities, Programs, Applicants, Applications, and Inquiries.  
- **Prompting Strategies**: Supports Zero-shot, Single-domain Few-shot, and Cross-domain Few-shot methods.  
- **Frontend**: Simple HTML/CSS/JavaScript chat interface.  
- **Backend**: Node.js with Express, Knex, and the OpenAI SDK.  

## Repository Structure

nl-sql-college-admissions/
├── backend/
│ ├── db/ # SQL scripts and SQLite database file
│ │ ├── create_tables.sql
│ │ ├── insert_test_tables.sql
│ │ └── school.db # Generated SQLite database
│ ├── src/
│ │ ├── index.js # Express server & API routes
│ │ └── pipeline.js # Prompting functions for NL→SQL
│ ├── .env.example # Environment variable template
│ └── package.json # Backend dependencies & scripts
├── frontend/ # Frontend static files
│ ├── index.html
│ ├── style.css
│ └── app.js
└── README.md # This file

## Getting Started

### Prerequisites

- Node.js v14 or later  
- npm (comes with Node.js)  
- An OpenAI API key  
- (Optional) sqlite3 CLI to seed the database manually  

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/nl-sql-college-admissions.git
   cd nl-sql-college-admissions/backend
   npm install

   OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
DB_FILE=./db/school.db
PORT=3000

Generate and seed the database

If you have the sqlite3 CLI, run:

bash
Copy
Edit
cd db
sqlite3 school.db < create_tables.sql
sqlite3 school.db < insert_test_tables.sql

Start the backend server

bash
Copy
Edit
npm start
