const payment = true;
const marks = 90;

function enroll() {
    console.log("Enrollment is in progress");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (payment) {
                resolve();
            } else {
                reject("Payment failed");
            }
        }, 2000);
    });
    return promise;
}

function progress() {
    console.log("Course is in progress...");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                reject(
                    "Sorry! You couldn’t get enough marks to get certificate"
                );
            }
        }, 3000);
    });
    return promise;
}

function getCertificate() {
    console.log("Getting certificate ready for you...");
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Congrats! you got the certificate");
        }, 2000);
    });
    return promise;
}

async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    } catch (err) {
        console.log(err);
    }
}
course();
