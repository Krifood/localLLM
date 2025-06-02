# LocalLLM 开发指南

## 项目结构
```
localLLM/
├── backend/              # 后端服务
│   ├── app/
│   │   ├── api/         # API路由
│   │   ├── core/        # 核心配置
│   │   ├── models/      # 数据模型
│   │   └── services/    # 业务逻辑
│   ├── tests/           # 测试文件
│   └── requirements.txt  # Python依赖
├── frontend/            # 前端应用
│   ├── components/      # React组件
│   ├── pages/          # 页面文件
│   ├── public/         # 静态资源
│   └── package.json    # Node.js依赖
└── models/             # LLM模型文件
    └── llm/           # 存放下载的模型
```

## 开发环境设置

### 后端设置
1. 创建Python虚拟环境：
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   # 或
   .\venv\Scripts\activate  # Windows
   ```

2. 安装依赖：
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. 运行开发服务器：
   ```bash
   uvicorn app.main:app --reload
   ```

### 前端设置
1. 安装依赖：
   ```bash
   cd frontend
   npm install
   ```

2. 运行开发服务器：
   ```bash
   npm run dev
   ```

## API文档
- 启动后端服务器后，访问 http://localhost:8000/docs 查看API文档

## 开发规范
1. 代码风格遵循各自语言的标准规范
2. 提交代码前进行本地测试
3. 保持代码简洁，注重效率

## 下一步开发计划
1. 实现文档解析功能
2. 集成本地LLM模型
3. 实现向量检索
4. 开发对话界面 