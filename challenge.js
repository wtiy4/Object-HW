const saudiaAirlines = {
    airlineName: "الخطوط الجوية السعودية",
    country: "السعودية",
    fleetSize: 20,
    destinations: ["الرياض", "جدة", "دبي", "نيويورك"],
    inOperation: true,

    bookFlight(destination) {
        if (this.destinations.includes(destination)) {
            console.log(`تم حجز رحلة إلى ${destination}.`);
        } else {
            console.log(`عذرًا، لا توجد رحلات إلى ${destination} حالياً.`);
        }
    },

    addDestination(newDestination) {
        if (!this.destinations.includes(newDestination)) {
            this.destinations.push(newDestination);
            console.log(`${newDestination} تمت إضافتها إلى الوجهات.`);
        } else {
            console.log(`${newDestination} موجودة بالفعل ضمن الوجهات.`);
        }
    },

    getSummary() {
        const summary = `${this.airlineName} تعمل في ${this.country} وتمتلك ${this.fleetSize} طائرة وتطير إلى ${this.destinations.length} وجهة.`;
        console.log(summary);
    }
};

saudiaAirlines.bookFlight("دبي");
saudiaAirlines.addDestination("لندن");
saudiaAirlines.getSummary();