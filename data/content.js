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
        },
        {
          "id": "t016",
          "english": "find",
          "chinese": "查找文件",
          "pronunciation": "/faɪnd/",
          "example": "find . -name '*.txt'",
          "category": "search"
        },
        {
          "id": "t017",
          "english": "locate",
          "chinese": "快速定位文件",
          "pronunciation": "/ˈloʊkeɪt/",
          "example": "locate filename",
          "category": "search"
        },
        {
          "id": "t018",
          "english": "which",
          "chinese": "查找命令位置",
          "pronunciation": "/wɪtʃ/",
          "example": "which python",
          "category": "search"
        },
        {
          "id": "t019",
          "english": "whereis",
          "chinese": "查找程序位置",
          "pronunciation": "/ˈwɛərɪz/",
          "example": "whereis java",
          "category": "search"
        },
        {
          "id": "t020",
          "english": "top",
          "chinese": "显示进程状态",
          "pronunciation": "/tɒp/",
          "example": "top -u username",
          "category": "process"
        },
        {
          "id": "t021",
          "english": "ps (process status)",
          "chinese": "查看进程",
          "pronunciation": "/piː ɛs/",
          "example": "ps aux | grep nginx",
          "category": "process"
        },
        {
          "id": "t022",
          "english": "kill",
          "chinese": "终止进程",
          "pronunciation": "/kɪl/",
          "example": "kill -9 PID",
          "category": "process"
        },
        {
          "id": "t023",
          "english": "pkill",
          "chinese": "按名称终止进程",
          "pronunciation": "/piː kɪl/",
          "example": "pkill -f process_name",
          "category": "process"
        },
        {
          "id": "t024",
          "english": "tar",
          "chinese": "归档工具",
          "pronunciation": "/tɑːr/",
          "example": "tar -czvf archive.tar.gz folder/",
          "category": "compression"
        },
        {
          "id": "t025",
          "english": "gzip",
          "chinese": "压缩文件",
          "pronunciation": "/dʒiː zɪp/",
          "example": "gzip file.txt",
          "category": "compression"
        },
        {
          "id": "t026",
          "english": "zip / unzip",
          "chinese": "ZIP压缩/解压",
          "pronunciation": "/zɪp / ʌnˈzɪp/",
          "example": "zip -r archive.zip folder/",
          "category": "compression"
        },
        {
          "id": "t027",
          "english": "ssh (Secure Shell)",
          "chinese": "安全远程登录",
          "pronunciation": "/ɛs ɛs eɪtʃ/",
          "example": "ssh user@hostname",
          "category": "network"
        },
        {
          "id": "t028",
          "english": "scp (secure copy)",
          "chinese": "安全复制文件",
          "pronunciation": "/ɛs siː piː/",
          "example": "scp file.txt user@host:/path/",
          "category": "network"
        },
        {
          "id": "t029",
          "english": "wget",
          "chinese": "下载文件",
          "pronunciation": "/dʌbəljuː ɡɛt/",
          "example": "wget https://example.com/file.zip",
          "category": "network"
        },
        {
          "id": "t030",
          "english": "curl",
          "chinese": "传输数据工具",
          "pronunciation": "/kɜːrl/",
          "example": "curl -O https://example.com/file",
          "category": "network"
        },
        {
          "id": "t031",
          "english": "df (disk free)",
          "chinese": "查看磁盘空间",
          "pronunciation": "/diː ɛf/",
          "example": "df -h",
          "category": "disk"
        },
        {
          "id": "t032",
          "english": "du (disk usage)",
          "chinese": "查看目录大小",
          "pronunciation": "/diː juː/",
          "example": "du -sh directory/",
          "category": "disk"
        },
        {
          "id": "t033",
          "english": "free",
          "chinese": "查看内存使用",
          "pronunciation": "/friː/",
          "example": "free -h",
          "category": "system"
        },
        {
          "id": "t034",
          "english": "uptime",
          "chinese": "查看系统运行时间",
          "pronunciation": "/ˈʌptaɪm/",
          "example": "uptime",
          "category": "system"
        },
        {
          "id": "t035",
          "english": "head",
          "chinese": "查看文件开头",
          "pronunciation": "/hɛd/",
          "example": "head -n 20 file.txt",
          "category": "viewing"
        },
        {
          "id": "t036",
          "english": "tail",
          "chinese": "查看文件末尾",
          "pronunciation": "/teɪl/",
          "example": "tail -f log.txt",
          "category": "viewing"
        },
        {
          "id": "t037",
          "english": "less",
          "chinese": "分页查看文件",
          "pronunciation": "/lɛs/",
          "example": "less largefile.txt",
          "category": "viewing"
        },
        {
          "id": "t038",
          "english": "more",
          "chinese": "分页查看（简化版）",
          "pronunciation": "/mɔːr/",
          "example": "more file.txt",
          "category": "viewing"
        },
        {
          "id": "t039",
          "english": "wc (word count)",
          "chinese": "统计行数/字数",
          "pronunciation": "/dʌbəljuː siː/",
          "example": "wc -l file.txt",
          "category": "text-processing"
        },
        {
          "id": "t040",
          "english": "sort",
          "chinese": "排序",
          "pronunciation": "/sɔːrt/",
          "example": "sort -n numbers.txt",
          "category": "text-processing"
        },
        {
          "id": "t041",
          "english": "uniq",
          "chinese": "去重",
          "pronunciation": "/juːˈniːk/",
          "example": "sort file.txt | uniq",
          "category": "text-processing"
        },
        {
          "id": "t042",
          "english": "diff",
          "chinese": "比较文件差异",
          "pronunciation": "/dɪf/",
          "example": "diff file1.txt file2.txt",
          "category": "text-processing"
        },
        {
          "id": "t043",
          "english": "alias",
          "chinese": "设置命令别名",
          "pronunciation": "/ˈeɪliəs/",
          "example": "alias ll='ls -la'",
          "category": "shell"
        },
        {
          "id": "t044",
          "english": "export",
          "chinese": "设置环境变量",
          "pronunciation": "/ˈɛkspɔːrt/",
          "example": "export PATH=$PATH:/new/path",
          "category": "shell"
        },
        {
          "id": "t045",
          "english": "source",
          "chinese": "执行脚本（当前shell）",
          "pronunciation": "/sɔːrs/",
          "example": "source ~/.bashrc",
          "category": "shell"
        },
        {
          "id": "t046",
          "english": "man",
          "chinese": "查看手册页",
          "pronunciation": "/mæn/",
          "example": "man ls",
          "category": "documentation"
        },
        {
          "id": "t047",
          "english": "history",
          "chinese": "查看命令历史",
          "pronunciation": "/ˈhɪstəri/",
          "example": "history | grep ssh",
          "category": "shell"
        },
        {
          "id": "t048",
          "english": "clear",
          "chinese": "清屏",
          "pronunciation": "/klɪər/",
          "example": "clear",
          "category": "shell"
        },
        {
          "id": "t049",
          "english": "exit",
          "chinese": "退出",
          "pronunciation": "/ˈɛksɪt/",
          "example": "exit",
          "category": "shell"
        },
        {
          "id": "t050",
          "english": "whoami",
          "chinese": "显示当前用户",
          "pronunciation": "/huːˈɑːmiː/",
          "example": "whoami",
          "category": "system"
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
        },
        {
          "id": "g016",
          "english": "git fetch",
          "chinese": "获取远程更新",
          "pronunciation": "/ɡɪt fɛtʃ/",
          "example": "git fetch origin",
          "category": "remote"
        },
        {
          "id": "g017",
          "english": "git diff",
          "chinese": "查看差异",
          "pronunciation": "/ɡɪt dɪf/",
          "example": "git diff HEAD~1",
          "category": "status"
        },
        {
          "id": "g018",
          "english": "git reset",
          "chinese": "重置到指定版本",
          "pronunciation": "/ɡɪt ˈrɛsɛt/",
          "example": "git reset --hard HEAD~1",
          "category": "history"
        },
        {
          "id": "g019",
          "english": "git revert",
          "chinese": "撤销提交（创建新提交）",
          "pronunciation": "/ɡɪt rɪˈvɜːrt/",
          "example": "git revert HEAD",
          "category": "history"
        },
        {
          "id": "g020",
          "english": "git cherry-pick",
          "chinese": "拣选提交",
          "pronunciation": "/ɡɪt ˈtʃɛri pɪk/",
          "example": "git cherry-pick abc123",
          "category": "advanced"
        },
        {
          "id": "g021",
          "english": "git tag",
          "chinese": "标签管理",
          "pronunciation": "/ɡɪt tæɡ/",
          "example": "git tag -a v1.0 -m 'Version 1.0'",
          "category": "versioning"
        },
        {
          "id": "g022",
          "english": "git submodule",
          "chinese": "子模块",
          "pronunciation": "/ɡɪt ˈsʌbˌmɒdjuːl/",
          "example": "git submodule update --init",
          "category": "advanced"
        },
        {
          "id": "g023",
          "english": "git bisect",
          "chinese": "二分查找问题提交",
          "pronunciation": "/ɡɪt ˈbaɪsɛkt/",
          "example": "git bisect start",
          "category": "debugging"
        },
        {
          "id": "g024",
          "english": "git blame",
          "chinese": "查看行级提交信息",
          "pronunciation": "/ɡɪt bleɪm/",
          "example": "git blame filename",
          "category": "debugging"
        },
        {
          "id": "g025",
          "english": "git reflog",
          "chinese": "查看引用日志",
          "pronunciation": "/ɡɪt ˈrɛflɒɡ/",
          "example": "git reflog",
          "category": "history"
        },
        {
          "id": "g026",
          "english": "git clean",
          "chinese": "清理未跟踪文件",
          "pronunciation": "/ɡɪt kliːn/",
          "example": "git clean -fd",
          "category": "maintenance"
        },
        {
          "id": "g027",
          "english": "git archive",
          "chinese": "归档导出",
          "pronunciation": "/ɡɪt ˈɑːrkaɪv/",
          "example": "git archive --format=tar HEAD",
          "category": "export"
        },
        {
          "id": "g028",
          "english": "git notes",
          "chinese": "为提交添加注释",
          "pronunciation": "/ɡɪt noʊts/",
          "example": "git notes add -m 'Note' HEAD",
          "category": "advanced"
        },
        {
          "id": "g029",
          "english": "git worktree",
          "chinese": "多工作树",
          "pronunciation": "/ɡɪt ˈwɜːrktriː/",
          "example": "git worktree add ../branch folder",
          "category": "advanced"
        },
        {
          "id": "g030",
          "english": "git config",
          "chinese": "配置Git",
          "pronunciation": "/ɡɪt ˈkɒnfɪɡ/",
          "example": "git config --global user.name 'Name'",
          "category": "configuration"
        },
        {
          "id": "g031",
          "english": "gitignore",
          "chinese": "忽略文件配置",
          "pronunciation": "/ɡɪt ɪɡˈnɔːr/",
          "example": "Add patterns to .gitignore",
          "category": "configuration"
        },
        {
          "id": "g032",
          "english": "git hooks",
          "chinese": "Git钩子",
          "pronunciation": "/ɡɪt hʊks/",
          "example": "Configure pre-commit hook",
          "category": "automation"
        },
        {
          "id": "g033",
          "english": "git describe",
          "chinese": "描述版本",
          "pronunciation": "/ɡɪt dɪˈskraɪb/",
          "example": "git describe --tags",
          "category": "versioning"
        },
        {
          "id": "g034",
          "english": "git shortlog",
          "chinese": "提交统计摘要",
          "pronunciation": "/ɡɪt ˈʃɔːrtlɒɡ/",
          "example": "git shortlog -sn",
          "category": "statistics"
        },
        {
          "id": "g035",
          "english": "git show",
          "chinese": "显示提交详情",
          "pronunciation": "/ɡɪt ʃoʊ/",
          "example": "git show HEAD",
          "category": "history"
        },
        {
          "id": "g036",
          "english": "git rm",
          "chinese": "删除文件并暂存",
          "pronunciation": "/ɡɪt ɑːr ɛm/",
          "example": "git rm filename",
          "category": "staging"
        },
        {
          "id": "g037",
          "english": "git mv",
          "chinese": "移动/重命名文件",
          "pronunciation": "/ɡɪt ɛm viː/",
          "example": "git mv old.txt new.txt",
          "category": "staging"
        },
        {
          "id": "g038",
          "english": "git am",
          "chinese": "应用补丁",
          "pronunciation": "/ɡɪt eɪ ɛm/",
          "example": "git am < patch.txt",
          "category": "patch"
        },
        {
          "id": "g039",
          "english": "git format-patch",
          "chinese": "生成补丁",
          "pronunciation": "/ɡɪt ˈfɔːrmæt pætʃ/",
          "example": "git format-patch HEAD~3",
          "category": "patch"
        },
        {
          "id": "g040",
          "english": "git apply",
          "chinese": "应用补丁",
          "pronunciation": "/ɡɪt əˈplaɪ/",
          "example": "git apply patch.diff",
          "category": "patch"
        },
        {
          "id": "g041",
          "english": "git bundle",
          "chinese": "打包仓库",
          "pronunciation": "/ɡɪt ˈbʌndl/",
          "example": "git bundle create repo.bundle HEAD",
          "category": "export"
        },
        {
          "id": "g042",
          "english": "git sparse-checkout",
          "chinese": "稀疏检出",
          "pronunciation": "/ɡɪt spɑːrs ˈtʃɛkaʊt/",
          "example": "git sparse-checkout init",
          "category": "advanced"
        },
        {
          "id": "g043",
          "english": "git maintenance",
          "chinese": "仓库维护",
          "pronunciation": "/ɡɪt ˈmeɪntənəns/",
          "example": "git maintenance start",
          "category": "maintenance"
        },
        {
          "id": "g044",
          "english": "git restore",
          "chinese": "恢复文件",
          "pronunciation": "/ɡɪt rɪˈstɔːr/",
          "example": "git restore filename",
          "category": "workflow"
        },
        {
          "id": "g045",
          "english": "git switch",
          "chinese": "切换分支（新命令）",
          "pronunciation": "/ɡɪt swɪtʃ/",
          "example": "git switch main",
          "category": "branching"
        },
        {
          "id": "g046",
          "english": "Fast-forward",
          "chinese": "快进合并",
          "pronunciation": "/fɑːst ˈfɔːrwərd/",
          "example": "Fast-forward merge",
          "category": "branching"
        },
        {
          "id": "g047",
          "english": "HEAD",
          "chinese": "当前分支最新提交",
          "pronunciation": "/hɛd/",
          "example": "Reset to HEAD",
          "category": "concepts"
        },
        {
          "id": "g048",
          "english": "Detached HEAD",
          "chinese": "分离头指针",
          "pronunciation": "/dɪˈtætʃt hɛd/",
          "example": "You are in detached HEAD state",
          "category": "concepts"
        },
        {
          "id": "g049",
          "english": "Index / Staging area",
          "chinese": "暂存区/索引",
          "pronunciation": "/ˈɪndɛks / ˈsteɪdʒɪŋ ˈɛəriə/",
          "example": "Add files to the index",
          "category": "concepts"
        },
        {
          "id": "g050",
          "english": "origin",
          "chinese": "默认远程仓库名",
          "pronunciation": "/ˈɒrɪdʒɪn/",
          "example": "git push origin main",
          "category": "concepts"
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
        },
        {
          "id": "e016",
          "english": "Bad gateway",
          "chinese": "网关错误",
          "pronunciation": "/bæd ˈɡeɪtweɪ/",
          "example": "502 Bad Gateway",
          "category": "http"
        },
        {
          "id": "e017",
          "english": "Service unavailable",
          "chinese": "服务不可用",
          "pronunciation": "/ˈsɜːrvɪs ˌʌnəˈveɪləbl/",
          "example": "503 Service Unavailable",
          "category": "http"
        },
        {
          "id": "e018",
          "english": "Gateway timeout",
          "chinese": "网关超时",
          "pronunciation": "/ˈɡeɪtweɪ ˈtaɪmaʊt/",
          "example": "504 Gateway Timeout",
          "category": "http"
        },
        {
          "id": "e019",
          "english": "Internal server error",
          "chinese": "服务器内部错误",
          "pronunciation": "/ɪnˈtɜːrnl ˈsɜːrvər ˈɛrər/",
          "example": "500 Internal Server Error",
          "category": "http"
        },
        {
          "id": "e020",
          "english": "Not implemented",
          "chinese": "未实现",
          "pronunciation": "/nɒt ˈɪmplɪmɛntɪd/",
          "example": "501 Not Implemented",
          "category": "http"
        },
        {
          "id": "e021",
          "english": "Method not allowed",
          "chinese": "方法不被允许",
          "pronunciation": "/ˈmɛθəd nɒt əˈlaʊd/",
          "example": "405 Method Not Allowed",
          "category": "http"
        },
        {
          "id": "e022",
          "english": "Not acceptable",
          "chinese": "不接受",
          "pronunciation": "/nɒt ækˈsɛptəbl/",
          "example": "406 Not Acceptable",
          "category": "http"
        },
        {
          "id": "e023",
          "english": "Request entity too large",
          "chinese": "请求实体过大",
          "pronunciation": "/rɪˈkwɛst ˈɛntɪti tuː lɑːrdʒ/",
          "example": "413 Request Entity Too Large",
          "category": "http"
        },
        {
          "id": "e024",
          "english": "Too many requests",
          "chinese": "请求过多",
          "pronunciation": "/tuː ˈmɛni rɪˈkwɛsts/",
          "example": "429 Too Many Requests",
          "category": "http"
        },
        {
          "id": "e025",
          "english": "SSL certificate error",
          "chinese": "SSL证书错误",
          "pronunciation": "/ɛs ɛs ɛl sərˈtɪfɪkət ˈɛrər/",
          "example": "SSL certificate verification failed",
          "category": "security"
        },
        {
          "id": "e026",
          "english": "Host not found",
          "chinese": "主机未找到",
          "pronunciation": "/hoʊst nɒt faʊnd/",
          "example": "Host not found: unknown host",
          "category": "network"
        },
        {
          "id": "e027",
          "english": "Network unreachable",
          "chinese": "网络不可达",
          "pronunciation": "/ˈnɛtwɜːrk ʌnˈriːtʃəbl/",
          "example": "Network is unreachable",
          "category": "network"
        },
        {
          "id": "e028",
          "english": "Broken pipe",
          "chinese": "管道破裂",
          "pronunciation": "/ˈbroʊkən paɪp/",
          "example": "write error: Broken pipe",
          "category": "io"
        },
        {
          "id": "e029",
          "english": "Input/output error",
          "chinese": "输入输出错误",
          "pronunciation": "/ˈɪnpʊt ˈaʊtpʊt ˈɛrər/",
          "example": "I/O error reading file",
          "category": "io"
        },
        {
          "id": "e030",
          "english": "Device or resource busy",
          "chinese": "设备或资源忙",
          "pronunciation": "/dɪˈvaɪs ɔːr ˈriːsɔːrs ˈbɪzi/",
          "example": "Device or resource busy",
          "category": "system"
        },
        {
          "id": "e031",
          "english": "Read-only file system",
          "chinese": "只读文件系统",
          "pronunciation": "/riːd ˈoʊnli faɪl ˈsɪstəm/",
          "example": "Read-only file system",
          "category": "system"
        },
        {
          "id": "e032",
          "english": "Too many open files",
          "chinese": "打开文件过多",
          "pronunciation": "/tuː ˈmɛni ˈoʊpən faɪlz/",
          "example": "Too many open files",
          "category": "system"
        },
        {
          "id": "e033",
          "english": "Invalid argument",
          "chinese": "无效参数",
          "pronunciation": "/ɪnˈvælɪd ˈɑːrɡjumənt/",
          "example": "Invalid argument supplied",
          "category": "compilation"
        },
        {
          "id": "e034",
          "english": "Floating point exception",
          "chinese": "浮点运算异常",
          "pronunciation": "/ˈfloʊtɪŋ pɔɪnt ɪkˈsɛpʃən/",
          "example": "Floating point exception (core dumped)",
          "category": "runtime"
        },
        {
          "id": "e035",
          "english": "Bus error",
          "chinese": "总线错误",
          "pronunciation": "/bʌs ˈɛrər/",
          "example": "Bus error (core dumped)",
          "category": "runtime"
        },
        {
          "id": "e036",
          "english": "Illegal instruction",
          "chinese": "非法指令",
          "pronunciation": "/ɪˈliːɡəl ɪnˈstrʌkʃən/",
          "example": "Illegal instruction (core dumped)",
          "category": "runtime"
        },
        {
          "id": "e037",
          "english": "Core dumped",
          "chinese": "核心转储",
          "pronunciation": "/kɔːr dʌmpt/",
          "example": "Segmentation fault (core dumped)",
          "category": "runtime"
        },
        {
          "id": "e038",
          "english": "Cannot allocate memory",
          "chinese": "无法分配内存",
          "pronunciation": "/kæˈnɒt ˈæləkeɪt ˈmɛməri/",
          "example": "Cannot allocate memory",
          "category": "runtime"
        },
        {
          "id": "e039",
          "english": "Module not found",
          "chinese": "模块未找到",
          "pronunciation": "/ˈmɒdjuːl nɒt faʊnd/",
          "example": "Error: Module not found: './module'",
          "category": "compilation"
        },
        {
          "id": "e040",
          "english": "Import error",
          "chinese": "导入错误",
          "pronunciation": "/ˈɪmpɔːrt ˈɛrər/",
          "example": "ImportError: No module named 'xxx'",
          "category": "compilation"
        },
        {
          "id": "e041",
          "english": "Type error",
          "chinese": "类型错误",
          "pronunciation": "/taɪp ˈɛrər/",
          "example": "TypeError: Cannot read property of undefined",
          "category": "compilation"
        },
        {
          "id": "e042",
          "english": "Reference error",
          "chinese": "引用错误",
          "pronunciation": "/ˈrɛfrəns ˈɛrər/",
          "example": "ReferenceError: x is not defined",
          "category": "compilation"
        },
        {
          "id": "e043",
          "english": "Range error",
          "chinese": "范围错误",
          "pronunciation": "/reɪndʒ ˈɛrər/",
          "example": "RangeError: Maximum call stack exceeded",
          "category": "runtime"
        },
        {
          "id": "e044",
          "english": "Unhandled exception",
          "chinese": "未处理的异常",
          "pronunciation": "/ʌnˈhændld ɪkˈsɛpʃən/",
          "example": "Unhandled exception occurred",
          "category": "runtime"
        },
        {
          "id": "e045",
          "english": "Assertion failed",
          "chinese": "断言失败",
          "pronunciation": "/əˈsɜːrʃən feɪld/",
          "example": "Assertion failed: condition is false",
          "category": "testing"
        },
        {
          "id": "e046",
          "english": "Dependency not found",
          "chinese": "依赖未找到",
          "pronunciation": "/dɪˈpɛndənsi nɒt faʊnd/",
          "example": "Dependency not found: package@version",
          "category": "compilation"
        },
        {
          "id": "e047",
          "english": "Version mismatch",
          "chinese": "版本不匹配",
          "pronunciation": "/ˈvɜːrʒən mɪsˈmætʃ/",
          "example": "Version mismatch: expected v2, got v1",
          "category": "compilation"
        },
        {
          "id": "e048",
          "english": "Circular dependency",
          "chinese": "循环依赖",
          "pronunciation": "/ˈsɜːrkjələr dɪˈpɛndənsi/",
          "example": "Circular dependency detected",
          "category": "compilation"
        },
        {
          "id": "e049",
          "english": "Deadlock",
          "chinese": "死锁",
          "pronunciation": "/ˈdɛdlɒk/",
          "example": "Deadlock detected in thread pool",
          "category": "runtime"
        },
        {
          "id": "e050",
          "english": "Race condition",
          "chinese": "竞态条件",
          "pronunciation": "/reɪs kənˈdɪʃən/",
          "example": "Race condition in concurrent access",
          "category": "runtime"
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
        },
        {
          "id": "p016",
          "english": "Compile",
          "chinese": "编译",
          "pronunciation": "/kəmˈpaɪl/",
          "example": "Compile the source code",
          "category": "development"
        },
        {
          "id": "p017",
          "english": "Runtime",
          "chinese": "运行时",
          "pronunciation": "/ˈrʌntaɪm/",
          "example": "Error occurred at runtime",
          "category": "basics"
        },
        {
          "id": "p018",
          "english": "Syntax",
          "chinese": "语法",
          "pronunciation": "/ˈsɪntæks/",
          "example": "Check the syntax of the code",
          "category": "basics"
        },
        {
          "id": "p019",
          "english": "Loop",
          "chinese": "循环",
          "pronunciation": "/luːp/",
          "example": "Use a for loop to iterate",
          "category": "basics"
        },
        {
          "id": "p020",
          "english": "Condition",
          "chinese": "条件",
          "pronunciation": "/kənˈdɪʃən/",
          "example": "Check the condition first",
          "category": "basics"
        },
        {
          "id": "p021",
          "english": "Exception",
          "chinese": "异常",
          "pronunciation": "/ɪkˈsɛpʃən/",
          "example": "Throw an exception",
          "category": "basics"
        },
        {
          "id": "p022",
          "english": "Iterate",
          "chinese": "迭代",
          "pronunciation": "/ˈɪtəreɪt/",
          "example": "Iterate over the collection",
          "category": "basics"
        },
        {
          "id": "p023",
          "english": "List",
          "chinese": "列表",
          "pronunciation": "/lɪst/",
          "example": "Create a list of items",
          "category": "data-structures"
        },
        {
          "id": "p024",
          "english": "Map",
          "chinese": "映射/字典",
          "pronunciation": "/mæp/",
          "example": "Use a map for key-value pairs",
          "category": "data-structures"
        },
        {
          "id": "p025",
          "english": "Set",
          "chinese": "集合",
          "pronunciation": "/sɛt/",
          "example": "Store unique items in a set",
          "category": "data-structures"
        },
        {
          "id": "p026",
          "english": "Tuple",
          "chinese": "元组",
          "pronunciation": "/ˈtʌpəl/",
          "example": "Return multiple values as a tuple",
          "category": "data-structures"
        },
        {
          "id": "p027",
          "english": "Stack Overflow",
          "chinese": "栈溢出",
          "pronunciation": "/stæk ˈoʊvərˌfloʊ/",
          "example": "Stack overflow in recursion",
          "category": "basics"
        },
        {
          "id": "p028",
          "english": "Heap",
          "chinese": "堆",
          "pronunciation": "/hiːp/",
          "example": "Objects are stored on the heap",
          "category": "memory"
        },
        {
          "id": "p029",
          "english": "Pointer",
          "chinese": "指针",
          "pronunciation": "/ˈpɔɪntər/",
          "example": "Dereference the pointer",
          "category": "memory"
        },
        {
          "id": "p030",
          "english": "Reference",
          "chinese": "引用",
          "pronunciation": "/ˈrɛfrəns/",
          "example": "Pass by reference",
          "category": "memory"
        },
        {
          "id": "p031",
          "english": "Value",
          "chinese": "值",
          "pronunciation": "/ˈvæljuː/",
          "example": "Pass by value",
          "category": "basics"
        },
        {
          "id": "p032",
          "english": "Scope",
          "chinese": "作用域",
          "pronunciation": "/skoʊp/",
          "example": "Variable scope is limited",
          "category": "basics"
        },
        {
          "id": "p033",
          "english": "Namespace",
          "chinese": "命名空间",
          "pronunciation": "/ˈneɪmspɛɪs/",
          "example": "Organize code in namespaces",
          "category": "basics"
        },
        {
          "id": "p034",
          "english": "Module",
          "chinese": "模块",
          "pronunciation": "/ˈmɒdjuːl/",
          "example": "Import the module",
          "category": "basics"
        },
        {
          "id": "p035",
          "english": "Import",
          "chinese": "导入",
          "pronunciation": "/ˈɪmpɔːrt/",
          "example": "Import the library",
          "category": "basics"
        },
        {
          "id": "p036",
          "english": "Export",
          "chinese": "导出",
          "pronunciation": "/ˈɛkspɔːrt/",
          "example": "Export the function",
          "category": "basics"
        },
        {
          "id": "p037",
          "english": "Generic",
          "chinese": "泛型",
          "pronunciation": "/dʒəˈnɛrɪk/",
          "example": "Define a generic type",
          "category": "oop"
        },
        {
          "id": "p038",
          "english": "Enum",
          "chinese": "枚举",
          "pronunciation": "/ˈiːnʌm/",
          "example": "Define an enum type",
          "category": "oop"
        },
        {
          "id": "p039",
          "english": "Struct",
          "chinese": "结构体",
          "pronunciation": "/strʌkt/",
          "example": "Define a struct",
          "category": "oop"
        },
        {
          "id": "p040",
          "english": "Polymorphism",
          "chinese": "多态",
          "pronunciation": "/ˌpɒliˈmɔːrfɪzəm/",
          "example": "Achieve polymorphism with inheritance",
          "category": "oop"
        },
        {
          "id": "p041",
          "english": "Encapsulation",
          "chinese": "封装",
          "pronunciation": "/ɪnˌkæpsjuˈleɪʃən/",
          "example": "Use encapsulation to hide details",
          "category": "oop"
        },
        {
          "id": "p042",
          "english": "Abstraction",
          "chinese": "抽象",
          "pronunciation": "/æbˈstrækʃən/",
          "example": "Apply abstraction to simplify",
          "category": "oop"
        },
        {
          "id": "p043",
          "english": "Singleton",
          "chinese": "单例模式",
          "pronunciation": "/ˈsɪŋɡltən/",
          "example": "Implement singleton pattern",
          "category": "patterns"
        },
        {
          "id": "p044",
          "english": "Factory",
          "chinese": "工厂模式",
          "pronunciation": "/ˈfæktəri/",
          "example": "Use factory pattern to create objects",
          "category": "patterns"
        },
        {
          "id": "p045",
          "english": "Observer",
          "chinese": "观察者模式",
          "pronunciation": "/əbˈzɜːrvər/",
          "example": "Implement observer pattern",
          "category": "patterns"
        },
        {
          "id": "p046",
          "english": "Decorator",
          "chinese": "装饰器模式",
          "pronunciation": "/ˈdɛkəreɪtər/",
          "example": "Apply decorator pattern",
          "category": "patterns"
        },
        {
          "id": "p047",
          "english": "Iterator",
          "chinese": "迭代器",
          "pronunciation": "/ˈɪtəreɪtər/",
          "example": "Use iterator to traverse",
          "category": "patterns"
        },
        {
          "id": "p048",
          "english": "Stream",
          "chinese": "流",
          "pronunciation": "/striːm/",
          "example": "Process data as a stream",
          "category": "io"
        },
        {
          "id": "p049",
          "english": "Buffer",
          "chinese": "缓冲区",
          "pronunciation": "/ˈbʌfər/",
          "example": "Write to the buffer",
          "category": "io"
        },
        {
          "id": "p050",
          "english": "Semaphore",
          "chinese": "信号量",
          "pronunciation": "/ˈsɛməfɔːr/",
          "example": "Use semaphore for synchronization",
          "category": "concurrency"
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
        },
        {
          "id": "s016",
          "english": "Fork",
          "chinese": "创建子进程",
          "pronunciation": "/fɔːrk/",
          "example": "The process forks a child process",
          "category": "processes"
        },
        {
          "id": "s017",
          "english": "Zombie Process",
          "chinese": "僵尸进程",
          "pronunciation": "/ˈzɒmbi ˈprɒsɛs/",
          "example": "Kill the zombie processes",
          "category": "processes"
        },
        {
          "id": "s018",
          "english": "Orphan Process",
          "chinese": "孤儿进程",
          "pronunciation": "/ˈɔːrfən ˈprɒsɛs/",
          "example": "The orphan process is adopted by init",
          "category": "processes"
        },
        {
          "id": "s019",
          "english": "Virtual Memory",
          "chinese": "虚拟内存",
          "pronunciation": "/ˈvɜːrtʃuəl ˈmɛməri/",
          "example": "The system uses virtual memory",
          "category": "memory"
        },
        {
          "id": "s020",
          "english": "Swap",
          "chinese": "交换分区/内存交换",
          "pronunciation": "/swɒp/",
          "example": "The system is swapping to disk",
          "category": "memory"
        },
        {
          "id": "s021",
          "english": "Page Fault",
          "chinese": "页错误",
          "pronunciation": "/peɪdʒ fɒlt/",
          "example": "High page fault rate indicates memory pressure",
          "category": "memory"
        },
        {
          "id": "s022",
          "english": "Cache",
          "chinese": "缓存",
          "pronunciation": "/kæʃ/",
          "example": "Clear the DNS cache",
          "category": "memory"
        },
        {
          "id": "s023",
          "english": "Inode",
          "chinese": "索引节点",
          "pronunciation": "/ˈaɪnoʊd/",
          "example": "Check inode usage with df -i",
          "category": "storage"
        },
        {
          "id": "s024",
          "english": "Partition",
          "chinese": "分区",
          "pronunciation": "/pɑːrˈtɪʃn/",
          "example": "Create a new disk partition",
          "category": "storage"
        },
        {
          "id": "s025",
          "english": "Symlink",
          "chinese": "符号链接",
          "pronunciation": "/ˈsɪmlɪŋk/",
          "example": "Create a symbolic link",
          "category": "storage"
        },
        {
          "id": "s026",
          "english": "Pipe",
          "chinese": "管道",
          "pronunciation": "/paɪp/",
          "example": "Use pipe to chain commands",
          "category": "io"
        },
        {
          "id": "s027",
          "english": "Redirect",
          "chinese": "重定向",
          "pronunciation": "/ˌriːdəˈrɛkt/",
          "example": "Redirect output to a file",
          "category": "io"
        },
        {
          "id": "s028",
          "english": "Crontab",
          "chinese": "定时任务表",
          "pronunciation": "/ˈkrɒntæb/",
          "example": "Edit the crontab to schedule tasks",
          "category": "scheduling"
        },
        {
          "id": "s029",
          "english": "Systemd",
          "chinese": "系统和服务管理器",
          "pronunciation": "/ˈsɪstəmdiː/",
          "example": "Use systemd to manage services",
          "category": "services"
        },
        {
          "id": "s030",
          "english": "Service",
          "chinese": "服务",
          "pronunciation": "/ˈsɜːrvɪs/",
          "example": "Restart the nginx service",
          "category": "services"
        },
        {
          "id": "s031",
          "english": "Package Manager",
          "chinese": "包管理器",
          "pronunciation": "/ˈpækɪdʒ ˈmænɪdʒər/",
          "example": "Use apt package manager",
          "category": "package"
        },
        {
          "id": "s032",
          "english": "Repository",
          "chinese": "软件源/仓库",
          "pronunciation": "/rɪˈpɒzɪtɔːri/",
          "example": "Add the official repository",
          "category": "package"
        },
        {
          "id": "s033",
          "english": "PID",
          "chinese": "进程ID",
          "pronunciation": "/piː aɪ diː/",
          "example": "Find the process by PID",
          "category": "processes"
        },
        {
          "id": "s034",
          "english": "Load Average",
          "chinese": "平均负载",
          "pronunciation": "/loʊd ˈævərɪdʒ/",
          "example": "Check system load average with uptime",
          "category": "monitoring"
        },
        {
          "id": "s035",
          "english": "CPU Usage",
          "chinese": "CPU使用率",
          "pronunciation": "/siː piː juː ˈjuːsɪdʒ/",
          "example": "Monitor CPU usage with top",
          "category": "monitoring"
        },
        {
          "id": "s036",
          "english": "Memory Leak",
          "chinese": "内存泄漏",
          "pronunciation": "/ˈmɛməri liːk/",
          "example": "Detect and fix memory leaks",
          "category": "memory"
        },
        {
          "id": "s037",
          "english": "Disk I/O",
          "chinese": "磁盘输入输出",
          "pronunciation": "/dɪsk aɪ oʊ/",
          "example": "High disk I/O affects performance",
          "category": "monitoring"
        },
        {
          "id": "s038",
          "english": "Throughput",
          "chinese": "吞吐量",
          "pronunciation": "/ˈθruːpʊt/",
          "example": "Measure network throughput",
          "category": "performance"
        },
        {
          "id": "s039",
          "english": "Latency",
          "chinese": "延迟",
          "pronunciation": "/ˈleɪtənsi/",
          "example": "Reduce system latency",
          "category": "performance"
        },
        {
          "id": "s040",
          "english": "Context Switch",
          "chinese": "上下文切换",
          "pronunciation": "/ˈkɒntɛkst swɪtʃ/",
          "example": "High context switch rate",
          "category": "processes"
        },
        {
          "id": "s041",
          "english": "Interrupt",
          "chinese": "中断",
          "pronunciation": "/ˈɪntərʌpt/",
          "example": "Hardware interrupt handling",
          "category": "hardware"
        },
        {
          "id": "s042",
          "english": "SELinux",
          "chinese": "安全增强Linux",
          "pronunciation": "/ɛs iː lɪˈnʌks/",
          "example": "Configure SELinux policies",
          "category": "security"
        },
        {
          "id": "s043",
          "english": "Firewall",
          "chinese": "防火墙",
          "pronunciation": "/ˈfaɪərwɔːl/",
          "example": "Configure iptables firewall",
          "category": "security"
        },
        {
          "id": "s044",
          "english": "Kernel Panic",
          "chinese": "内核崩溃",
          "pronunciation": "/ˈkɜːrnl ˈpænɪk/",
          "example": "System encountered kernel panic",
          "category": "os"
        },
        {
          "id": "s045",
          "english": "Bootloader",
          "chinese": "引导加载程序",
          "pronunciation": "/ˈbuːtˌloʊdər/",
          "example": "GRUB is a common bootloader",
          "category": "os"
        },
        {
          "id": "s046",
          "english": "Initramfs",
          "chinese": "初始化内存文件系统",
          "pronunciation": "/ˈɪnɪtræmfs/",
          "example": "The kernel loads initramfs",
          "category": "os"
        },
        {
          "id": "s047",
          "english": "Runlevel",
          "chinese": "运行级别",
          "pronunciation": "/ˈrʌnlɛvəl/",
          "example": "Change to runlevel 3",
          "category": "os"
        },
        {
          "id": "s048",
          "english": "System Call",
          "chinese": "系统调用",
          "pronunciation": "/ˈsɪstəm kɔːl/",
          "example": "The program makes a system call",
          "category": "os"
        },
        {
          "id": "s049",
          "english": "Library",
          "chinese": "库/函数库",
          "pronunciation": "/ˈlaɪbrɛri/",
          "example": "Link against the system library",
          "category": "development"
        },
        {
          "id": "s050",
          "english": "Dependency",
          "chinese": "依赖",
          "pronunciation": "/dɪˈpɛndənsi/",
          "example": "Install missing dependencies",
          "category": "development"
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
    },
    {
      "id": "docker-k8s",
      "name": "Docker & Kubernetes",
      "nameCN": "容器与K8s",
      "description": "Container and orchestration commands",
      "items": [
        {
          "id": "dk001",
          "english": "docker run",
          "chinese": "运行容器",
          "pronunciation": "/ˈdɒkər rʌn/",
          "example": "docker run -d -p 80:80 nginx",
          "category": "docker"
        },
        {
          "id": "dk002",
          "english": "docker build",
          "chinese": "构建镜像",
          "pronunciation": "/ˈdɒkər bɪld/",
          "example": "docker build -t myapp:latest .",
          "category": "docker"
        },
        {
          "id": "dk003",
          "english": "docker-compose",
          "chinese": "多容器编排工具",
          "pronunciation": "/ˈdɒkər ˈkɒmpoʊz/",
          "example": "docker-compose up -d",
          "category": "docker"
        },
        {
          "id": "dk004",
          "english": "docker pull",
          "chinese": "拉取镜像",
          "pronunciation": "/ˈdɒkər pʊl/",
          "example": "docker pull ubuntu:20.04",
          "category": "docker"
        },
        {
          "id": "dk005",
          "english": "docker ps",
          "chinese": "列出运行中的容器",
          "pronunciation": "/ˈdɒkər piː ɛs/",
          "example": "docker ps -a",
          "category": "docker"
        },
        {
          "id": "dk006",
          "english": "docker exec",
          "chinese": "在容器内执行命令",
          "pronunciation": "/ˈdɒkər ɪɡˈzɛk/",
          "example": "docker exec -it container_id bash",
          "category": "docker"
        },
        {
          "id": "dk007",
          "english": "docker logs",
          "chinese": "查看容器日志",
          "pronunciation": "/ˈdɒkər lɒɡz/",
          "example": "docker logs -f container_id",
          "category": "docker"
        },
        {
          "id": "dk008",
          "english": "Image",
          "chinese": "镜像",
          "pronunciation": "/ˈɪmɪdʒ/",
          "example": "Download the Docker image",
          "category": "docker"
        },
        {
          "id": "dk009",
          "english": "Container",
          "chinese": "容器",
          "pronunciation": "/kənˈteɪnər/",
          "example": "Start the container",
          "category": "docker"
        },
        {
          "id": "dk010",
          "english": "Volume",
          "chinese": "数据卷",
          "pronunciation": "/ˈvɒljuːm/",
          "example": "Mount a volume to persist data",
          "category": "docker"
        },
        {
          "id": "dk011",
          "english": "kubectl",
          "chinese": "Kubernetes命令行工具",
          "pronunciation": "/ˈkuːb siːtl/",
          "example": "kubectl get pods",
          "category": "kubernetes"
        },
        {
          "id": "dk012",
          "english": "Pod",
          "chinese": "K8s最小部署单元",
          "pronunciation": "/pɒd/",
          "example": "Create a new pod",
          "category": "kubernetes"
        },
        {
          "id": "dk013",
          "english": "Deployment",
          "chinese": "部署",
          "pronunciation": "/dɪˈplɔɪmənt/",
          "example": "kubectl apply -f deployment.yaml",
          "category": "kubernetes"
        },
        {
          "id": "dk014",
          "english": "Service",
          "chinese": "服务",
          "pronunciation": "/ˈsɜːrvɪs/",
          "example": "Expose the deployment as a service",
          "category": "kubernetes"
        },
        {
          "id": "dk015",
          "english": "Namespace",
          "chinese": "命名空间",
          "pronunciation": "/ˈneɪmspɛɪs/",
          "example": "kubectl get pods -n production",
          "category": "kubernetes"
        }
      ]
    },
    {
      "id": "database-sql",
      "name": "Database & SQL",
      "nameCN": "数据库与SQL",
      "description": "Database operations and SQL commands",
      "items": [
        {
          "id": "db001",
          "english": "SELECT",
          "chinese": "查询数据",
          "pronunciation": "/sɪˈlɛkt/",
          "example": "SELECT * FROM users WHERE id = 1",
          "category": "sql"
        },
        {
          "id": "db002",
          "english": "INSERT",
          "chinese": "插入数据",
          "pronunciation": "/ɪnˈsɜːrt/",
          "example": "INSERT INTO users (name, email) VALUES ('John', 'john@example.com')",
          "category": "sql"
        },
        {
          "id": "db003",
          "english": "UPDATE",
          "chinese": "更新数据",
          "pronunciation": "/ʌpˈdeɪt/",
          "example": "UPDATE users SET name = 'Jane' WHERE id = 1",
          "category": "sql"
        },
        {
          "id": "db004",
          "english": "DELETE",
          "chinese": "删除数据",
          "pronunciation": "/dɪˈliːt/",
          "example": "DELETE FROM users WHERE id = 1",
          "category": "sql"
        },
        {
          "id": "db005",
          "english": "JOIN",
          "chinese": "连接表",
          "pronunciation": "/dʒɔɪn/",
          "example": "SELECT * FROM users JOIN orders ON users.id = orders.user_id",
          "category": "sql"
        },
        {
          "id": "db006",
          "english": "INDEX",
          "chinese": "索引",
          "pronunciation": "/ˈɪndɛks/",
          "example": "CREATE INDEX idx_name ON users(name)",
          "category": "sql"
        },
        {
          "id": "db007",
          "english": "Primary Key",
          "chinese": "主键",
          "pronunciation": "/ˈpraɪmɛri kiː/",
          "example": "Define the primary key for the table",
          "category": "schema"
        },
        {
          "id": "db008",
          "english": "Foreign Key",
          "chinese": "外键",
          "pronunciation": "/ˈfɒrən kiː/",
          "example": "Set up foreign key constraints",
          "category": "schema"
        },
        {
          "id": "db009",
          "english": "Transaction",
          "chinese": "事务",
          "pronunciation": "/trænˈzækʃən/",
          "example": "BEGIN TRANSACTION; COMMIT; ROLLBACK;",
          "category": "operations"
        },
        {
          "id": "db010",
          "english": "Migration",
          "chinese": "数据库迁移",
          "pronunciation": "/maɪˈɡreɪʃən/",
          "example": "Run database migrations",
          "category": "operations"
        },
        {
          "id": "db011",
          "english": "Query",
          "chinese": "查询",
          "pronunciation": "/ˈkwɪəri/",
          "example": "Execute the SQL query",
          "category": "operations"
        },
        {
          "id": "db012",
          "english": "Schema",
          "chinese": "模式/结构",
          "pronunciation": "/ˈskiːmə/",
          "example": "Database schema design",
          "category": "schema"
        },
        {
          "id": "db013",
          "english": "Connection Pool",
          "chinese": "连接池",
          "pronunciation": "/kəˈnɛkʃən puːl/",
          "example": "Configure the connection pool size",
          "category": "performance"
        },
        {
          "id": "db014",
          "english": "ORM (Object-Relational Mapping)",
          "chinese": "对象关系映射",
          "pronunciation": "/oʊ ɑːr ɛm/",
          "example": "Use an ORM like Sequelize or Prisma",
          "category": "tools"
        },
        {
          "id": "db015",
          "english": "ACID",
          "chinese": "原子性一致性隔离性持久性",
          "pronunciation": "/ˈæsɪd/",
          "example": "Ensure ACID compliance",
          "category": "concepts"
        }
      ]
    },
    {
      "id": "algorithms",
      "name": "Algorithms & Data Structures",
      "nameCN": "算法与数据结构",
      "description": "Common algorithms and data structure terms",
      "items": [
        {
          "id": "alg001",
          "english": "Big O Notation",
          "chinese": "时间复杂度表示法",
          "pronunciation": "/bɪɡ oʊ noʊˈteɪʃən/",
          "example": "This algorithm has O(n log n) complexity",
          "category": "complexity"
        },
        {
          "id": "alg002",
          "english": "Time Complexity",
          "chinese": "时间复杂度",
          "pronunciation": "/taɪm kəmˈplɛksɪti/",
          "example": "Analyze the time complexity",
          "category": "complexity"
        },
        {
          "id": "alg003",
          "english": "Space Complexity",
          "chinese": "空间复杂度",
          "pronunciation": "/speɪs kəmˈplɛksɪti/",
          "example": "Optimize for space complexity",
          "category": "complexity"
        },
        {
          "id": "alg004",
          "english": "Binary Search",
          "chinese": "二分查找",
          "pronunciation": "/ˈbaɪnɛri sɜːrtʃ/",
          "example": "Implement binary search for sorted arrays",
          "category": "search"
        },
        {
          "id": "alg005",
          "english": "Recursion",
          "chinese": "递归",
          "pronunciation": "/rɪˈkɜːrʒən/",
          "example": "Use recursion to solve this problem",
          "category": "techniques"
        },
        {
          "id": "alg006",
          "english": "Dynamic Programming",
          "chinese": "动态规划",
          "pronunciation": "/daɪˈnæmɪk ˈproʊɡræmɪŋ/",
          "example": "Apply dynamic programming to optimize",
          "category": "techniques"
        },
        {
          "id": "alg007",
          "english": "Hash Table",
          "chinese": "哈希表",
          "pronunciation": "/hæʃ ˈteɪbl/",
          "example": "Store data in a hash table for O(1) lookup",
          "category": "structures"
        },
        {
          "id": "alg008",
          "english": "Linked List",
          "chinese": "链表",
          "pronunciation": "/lɪŋkt lɪst/",
          "example": "Traverse the linked list",
          "category": "structures"
        },
        {
          "id": "alg009",
          "english": "Stack",
          "chinese": "栈",
          "pronunciation": "/stæk/",
          "example": "Use a stack for LIFO operations",
          "category": "structures"
        },
        {
          "id": "alg010",
          "english": "Queue",
          "chinese": "队列",
          "pronunciation": "/kjuː/",
          "example": "Implement a queue for BFS",
          "category": "structures"
        },
        {
          "id": "alg011",
          "english": "Tree",
          "chinese": "树",
          "pronunciation": "/triː/",
          "example": "Binary tree traversal",
          "category": "structures"
        },
        {
          "id": "alg012",
          "english": "Graph",
          "chinese": "图",
          "pronunciation": "/ɡræf/",
          "example": "Represent the network as a graph",
          "category": "structures"
        },
        {
          "id": "alg013",
          "english": "Depth-First Search",
          "chinese": "深度优先搜索",
          "pronunciation": "/dɛpθ fɜːrst sɜːrtʃ/",
          "example": "Use DFS to explore the graph",
          "category": "search"
        },
        {
          "id": "alg014",
          "english": "Breadth-First Search",
          "chinese": "广度优先搜索",
          "pronunciation": "/brɛdθ fɜːrst sɜːrtʃ/",
          "example": "BFS finds shortest path in unweighted graphs",
          "category": "search"
        },
        {
          "id": "alg015",
          "english": "Sorting Algorithm",
          "chinese": "排序算法",
          "pronunciation": "/ˈsɔːrtɪŋ ˈælɡərɪðəm/",
          "example": "Quick sort and merge sort algorithms",
          "category": "algorithms"
        }
      ]
    },
    {
      "id": "networking",
      "name": "Networking & Protocols",
      "nameCN": "网络与协议",
      "description": "Network protocols and communication terms",
      "items": [
        {
          "id": "net001",
          "english": "HTTP (HyperText Transfer Protocol)",
          "chinese": "超文本传输协议",
          "pronunciation": "/eɪtʃ tiː tiː piː/",
          "example": "The browser sends an HTTP request",
          "category": "protocols"
        },
        {
          "id": "net002",
          "english": "HTTPS",
          "chinese": "安全超文本传输协议",
          "pronunciation": "/eɪtʃ tiː tiː piː ɛs/",
          "example": "Use HTTPS for secure connections",
          "category": "protocols"
        },
        {
          "id": "net003",
          "english": "TCP/IP",
          "chinese": "传输控制协议/网际协议",
          "pronunciation": "/tiː siː piː aɪ piː/",
          "example": "TCP/IP is the foundation of internet",
          "category": "protocols"
        },
        {
          "id": "net004",
          "english": "DNS (Domain Name System)",
          "chinese": "域名系统",
          "pronunciation": "/diː ɛn ɛs/",
          "example": "DNS resolves domain names to IP addresses",
          "category": "protocols"
        },
        {
          "id": "net005",
          "english": "SSL/TLS",
          "chinese": "安全套接层/传输层安全",
          "pronunciation": "/ɛs ɛs ɛl tiː ɛl ɛs/",
          "example": "Enable SSL/TLS encryption",
          "category": "security"
        },
        {
          "id": "net006",
          "english": "RESTful API",
          "chinese": "REST风格API",
          "pronunciation": "/ˈrɛstfʊl eɪ piː aɪ/",
          "example": "Design a RESTful API",
          "category": "architecture"
        },
        {
          "id": "net007",
          "english": "WebSocket",
          "chinese": "Web套接字",
          "pronunciation": "/ˈwɛb ˈsɒkɪt/",
          "example": "Use WebSocket for real-time communication",
          "category": "protocols"
        },
        {
          "id": "net008",
          "english": "Load Balancer",
          "chinese": "负载均衡器",
          "pronunciation": "/loʊd ˈbælənsər/",
          "example": "Configure the load balancer",
          "category": "infrastructure"
        },
        {
          "id": "net009",
          "english": "Proxy",
          "chinese": "代理",
          "pronunciation": "/ˈprɒksi/",
          "example": "Set up a reverse proxy",
          "category": "infrastructure"
        },
        {
          "id": "net010",
          "english": "CDN (Content Delivery Network)",
          "chinese": "内容分发网络",
          "pronunciation": "/siː diː ɛn/",
          "example": "Serve static assets via CDN",
          "category": "infrastructure"
        },
        {
          "id": "net011",
          "english": "Latency",
          "chinese": "延迟",
          "pronunciation": "/ˈleɪtənsi/",
          "example": "Reduce network latency",
          "category": "performance"
        },
        {
          "id": "net012",
          "english": "Bandwidth",
          "chinese": "带宽",
          "pronunciation": "/ˈbændwɪdθ/",
          "example": "Measure the bandwidth usage",
          "category": "performance"
        },
        {
          "id": "net013",
          "english": "Firewall",
          "chinese": "防火墙",
          "pronunciation": "/ˈfaɪərwɔːl/",
          "example": "Configure firewall rules",
          "category": "security"
        },
        {
          "id": "net014",
          "english": "VPN (Virtual Private Network)",
          "chinese": "虚拟专用网络",
          "pronunciation": "/viː piː ɛn/",
          "example": "Connect via VPN",
          "category": "security"
        },
        {
          "id": "net015",
          "english": "CORS (Cross-Origin Resource Sharing)",
          "chinese": "跨域资源共享",
          "pronunciation": "/kɔːrs/",
          "example": "Enable CORS for the API",
          "category": "security"
        }
      ]
    },
    {
      "id": "code-review",
      "name": "Code Review",
      "nameCN": "代码审查",
      "description": "Code review and collaboration phrases",
      "items": [
        {
          "id": "cr001",
          "english": "LGTM (Looks Good To Me)",
          "chinese": "看起来不错（批准）",
          "pronunciation": "/ˌɛl dʒiː tiː ˈɛm/",
          "example": "LGTM, ready to merge",
          "category": "approval"
        },
        {
          "id": "cr002",
          "english": "Nitpick",
          "chinese": "吹毛求疵/小问题",
          "pronunciation": "/ˈnɪtpɪk/",
          "example": "Just a nitpick: fix the indentation",
          "category": "feedback"
        },
        {
          "id": "cr003",
          "english": "Blocking Issue",
          "chinese": "阻塞性问题",
          "pronunciation": "/ˈblɒkɪŋ ˈɪʃuː/",
          "example": "This is a blocking issue, needs to be fixed",
          "category": "feedback"
        },
        {
          "id": "cr004",
          "english": "Non-blocking",
          "chinese": "非阻塞的",
          "pronunciation": "/nɒn ˈblɒkɪŋ/",
          "example": "This is non-blocking, can be addressed later",
          "category": "feedback"
        },
        {
          "id": "cr005",
          "english": "Suggestion",
          "chinese": "建议",
          "pronunciation": "/səˈdʒɛstʃən/",
          "example": "Just a suggestion: consider using async/await",
          "category": "feedback"
        },
        {
          "id": "cr006",
          "english": "Please address",
          "chinese": "请处理",
          "pronunciation": "/pliːz əˈdrɛs/",
          "example": "Please address the security concern",
          "category": "feedback"
        },
        {
          "id": "cr007",
          "english": "Consider",
          "chinese": "考虑",
          "pronunciation": "/kənˈsɪdər/",
          "example": "Consider renaming this variable for clarity",
          "category": "feedback"
        },
        {
          "id": "cr008",
          "english": "Out of scope",
          "chinese": "超出范围",
          "pronunciation": "/aʊt ʌv skoʊp/",
          "example": "This change is out of scope for this PR",
          "category": "feedback"
        },
        {
          "id": "cr009",
          "english": "Follow-up",
          "chinese": "后续跟进",
          "pronunciation": "/ˈfɒloʊ ʌp/",
          "example": "Let's address this in a follow-up PR",
          "category": "feedback"
        },
        {
          "id": "cr010",
          "english": "Approved with comments",
          "chinese": "批准但有意见",
          "pronunciation": "/əˈpruːvd wɪð ˈkɒmɛnts/",
          "example": "Approved with minor comments",
          "category": "approval"
        },
        {
          "id": "cr011",
          "english": "Request changes",
          "chinese": "请求修改",
          "pronunciation": "/rɪˈkwɛst ˈtʃeɪndʒɪz/",
          "example": "Requesting changes before approval",
          "category": "approval"
        },
        {
          "id": "cr012",
          "english": "Code smell",
          "chinese": "代码异味（潜在问题）",
          "pronunciation": "/koʊd smɛl/",
          "example": "This looks like a code smell",
          "category": "feedback"
        },
        {
          "id": "cr013",
          "english": "Edge case",
          "chinese": "边界情况",
          "pronunciation": "/ɛdʒ keɪs/",
          "example": "What about the edge case?",
          "category": "feedback"
        },
        {
          "id": "cr014",
          "english": "DRY (Don't Repeat Yourself)",
          "chinese": "不要重复自己",
          "pronunciation": "/draɪ/",
          "example": "This violates DRY principle",
          "category": "principles"
        },
        {
          "id": "cr015",
          "english": "Single Responsibility",
          "chinese": "单一职责",
          "pronunciation": "/ˈsɪŋɡl rɪˌspɒnsəˈbɪlɪti/",
          "example": "Each function should have single responsibility",
          "category": "principles"
        }
      ]
    },
    {
      "id": "ai-ml",
      "name": "AI & Machine Learning",
      "nameCN": "AI与机器学习",
      "description": "Artificial Intelligence and ML terminology",
      "items": [
        {
          "id": "ai001",
          "english": "Machine Learning",
          "chinese": "机器学习",
          "pronunciation": "/məˈʃiːn ˈlɜːrnɪŋ/",
          "example": "Use machine learning for predictions",
          "category": "concepts"
        },
        {
          "id": "ai002",
          "english": "Deep Learning",
          "chinese": "深度学习",
          "pronunciation": "/diːp ˈlɜːrnɪŋ/",
          "example": "Deep learning with neural networks",
          "category": "concepts"
        },
        {
          "id": "ai003",
          "english": "Neural Network",
          "chinese": "神经网络",
          "pronunciation": "/ˈnjʊərəl ˈnɛtwɜːrk/",
          "example": "Train a neural network",
          "category": "concepts"
        },
        {
          "id": "ai004",
          "english": "LLM (Large Language Model)",
          "chinese": "大语言模型",
          "pronunciation": "/ˌɛl ɛl ˈɛm/",
          "example": "GPT is a popular LLM",
          "category": "concepts"
        },
        {
          "id": "ai005",
          "english": "Prompt",
          "chinese": "提示词",
          "pronunciation": "/prɒmpt/",
          "example": "Write an effective prompt",
          "category": "concepts"
        },
        {
          "id": "ai006",
          "english": "Token",
          "chinese": "令牌/词元",
          "pronunciation": "/ˈtoʊkən/",
          "example": "Count the tokens in the input",
          "category": "concepts"
        },
        {
          "id": "ai007",
          "english": "Embedding",
          "chinese": "嵌入向量",
          "pronunciation": "/ɪmˈbɛdɪŋ/",
          "example": "Generate text embeddings",
          "category": "concepts"
        },
        {
          "id": "ai008",
          "english": "Fine-tuning",
          "chinese": "微调",
          "pronunciation": "/faɪn ˈtuːnɪŋ/",
          "example": "Fine-tune the model on custom data",
          "category": "training"
        },
        {
          "id": "ai009",
          "english": "Inference",
          "chinese": "推理",
          "pronunciation": "/ˈɪnfərəns/",
          "example": "Run inference on the model",
          "category": "training"
        },
        {
          "id": "ai010",
          "english": "Training Data",
          "chinese": "训练数据",
          "pronunciation": "/ˈtreɪnɪŋ ˈdeɪtə/",
          "example": "Prepare the training dataset",
          "category": "training"
        },
        {
          "id": "ai011",
          "english": "Overfitting",
          "chinese": "过拟合",
          "pronunciation": "/ˌoʊvərˈfɪtɪŋ/",
          "example": "The model is overfitting",
          "category": "training"
        },
        {
          "id": "ai012",
          "english": "RAG (Retrieval-Augmented Generation)",
          "chinese": "检索增强生成",
          "pronunciation": "/ræɡ/",
          "example": "Implement RAG for better answers",
          "category": "techniques"
        },
        {
          "id": "ai013",
          "english": "Vector Database",
          "chinese": "向量数据库",
          "pronunciation": "/ˈvɛktər ˈdeɪtəbeɪs/",
          "example": "Store embeddings in a vector database",
          "category": "infrastructure"
        },
        {
          "id": "ai014",
          "english": "Hallucination",
          "chinese": "幻觉（AI编造信息）",
          "pronunciation": "/həˌluːsɪˈneɪʃən/",
          "example": "The model produces hallucinations",
          "category": "concepts"
        },
        {
          "id": "ai015",
          "english": "Agent",
          "chinese": "智能体",
          "pronunciation": "/ˈeɪdʒənt/",
          "example": "Build an AI agent",
          "category": "concepts"
        }
      ]
    },
    {
      "id": "agile-dev",
      "name": "Agile Development",
      "nameCN": "敏捷开发",
      "description": "Agile and project management terms",
      "items": [
        {
          "id": "ag001",
          "english": "Sprint",
          "chinese": "冲刺/迭代",
          "pronunciation": "/sprɪnt/",
          "example": "This sprint lasts two weeks",
          "category": "scrum"
        },
        {
          "id": "ag002",
          "english": "Scrum",
          "chinese": "敏捷开发框架",
          "pronunciation": "/skrʌm/",
          "example": "We use Scrum methodology",
          "category": "scrum"
        },
        {
          "id": "ag003",
          "english": "Backlog",
          "chinese": "待办列表",
          "pronunciation": "/ˈbæklɒɡ/",
          "example": "Add tasks to the backlog",
          "category": "scrum"
        },
        {
          "id": "ag004",
          "english": "Stand-up",
          "chinese": "站会",
          "pronunciation": "/ˈstænd ʌp/",
          "example": "Daily stand-up at 9am",
          "category": "scrum"
        },
        {
          "id": "ag005",
          "english": "User Story",
          "chinese": "用户故事",
          "pronunciation": "/ˈjuːzər ˈstɔːri/",
          "example": "Write user stories for features",
          "category": "scrum"
        },
        {
          "id": "ag006",
          "english": "Epic",
          "chinese": "史诗（大型需求）",
          "pronunciation": "/ˈɛpɪk/",
          "example": "This epic includes multiple stories",
          "category": "scrum"
        },
        {
          "id": "ag007",
          "english": "Retrospective",
          "chinese": "回顾会议",
          "pronunciation": "/ˌrɛtrəˈspɛktɪv/",
          "example": "Sprint retrospective meeting",
          "category": "scrum"
        },
        {
          "id": "ag008",
          "english": "Kanban",
          "chinese": "看板",
          "pronunciation": "/ˈkɑːnbɑːn/",
          "example": "Use Kanban board for visualization",
          "category": "methodology"
        },
        {
          "id": "ag009",
          "english": "MVP (Minimum Viable Product)",
          "chinese": "最小可行产品",
          "pronunciation": "/ˌɛm viː ˈpiː/",
          "example": "Build the MVP first",
          "category": "methodology"
        },
        {
          "id": "ag010",
          "english": "Tech Debt",
          "chinese": "技术债务",
          "pronunciation": "/tɛk dɛt/",
          "example": "We need to address tech debt",
          "category": "planning"
        },
        {
          "id": "ag011",
          "english": "Refactor",
          "chinese": "重构",
          "pronunciation": "/riːˈfæktər/",
          "example": "Refactor the legacy code",
          "category": "development"
        },
        {
          "id": "ag012",
          "english": "Spike",
          "chinese": "技术预研",
          "pronunciation": "/spaɪk/",
          "example": "Create a spike to investigate",
          "category": "planning"
        },
        {
          "id": "ag013",
          "english": "CI/CD",
          "chinese": "持续集成/持续部署",
          "pronunciation": "/siː aɪ siː diː/",
          "example": "Set up CI/CD pipeline",
          "category": "devops"
        },
        {
          "id": "ag014",
          "english": "Hotfix",
          "chinese": "热修复",
          "pronunciation": "/ˈhɒtfɪks/",
          "example": "Deploy a hotfix immediately",
          "category": "devops"
        },
        {
          "id": "ag015",
          "english": "Rollback",
          "chinese": "回滚",
          "pronunciation": "/ˈroʊlbæk/",
          "example": "Execute rollback plan",
          "category": "devops"
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = computerEnglishData;
}
