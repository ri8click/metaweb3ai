function carMaint() {
    console.log("Task A: Go to Workshop for car Maint");
    let result: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task A: Car fixed");
        resolve("Ur car is Fixed get it");
      }, 3000);
    });
    return result;
  }
  function doLaundary() {
    console.log("Task C: For Laundary");
    let result: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task C: Dress Done");
        resolve("Get your Dress");
      }, 1000);
    });
    return result;
  }
  function attendEvent() {
    console.log("Task D: Get Ready for Event");
    let result: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task D: Ready for Event");
        resolve("U can Go to Event");
      }, 2000);
    });
    return result;
  }
  
  let getResponse = carMaint();
  getResponse
    .then((message: string) => {
      console.log("Task A: Response: ", message);
      return doLaundary();
    })
    .then((message: string) => {
      console.log("Task C: Response: ", message);
      return attendEvent();
    })
    .then((message: string) => {
      console.log("Task D: Response: ", message);
    })
    .catch((Error: any) => {
      console.log(Error);
    })
    .finally(() => {
        console.log("I m finally and present in end for all cases")
    });
    setTimeout(() => {
        console.log("Task B: Do Grocery");
      }, 1000);