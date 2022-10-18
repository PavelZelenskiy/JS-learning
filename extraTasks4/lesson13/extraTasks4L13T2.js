// T2

class CarService {
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00'
    }

    constructor(name, workingHours) {
        this.name = name;
        if (!workingHours) {
            this.workingHours = CarService.DefaultWorkingHours
        } else {
            this.workingHours = {
                from: workingHours.from,
                till: workingHours.till,
            }
        };
       
    }


    currentTime = () => {
        const date = new Date();
        return date.getHours()
        // return 18
    }

    repairCar = (carName) => {
        if (!carName) {
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
        } else {
            const startTime = Number(this.workingHours.from.split(':')[0]);
            const stopTime = Number(this.workingHours.till.split(':')[0]);
            // console.log(startTime, stopTime);
            if (this.currentTime() < startTime || this.currentTime() > stopTime) {
                alert('К сожалению, мы сейчас закрыты. Приходите завтра')
            } else {
                alert(`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`)
            }
        };
    }
};

const carService = new CarService("RepairCarNow", {
    from: "8:00",
    till: "20:00"
  });
  carService.repairCar("BMW");
