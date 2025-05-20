import dotenv from 'dotenv'; // 为了读取.env的配置
import express from 'express'; // 为了node.js
import path from 'path'; // 为了处理路径
import { fileURLToPath } from 'url'; // 为了处理路径
import knex from 'knex'; // 为了连接数据库
import {generateSQL} from './pipeline.js'; // 将用户的自然语言问题变成对应的sql 封装的module