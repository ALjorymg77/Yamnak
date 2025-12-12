// ========================================
// قاعدة بيانات الأطفال
// ========================================

var childrenDatabase = [
  {
    id: "1157704010",
    firstName: "faisal",
    firstNameAr: "فيصل",
    fatherName: "mohammed",
    fatherNameAr: "محمد بن عبدالله",
    fullName: "Faisal Mohammed Al-Ahmad",
    fullNameAr: "فيصل محمد الاحمد",
    birthDate: "1438/06/15",
    birthYear: 1438,
    age: 8,
    sex: "Male",
    sexAr: "ذكر",
    nationality: "Saudi",
    nationalityAr: "سعودي",
    healthStatus: "سليم",
  },
  {
    id: "1123234565",
    firstName: "khaled",
    firstNameAr: "خالد",
    fatherName: "mohammed",
    fatherNameAr: "محمد بن عبدالله",
    fullName: "Khaled Mohammed Al-Ahmad",
    fullNameAr: "خالد محمد الاحمد",
    birthDate: "1436/04/10",
    birthYear: 1436,
    age: 10,
    sex: "Male",
    sexAr: "ذكر",
    nationality: "Saudi",
    nationalityAr: "سعودي",
    healthStatus: "سليم",
  },
]

// ========================================
// سجل عمليات المسح
// ========================================

var scanRecords = [
  {
    id: "scan_001",
    childId: "1157704010",
    childName: "فيصل",
    location: "مستشفى الملك فهد التخصصي",
    date: "1447/06/03",
    time: "10:30 AM",
  },
  {
    id: "scan_002",
    childId: "1157704010",
    childName: "فيصل",
    location: "مدرسة الأمير سلطان الابتدائية",
    date: "1447/06/03",
    time: "07:45 AM",
  },
  {
    id: "scan_002",
    childId: "1157704010",
    childName: "فيصل",
    location: "Six Flags Qiddiya",
    date: "1447/12/12",
    time: "  8:30 Pm",
  },
]

// ========================================
// دوال قاعدة البيانات
// ========================================

// البحث عن طفل بواسطة رقم الهوية
function findChildById(id) {
  for (var i = 0; i < childrenDatabase.length; i++) {
    if (childrenDatabase[i].id === id) {
      return childrenDatabase[i]
    }
  }
  return null
}

// الحصول على جميع الأطفال
function getAllChildren() {
  return childrenDatabase
}

// الحصول على سجلات المسح لطفل معين
function getScansByChildId(childId) {
  var results = []
  for (var i = 0; i < scanRecords.length; i++) {
    if (scanRecords[i].childId === childId) {
      results.push(scanRecords[i])
    }
  }
  return results
}

// إضافة سجل مسح جديد
function addScanRecord(childId, childName, location) {
  var now = new Date()
  var hours = now.getHours()
  var minutes = now.getMinutes()
  var period = hours >= 12 ? "م" : "ص"
  if (hours > 12) hours = hours - 12
  if (hours === 0) hours = 12
  var timeStr = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + period

  var newScan = {
    id: "scan_" + Date.now(),
    childId: childId,
    childName: childName,
    location: location,
    date: "1446/06/03",
    time: timeStr,
  }
  scanRecords.unshift(newScan)

  try {
    localStorage.setItem("scanRecords", JSON.stringify(scanRecords))
  } catch (e) {
    // تجاهل الخطأ
  }
  return newScan
}
