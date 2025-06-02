export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          LocalLLM 本地知识库管理系统
        </h1>
        <p className="text-center text-lg mb-4">
          基于本地LLM的个人知识库管理工具
        </p>
        <div className="text-center">
          <p className="text-gray-600">
            支持多种文档格式 | 离线运行 | 知识库管理
          </p>
        </div>
      </div>
    </main>
  )
} 