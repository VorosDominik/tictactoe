import Elem from "./elem.js";
class Jatekter {
    #lepes;
    constructor() {
        this.lepes = 0;
        const szuloElem = $("article");

        for (let index = 0; index < 9; index++) {
            const elem = new Elem(index, szuloElem);
        }


        // a lepes páros, akkor X, ha páratlan, akkor O

        $(window).on("elemKivalasztas", (event) => {
            console.log(event.detail)
            if (this.#lepes % 2 === 0) {
                event.detail.setElem("X")
            } else {
                event.detail.setElem("0")
            }
            this.#lepes++;
        })
        
    }
    getLepes() {
        return this.#lepes;
      }
}
export default Jatekter;