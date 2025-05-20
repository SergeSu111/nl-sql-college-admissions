import dotenv from 'dotenv'; // 为了读取.env的配置
import express from 'express'; // 为了node.js
import path from 'path'; // 为了处理路径
import { fileURLToPath } from 'url'; // 为了处理路径
import knex from 'knex'; // 为了连接数据库
import {generateSQL} from './pipeline.js'; // 将用户的自然语言问题变成对应的sql 封装的module

dotenv.config(); // 读取.env的配置 加载到process.env

// 2⃣ 解析文件路径，确保无论在哪个目录启动脚本，都能正确定位到 sqlite 文件
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// 取 .env 里的 DB_FILE，例如 "./db/school.db"
const dbFile = process.env.DB_FILE || './db/school.db';
// 如果是相对路径，就基于 backend/ 目录拼接
const dbPath = path.isAbsolute(dbFile)
  ? dbFile
  : path.resolve(__dirname, '..', dbFile);


  // 连接数据库
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: dbPath
    },
    useNullAsDefault: true, // SQLite 需要这个选项
});


const app = express(); // 创建express应用
app.use(express.static(path.resolve('../frontend/src')));
app.use(express.json()); // 解析json格式的请求体

// 5⃣ 健康检查 / 测试路由：验证数据库连接是否正常
app.get('/test-db', async (req, res) => {
  try {
    // 从 University 表里取前 5 条数据
    const data = await db.select('*').from('University').limit(5);
    res.json({ success: true, data });
  } catch (err) {
    console.error('Test DB error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6⃣ 核心聊天接口：接收自然语言问题，生成 SQL，执行查询并返回结果
app.post('/api/chat', async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: 'Request body must include a "question" field.' });
  }

  try {
    // 6.1) 调用 pipeline 生成 SQL
    const sql = await generateSQL(question);
    // 4) 如果它不以 SQL 关键字开头，就把它当成纯文本回答，不执行数据库
    if (!/^(SELECT|INSERT|UPDATE|DELETE|WITH)\b/i.test(sql)) {
        return res.json({ answer: sql });
    }
    // 6.2) 用 Knex.raw 执行 SQL，拿到 rows（结果集）
    const raw = await db.raw(sql);
    // 注意：db.raw 返回的结构可能因 SQLite 驱动略有不同，可根据 raw 里的数据取 rows

    // 6.3) 返回给前端：GPT 生成的 SQL + 查询结果

    res.json({ sql, rows: raw });
  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: err.message });
  }
});

const port = parseInt(process.env.PORT, 10) || 3000;
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});


