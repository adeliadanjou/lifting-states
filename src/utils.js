//here we export the Utils object, which will receive its name via the import in the App module
export default {
    toCelsius : (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    },
    toFahrenheit : (celsius) => {
        return (celsius * 9 / 5) + 32;
    },
    randomIntFromInterval: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}