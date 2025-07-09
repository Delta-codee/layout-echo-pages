
# Multi-Level Role Login Credentials

## Demo Account Hierarchy

### 🏛️ Super Admin Accounts
- **Email:** `5@example.com` or `6@example.com`
- **Password:** Use any password (Clerk handles authentication)
- **Access:** Full platform control, manage all institutes
- **Dashboard:** `/super-admin`

### 🏫 Institute Admin Accounts
- **Email Pattern:** `admin@institute.com` or `institute_[name]@example.com`
- **Examples:** 
  - `admin@techexcellence.com`
  - `institute_digitalacademy@example.com`
- **Password:** Use any password (Clerk handles authentication)
- **Access:** Manage teachers, students, and courses within their institute
- **Dashboard:** `/institute`

### 👨‍🏫 Teacher Accounts
- **Email Pattern:** `[name]@teacher.com` or `teacher_[name]@example.com`
- **Examples:**
  - `sarah.johnson@teacher.com`
  - `teacher_michael@example.com`
- **Password:** Use any password (Clerk handles authentication)
- **Access:** Manage courses, assignments, and student grades
- **Dashboard:** `/teacher`

### 👨‍🎓 Student Accounts
- **Email Pattern:** Any email that doesn't match above patterns
- **Examples:**
  - `john.smith@student.com`
  - `maria@gmail.com`
  - `any.email@domain.com`
- **Password:** Use any password (Clerk handles authentication)
- **Access:** View courses, submit assignments, participate in peer reviews
- **Dashboard:** `/dashboard`

## Role Hierarchy

```
Super Admin (Platform Level)
    ├── Manage all institutes
    ├── View system-wide analytics
    ├── Control platform settings
    └── Monitor overall performance

Institute Admin (Institute Level)
    ├── Manage teachers within institute
    ├── Manage students within institute
    ├── Create and manage courses
    ├── View institute-wide analytics
    └── Monitor institute performance

Teacher (Course Level)
    ├── Create and manage assignments
    ├── Grade student submissions
    ├── Manage course content
    ├── View student performance
    └── Track class progress

Student (Individual Level)
    ├── Enroll in courses
    ├── Submit assignments
    ├── Participate in peer reviews
    ├── View grades and feedback
    └── Access learning materials
```

## Access Control

- **Role Detection:** Handled in `src/hooks/useRole.ts`
- **Route Protection:** Configured in `src/components/ProtectedRoute.tsx`
- **Auto-Redirect:** Users are automatically directed to their appropriate dashboard

## Authentication Flow

1. Navigate to `/login`
2. Use any of the email patterns above
3. Enter any password (Clerk manages authentication)
4. You'll be automatically redirected based on your role:
   - Super Admin → `/super-admin`
   - Institute Admin → `/institute`
   - Teacher → `/teacher`
   - Student → `/dashboard`

## Test Accounts for Development

### Super Admin
- `5@example.com`
- `6@example.com`

### Institute Admins
- `admin@techexcellence.com`
- `admin@digitalacademy.com`
- `institute_futureskills@example.com`

### Teachers
- `sarah.johnson@teacher.com`
- `michael.chen@teacher.com`
- `emily.rodriguez@teacher.com`

### Students
- `john.smith@student.com`
- `maria.garcia@student.com`
- `alice.johnson@gmail.com`
