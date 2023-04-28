
class Elem {
    constructor(id, szuloElem) {
        this.id = id
        this.allapot = true
        this.szuloElem = szuloElem;
        szuloElem.append(`<div class="elem"><p></p></div>`);
        this.divElem = $(`article div:last-child`);
        this.pElem = this.divElem.children("p");
        this.lepesszam=window.lepes ;
        this.divElem.on("click", () => {
            //this.setElem("X");
            if (this.allapot) {
                this.esemenyTrigger()
                
            }
            this.allapot = false
        });
    }
    setElem(ertek) {
        this.pElem.html(ertek);
    }

    //sajat esemeny - itt at tud adni a példány magáról infokat

    esemenyTrigger() {
        const esemeny = new CustomEvent("elemKivalasztas", {
            detail: this,
        });
        window.dispatchEvent(esemeny);
    }
}

export default Elem;