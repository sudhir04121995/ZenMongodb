db.mentors.insertMany([
    {
      "mentor_name": "sudhir",
      "expertise": "Full-stack Development",
      "mentees": 19
    },
    {
      "mentor_name": "raj",
      "expertise": "Backend Development",
      "mentees": 20
    },
    {
      "mentor_name": "hari",
      "expertise": "Backend Development",
      "mentees": 12
    },
    {
      "mentor_name": "prasana",
      "expertise": "Api Development",
      "mentees": 14
    }
  ])

//   db.mentors.find({
//     mentees: { $gt: 15 }
//   })
  

db.company_drives.insertMany([
    {
      "company_name": "Google",
      "drive_date": ISODate("2020-10-20"),
      "participants": [ObjectId("64fa123abc1234567890abcd"), ObjectId("64fa123abc1234567890abce")]
    },
    {
      "company_name": "Amazon",
      "drive_date": ISODate("2020-10-25"),
      "participants": [ObjectId("64fa123abc1234567890abcf"), ObjectId("64fa123abc1234567890abcd")]
    }
  ])

  
//   db.company_drives.aggregate([
//     {
//       $lookup: {
//         from: "users",
//         localField: "participants",
//         foreignField: "_id",
//         as: "students"
//       }
//     },
//     {
//       $project: {
//         "company_name": 1,
//         "drive_date": 1,
//         "students.name": 1,
//         "students.email": 1
//       }
//     }
//   ])
  


// db.company_drives.find({
//     "drive_date": {
//       $gte: ISODate("2020-10-15"),
//       $lte: ISODate("2020-10-31")
//     }
//   })
  

// db.company_drives.find({}, {
//     "company_name": 1,
//     "drive_date": 1,
//     "participants": 1
//   })

db.tasks.insertMany([
    {
      "task_name": "Build API with Node.js",
      "assigned_date": ISODate("2023-10-10"),
      "submission_date": ISODate("2023-10-12"),
      "status": "submitted",
      "user_id": ObjectId("64fa123abc1234567890abcd")
    },
    {
      "task_name": "Frontend with React",
      "assigned_date": ISODate("2023-10-11"),
      "submission_date": null,
      "status": "pending",
      "user_id": ObjectId("64fa123abc1234567890abce")
    }
  ])

  
//   db.tasks.find({
//     "assigned_date": {
//       $gte: ISODate("2023-10-01"),
//       $lte: ISODate("2023-10-31")
//     }
//   })
  

  

db.topics.insertMany([
    {
      "topic_name": "React Basics",
      "date_taught": ISODate("2023-10-12"),
      "attendees": [ObjectId("64fa123abc1234567890abcd"), ObjectId("64fa123abc1234567890abce")]
    },
    {
      "topic_name": "Node.js API Development",
      "date_taught": ISODate("2023-10-14"),
      "attendees": [ObjectId("64fa123abc1234567890abcf"), ObjectId("64fa123abc1234567890abcd")]
    }
  ])

//   db.topics.find({
//     "date_taught": {
//       $gte: ISODate("2023-10-01"),
//       $lte: ISODate("2023-10-31")
//     }
//   })
  



// db.codekata.aggregate([
//     {
//       $match: {
//         "user_id": ObjectId("64fa123abc1234567890abcd")  // replace with the user ID
//       }
//     },
//     {
//       $group: {
//         _id: "$user_id",
//         total_problems_solved: { $sum: "$problems_solved" }
//       }
//     }
//   ])
  


// var absentUsers = db.attendance.find({
//     "date": {
//       $gte: ISODate("2020-10-15"),
//       $lte: ISODate("2020-10-31")
//     },
//     "status": "absent"
//   }).map(function(doc) {
//     return doc.user_id;
//   });
  

// db.tasks.find({
//     "user_id": { $in: absentUsers },
//     "submission_date": null,
//     "assigned_date": {
//       $gte: ISODate("2020-10-15"),
//       $lte: ISODate("2020-10-31")
//     }
//   })
  


db.users.insertMany([
    {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "batch": "Zen Batch 2023",
      "role": "student"
    },
    {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": "0987654321",
      "batch": "Zen Batch 2022",
      "role": "student"
    },
    {
      "name": "Alice Brown",
      "email": "alice@example.com",
      "phone": "1122334455",
      "batch": "Zen Batch 2021",
      "role": "mentor"
    }
  ])

  
  db.topics.insertMany([
    {
      "topic_name": "React Basics",
      "date_taught": ISODate("2023-10-12"),
      "attendees": [ObjectId("64fa123abc1234567890abcd"), ObjectId("64fa123abc1234567890abce")]
    },
    {
      "topic_name": "Node.js API Development",
      "date_taught": ISODate("2023-10-14"),
      "attendees": [ObjectId("64fa123abc1234567890abcf"), ObjectId("64fa123abc1234567890abcd")]
    }
  ])

  
  db.codekata.insertMany([
    {
      "user_id": ObjectId("64fa123abc1234567890abcd"),
      "problems_solved": 150,
      "date": ISODate("2023-09-10")
    },
    {
      "user_id": ObjectId("64fa123abc1234567890abce"),
      "problems_solved": 200,
      "date": ISODate("2023-09-12")
    }
  ])
  

  db.attendance.insertMany([
    {
      "user_id": ObjectId("64fa123abc1234567890abcd"),
      "date": ISODate("2023-10-15"),
      "status": "present"
    },
    {
      "user_id": ObjectId("64fa123abc1234567890abce"),
      "date": ISODate("2023-10-15"),
      "status": "absent"
    }
  ])

  

  db.company_drives.insertMany([
    {
      "company_name": "Google",
      "drive_date": ISODate("2020-10-20"),
      "participants": [ObjectId("64fa123abc1234567890abcd"), ObjectId("64fa123abc1234567890abce")]
    },
    {
      "company_name": "Amazon",
      "drive_date": ISODate("2020-10-25"),
      "participants": [ObjectId("64fa123abc1234567890abcf"), ObjectId("64fa123abc1234567890abcd")]
    }
  ])

  
  db.mentors.insertMany([
    {
      "mentor_name": "Jane Smith",
      "expertise": "Full-stack Development",
      "mentees": [ObjectId("64fa123abc1234567890abcd"), ObjectId("64fa123abc1234567890abcf")]
    },
    {
      "mentor_name": "Robert Brown",
      "expertise": "Backend Development",
      "mentees": [ObjectId("64fa123abc1234567890abce"), ObjectId("64fa123abc1234567890abcd")]
    }
  ])
  