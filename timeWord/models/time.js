

class Time {
    static async translate({ time }) {
        let finalStatement = {}
        let hour = time.slice(0, 2)
        let min = time.slice(3, 5)
        function numberCruncher5000(number) {
            //crunches those numbers into oblivion 
            if (number == 1) {
                finalStatement["minutes"].push(" one")
            }
            else if (number == 2) {
                finalStatement["minutes"].push(" two")
            }
            else if (number == 3) {
                finalStatement["minutes"].push(" three")
            }
            else if (number == 4) {
                finalStatement["minutes"].push(" four")
            }
            else if (number == 5) {
                finalStatement["minutes"].push(" five")
            }
            else if (number == 6) {
                finalStatement["minutes"].push(" six")
            }
            else if (number == 7) {
                finalStatement["minutes"].push(" seven")
            }
            else if (number == 8) {
                finalStatement["minutes"].push(" eight")
            }
            else if (number == 9) {
                finalStatement["minutes"].push(" nine")
            }
        }
        function ultraMegaMilitaryTimeAnnihilator(hour) {
            //Annihilates the nonesence that is military time and morphs it into something more sensable.
            if (hour > 12) {
                finalStatement["time"] = "PM"
            }
            if (hour < 13) {
                finalStatement["time"] = "AM"
            }
        }
        function hourCrusher(hour) {
            //crushes big hours into smol hours
            console.log(hour)
            if (hour == 1 || hour == 13) {
                finalStatement["hour"] = "one"
            }
            if (hour == 2 || hour == 14) {
                finalStatement["hour"] = "two"
            }
            if (hour == 3 || hour == 15) {
                finalStatement["hour"] = "three"
            }
            if (hour == 4 || hour == 16) {
                finalStatement["hour"] = "four"
            }
            if (hour == 5 || hour == 17) {
                finalStatement["hour"] = "five"
            }
            if (hour == 6 || hour == 18) {
                finalStatement["hour"] = "six"
            }
            if (hour == 7 || hour == 19) {
                finalStatement["hour"] = "seven"
            }
            if (hour == 8 || hour == 20) {
                finalStatement["hour"] = "eight"
            }
            if (hour == 9 || hour == 21) {
                finalStatement["hour"] = "nine"
            }
            if (hour == 10 ||hour == 22) {
                finalStatement["hour"] = "ten"
            }
            if (hour == 11 ||hour == 23) {
                finalStatement["hour"] = "eleven"
            }
            if (hour == 12 ||hour == 24) {
                finalStatement["hour"] = "twelve"
            }
        }
        function teenSmasher(min) {
            //smashes teens into place
            if (min == 10) {
                finalStatement["minutes"] = "ten"
            }
            if (min == 11) {
                finalStatement["minutes"] = "eleven"
            }
            if (min == 12) {
                finalStatement["minutes"] = "twelve"
            }
            if (min == 13) {
                finalStatement["minutes"] = "thirteen"
            }
            if (min == 14) {
                finalStatement["minutes"] = "fourteen"
            }
            if (min == 15) {
                finalStatement["minutes"] = "fiveteen"
            }
            if (min == 16) {
                finalStatement["minutes"] = "sixteen"
            }
            if (min == 17) {
                finalStatement["minutes"] = "seventeen"
            }
            if (min == 18) {
                finalStatement["minutes"] = "eightteen"
            }
            if (min == 19) {
                finalStatement["minutes"] = "nineteen"
            }
        }

        function gigaNumberDestroyer999999999(min) {
            if (min == 2) {
                finalStatement["minutes"] = ["twenty"]
            }
            if (min == 3) {
                finalStatement["minutes"] = ["thirty"]
            }
            if (min == 4) {
                finalStatement["minutes"] = ["fourty"]
            }
            if (min == 5) {
                finalStatement["minutes"] = ["fivety"]
            }
        }

        ultraMegaMilitaryTimeAnnihilator(hour)
        hourCrusher(hour)

        if (min[0] == 0) {
            finalStatement["minutes"] = ["oh"]
            numberCruncher5000(min[1])
        }
        if (min > 9 && min < 20) {
            teenSmasher(min)
        }
        if (min >= 20) {
            finalStatement["minutes"] = ""
            gigaNumberDestroyer999999999(min[0])
            numberCruncher5000(min[1])
        }

        return finalStatement
    }
}

module.exports = Time