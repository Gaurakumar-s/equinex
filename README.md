# 💰 Equinex - Smart Expense Sharing Platform



**Split expenses effortlessly. Track spending smartly. Settle up seamlessly.**


---

## 📖 About The Project

Equinex is a full-stack expense-sharing application built for the Indian market. It simplifies splitting bills with friends, roommates, or groups while providing real-time updates and smart settlement suggestions.

### 🎯 Problem Statement
Managing shared expenses often leads to:
- Confusion about who paid for what
- Difficulty tracking multiple debts
- Complex calculations for group bills
- Forgotten payments and awkward reminders

### ✨ Solution
Equinex provides a centralized platform to:
- Track all shared expenses in one place
- Automatically calculate who owes whom
- Send automated payment reminders
- Provide spending insights and analytics

---

## 🚀 Key Features

### 💳 Expense Management
- **Add Expenses**: Create expenses with description, amount, and category
- **Multiple Split Types**: 
  - **Equal Split**: Divide amount equally among all participants
  - **Percentage Split**: Assign custom percentages to each person
  - **Exact Amount Split**: Specify exact amounts for each participant
- **Smart Categorization**: 20+ expense categories (Food, Transport, Entertainment, etc.)
- **Auto-suggestions**: AI suggests categories based on expense description
- **Group & Individual**: Track both 1-to-1 and group expenses seamlessly
- **Real-time Updates**: See changes instantly across all devices

### 👥 Advanced Group Features
- **Create Groups**: Set up groups for roommates, trips, events, or projects
- **Smart Member Management**:
  - **Admin Controls**: Add or remove members from groups
  - **Bulk Member Addition**: Add multiple members at once
  - **Email Notifications**: New members receive automatic email invitations
  - **Transfer Admin Rights**: Admins can transfer ownership to other members
  - **Leave Group**: Members can leave groups anytime
  - **Admin Exit**: Admins must transfer admin rights before leaving
- **Activity Logs**: Complete audit trail of all group activities
  - Member additions/removals
  - Admin role transfers
  - Group creation events
- **Role-based Access**: Different permissions for admins and members

### 💰 Smart Settlement System
- **Settle Up**: Record payments between individuals or within groups
- **Optimized Suggestions**: Algorithm minimizes number of transactions
- **Balance Validation**: System prevents overpayments and incorrect amounts
- **Direction Validation**: Ensures payments flow in correct direction
- **Complete History**: Audit trail of all settlements with notes
- **Multi-currency**: Full support for Indian Rupees (₹)

### 📊 Analytics & Insights
- **Dashboard Overview**: Visual summary of your financial status
- **Balance Tracking**: 
  - Total Balance (What you're owed - What you owe)
  - Detailed breakdown of who owes you
  - Detailed breakdown of who you owe
- **Monthly Trends**: Track spending patterns over time with charts
- **Category Breakdown**: See where your money goes
- **Spending Charts**: Visual representation of monthly/yearly expenses

### 🔔 Automated Email Notifications

#### Daily Payment Reminders (10:00 AM IST)
- **Who Gets It**: Users with outstanding debts
- **What It Contains**:
  - List of all people you owe money to
  - Amount owed to each person
  - How long the debt has been pending
  - Direct link to settle up
- **Purpose**: Friendly reminder to clear pending payments

#### Monthly Spending Insights (1st of Month, 10:00 AM IST)
- **Who Gets It**: Users with expenses in the past month
- **What It Contains**:
  - **Total Spending**: Complete monthly expenditure
  - **Top Categories**: Your highest spending categories
  - **AI-Powered Insights**: 4 personalized tips including:
    - Overview of your spending patterns
    - Key observations about spending behavior
    - Specific money-saving suggestions
    - Encouraging financial habit reminders
  - **Savings Tips**: Category-specific advice to reduce expenses
- **Purpose**: Help users understand and optimize their spending habits

#### Group Invitation Emails
- **When Sent**: Immediately when a member is added to a group
- **What It Contains**:
  - Group name and inviter details
  - What you can do in the group
  - Direct link to view the group
- **Purpose**: Notify users about group membership

---

## 🛠 Tech Stack

### Frontend
```
Next.js 16 (App Router)  |  React 19  |  Tailwind CSS 4
Radix UI  |  Lucide Icons  |  React Hook Form + Zod
```

### Backend & Database
```
Convex (Backend-as-a-Service)  |  Convex Database (Real-time)
Clerk (Authentication)  |  Inngest (Background Jobs)
```

### Email & AI (Optional)
```
Nodemailer (Gmail SMTP)  |  Google Generative AI (Gemini)
```

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  (Next.js 16 + React 19 + Tailwind CSS + Radix UI)         │
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

1. **Real-time Data Sync**: Convex provides automatic real-time updates across all connected clients
2. **Optimized Queries**: Database indexes on frequently queried fields (`by_payer`, `by_receiver`, `by_group`)
3. **Unified Balance Calculation**: 4-step consistent calculation logic across all queries:
   - Step 1: Get all expenses where user is involved
   - Step 2: Calculate net balance per user from expenses
   - Step 3: Apply all settlements to adjust net balances
   - Step 4: Build UI lists and calculate global totals
4. **Orphaned Data Prevention**: Automatic cleanup of settlements when related expenses are deleted
5. **Lazy Loading**: Conditional rendering on heavy pages to improve initial load time

---

## 📱 User Flow

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

### 5. Complete User Journey

```
┌──────────────────────────────────────────────────────────────┐
│ 1. SIGN UP / SIGN IN (Clerk Authentication)                  │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│ 2. WELCOME MODAL (First-time users)                          │
│    - Overview of features                                     │
│    - Quick start guide                                        │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│ 3. DASHBOARD                                                  │
│    - Total Balance: ₹X                                        │
│    - You are owed: ₹Y (from N people)                        │
│    - You owe: ₹Z (to M people)                               │
│    - Recent Expenses                                          │
│    - Groups List                                              │
│    - Spending Charts (Monthly & Total)                        │
└────┬──────┬──────┬──────┬──────┬──────────────────────────┘
     │      │      │      │      │
     ▼      ▼      ▼      ▼      ▼
   Add    View   Create  View   View
 Expense Person  Group  Groups  Analytics
     │      │      │      │      │
     ▼      ▼      ▼      ▼      ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. MANAGE & TRACK                                            │
│    - Add/Edit/Delete Expenses                                │
│    - Settle Up (1-to-1 or Group)                            │
│    - View Expense History                                    │
│    - Filter by Category/Date/Person                          │
│    - Add/Remove Group Members                                │
│    - Transfer Admin Rights                                   │
│    - View Activity Logs                                      │
└────────────────────┬────────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. AUTOMATED NOTIFICATIONS                                   │
│    - Daily Payment Reminders (10 AM IST)                    │
│    - Monthly Spending Insights (1st of month, 10 AM IST)   │
│    - Group Invitation Emails                                 │
└─────────────────────────────────────────────────────────────┘
```

---

## 📸 Screenshots

### 1. Landing Page
<img width="1354" height="680" alt="Screenshot 2025-10-25 201454" src="https://github.com/user-attachments/assets/23ad0b35-8382-4fd7-b6bb-4eedbb4895c6" />
<img width="1353" height="634" alt="Screenshot 2025-10-25 201528" src="https://github.com/user-attachments/assets/e87fd46b-cf13-4710-a0bf-6ee25de488f2" />
<img width="1365" height="633" alt="Screenshot 2025-10-25 201703" src="https://github.com/user-attachments/assets/f9604b4b-712d-453c-ab74-abb3e3ba289a" />





*Modern, responsive landing page with feature highlights*

### 2. Dashboard
<img width="1364" height="638" alt="Screenshot 2025-10-25 201744" src="https://github.com/user-attachments/assets/85c57389-042f-493b-a443-db44bba39220" />
<img width="1359" height="627" alt="Screenshot 2025-10-25 201803" src="https://github.com/user-attachments/assets/f66252fb-8f63-433b-b14a-1c4dfcffb322" />
![Uploading Screenshot 2025-10-25 201830.png…]()



*Overview of balances, recent expenses, and spending charts*

### 3. Add Expense
<img width="1361" height="628" alt="image" src="https://github.com/user-attachments/assets/31f35df5-345c-439a-95a4-8b82fb04aaf6" />
<img width="1360" height="630" alt="image" src="https://github.com/user-attachments/assets/0c25344f-ead5-44ca-8a90-c0bacb768f6f" />


*Intuitive expense creation with multiple split types*

### 4. Group Management
<img width="1365" height="621" alt="Screenshot 2025-10-25 201847" src="https://github.com/user-attachments/assets/41ffb2a3-e755-4895-8170-764e521ecc52" />
<img width="1359" height="634" alt="Screenshot 2025-10-25 201830" src="https://github.com/user-attachments/assets/d72bd991-532e-40cc-9b4d-0efed2e4d1ad" />


*Create groups, add members, and view activity logs*

### 5. Settlement Page
<img width="1360" height="631" alt="Screenshot 2025-10-25 201920" src="https://github.com/user-attachments/assets/d7ddc3ba-d9ef-4baf-81bb-c07a6d165a71" />

*Smart settlement suggestions with balance validation*

### 6. Automated Email Notifications

#### Daily Payment Reminder Email (10:00 AM IST)
![Payment Reminder Email](https://via.placeholder.com/800x600?text=Payment+Reminder+Email)
*Automated email showing outstanding debts with settle-up links*

#### Monthly Spending Insights Email (1st of Month, 10:00 AM IST)
![Monthly Insights Email](https://via.placeholder.com/800x600?text=Monthly+Insights+Email)
*AI-powered spending analysis with personalized savings tips*

#### Group Invitation Email
![Group Invitation Email](https://via.placeholder.com/800x600?text=Group+Invitation+Email)
*Notification when added to a group with direct access link*

### 7. Backend Dashboards

#### Convex Dashboard
<img width="1366" height="624" alt="Screenshot 2025-10-25 202106" src="https://github.com/user-attachments/assets/18c5b3f6-2ccb-4564-ac3f-e432c4d27d91" />
<img width="1363" height="640" alt="Screenshot 2025-10-25 202215" src="https://github.com/user-attachments/assets/ba0774fe-b044-413a-a988-34d29c291e55" />
<img width="1361" height="572" alt="Screenshot 2025-10-25 202236" src="https://github.com/user-attachments/assets/00e6d06b-6901-4f6e-9bf7-ebec011369e2" />

*Real-time database and backend functions management*

#### Inngest Dashboard
<img width="1361" height="635" alt="image" src="https://github.com/user-attachments/assets/7d1c6f73-74bd-4c87-9814-2093ff02b391" />

*Scheduled background jobs (payment reminders & insights)*

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
   - **Build Command**: `npx convex deploy && next build`
   - Add all environment variables from `.env.local`
   - Click **Deploy**

3. **Configure Production**
   - Update `NEXT_PUBLIC_APP_URL` in Convex with your Vercel URL
   - Add your Vercel domain to Clerk's **Allowed Origins**
   - Set up Inngest (optional): Use Vercel Integration or manual sync

**Live Demo**: [https://equinex-two.vercel.app](https://equinex-two.vercel.app)

---

## 📊 Database Schema

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

---

## 🗄 Database Schema

### Visual Schema Overview

<img width="989" height="631" alt="Screenshot 2025-10-25 194724" src="https://github.com/user-attachments/assets/4ee2f7ac-29be-488c-b321-d822352384c4" />

*Entity Relationship Diagram showing all tables and their relationships*



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
- **O(log n) vs O(n)**: Indexes reduce query time from linear to logarithmic
- **Dashboard Performance**: Without `by_payer` and `by_receiver` indexes, dashboard would scan all expenses/settlements
- **Search Optimization**: Full-text search indexes enable real-time user search

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
- Indexes on frequently queried fields (`by_payer`, `by_receiver`, `by_group`)
- Reduces query time from O(n) to O(log n)
- Critical for dashboard performance

### 4. Background Jobs with Inngest
- **Payment Reminders**: Daily at 10 AM IST
- **Spending Insights**: Monthly on 1st at 10 AM IST
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
- ✅ Responsive UI design (Tailwind CSS)
- ✅ Form validation (React Hook Form + Zod)
- ✅ Error handling and user feedback
- ✅ Deployment and production setup




## 🙏 Acknowledgments

- **Next.js** - The React Framework
- **Convex** - Real-time backend platform
- **Clerk** - Authentication service
- **Inngest** - Background job orchestration
- **Radix UI** - Accessible component library
- **Tailwind CSS** - Utility-first CSS framework




</div>
