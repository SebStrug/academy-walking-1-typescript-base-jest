export class RomanNumbers {
    public for(num: number): string {
        let const map foo {
            "V": 5,
            "X": 10,
        }
        let numStr = ""
        let sign = "V";

        if (num >= 9) {
            sign = "X";
        }
        
        if ((num + 1) % 5 === 0) {
          return "I" + sign;
        }
        while (num >= Map.get(sign)) {
            numStr += sign;
            num -= 5
        }
        return numStr + "I".repeat(num);
    }
}