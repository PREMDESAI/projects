# Taskman
A kanban styled task manager
<img width="1440" alt="Screenshot 2024-06-13 at 7 32 46 PM" src="https://github.com/avirati/task-man/assets/1936119/8d01caea-fe76-475a-90ff-3e4f7fb7632e">

## Setup

1. Create `.env` file at root or just copy `.env.example` as `.env` and update variables to connect to firebase
2. Install dependencies
```bash
yarn
```
3. Run the dev server
```bash
yarn dev
```

It should be up and running at `http://localhost:8080`

4. (Optionally) run unit tests
```bash
yarn test
```

## Supported Features
1. Taskman supports 4 statuses for a task - `TO DO` | `IN PROGRESS` | `IN REVIEW` | `DONE`. It can be altered by updating `STATUSES` in `src/constants.ts`
2. Add a task in any status, click `+` on respective sections
3. Update a task
4. Delete a task
5. Drag and Drop support for task cards
6. Filter tasks by `id`, `title` and `status`
7. Syncing data to Firebase
