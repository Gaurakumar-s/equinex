# 💰 Equinex - Smart Expense Sharing Platform

**Live Demo:** [https://equinex-two.vercel.app](https://equinex-two.vercel.app)

---

## 📖 About The Project

Equinex is a full-stack expense-sharing application built for the Indian market. It simplifies splitting bills with friends, roommates, or groups while providing real-time updates and smart settlement suggestions.

<br/>


## 🎯 Problem Statement

Managing shared expenses manually often leads to:

- Confusion about who paid for what
- Difficulty tracking debts and group expenses  
- Forgotten payments and awkward reminders

<br/>

## 💡 Solution

Equinex simplifies expense tracking by providing a centralized platform to:

- Track and split expenses effortlessly
- Automatically calculate balances
- Send timely payment reminders
- Offer deep spending insights and analytics

<br/>

⭐ Highlights

🎯 Indian Market Focus - Built specifically for Indian users with ₹ currency support
⚡ Real-Time Sync - Instant updates across all devices without manual refresh
🧮 Smart Settlement Algorithm - Optimizes transactions to minimize payment steps
📧 Automated Email System - Daily payment reminders (10 AM IST) & monthly AI-powered spending insights
🤖 AI-Powered Suggestions - Auto-categorizes expenses and provides personalized savings tips
👥 Advanced Group Management - Role-based access, activity logs, and bulk member operations
📊 Comprehensive Analytics - Monthly trends, category breakdowns, and visual spending charts
🔐 Enterprise-Grade Security - Clerk authentication with secure data handling
🎨 Modern UI/UX - Built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui
📱 Fully Responsive - Seamless experience across desktop, tablet, and mobile devices

## 🚀 Key Features


<br/>

### Expense Management

- **Add Expenses:** Add expenses with description, amount & category
- **Split Options:** Equal, Percentage, or Exact Amount splits
- **Smart Categorization:** 20+ categories (Food, Transport, etc.) with AI-based auto-suggestions
- **Group & Individual Tracking:** Manage both personal and shared expenses
- **Real-Time Sync:** Instant updates across all devices

### Group Management

- **Create Groups:** For trips, roommates, events, or projects
- **Smart Member Management:**
  - Admin controls (add/remove members, transfer ownership)
  - Bulk member addition
  - Automatic email invitations
- **Activity Logs:** Track member updates, role transfers, and group changes
- **Role-Based Access:** Different permissions for admins and members

### Smart Settlements

- **Settle Up:** Record payments between individuals or within groups
- **Optimized Suggestions:** Algorithm minimizes total transactions
- **Validation Checks:** Prevents overpayments & incorrect directions
- **Complete History:** Full audit trail of settlements with notes
- **Multi-Currency:** Supports Indian Rupees (₹)

### Analytics & Insights

- **Dashboard Overview:** Get a summary of balances & spending
- **Balance Tracking:** View who owes you and who you owe
- **Trends & Breakdown:** Monthly patterns and category-wise analysis
- **Spending Insights:** Identify top spending categories and habits

### Automated Email Notifications

- **Daily Payment Reminders (10:00 AM IST):**
  - Receive reminders for pending debts with direct settle-up links
  
- **Monthly Insights (1st of each month):**
  - Get total spending reports, top categories, and AI-powered saving tips
  
- **Group Invitations:**
  - Sent automatically when new members are added to a group


<br/>

## 🎯 Purpose

To simplify shared expense management, promote transparency, and help users make smarter financial decisions.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **shadcn/ui** (Component Library)
- **Radix UI** (Primitives)
- **Lucide Icons**
- **React Hook Form + Zod** (Validation)

### Backend & Database
- **Convex** (Backend-as-a-Service)
- **Convex Database** (Real-time)
- **Clerk** (Authentication)
- **Inngest** (Background Jobs)

### Email & AI
- **Nodemailer** (Gmail SMTP)
- **Google Generative AI** (Gemini)

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  (Next.js 16 + React 19 + Tailwind CSS + shadcn/ui)        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    Authentication Layer                      │
│                      (Clerk Auth)                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                     Backend Layer (Convex)                   │
│  ┌──────────────┬──────────────┬──────────────────────┐    │
│  │   Queries    │  Mutations   │      Actions         │    │
│  │  (Real-time) │ (Write Ops)  │  (Side Effects)      │    │
│  └──────────────┴──────────────┴──────────────────────┘    │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   Database Layer (Convex DB)                 │
│  ┌──────┬───────────┬────────────┬────────┬─────────────┐  │
│  │Users │ Expenses  │Settlements │ Groups │ActivityLog  │  │
│  └──────┴───────────┴────────────┴────────┴─────────────┘  │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│               Background Jobs Layer (Inngest)                │
│  ┌──────────────────────┬──────────────────────────────┐   │
│  │  Payment Reminders   │   Monthly Spending Insights  │   │
│  │  (Daily @ 10 AM IST) │   (1st @ 10 AM IST)         │   │
│  └──────────────────────┴──────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Key Architectural Decisions

1. **Real-time Data Sync:** Convex provides automatic real-time updates across all connected clients
2. **Optimized Queries:** Database indexes on frequently queried fields (`by_payer`, `by_receiver`, `by_group`)
3. **Unified Balance Calculation:** 4-step consistent calculation logic across all queries
4. **Orphaned Data Prevention:** Automatic cleanup of settlements when related expenses are deleted
5. **Lazy Loading:** Conditional rendering on heavy pages to improve initial load time

<br/>

---

## 📱 User Flow

<details>
<summary><b>🔄 View detailed user flows</b></summary>

<br/>

### 1. Authentication Flow

```mermaid
graph TD
    A[Landing Page] --> B{User Logged In?}
    B -->|No| C[Sign Up / Sign In via Clerk]
    B -->|Yes| D[Dashboard]
    C --> E[Profile Setup: Enter Name]
    E --> F[Welcome Modal: Quick Onboarding]
    F --> D
```

### 2. Adding an Expense Flow

```mermaid
graph TD
    A[Dashboard] --> B[Click 'Add Expense']
    B --> C{Individual or Group?}
    C -->|Individual| D[Select Contact/User]
    C -->|Group| E[Select Group]
    D --> F[Enter Details: Description, Amount, Category]
    E --> F
    F --> G{How to Split?}
    G -->|Equal| H[Auto-calculate splits]
    G -->|Percentage| I[Enter percentages]
    G -->|Exact| J[Enter exact amounts]
    H --> K[Submit Expense]
    I --> K
    J --> K
    K --> L[Real-time Update on Dashboard]
```

### 3. Settlement Flow

```mermaid
graph TD
    A[Dashboard/Person Page] --> B[View Balance: 'You owe ₹X']
    B --> C[Click 'Settle Up']
    C --> D{1-to-1 or Group?}
    D -->|1-to-1| E[Select Person]
    D -->|Group| F[Select Group & Person]
    E --> G[Enter Amount ≤ Balance]
    F --> G
    G --> H[Add Optional Note]
    H --> I[Record Settlement]
    I --> J[Balance Updates in Real-time]
    J --> K{Balance = 0?}
    K -->|Yes| L[Show 'All Settled Up' ✅]
    K -->|No| M[Show Remaining Balance]
```

### 4. Group Management Flow

```mermaid
graph TD
    A[Dashboard] --> B[Click 'Create Group']
    B --> C[Enter Group Name & Description]
    C --> D[Group Created - You are Admin]
    D --> E[Add Members: Search by Email]
    E --> F[Members Receive Email Invitation]
    F --> G[Start Adding Expenses to Group]
    G --> H[View Group Balances]
    H --> I{Admin Actions?}
    I -->|Yes| J[Remove Members / Transfer Admin / Delete Group]
    I -->|No| K[Leave Group / View Activity Log]
```

</details>

<br/>

---

## 📸 Screenshots



<br/>

### Landing Page
<img width="1354" alt="Landing Page 1" src="https://github.com/user-attachments/assets/23ad0b35-8382-4fd7-b6bb-4eedbb4895c6" />
<img width="1353" alt="Landing Page 2" src="https://github.com/user-attachments/assets/e87fd46b-cf13-4710-a0bf-6ee25de488f2" />
<img width="1365" alt="Landing Page 3" src="https://github.com/user-attachments/assets/f9604b4b-712d-453c-ab74-abb3e3ba289a" />

### Dashboard
<img width="1364" alt="Dashboard 1" src="https://github.com/user-attachments/assets/85c57389-042f-493b-a443-db44bba39220" />
<img width="1359" alt="Dashboard 2" src="https://github.com/user-attachments/assets/f66252fb-8f63-433b-b14a-1c4dfcffb322" />

### Add Expense
<img width="1361" alt="Add Expense 1" src="https://github.com/user-attachments/assets/31f35df5-345c-439a-95a4-8b82fb04aaf6" />
<img width="1360" alt="Add Expense 2" src="https://github.com/user-attachments/assets/0c25344f-ead5-44ca-8a90-c0bacb768f6f" />

### Group Management
<img width="1365" alt="Group Management 1" src="https://github.com/user-attachments/assets/41ffb2a3-e755-4895-8170-764e521ecc52" />
<img width="1359" alt="Group Management 2" src="https://github.com/user-attachments/assets/d72bd991-532e-40cc-9b4d-0efed2e4d1ad" />

### Settlement Page
<img width="1360" alt="Settlement Page" src="https://github.com/user-attachments/assets/d7ddc3ba-d9ef-4baf-81bb-c07a6d165a71" />

### Automated Email Notifications

#### Daily Payment Reminder
<img width="458" alt="Payment Reminder Email" src="https://github.com/user-attachments/assets/47138835-9e47-45ff-8739-f784c3d6906e" />

#### Monthly Spending Insights
<img width="1363" alt="Monthly Insights Email" src="https://github.com/user-attachments/assets/9188d651-b8e7-4904-a34a-437b71be9204" />

#### Group Invitation
<img width="1365" alt="Group Invitation Email" src="https://github.com/user-attachments/assets/fcd6f107-937b-4ff8-97df-037db41d8da6" />

### Backend Dashboards

#### Convex Dashboard
<img width="1366" alt="Convex Dashboard 1" src="https://github.com/user-attachments/assets/18c5b3f6-2ccb-4564-ac3f-e432c4d27d91" />
<img width="1363" alt="Convex Dashboard 2" src="https://github.com/user-attachments/assets/ba0774fe-b044-413a-a988-34d29c291e55" />
<img width="1361" alt="Convex Dashboard 3" src="https://github.com/user-attachments/assets/00e6d06b-6901-4f6e-9bf7-ebec011369e2" />

#### Inngest Dashboard
<img width="1361" alt="Inngest Dashboard" src="https://github.com/user-attachments/assets/7d1c6f73-74bd-4c87-9814-2093ff02b391" />


<br/>

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Convex Account ([convex.dev](https://www.convex.dev/))
- Clerk Account ([clerk.com](https://clerk.com/))
- Gmail Account (for email notifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/equinex.git
   cd equinex
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex**
   ```bash
   npx convex dev
   ```
   This creates `.env.local` with `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL`

4. **Configure Environment Variables**
   
   Create `.env.local` in the root directory:
   ```env
   # Convex
   CONVEX_DEPLOYMENT=your-deployment-name
   NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
   
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   
   # Inngest (Optional)
   INNGEST_EVENT_KEY=your-event-key
   INNGEST_SIGNING_KEY=your-signing-key
   ```

5. **Set up Convex Environment Variables**
   
   In **Convex Dashboard → Production → Environment Variables**, add:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   CLERK_JWT_ISSUER_DOMAIN=your-clerk-domain.clerk.accounts.dev
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

6. **Run the development server**
   ```bash
   # Terminal 1: Convex
   npx convex dev
   
   # Terminal 2: Next.js
   npm run dev
   ```

7. **Open your browser**
   - Visit [http://localhost:3000](http://localhost:3000)
   - Sign up and start using Equinex!

---

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/equinex.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com/)
   - Import your GitHub repository
   - **Build Command:** `npx convex deploy && next build`
   - Add all environment variables from `.env.local`
   - Click **Deploy**

3. **Configure Production**
   - Update `NEXT_PUBLIC_APP_URL` in Convex with your Vercel URL
   - Add your Vercel domain to Clerk's **Allowed Origins**
   - Set up Inngest (optional): Use Vercel Integration or manual sync

---

## 🗄️ Database Schema

### Visual Schema Overview

<img width="989" alt="Database Schema Diagram" src="https://github.com/user-attachments/assets/4ee2f7ac-29be-488c-b321-d822352384c4" />

### Core Tables

**Users**
- Stores user information (name, email, authentication)
- Indexed by token and email for fast lookups

**Expenses**
- Tracks all expenses (amount, description, category)
- Supports both individual and group expenses
- Contains splits array for participant shares

**Settlements**
- Records payments between users
- Links to related expenses
- Supports both 1-to-1 and group settlements

**Groups**
- Manages group information and members
- Role-based access (admin/member)
- Tracks member addition history

**Activity Logs**
- Tracks group activities (member changes, role transfers)
- Provides audit trail for transparency

### Relationships

```
Users ──┬─── Expenses (paidByUserId, splits.userId)
        ├─── Settlements (paidByUserId, receivedByUserId)
        ├─── Groups (createdBy, members.userId)
        └─── ActivityLog (performedBy, targetUserId)

Groups ─┬─── Expenses (groupId)
        ├─── Settlements (groupId)
        └─── ActivityLog (groupId)

Expenses ─── Settlements (relatedExpenseIds)
```

### Index Strategy

**Why Indexes Matter:**
- **O(log n) vs O(n):** Indexes reduce query time from linear to logarithmic
- **Dashboard Performance:** Without indexes, dashboard would scan all expenses/settlements
- **Search Optimization:** Full-text search indexes enable real-time user search

**Critical Indexes:**
1. `by_payer` on Expenses - Dashboard balance calculation
2. `by_receiver` on Settlements - Dashboard balance calculation
3. `by_group` on Expenses - Group page queries
4. `search_name` and `search_email` on Users - User search functionality

---

## 🔑 Key Technical Decisions

### 1. Real-time Data with Convex
- **Why?** Instant updates across all devices without manual refresh
- **How?** Convex provides reactive queries that update automatically

### 2. Optimized Balance Calculations
Implemented 4-step consistent calculation logic:
1. Get all expenses where user is involved
2. Calculate net balance per user from expenses
3. Apply all settlements to adjust net balances
4. Build UI lists and calculate global totals

### 3. Smart Indexing
- Indexes on frequently queried fields
- Reduces query time from O(n) to O(log n)
- Critical for dashboard performance

### 4. Background Jobs with Inngest
- **Payment Reminders:** Daily at 10 AM IST
- **Spending Insights:** Monthly on 1st at 10 AM IST
- Runs reliably without blocking main application

---

## 📧 Email Notifications

### Gmail SMTP Setup

1. **Enable 2-Step Verification**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Create password for "Mail"
   - Use this as `GMAIL_APP_PASSWORD`

3. **Configure in Convex**
   - Add `GMAIL_USER` and `GMAIL_APP_PASSWORD` to Convex environment variables

---

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Full-stack development with modern React (Next.js 16)
- ✅ Real-time backend architecture (Convex)
- ✅ Authentication implementation (Clerk)
- ✅ Background job scheduling (Inngest)
- ✅ Email automation (Nodemailer)
- ✅ Database design and indexing
- ✅ Responsive UI design (Tailwind CSS + shadcn/ui)
- ✅ Form validation (React Hook Form + Zod)
- ✅ Error handling and user feedback
- ✅ Deployment and production setup

---

## 🙏 Acknowledgments

- **Next.js** - The React Framework
- **Convex** - Real-time backend platform
- **Clerk** - Authentication service
- **Inngest** - Background job orchestration
- **shadcn/ui** - Beautiful component library
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework

---

<div align="center">
  
**Built with ❤️ for seamless expense sharing**

</div>
