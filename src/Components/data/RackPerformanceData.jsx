export const rackPerformanceData = [
  { 
    rackId: "R1", 
    products: [
      { productId: "P101", productName: "Brake Valve", batchId: "B101", timestamp: "2024-03-18T10:00:00Z", quantity: 10, weight: 5 }
    ],
    maxCapacity: 20  
  },
  { 
    rackId: "R2", 
    products: [
      { productId: "P102", productName: "Oil Filter", batchId: "B102", timestamp: "2024-03-17T09:30:00Z", quantity: 25, weight: 10 },
      { productId: "P107", productName: "Clutch Plate", batchId: "B107", timestamp: "2024-03-16T12:00:00Z", quantity: 15, weight: 10 }
    ],
    maxCapacity: 20  
  },
  { 
    rackId: "R3", 
    products: [
      { productId: "P103", productName: "Air Filter", batchId: "B103", timestamp: "2024-03-15T14:20:00Z", quantity: 15, weight: 8 },
      { productId: "P101", productName: "Brake Valve", batchId: "B110", timestamp: "2024-03-14T10:05:00Z", quantity: 5, weight: 3 } // Same product as in R1
    ],
    maxCapacity: 20  
  },
  { 
    rackId: "R4", 
    products: [
      { productId: "P104", productName: "Fuel Pump", batchId: "B104", timestamp: "2024-03-13T08:45:00Z", quantity: 5, weight: 6 },
      { productId: "P105", productName: "Spark Plug", batchId: "B105", timestamp: "2024-03-12T11:30:00Z", quantity: 20, weight: 10 }
    ],
    maxCapacity: 20  
  },
  { 
    rackId: "R5", 
    products: [
      { productId: "P102", productName: "Oil Filter", batchId: "B112", timestamp: "2024-03-11T13:00:00Z", quantity: 10, weight: 4 }, // Same product as in R2
      { productId: "P106", productName: "Radiator", batchId: "B106", timestamp: "2024-03-10T15:00:00Z", quantity: 2, weight: 5 }
    ],
    maxCapacity: 20  
  },
  { 
    rackId: "R6", 
    products: [
      { productId: "P101", productName: "Brake Valve", batchId: "B120", timestamp: "2024-03-09T09:00:00Z", quantity: 8, weight: 4 }, // Same product as in R1 & R3
      { productId: "P105", productName: "Spark Plug", batchId: "B121", timestamp: "2024-03-08T07:40:00Z", quantity: 12, weight: 5 } // Same product as in R4
    ],
    maxCapacity: 20  
  }
];
