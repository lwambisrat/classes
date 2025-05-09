//1 You are building a feature rollout system for a startup where a FeatureToggle
// constructor function has properties: featureName (string), isEnabled (boolean),
// and userGroupAccess (array of strings like "betaTesters", "admins"), and you must 
//use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag)
 //to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.


function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
  }
  
  FeatureToggle.prototype.canAccess = function(userRole) {
    return this.isEnabled && this.userGroupAccess.includes(userRole);
  };
  
  FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag;
  };
  
  // E.g
  let chatFeature = new FeatureToggle("Chat", false, ["admins", "betaTesters"]);
  
  chatFeature.toggleFeature(true);
  
  let userRole = "guest";
  
  if (chatFeature.canAccess(userRole)) {
    console.log("Access granted to feature.");
  } else {
    switch (userRole) {
      case "admins":
      case "betaTesters":
        console.log("Feature not enabled yet.");
        break;
      default:
        console.log("Access denied.");
    }
  }
  // 2 In a freelancer time-tracking platform, create a TimeLog constructor function with properties:
  // freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects 
  //with date, hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range,
  // and determine if weekly hours exceed 40 using if-else logic.

  function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
  }
  
  TimeLog.prototype.totalEarnings = function() {
    return this.logs.reduce((total, log) => total + log.hoursWorked * this.projectDetails.hourlyRate, 0);
  };
  
  TimeLog.prototype.filterByDate = function(startDate, endDate) {
    return this.logs.filter(log => log.date >= startDate && log.date <= endDate);
  };
  
  TimeLog.prototype.checkWeeklyHours = function() {
    let totalHours = this.logs.reduce((sum, log) => sum + log.hoursWorked, 0);
    if (totalHours > 40) {
      console.log("Overtime worked this week!");
    } else {
      console.log("Within normal hours.");
    }
  };
  
  // E.g
  let log = new TimeLog("Lidya", { name: "Developer", hourlyRate: 20 }, [
    { date: "2025-05-07", hoursWorked: 12 },
    { date: "2025-05-13", hoursWorked: 16 },
    { date: "2025-05-05", hoursWorked: 10 },
  ]);
  
  console.log("Earnings:", log.totalEarnings());
  log.checkWeeklyHours();
  
  
  //3 You are developing a startup’s order management system where an Order constructor function should 
  //contain customer (object with name and email), items (array of objects with productName, quantity, and unitPrice),
  // and status (string), then implement prototype methods to compute total cost, update order status based on payment, 
  //and categorize order urgency using switch and conditional statements.
  function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
  }
  
  Order.prototype.totalCost = function() {
    return this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  };
  
  Order.prototype.updateStatus = function(paymentReceived) {
    if (paymentReceived) {
      this.status = "Paid";
    } else {
      this.status = "Pending";
    }
  };
  
  Order.prototype.orderUrgency = function() {
    switch (this.status) {
      case "Pending":
        console.log("Order needs urgent attention.");
        break;
      case "Paid":
        console.log("Order is being processed.");
        break;
      default:
        console.log("Order status unknown.");
    }
  };
  
  // E.g
  let order = new Order({ name: "Gabrela", email: "gabrela@example.com" }, [
    { productName: "Charger", quantity: 2, unitPrice: 15 },
    { productName: "Memory", quantity: 1, unitPrice: 35 }
  ], "Pending");
  
  console.log("Total:", order.totalCost());
  order.updateStatus(true);
  order.orderUrgency();
  
//4 In a startup’s employee review tool, design an Employee class with properties: id (number), name (string),
// performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), 
//then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.


function Employee(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
  }
  
  Employee.prototype.averageScore = function() {
    let scores = Object.values(this.performanceMetrics);
    return scores.reduce((a, b) => a + b) / scores.length;
  };
  
  Employee.prototype.classifyPerformance = function() {
    let avg = this.averageScore();
    if (avg >= 8) {
      console.log("Excellent performer.");
    } else if (avg >= 5) {
      console.log("Average performer.");
    } else {
      console.log("Needs improvement.");
    }
  };
  
  Employee.prototype.addFeedback = function(newFeedback) {
    if (newFeedback && newFeedback.length > 3) {
      this.feedback.push(newFeedback);
    } else {
        console.log("Feedback too short.");
      }
    };
    
    // E.g
    let employee = new Employee(101, "John", { communication: 7, efficiency: 9, reliability: 8 }, []);
    employee.classifyPerformance();
    employee.addFeedback("Great at problem-solving.");
    console.log(employee.feedback);

    //5 Build a simple e-learning system where a Course class has properties: title (string), instructor 
    //(object with name and expertise), and students (array of objects with name and completionStatus), 
    //then add prototype methods to return names of students who completed the course, count enrolled students 
    //by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.

    function Course(title, instructor, students) {
        this.title = title;
        this.instructor = instructor;
        this.students = students;
      }
      
      Course.prototype.completedStudents = function() {
        return this.students.filter(s => s.completionStatus).map(s => s.name);
      };
      
      Course.prototype.countByExpertise = function(expertise) {
        return this.students.filter(s => this.instructor.expertise === expertise).length;
      };
      
      Course.prototype.instructorMessage = function() {
        let count = this.students.length;
        if (count >= 5) {
          console.log(`Instructor ${this.instructor.name} has a full class.`);
        } else {
          console.log(`Instructor ${this.instructor.name} can take more students.`);
        }
      };
      
      // E.g
      let course = new Course("Computer Science", { name: "Ms. Hilary", expertise: "Backend" }, [
        { name: "Lwam", completionStatus: true },
        { name: "Ella", completionStatus: false },
        { name: "Marry", completionStatus: true}
      ]);
      
      console.log("Completed:", course.completedStudents());
      course.instructorMessage();
      
      


      