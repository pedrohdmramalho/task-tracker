# Task-Tracker CLI

A simple and efficient Command Line Interface (CLI) application to manage your daily tasks directly from the terminal.

This project was built using **Node.js** and focuses on backend fundamentals such as file system manipulation, modular architecture, clean code organization, and command handling.

Idea from https://roadmap.sh/projects/task-tracker

## 📌 Features
- Add new tasks
- List tasks (all or filtered by status)
- Update task descriptions
- Delete tasks  
- Mark tasks as:
    - `todo`
    - `in-progress`
    - `done`
- Persistent data storage using a local JSON file
- Clean repository-based architecture

## 🛠 Requirements
Before running this project, you must install:
- **Node.js (LTS version recommended)**

# 📥 Installing Node.js (Step-by-Step)
Node.js is required to execute JavaScript outside the browser.

## 🔹 Step 1 — Download Node.js
1. Go to the official website:  
    👉 [https://nodejs.org](https://nodejs.org)

2. Download the **LTS (Long Term Support)** version.
    - This version is more stable and recommended for most users.

## 🔹 Step 2 — Install Node.js

### On Windows:
1. Run the downloaded `.msi` installer.
2. Click **Next** through the installation steps.
3. Keep default settings.
4. Make sure the option:
    `Add to PATH`
    is selected.
5. Finish installation.
---
### On macOS:

- Open the downloaded `.pkg` file.
- Follow the installation wizard.
Or using Homebrew:
    `brew install node`

---
### On Linux (Ubuntu/Debian):

`sudo apt update` 

`sudo apt install nodejs npm`

---

## 🔹 Step 3 — Verify Installation

After installation, open your terminal and run:
`node -v`

and
`npm -v`

If both return version numbers, Node.js is installed correctly.

---

# 📦 Installing the Project

## 1️⃣ Clone the Repository

`git clone <your-repository-url>`

## 2️⃣ Enter the Project Folder

`cd task-tracker-cli`

## 3️⃣ Install Dependencies (if applicable)

`npm install`

If your project does not use external dependencies, this step may not be necessary.

---

# 📦 Installing the Project

## 1️⃣ Clone the Repository

`git clone <github.com/pedrohdmramalho/task-tracker>`

## 2️⃣ Enter the Project Folder

`cd task-tracker-cli`

## 3️⃣ Install Dependencies (if applicable)

`npm install`

If your project does not use external dependencies, this step may not be necessary.

---

# 🚀 How to Use the CLI
All commands are executed using:
`node task-cli <command>`

---

## ➕ Add a Task
`node task-cli add "Study Node.js architecture"`

---

## 📋 List All Tasks
`node task-cli list`

---

## 🔎 List Tasks by Status
`node task-cli list todo`
 
`node task-cli list in-progress`

`node task-cli list done`

---

## ✏️ Update a Task
`node task-cli update <task-id> "New description"`

Example:
`node task-cli update 2 "Study clean architecture deeply"`

---

## 🗑 Delete a Task
`node task-cli delete <task-id>`

Example:
`node task-cli delete 3`

---

## ✅ Mark Task as In Progress
`node task-cli mark-in-progress <task-id>`

---

## 🎯 Mark Task as Done
`node task-cli mark-done <task-id>`

---

# 🗂 Project Structure

```bash
task-tracker-cli/
│
├── index.js              # CLI entry point
├── repository/
│   └── TaskRepository.js # Task persistence logic
├── models/
│   └── Task.js           # Task entity model
├── tasks.json            # Local database
└── README.md
```
---

# 🧠 Architecture Overview

This project follows a clean separation of responsibilities:
- **CLI Layer** → Responsible for parsing terminal commands.
- **Repository Layer** → Handles data persistence and filtering logic.
- **Model Layer** → Defines the Task structure. 
- **JSON File** → Acts as a simple local database.
    

This approach reinforces important backend fundamentals:
- Separation of concerns
- Data persistence
- Modularization
- Clean command handling
- Basic state management

---

# 💾 How Data Persistence Works

All tasks are stored inside:
`tasks.json`

The repository reads from and writes to this file using Node.js `fs` module.
If the file does not exist, it is automatically created when the first task is added.

---

# 📚 Concepts Practiced in This Project

- Node.js runtime 
- File System module (`fs`)
- CLI argument parsing (`process.argv`)
- Modular JavaScript
- Repository pattern 
- Basic CRUD operations
- Clean code organization
- Backend development fundamentals
    
---

# 🎯 Future Improvements

- Add UUID instead of incremental IDs
- Add timestamps (createdAt / updatedAt)
- Add task priority
- Convert to an installable global CLI
- Add unit tests
- Add validation layer 
- Add error handling improvements
    
---

# 👨‍💻 Author
Developed as part of a backend fundamentals study project.

---

# 💬 Feedback

Feedback is always welcome!

If you have suggestions, improvements, feature ideas, or find any issues, feel free to:
- Open an issue
- Submit a pull request
- Share constructive feedback
    
This project was built as part of a backend learning journey, and continuous improvement is part of the process.
Your feedback helps make this project better and contributes to growth as a developer.

---
Thank you all,
Pedro Ramalho.