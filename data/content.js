const computerEnglishData = {
  "categories": [
    {
      "id": "terminal-commands",
      "name": "Terminal Commands",
      "nameCN": "终端命令",
      "description": "Common terminal and shell commands",
      "items": [
        {
          "id": "t001",
          "english": "cd (change directory)",
          "chinese": "切换目录",
          "pronunciation": "/siː diː/",
          "example": "cd /home/user/documents",
          "category": "navigation"
        },
        {
          "id": "t002",
          "english": "ls (list)",
          "chinese": "列出目录内容",
          "pronunciation": "/el ɛs/",
          "example": "ls -la",
          "category": "navigation"
        },
        {
          "id": "t003",
          "english": "pwd (print working directory)",
          "chinese": "显示当前目录",
          "pronunciation": "/piː ˈdʌbəljuː diː/",
          "example": "pwd",
          "category": "navigation"
        },
        {
          "id": "t004",
          "english": "mkdir (make directory)",
          "chinese": "创建目录",
          "pronunciation": "/ˈɛmk dɪr/",
          "example": "mkdir new_folder",
          "category": "file-operations"
        },
        {
          "id": "t005",
          "english": "rm (remove)",
          "chinese": "删除文件或目录",
          "pronunciation": "/ɑːr ɛm/",
          "example": "rm file.txt",
          "category": "file-operations"
        },
        {
          "id": "t006",
          "english": "cp (copy)",
          "chinese": "复制文件",
          "pronunciation": "/siː piː/",
          "example": "cp source.txt destination.txt",
          "category": "file-operations"
        },
        {
          "id": "t007",
          "english": "mv (move)",
          "chinese": "移动或重命名文件",
          "pronunciation": "/ɛm viː/",
          "example": "mv old.txt new.txt",
          "category": "file-operations"
        },
        {
          "id": "t008",
          "english": "touch",
          "chinese": "创建空文件或更新时间戳",
          "pronunciation": "/tʌtʃ/",
          "example": "touch newfile.txt",
          "category": "file-operations"
        },
        {
          "id": "t009",
          "english": "chmod (change mode)",
          "chinese": "更改文件权限",
          "pronunciation": "/ˈsiː mɒd/",
          "example": "chmod 755 script.sh",
          "category": "permissions"
        },
        {
          "id": "t010",
          "english": "sudo (superuser do)",
          "chinese": "以超级用户执行",
          "pronunciation": "/ˈsuːduː/",
          "example": "sudo apt-get update",
          "category": "permissions"
        },
        {
          "id": "t011",
          "english": "grep (global regular expression print)",
          "chinese": "文本搜索工具",
          "pronunciation": "/ɡrɛp/",
          "example": "grep 'error' log.txt",
          "category": "text-processing"
        },
        {
          "id": "t012",
          "english": "pipe",
          "chinese": "管道（将输出传递给下一个命令）",
          "pronunciation": "/paɪp/",
          "example": "cat file.txt | grep 'pattern'",
          "category": "text-processing"
        },
        {
          "id": "t013",
          "english": "echo",
          "chinese": "输出文本",
          "pronunciation": "/ˈɛkoʊ/",
          "example": "echo 'Hello World'",
          "category": "text-processing"
        },
        {
          "id": "t014",
          "english": "cat (concatenate)",
          "chinese": "查看文件内容",
          "pronunciation": "/kæt/",
          "example": "cat file.txt",
          "category": "text-processing"
        },
        {
          "id": "t015",
          "english": "nano / vim",
          "chinese": "文本编辑器",
          "pronunciation": "/ˈnɑːnoʊ / vɪm/",
          "example": "nano config.txt",
          "category": "editors"
        }
      ]
    },
    {
      "id": "git-commands",
      "name": "Git Commands",
      "nameCN": "Git命令",
      "description": "Version control with Git",
      "items": [
        {
          "id": "g001",
          "english": "git init",
          "chinese": "初始化仓库",
          "pronunciation": "/ɡɪt ɪˈnɪt/",
          "example": "git init",
          "category": "repository"
        },
        {
          "id": "g002",
          "english": "git clone",
          "chinese": "克隆仓库",
          "pronunciation": "/ɡɪt kloʊn/",
          "example": "git clone https://github.com/user/repo.git",
          "category": "repository"
        },
        {
          "id": "g003",
          "english": "git add",
          "chinese": "添加文件到暂存区",
          "pronunciation": "/ɡɪt æd/",
          "example": "git add .",
          "category": "staging"
        },
        {
          "id": "g004",
          "english": "git commit",
          "chinese": "提交更改",
          "pronunciation": "/ɡɪt kəˈmɪt/",
          "example": "git commit -m 'Initial commit'",
          "category": "staging"
        },
        {
          "id": "g005",
          "english": "git push",
          "chinese": "推送到远程",
          "pronunciation": "/ɡɪt pʊʃ/",
          "example": "git push origin main",
          "category": "remote"
        },
        {
          "id": "g006",
          "english": "git pull",
          "chinese": "拉取更新",
          "pronunciation": "/ɡɪt pʊl/",
          "example": "git pull origin main",
          "category": "remote"
        },
        {
          "id": "g007",
          "english": "git status",
          "chinese": "查看状态",
          "pronunciation": "/ɡɪt ˈsteɪtəs/",
          "example": "git status",
          "category": "status"
        },
        {
          "id": "g008",
          "english": "git branch",
          "chinese": "分支操作",
          "pronunciation": "/ɡɪt bræntʃ/",
          "example": "git branch feature-branch",
          "category": "branching"
        },
        {
          "id": "g009",
          "english": "git checkout",
          "chinese": "切换分支",
          "pronunciation": "/ɡɪt ˈtʃɛkaʊt/",
          "example": "git checkout main",
          "category": "branching"
        },
        {
          "id": "g010",
          "english": "git merge",
          "chinese": "合并分支",
          "pronunciation": "/ɡɪt mɜːrdʒ/",
          "example": "git merge feature-branch",
          "category": "branching"
        },
        {
          "id": "g011",
          "english": "git log",
          "chinese": "查看提交历史",
          "pronunciation": "/ɡɪt lɒɡ/",
          "example": "git log --oneline",
          "category": "history"
        },
        {
          "id": "g012",
          "english": "git stash",
          "chinese": "暂存更改",
          "pronunciation": "/ɡɪt stæʃ/",
          "example": "git stash",
          "category": "workflow"
        },
        {
          "id": "g013",
          "english": "git rebase",
          "chinese": "变基",
          "pronunciation": "/ɡɪt riːˈbeɪs/",
          "example": "git rebase main",
          "category": "advanced"
        },
        {
          "id": "g014",
          "english": "git remote",
          "chinese": "远程仓库管理",
          "pronunciation": "/ɡɪt ˈriːmoʊt/",
          "example": "git remote add origin <url>",
          "category": "remote"
        },
        {
          "id": "g015",
          "english": "README",
          "chinese": "项目说明文档",
          "pronunciation": "/ˈridˌmi/",
          "example": "See README.md for details",
          "category": "documentation"
        }
      ]
    },
    {
      "id": "error-messages",
      "name": "Error Messages",
      "nameCN": "错误信息",
      "description": "Common error messages and their meanings",
      "items": [
        {
          "id": "e001",
          "english": "Permission denied",
          "chinese": "权限被拒绝",
          "pronunciation": "/pərˈmɪʃən dɪˈnaɪd/",
          "example": "Permission denied: unable to access file",
          "category": "access"
        },
        {
          "id": "e002",
          "english": "File not found",
          "chinese": "文件未找到",
          "pronunciation": "/faɪl nɒt faʊnd/",
          "example": "Error: File not found: config.json",
          "category": "files"
        },
        {
          "id": "e003",
          "english": "Connection refused",
          "chinese": "连接被拒绝",
          "pronunciation": "/kəˈnɛkʃən rɪˈfjuːzd/",
          "example": "Connection refused on port 8080",
          "category": "network"
        },
        {
          "id": "e004",
          "english": "Segmentation fault",
          "chinese": "段错误（内存访问错误）",
          "pronunciation": "/ˌsɛɡmɛnˈteɪʃən fɒlt/",
          "example": "Segmentation fault (core dumped)",
          "category": "runtime"
        },
        {
          "id": "e005",
          "english": "Out of memory",
          "chinese": "内存不足",
          "pronunciation": "/aʊt ʌv ˈmɛməri/",
          "example": "Error: Out of memory",
          "category": "runtime"
        },
        {
          "id": "e006",
          "english": "Syntax error",
          "chinese": "语法错误",
          "pronunciation": "/ˈsɪntæks ˈɛrər/",
          "example": "Syntax error: unexpected token",
          "category": "compilation"
        },
        {
          "id": "e007",
          "english": "Undefined reference",
          "chinese": "未定义的引用",
          "pronunciation": "/ˌʌndɪˈfaɪnd ˈrɛfrəns/",
          "example": "undefined reference to function",
          "category": "compilation"
        },
        {
          "id": "e008",
          "english": "Fatal error",
          "chinese": "致命错误",
          "pronunciation": "/ˈfeɪtl ˈɛrər/",
          "example": "Fatal error: cannot allocate memory",
          "category": "critical"
        },
        {
          "id": "e009",
          "english": "Timeout",
          "chinese": "超时",
          "pronunciation": "/ˈtaɪmaʊt/",
          "example": "Request timeout after 30 seconds",
          "category": "network"
        },
        {
          "id": "e010",
          "english": "Access denied",
          "chinese": "访问被拒绝",
          "pronunciation": "/ˈæksɛs dɪˈnaɪd/",
          "example": "Access denied: authentication required",
          "category": "access"
        },
        {
          "id": "e011",
          "english": "Null pointer exception",
          "chinese": "空指针异常",
          "pronunciation": "/nʌl ˈpɔɪntər ɪkˈsɛpʃən/",
          "example": "java.lang.NullPointerException",
          "category": "runtime"
        },
        {
          "id": "e012",
          "english": "Stack overflow",
          "chinese": "栈溢出",
          "pronunciation": "/stæk ˈoʊvərˌfloʊ/",
          "example": "Stack overflow error",
          "category": "runtime"
        },
        {
          "id": "e013",
          "english": "Resource temporarily unavailable",
          "chinese": "资源暂时不可用",
          "pronunciation": "/ˈriːsɔːrs ˈtɛmpərɛrəli ˌʌnəˈveɪləbl/",
          "example": "Resource temporarily unavailable",
          "category": "system"
        },
        {
          "id": "e014",
          "english": "No such file or directory",
          "chinese": "无此文件或目录",
          "pronunciation": "/noʊ sʌtʃ faɪl ɔːr dɪˈrɛktəri/",
          "example": "No such file or directory: /path/to/file",
          "category": "files"
        },
        {
          "id": "e015",
          "english": "Disk full",
          "chinese": "磁盘已满",
          "pronunciation": "/dɪsk fʊl/",
          "example": "Error writing file: Disk full",
          "category": "system"
        }
      ]
    },
    {
      "id": "programming-terms",
      "name": "Programming Terms",
      "nameCN": "编程术语",
      "description": "Essential programming vocabulary",
      "items": [
        {
          "id": "p001",
          "english": "Variable",
          "chinese": "变量",
          "pronunciation": "/ˈvɛəriəbl/",
          "example": "Declare a variable: let x = 10",
          "category": "basics"
        },
        {
          "id": "p002",
          "english": "Function",
          "chinese": "函数",
          "pronunciation": "/ˈfʌŋkʃən/",
          "example": "Define a function to calculate sum",
          "category": "basics"
        },
        {
          "id": "p003",
          "english": "Array",
          "chinese": "数组",
          "pronunciation": "/əˈreɪ/",
          "example": "Create an array: [1, 2, 3]",
          "category": "data-structures"
        },
        {
          "id": "p004",
          "english": "Object",
          "chinese": "对象",
          "pronunciation": "/ˈɒbdʒɪkt/",
          "example": "Create an object with properties",
          "category": "data-structures"
        },
        {
          "id": "p005",
          "english": "Class",
          "chinese": "类",
          "pronunciation": "/klæs/",
          "example": "Define a class: class MyClass {}",
          "category": "oop"
        },
        {
          "id": "p006",
          "english": "Method",
          "chinese": "方法",
          "pronunciation": "/ˈmɛθəd/",
          "example": "Call the method: obj.method()",
          "category": "oop"
        },
        {
          "id": "p007",
          "english": "Constructor",
          "chinese": "构造函数",
          "pronunciation": "/kənˈstrʌktər/",
          "example": "The constructor initializes the object",
          "category": "oop"
        },
        {
          "id": "p008",
          "english": "Inheritance",
          "chinese": "继承",
          "pronunciation": "/ɪnˈhɛrɪtəns/",
          "example": "Use inheritance to extend the base class",
          "category": "oop"
        },
        {
          "id": "p009",
          "english": "Interface",
          "chinese": "接口",
          "pronunciation": "/ˈɪntərfeɪs/",
          "example": "Implement the interface",
          "category": "oop"
        },
        {
          "id": "p010",
          "english": "Callback",
          "chinese": "回调函数",
          "pronunciation": "/ˈkɔːlbæk/",
          "example": "Pass a callback function to handle async operations",
          "category": "async"
        },
        {
          "id": "p011",
          "english": "Promise",
          "chinese": "承诺/异步对象",
          "pronunciation": "/ˈprɒmɪs/",
          "example": "Return a Promise that resolves to data",
          "category": "async"
        },
        {
          "id": "p012",
          "english": "Async/Await",
          "chinese": "异步/等待",
          "pronunciation": "/əˈsɪŋk / əˈweɪt/",
          "example": "Use async/await for cleaner async code",
          "category": "async"
        },
        {
          "id": "p013",
          "english": "API (Application Programming Interface)",
          "chinese": "应用程序接口",
          "pronunciation": "/ˈeɪˌpiːˈaɪ/",
          "example": "Call the REST API endpoint",
          "category": "web"
        },
        {
          "id": "p014",
          "english": "JSON (JavaScript Object Notation)",
          "chinese": "JavaScript对象表示法",
          "pronunciation": "/ˈdʒeɪsən/",
          "example": "Parse the JSON response",
          "category": "data"
        },
        {
          "id": "p015",
          "english": "Debug",
          "chinese": "调试",
          "pronunciation": "/diːˈbʌɡ/",
          "example": "Debug the application to find the issue",
          "category": "development"
        }
      ]
    },
    {
      "id": "web-development",
      "name": "Web Development",
      "nameCN": "Web开发",
      "description": "Web development terminology",
      "items": [
        {
          "id": "w001",
          "english": "Frontend",
          "chinese": "前端",
          "pronunciation": "/ˈfrʌntɛnd/",
          "example": "Build the frontend with React",
          "category": "architecture"
        },
        {
          "id": "w002",
          "english": "Backend",
          "chinese": "后端",
          "pronunciation": "/ˈbækˌɛnd/",
          "example": "Develop the backend API",
          "category": "architecture"
        },
        {
          "id": "w003",
          "english": "Database",
          "chinese": "数据库",
          "pronunciation": "/ˈdeɪtəˌbeɪs/",
          "example": "Store data in the database",
          "category": "data"
        },
        {
          "id": "w004",
          "english": "Server",
          "chinese": "服务器",
          "pronunciation": "/ˈsɜːrvər/",
          "example": "Deploy to the production server",
          "category": "infrastructure"
        },
        {
          "id": "w005",
          "english": "Client",
          "chinese": "客户端",
          "pronunciation": "/ˈklaɪənt/",
          "example": "The client sends a request to the server",
          "category": "architecture"
        },
        {
          "id": "w006",
          "english": "Request",
          "chinese": "请求",
          "pronunciation": "/rɪˈkwɛst/",
          "example": "Handle the HTTP request",
          "category": "http"
        },
        {
          "id": "w007",
          "english": "Response",
          "chinese": "响应",
          "pronunciation": "/rɪˈspɒns/",
          "example": "Return a JSON response",
          "category": "http"
        },
        {
          "id": "w008",
          "english": "Endpoint",
          "chinese": "端点/接口地址",
          "pronunciation": "/ˈɛndˌpɔɪnt/",
          "example": "Create a new API endpoint",
          "category": "api"
        },
        {
          "id": "w009",
          "english": "Middleware",
          "chinese": "中间件",
          "pronunciation": "/ˈmɪdəlˌwɛr/",
          "example": "Add authentication middleware",
          "category": "architecture"
        },
        {
          "id": "w010",
          "english": "Framework",
          "chinese": "框架",
          "pronunciation": "/ˈfreɪmˌwɜːrk/",
          "example": "Use a JavaScript framework",
          "category": "tools"
        },
        {
          "id": "w011",
          "english": "Library",
          "chinese": "库",
          "pronunciation": "/ˈlaɪˌbrɛri/",
          "example": "Import the lodash library",
          "category": "tools"
        },
        {
          "id": "w012",
          "english": "Package",
          "chinese": "包/软件包",
          "pronunciation": "/ˈpækɪdʒ/",
          "example": "Install npm packages",
          "category": "tools"
        },
        {
          "id": "w013",
          "english": "Dependency",
          "chinese": "依赖",
          "pronunciation": "/dɪˈpɛndənsi/",
          "example": "Manage project dependencies",
          "category": "tools"
        },
        {
          "id": "w014",
          "english": "Repository",
          "chinese": "仓库",
          "pronunciation": "/rɪˈpɒzɪˌtɔːri/",
          "example": "Push code to the repository",
          "category": "version-control"
        },
        {
          "id": "w015",
          "english": "Deploy",
          "chinese": "部署",
          "pronunciation": "/dɪˈplɔɪ/",
          "example": "Deploy the application to production",
          "category": "devops"
        }
      ]
    },
    {
      "id": "system-terms",
      "name": "System Terms",
      "nameCN": "系统术语",
      "description": "Operating system and system-level terms",
      "items": [
        {
          "id": "s001",
          "english": "Process",
          "chinese": "进程",
          "pronunciation": "/ˈprɒsɛs/",
          "example": "Kill the running process",
          "category": "processes"
        },
        {
          "id": "s002",
          "english": "Thread",
          "chinese": "线程",
          "pronunciation": "/θrɛd/",
          "example": "Create a new thread",
          "category": "processes"
        },
        {
          "id": "s003",
          "english": "Daemon",
          "chinese": "守护进程",
          "pronunciation": "/ˈdiːmən/",
          "example": "Start the system daemon",
          "category": "processes"
        },
        {
          "id": "s004",
          "english": "Port",
          "chinese": "端口",
          "pronunciation": "/pɔːrt/",
          "example": "Listen on port 8080",
          "category": "network"
        },
        {
          "id": "s005",
          "english": "Socket",
          "chinese": "套接字",
          "pronunciation": "/ˈsɒkɪt/",
          "example": "Open a network socket",
          "category": "network"
        },
        {
          "id": "s006",
          "english": "Environment Variable",
          "chinese": "环境变量",
          "pronunciation": "/ɪnˈvaɪrənmənt ˈvɛəriəbl/",
          "example": "Set the PATH environment variable",
          "category": "configuration"
        },
        {
          "id": "s007",
          "english": "Configuration",
          "chinese": "配置",
          "pronunciation": "/kənˌfɪɡjəˈreɪʃən/",
          "example": "Edit the configuration file",
          "category": "configuration"
        },
        {
          "id": "s008",
          "english": "Kernel",
          "chinese": "内核",
          "pronunciation": "/ˈkɜːrnl/",
          "example": "Linux kernel version 5.10",
          "category": "os"
        },
        {
          "id": "s009",
          "english": "Boot",
          "chinese": "启动/引导",
          "pronunciation": "/buːt/",
          "example": "Boot the system",
          "category": "os"
        },
        {
          "id": "s010",
          "english": "Filesystem",
          "chinese": "文件系统",
          "pronunciation": "/ˈfaɪlˌsɪstəm/",
          "example": "Format the filesystem",
          "category": "storage"
        },
        {
          "id": "s011",
          "english": "Mount",
          "chinese": "挂载",
          "pronunciation": "/maʊnt/",
          "example": "Mount the disk partition",
          "category": "storage"
        },
        {
          "id": "s012",
          "english": "Memory",
          "chinese": "内存",
          "pronunciation": "/ˈmɛməri/",
          "example": "Allocate memory for the buffer",
          "category": "hardware"
        },
        {
          "id": "s013",
          "english": "Buffer",
          "chinese": "缓冲区",
          "pronunciation": "/ˈbʌfər/",
          "example": "Write to the output buffer",
          "category": "io"
        },
        {
          "id": "s014",
          "english": "Log",
          "chinese": "日志",
          "pronunciation": "/lɒɡ/",
          "example": "Check the system logs",
          "category": "monitoring"
        },
        {
          "id": "s015",
          "english": "Signal",
          "chinese": "信号",
          "pronunciation": "/ˈsɪɡnl/",
          "example": "Send a SIGTERM signal",
          "category": "processes"
        }
      ]
    },
    {
      "id": "code-comments",
      "name": "Code Comments",
      "nameCN": "代码注释",
      "description": "Common phrases used in code comments and documentation",
      "items": [
        {
          "id": "c001",
          "english": "TODO",
          "chinese": "待办事项",
          "pronunciation": "/tuː duː/",
          "example": "// TODO: Refactor this function",
          "category": "markers"
        },
        {
          "id": "c002",
          "english": "FIXME",
          "chinese": "需要修复",
          "pronunciation": "/fɪks miː/",
          "example": "// FIXME: Handle edge cases",
          "category": "markers"
        },
        {
          "id": "c003",
          "english": "HACK",
          "chinese": "临时方案/技巧",
          "pronunciation": "/hæk/",
          "example": "// HACK: Workaround for bug #123",
          "category": "markers"
        },
        {
          "id": "c004",
          "english": "Deprecated",
          "chinese": "已弃用",
          "pronunciation": "/ˈdɛprɪkeɪtɪd/",
          "example": "@deprecated Use newMethod() instead",
          "category": "status"
        },
        {
          "id": "c005",
          "english": "Returns",
          "chinese": "返回",
          "pronunciation": "/rɪˈtɜːrnz/",
          "example": "@returns The calculated value",
          "category": "documentation"
        },
        {
          "id": "c006",
          "english": "Parameters",
          "chinese": "参数",
          "pronunciation": "/pəˈræmɪtərz/",
          "example": "@param name The user's name",
          "category": "documentation"
        },
        {
          "id": "c007",
          "english": "Throws",
          "chinese": "抛出异常",
          "pronunciation": "/θroʊz/",
          "example": "@throws InvalidArgumentException",
          "category": "documentation"
        },
        {
          "id": "c008",
          "english": "See also",
          "chinese": "另请参见",
          "pronunciation": "/siː ˈɔːlsoʊ/",
          "example": "@see RelatedClass",
          "category": "documentation"
        },
        {
          "id": "c009",
          "english": "Implementation note",
          "chinese": "实现说明",
          "pronunciation": "/ˌɪmplɪmɛnˈteɪʃən noʊt/",
          "example": "// Implementation note: Thread-safe",
          "category": "notes"
        },
        {
          "id": "c010",
          "english": "Edge case",
          "chinese": "边界情况",
          "pronunciation": "/ɛdʒ keɪs/",
          "example": "// Handle the edge case: empty array",
          "category": "notes"
        },
        {
          "id": "c011",
          "english": "Workaround",
          "chinese": "变通方法",
          "pronunciation": "/ˈwɜːrkəˌraʊnd/",
          "example": "// Workaround for browser bug",
          "category": "notes"
        },
        {
          "id": "c012",
          "english": "Placeholder",
          "chinese": "占位符",
          "pronunciation": "/ˈpleɪsˌhoʊldər/",
          "example": "// TODO: Replace placeholder with actual implementation",
          "category": "notes"
        },
        {
          "id": "c013",
          "english": "Asynchronously",
          "chinese": "异步地",
          "pronunciation": "/eɪˈsɪŋkrənəsli/",
          "example": "// Execute asynchronously",
          "category": "documentation"
        },
        {
          "id": "c014",
          "english": "Null check",
          "chinese": "空值检查",
          "pronunciation": "/nʌl tʃɛk/",
          "example": "// Add null check here",
          "category": "notes"
        },
        {
          "id": "c015",
          "english": "Sanity check",
          "chinese": "合理性检查",
          "pronunciation": "/ˈsænɪti tʃɛk/",
          "example": "// Sanity check: validate input",
          "category": "notes"
        }
      ]
    },
    {
      "id": "daily-dev-phrases",
      "name": "Daily Dev Phrases",
      "nameCN": "日常开发用语",
      "description": "Common phrases used in daily development communication",
      "items": [
        {
          "id": "d001",
          "english": "It works on my machine",
          "chinese": "在我机器上能跑",
          "pronunciation": "/ɪt wɜːrks ɒn maɪ məˈʃiːn/",
          "example": "Developer: It works on my machine!",
          "category": "debugging"
        },
        {
          "id": "d002",
          "english": "Have you tried turning it off and on again?",
          "chinese": "你试过重启吗？",
          "pronunciation": "/hæv juː traɪd ˈtɜːrnɪŋ ɪt ɒf ænd ɒn əˈɡɛn/",
          "example": "Support: Have you tried turning it off and on again?",
          "category": "troubleshooting"
        },
        {
          "id": "d003",
          "english": "Let's push this to production",
          "chinese": "把这个推到生产环境",
          "pronunciation": "/lɛts pʊʃ ðɪs tuː prəˈdʌkʃən/",
          "example": "PM: Let's push this to production",
          "category": "deployment"
        },
        {
          "id": "d004",
          "english": "We need to rollback",
          "chinese": "我们需要回滚",
          "pronunciation": "/wiː niːd tuː ˈroʊlˌbæk/",
          "example": "DevOps: We need to rollback immediately!",
          "category": "deployment"
        },
        {
          "id": "d005",
          "english": "Can you review my PR?",
          "chinese": "能帮我审查PR吗？",
          "pronunciation": "/kæn juː rɪˈvjuː maɪ piː ɑːr/",
          "example": "Dev: Can you review my PR?",
          "category": "collaboration"
        },
        {
          "id": "d006",
          "english": "There's a merge conflict",
          "chinese": "有合并冲突",
          "pronunciation": "/ðɛrz ə mɜːrdʒ ˈkɒnflɪkt/",
          "example": "Git: There's a merge conflict in main.js",
          "category": "git"
        },
        {
          "id": "d007",
          "english": "The build is failing",
          "chinese": "构建失败了",
          "pronunciation": "/ðə bɪld ɪz ˈfeɪlɪŋ/",
          "example": "CI: The build is failing on step 3",
          "category": "ci-cd"
        },
        {
          "id": "d008",
          "english": "All tests pass",
          "chinese": "所有测试通过",
          "pronunciation": "/ɔːl tɛsts pɑːs/",
          "example": "CI: All tests pass! Ready to merge.",
          "category": "ci-cd"
        },
        {
          "id": "d009",
          "english": "This is a breaking change",
          "chinese": "这是一个破坏性变更",
          "pronunciation": "/ðɪs ɪz ə ˈbreɪkɪŋ tʃeɪndʒ/",
          "example": "Dev: This is a breaking change, update your code",
          "category": "versioning"
        },
        {
          "id": "d010",
          "english": "LGTM (Looks Good To Me)",
          "chinese": "看起来不错（我批准了）",
          "pronunciation": "/ˌɛl dʒiː tiː ˈɛm/",
          "example": "Reviewer: LGTM!",
          "category": "collaboration"
        },
        {
          "id": "d011",
          "english": "PTAL (Please Take A Look)",
          "chinese": "请看一下",
          "pronunciation": "/ˌpiː tiː eɪ ˈɛl/",
          "example": "Dev: PTAL at this change",
          "category": "collaboration"
        },
        {
          "id": "d012",
          "english": "WIP (Work In Progress)",
          "chinese": "进行中",
          "pronunciation": "/ˌdʌbəljuː aɪ ˈpiː/",
          "example": "PR title: WIP: Add authentication",
          "category": "collaboration"
        },
        {
          "id": "d013",
          "english": "I'll look into it",
          "chinese": "我会调查一下",
          "pronunciation": "/aɪl lʊk ˈɪntuː ɪt/",
          "example": "Dev: I'll look into this issue",
          "category": "communication"
        },
        {
          "id": "d014",
          "english": "It should be straightforward",
          "chinese": "这应该很简单",
          "pronunciation": "/ɪt ʃʊd biː ˌstreɪtˈfɔːrwərd/",
          "example": "Dev: It should be straightforward to implement",
          "category": "estimation"
        },
        {
          "id": "d015",
          "english": "That's not a bug, that's a feature",
          "chinese": "这不是bug，是特性",
          "pronunciation": "/ðæts nɒt ə bʌɡ ðæts ə ˈfiːtʃər/",
          "example": "Dev: That's not a bug, that's a feature!",
          "category": "humor"
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = computerEnglishData;
}
