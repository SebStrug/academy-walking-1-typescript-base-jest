export class Example {
    returnString(a: number) {
        if ((a < 1) || (a > 100)) {
            return "";
        }
        else if (a % 3 == 0 && a % 5 == 0) {
            return "FizzBuzz";
        }
        else if (a % 3 == 0) {
            return "Fizz";
        } 
        else if (a % 5 == 0) {
            return "Buzz"
        }
        else {
            return a.toString();
        }
    }
}