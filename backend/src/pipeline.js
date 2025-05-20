import dotenv from 'dotenv';
import OpenAI from 'openai';


dotenv.config(); // 读取.env的配置 加载到process.env

// 在文件顶部或 pipeline.js 里
function cleanSql(raw) {
  if (typeof raw !== 'string') return '';
  return raw
    .replace(/```sql\s*/gi, '')
    .replace(/```/g, '')
    .trim();
}

const ai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const schema_describe = 
`
Tables:
- University(iped_unit_id, name, us_news_ranking, website_url)
- Program(cip_code, iped_unit_id, name, degree_level, tuition_usd, application_deadline)
- Applicant(applicant_id, full_name, email)
- Application(application_id, cip_code, applicant_id, apply_date, status)
- Inquiry(inquiry_id, cip_code, message, submit_date)
`;


export async function generateSQL(user_question) {
    const messages = [
        {role: 'system', content: `You are a helpful assistant that translates natural language questions into SQL queries. you MUST return **only** the valid SQL statement,
with no markdown, no code fences, no explanations.
If the question is unrelated to SQL, reply with exactly:
  NO_SQL
and nothing else.You have access to the following database schema: ${schema_describe}`, },
        {role: 'user', content: user_question}
    ];



    const resp = await ai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0,
    });


    const sql = resp.choices[0].message.content.trim();

    return cleanSql(sql);
}