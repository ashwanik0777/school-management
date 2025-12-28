# 🏫 School Management System (Advanced ERP)

A modern, scalable, and production-ready School ERP System designed to manage academics, users, attendance, exams, reports, and school website content through clean role-based dashboards.

This project is built with a long-term vision, focusing on simplicity, control, security, and performance.

## 🚀 Key Highlights

*   **🎯 Only 3 dashboards** (Admin, Teacher, Student) – no complexity
*   **🎛 Admin Control Center** to enable / disable dashboard tabs dynamically
*   **🔐 Strong Role-Based Access Control (RBAC)**
*   **⚡ Fast, scalable backend APIs**
*   **🧠 Clean academic &amp; relational data design**
*   **📱 Web + Mobile App ready** (single backend)
*   **🧱 Modular &amp; future-proof architecture**

## 📑 Table of Contents

*   <a>Project Overview</a>
*   <a>ERP Design Philosophy</a>
*   <a>Dashboard Architecture</a>
*   <a>Admin Dashboard</a>
*   <a>Teacher Dashboard</a>
*   <a>Student Dashboard</a>
*   <a>Core ERP Features</a>
*   <a>Tech Stack</a>
*   <a>System Architecture</a>
*   <a>Installation &amp; Setup</a>
*   <a>Environment Configuration</a>
*   <a>Database &amp; Migrations</a>
*   <a>Security Overview</a>
*   <a>Deployment</a>
*   <a>Roadmap</a>
*   <a>Contributing</a>
*   <a>License</a>

---

## 📌 Project Overview

This repository contains a complete **School Management ERP System** designed for real-world school operations.

The ERP centralizes:
*   Student &amp; teacher management
*   Academic structure
*   Attendance &amp; examinations
*   Marks &amp; report cards
*   Communication &amp; notices
*   School website CMS

The system is intentionally kept simple on the surface while being powerful internally.

---

## 🎯 ERP Design Philosophy

The ERP follows these core principles:
*   ❌ No unnecessary dashboards
*   ✅ Maximum control with minimum UI
*   👨‍💼 Admin has full authority
*   👩‍🏫 Teachers see only academic tools
*   👨‍🎓 Students see only learning-related data
*   🎛 Features can be turned ON/OFF without code changes

This makes the ERP **flexible**, **easy to maintain**, and **future-ready**.

---

## 🧭 Dashboard Architecture (Final)

The entire ERP is built around three dashboards only. The Admin Dashboard acts as the central control unit.

```mermaid
graph TD
    A[Admin Dashboard] -->|Controls visibility & permissions| B{Control Center}
    B -->|Enables/Disables Features| C[Teacher Dashboard]
    B -->|Enables/Disables Features| D[Student Dashboard]
    
    style A fill:#ff6b6b,stroke:#333,stroke-width:2px,color:white
    style B fill:#feca57,stroke:#333,stroke-width:2px,color:black
    style C fill:#48dbfb,stroke:#333,stroke-width:2px,color:black
    style D fill:#1dd1a1,stroke:#333,stroke-width:2px,color:black
```

---

## 🟦 Admin Dashboard (Super Control Panel)

The **Admin Dashboard** is the heart of the ERP. It provides full control over every aspect of the school management.

### Admin Modules Overview

```mermaid
mindmap
  root((Admin Dashboard))
    User Management
      Students
      Teachers
      Admins
      Bulk Uploads
    Academic Management
      Classes & Sections
      Subjects
      Timetable
    Attendance & Exams
      Attendance Tracking
      Exam Setup
      Marks Entry
      Report Cards
    Finance
      Fee Structures
      Collection
      Due Reports
    Communication
      Notices
      Announcements
      Messaging
    CMS & Website
      Homepage
      Gallery
      Pages
    System Control
      Toggle Tabs
      Permissions
      Settings
```

### Key Features
*   **Dashboard Overview**: KPIs, charts, attendance summary, alerts.
*   **User Management**: Add/Edit/Delete users, role management.
*   **Academic Management**: Manage classes, subjects, and teacher mapping.
*   **Attendance &amp; Exams**: Comprehensive tracking and report generation.
*   **Fees &amp; Finance**: Manage fee structures and collections.
*   **Communication**: Role-wise messaging and notices.
*   **Website / CMS**: Manage school website content directly.
*   **Dashboard Control Center ⭐**: Dynamically enable/disable features for Teachers and Students.

---

## 🟩 Teacher Dashboard (Academic Focused)

The **Teacher Dashboard** is clean, fast, and distraction-free, focusing solely on academic tasks.

```mermaid
graph LR
    T[Teacher] --> D[Dashboard]
    T --> C[My Classes]
    T --> A[Attendance]
    T --> M[Marks Entry]
    T --> S[Study Material]
    T --> H[Homework]
    T --> N[Notices]
    
    style T fill:#48dbfb,stroke:#333,stroke-width:2px
```

*   **My Classes**: View assigned classes and subjects.
*   **Attendance**: Mark student attendance easily.
*   **Marks**: Enter exam marks.
*   **Study Material &amp; Homework**: Upload resources for students.
*   **Notices**: View important announcements.
*   *Note: Teachers see only tabs enabled by the Admin.*

---

## 🟨 Student Dashboard (Simple &amp; Friendly)

The **Student Dashboard** is designed for clarity, allowing students to focus on their progress.

```mermaid
graph LR
    S[Student] --> D[Dashboard]
    S --> A[Attendance View]
    S --> R[Results]
    S --> T[Timetable]
    S --> SM[Study Material]
    S --> HW[Homework]
    S --> N[Notices]
    
    style S fill:#1dd1a1,stroke:#333,stroke-width:2px
```

*   **Attendance**: Check personal attendance records.
*   **Results**: View exam marks and report cards.
*   **Timetable**: Access class schedules.
*   **Study Material &amp; Homework**: Download resources and view assignments.
*   *Note: Student access is fully controlled by the Admin.*

---

## ✨ Core ERP Features

1.  **👥 User Management**: Admin / Teacher / Student roles.
2.  **🎓 Academic Structure**: Class, Section, and Subject mapping.
3.  **🟢 Attendance Tracking**: Digital attendance for all roles.
4.  **📝 Exams &amp; Reports**: comprehensive exam management and report card generation.
5.  **📚 LMS Features**: Study material and homework distribution.
6.  **📢 Communication**: Centralized notices and announcements.
7.  **🌐 Website CMS**: Integrated Content Management System for the school website.
8.  **📈 Analytics**: Visual reports for data-driven decisions.
9.  **🎛 Dynamic Toggling**: Enable/disable features without code deployment.
10. **🔐 Security**: RBAC, JWT, and secure data handling.

---

## 🛠 Tech Stack

### Frontend
*   **Next.js (App Router)**
*   **TypeScript**
*   **Tailwind CSS**

### Backend
*   **Next.js API Routes / Server Actions**
*   **Prisma ORM**

### Database
*   **PostgreSQL**

### Security
*   **JWT Authentication**
*   **HTTP-only cookies**
*   **Role-based Access Control (RBAC)**

### Deployment
*   **Vercel** (Web + API)
*   **Supabase / Neon** (PostgreSQL)

---

## 🏗 System Architecture

The system uses a unified backend for both web and potential mobile applications.

```mermaid
graph TD
    Client[Web App / Mobile App] -->|HTTPS| API[Next.js Backend APIs]
    API -->|Query| Prisma[Prisma ORM]
    Prisma -->|SQL| DB[(PostgreSQL Database)]
    
    subgraph "Serverless / Edge"
    API
    end
    
    subgraph "Data Layer"
    Prisma
    DB
    end
    
    style Client fill:#f368e0,stroke:#333
    style API fill:#54a0ff,stroke:#333
    style DB fill:#5f27cd,stroke:#333,color:white
```

---

## ⚙ Installation &amp; Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/ashwanik0777/school-management.git
    cd school-management
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

---

## 🔐 Environment Configuration

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname"
JWT_SECRET="your_secret_key"
```

---

## 🗄 Database &amp; Migrations

Initialize the database using Prisma:

```bash
npx prisma migrate dev
npx prisma generate
```

Prisma ensures type safety, secure queries, and clean schema migrations.

---

## 🛡 Security Overview

*   **Authentication**: Secure JWT-based auth.
*   **Session**: HTTP-only cookies to prevent XSS.
*   **Authorization**: Strict Role-Based Access Control (RBAC).
*   **Validation**: Server-side input validation (Zod).
*   **Audit**: Logs for critical admin actions.

---

## 🚀 Deployment

### Recommended Setup
*   **Frontend + Backend**: <a href="https://vercel.com">Vercel</a>
*   **Database**: <a href="https://supabase.com">Supabase</a> or <a href="https://neon.tech">Neon</a>
*   **Storage**: AWS S3 or UploadThing

---

## 🔮 Roadmap

*   [ ] Parent Dashboard
*   [ ] Mobile App (React Native)
*   [ ] Fee Payment Gateway Integration
*   [ ] AI-based Performance Analytics
*   [ ] Multi-school (Multi-tenant) Support

---

## 🤝 Contributing

Contributions are welcome!
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.