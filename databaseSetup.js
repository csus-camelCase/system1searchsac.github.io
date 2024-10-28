use system1search-test;

// Create collections
db.createCollection("users");
db.createCollection("profiles");
db.createCollection("jobs");
db.createCollection("applications");
db.createCollection("email_logs");
db.createCollection("calendar_events");
db.createCollection("admin_actions");

// Indexes
db.users.createIndex({ email: 1 }, { unique: true });
db.profiles.createIndex({ user_id: 1 });
db.jobs.createIndex({ posted_by: 1 });
db.applications.createIndex({ job_id: 1, user_id: 1 });
db.email_logs.createIndex({ job_id: 1, user_id: 1 });
db.calendar_events.createIndex({ event_date: 1 });
db.admin_actions.createIndex({ admin_id: 1, action_type: 1 });
