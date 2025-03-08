# Proof of Concept (PoC): Hippero

Made by Honwi Zhen

---

## 1. Introduction

### 1.1 Purpose

To help users regain focus and control in an era overwhelmed by excessive information. It aims to organize and manage the chaotic, unpredictable patterns of information overload, which often lead to stress and distraction. Through **user-centric design**, aka gamification, the app creates an engaging and intuitive experience that encourages users to stay focused and motivated. By incorporating game-like elements, such as rewards, challenges, or progress tracking, Hippero makes the process of managing information more enjoyable and realistic.

Additionally, the app emphasizes its role in contributing to the study of **human psychology**, making insights from this field evident and actionable for all users, regardless of their capacity or expertise. By leveraging gamification, Hippero not only helps users reclaim their focus but also fosters a deeper understanding of how people interact with information and technology. Ultimately, the app aspires to contribute to the recapacitation of the world's creativity by empowering individuals to overcome distractions and unlock their creative potential in a structured, engaging, and user-friendly way.

### 1.2 Intended Audience

The primary intended audience for Hippero includes individuals who struggle with focus and productivity in an era of information overload. While the app is particularly beneficial for people with ADHD, who often face challenges with attention regulation and task management, it is designed to cater to a broader demographic. This includes:

Our Ideal Customer Profiles:

* People with ADHD in fields that require creativity and psychic bandwidth.
* New first-born parents that have taken on a spike on tasks quantity without previous experiences.

Subsequent Customer Profiles:

* University Students: Who need to manage academic workloads, research, and deadlines amidst distractions.
* Professionals: Who require tools to stay organized and productive in fast-paced, information-heavy work environments.
* Researchers and Academics: Who engage in deep work and need structured systems to manage complex information.
* Lifelong Learners: Who seek to maintain focus while acquiring new knowledge or skills.

Hippero is crafted with human-centric design principles, ensuring accessibility and usability for a wide range of users, regardless of their cognitive preferences or challenges. By addressing the specific needs of individuals with ADHD—such as providing structured, gamified, and engaging systems—the app inherently creates a supportive environment that benefits all users. Whether you're a student juggling multiple responsibilities, a professional navigating a demanding career, or simply someone looking to reclaim focus and creativity, Hippero is designed to help you thrive in the age of information excess.

### 1.3 Intended Use

The intended use of Hippero is to serve as a focus and productivity tool that helps users manage information overload, regain control over their attention, and enhance their ability to engage in meaningful work. Specifically, the app is designed to:

* Organize Chaotic Information: Transform overwhelming, unstructured data into a clear and manageable format, allowing users to prioritize tasks and information effectively.
* Support Deep Work: Facilitate concentration for activities that require sustained attention, such as studying, researching, writing, or creative work.
* Enhance Mental Clarity: Help users declutter their minds by externalizing and organizing their thoughts, tasks, and goals in one centralized platform.

  * Creativity flow state: Through the clearance of tasks, we are now avaible to have ideas and most importantly the space to develope those ideas that can be life changing rather than dimissing and assuming that the idea will comeback. (It won´t comeback, trust me)
* Provide Accessibility for Diverse Needs: While particularly beneficial for individuals with ADHD, Hippero is designed to be inclusive and useful for anyone from university students to professionals and lifelong learners.
* Boost Productivity: Through gamification and user-centric design, Hippero makes task management engaging and rewarding, encouraging users to stay motivated and on track.

  **Side effects**
* Promote Psychological Well-being: By reducing stress and anxiety caused by information overload, Hippero contributes to a healthier, more balanced approach to work and learning.
* Restore Focus: Combat distractions by providing a structured, controlled environment that minimizes the impact of unpredictable information patterns.

In essence, Hippero is intended to be a daily companion for anyone seeking to navigate the complexities of the modern information landscape with greater focus, efficiency, and creativity. Whether used for academic, professional, or personal purposes, the app empowers users to take control of their attention and achieve their goals in a structured, engaging, and stress-free way.

### 1.4 Product Scope

The app focuses on delivering the following core features:

- User authentication and profile management.
- User centric design elements such as: Task creation, completion, and prioritization.
- Gamification elements (XP, levels, in-app currency, and surprise rewards).
- Real-time cloud synchronization of user data.

### 1.5 Definitions and Acronyms

- **XP**: Experience Points.
- **ICP**: Ideal Customer Profile.
- **JWT**: JSON Web Tokens (for secure authentication).
- **MVP**: Minimum Viable Product.
- **API**: Application Programming Interface.
- **PoC**: Proof of Concept.
- **MRR**: Monthly Recurring Revenue

---

## 2. Overall Description

### 2.1 User Needs

Users need a task management system that:

- Helps them organize and prioritize tasks effectively.
- Guides them to engage the task appropiately.
- Rewires the part central nervous that is evolutionarily outdate for days ageto reward task completion through gamification (e.g., XP, rewards, and progress tracking).
- Offers a seamless experience across devices with real-time synchronization.

### 2.2 Assumptions and Dependencies

- Psychological level
  - Disorganized dopamine reward system
  - Hyper-fixation in insignificant tasks on the short and long term.
  - Procrastination (feeling unrewarded or disgust or hate towards task)
  - Stress
- Technical level
  - Users have access to a web-enabled device.
  - The application will use cloud services for data synchronization.
  - Development will rely on the suggested tech stack (e.g., React, FastAPI, PostgreSQL).

---

## 3. System Features and Requirements

### 3.1 Functional Requirements

| **Requirement** | **Description**                                               |
| --------------------- | ------------------------------------------------------------------- |
| User Authentication   | Secure login and signup using JWT tokens.                           |
| Task Management       | Create, update, delete, and prioritize tasks.                       |
| Task Completion       | Completing tasks grants XP and in-app currency.                     |
| Recurring Tasks       | Support for daily, weekly, and custom recurring tasks.              |
| XP System             | Earn XP per task; level up upon reaching milestones.                |
| In-App Currency       | Earned upon task completion; redeemable for customization items.    |
| Surprise Rewards      | Random rewards upon task completion (e.g., bonus XP, themes).       |
| Streaks & Milestones  | Track daily task completion streaks; celebrate major milestones.    |
| Cloud Sync            | Real-time data sync across devices.                                 |
| Profile Dashboard     | Display XP, level, streaks, and earned rewards.                     |
| Basic Shop            | Users can redeem currency for profile customization (e.g., themes). |

### 3.2 External Interface Requirements

- **Web Interface**: Responsive design for desktop and mobile browsers.
- **Mobile Interface**: Basic mobile compatibility (future expansion to React Native).
  - Widget for quicker task completion.
- **API**: RESTful API for communication between frontend and backend.

### 3.3 System Features

- **Task Management**:
  - Users can create, update, and delete tasks.
  - Tasks can be prioritized and marked as complete.
  - Tasks can save for reference. Weekly, Monthly, Twice a year, and yearly.
- **Gamification**:
  - XP and levels for task completion.
  - In-app currency and surprise rewards.
  - League competions.
  - Friends connections and accountability.
  - Satisfaction for
- **User Profiles**:
  - Display XP, level, streaks, and customization options.
- **Cloud Sync**:
  - Real-time synchronization of tasks and user progress across devices.
- **Security**:
  - Secure authentication using JWT tokens.
  - Data encryption for user privacy.

### 3.4 Nonfunctional Requirements

| **Requirement** | **Description**                                          |
| --------------------- | -------------------------------------------------------------- |
| Performance           | Low latency for task updates and reward processing.            |
| Scalability           | Supports a growing user base and concurrent task operations.   |
| Extensibility         | Flexible reward system; future support for team collaboration. |
| Security              | Data encryption and JWT-based user authentication.             |
| Reliability           | Cloud backup and offline support with sync upon reconnection.  |
| Usability             | Intuitive task creation and progress visualization.            |
| Cross-Platform        | Consistent experience across web and mobile browsers.          |

---

## Deliverables for the PoC

### 1. **Frontend**

- A responsive web interface built with React.js and Tailwind CSS.
- Pages:
  - Login/Signup
  - Introductory experience aka "First minute"
  - Task Management Dashboard
  - Profile Page (XP, level, streaks, and customization)
  - League
  - Basic Shop (currency redemption for themes)
  - Help
    - Blog for website

### 2. **Backend**

- A functional backend built with FastAPI or Express.js.
- Features:
  - User authentication (JWT)
  - Task management API
  - Reward system (XP, currency, and surprise rewards)
  - Database integration (PostgreSQL)

### 3. **Database**

- PostgreSQL tables for:
  - Users (id, email, password hash, XP, level, currency)
  - Tasks (id, user_id, title, description, priority, deadline, recurring)
  - Rewards (id, user_id, type, value, timestamp)
  - 

### 4. **Gamification**

- XP calculation and level progression.
- In-app currency earned per task.
- Random surprise rewards (e.g., bonus XP, currency).

### 5. **Cloud Sync**

- Real-time synchronization of tasks and user progress across devices.

---

## Example Workflow

1. **User Signs Up/Logs In**:

   - User creates an account or logs in using JWT authentication.
   - Redirected to the task management dashboard.
2. **User Creates a Task**:

   - User adds a task with a title, description, priority, and deadline.
   - Task is saved to the database and displayed on the dashboard.
3. **User Completes a Task**:

   - User marks a task as complete.
   - XP and currency are awarded.
   - A surprise reward (e.g., bonus XP) is randomly granted.
4. **User Views Profile**:

   - User checks their XP, level, and streaks.
   - User redeems currency for a profile theme in the shop.
5. **User Syncs Across Devices**:

   - User logs in on another device and sees their tasks and progress synced.

---



## Example Initial Entry Flow (First 2 mins Experience)

1. **User Pulls Up**:

   - Takes a mintue of writing all their task for their day.
   - Checks in with them on how they feel at that time.
2. 

---

## Next Steps After PoC

1. **User Testing**: Gather feedback from a small group of users to identify pain points and areas for improvement.
2. **Feature Enhancements**: Add post-MVP features like streaks bonuses, AI task suggestions, and calendar integration.
3. **Mobile App Development**: Expand the PoC to a mobile app using React Native.
4. **Monetization**: Implement the subscription-based monetization model.

---

This PoC demonstrates the feasibility of Hippero as a gamified task management platform, providing a solid foundation for further development and scaling.
