## 简介

TypeScript 版本的 ReAct（Reasoning + Acting）最小示例，等价于课程中的 Python 版本：
- Agent（大脑 + 记忆）
- Prompt（思维方式）
- Tools（行动能力）
- Thought → Action → Observation → Answer 闭环

## 快速开始

1. 复制环境变量模板并填写：
```bash
cp .env.example .env
```
在 `.env` 中填写：
```
OPENAI_API_KEY=你的api_key
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
OPENAI_MODEL=qwen-max
```

2. 运行一次最小连通性测试（等价 Python 中 "你是谁？" 测试）：
```bash
npm run smoke
```

3. 运行 ReAct 示例：
```bash
npm run dev
```

## 目录结构

```
src/
  agent.ts        # 封装对话与记忆
  client.ts       # OpenAI 兼容客户端，读取 .env
  prompt.ts       # ReAct 提示词模板
  tools.ts        # calculate / average_dog_weight 工具
  react_query.ts  # Thought/Action/Observation 循环
  index.ts        # 示例问题：两只狗的总重
  smoke.ts        # “你是谁？”连通性测试
```

## 注意
- 示例里 `calculate` 为教学演示使用了 `eval`，生产环境请替换为安全的表达式解析器。


